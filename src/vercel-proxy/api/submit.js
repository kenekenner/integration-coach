/**
 * Vercel Serverless Function - CORS Proxy for Google Apps Script
 * 
 * This function acts as a CORS proxy to forward requests from the frontend
 * to Google Apps Script and return the AI analysis results.
 */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwjQZWbjpAhxfmxAYvdA_g_8rIRDqhLhJwWJ74GyZ7PEGEwJbAlmNGd7TceCLvKBfxx/exec";

export default async function handler(req, res) {
  // CORS headers - allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Handle GET requests for health check
  if (req.method === 'GET') {
    return res.status(200).json({ 
      status: 'ok',
      message: 'Celigo Assessment Proxy is running',
      endpoint: '/api/submit',
      methods: ['POST']
    });
  }
  
  // Only allow POST for actual submissions
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
  
  try {
    console.log('📨 Received request:', {
      method: req.method,
      hasBody: !!req.body,
      bodyKeys: req.body ? Object.keys(req.body) : []
    });
    
    // Validate request body
    if (!req.body || !req.body.assessment) {
      return res.status(400).json({ 
        error: 'Invalid request body. Expected { assessment: {...} }' 
      });
    }
    
    console.log('✅ Request validated, forwarding to Google Apps Script...');
    
    // Use dynamic import for node-fetch if native fetch is not available
    let fetchFunction = globalThis.fetch;
    
    if (!fetchFunction) {
      console.log('⚠️ Native fetch not available, will use HTTPS module...');
      // Fallback to HTTPS module for older Node versions
      const https = require('https');
      
      const postData = JSON.stringify(req.body);
      
      const response = await new Promise((resolve, reject) => {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
          }
        };
        
        const request = https.request(GOOGLE_SCRIPT_URL, options, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              resolve({
                status: res.statusCode,
                ok: res.statusCode >= 200 && res.statusCode < 300,
                json: async () => JSON.parse(data)
              });
            } catch (e) {
              reject(new Error('Failed to parse response: ' + data));
            }
          });
        });
        
        request.on('error', reject);
        request.write(postData);
        request.end();
      });
      
      const data = await response.json();
      
      console.log('📥 Response from Google Apps Script:', {
        status: response.status,
        ok: response.ok,
        testMode: data.testMode || false
      });
      
      return res.status(response.status).json(data);
    }
    
    // Use native fetch if available
    console.log('🌐 Using native fetch...');
    const response = await fetchFunction(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    
    const data = await response.json();
    
    console.log('📥 Response from Google Apps Script:', {
      status: response.status,
      ok: response.ok,
      testMode: data.testMode || false
    });
    
    // Return the response
    return res.status(response.status).json(data);
    
  } catch (error) {
    console.error('❌ Proxy error:', error);
    return res.status(500).json({ 
      error: 'Proxy failed',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
