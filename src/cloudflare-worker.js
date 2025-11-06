// Cloudflare Worker - CORS Proxy for Celigo Assessment API
// This worker forwards requests from your app to Google Apps Script
// bypassing CORS restrictions from Celigo's Google Workspace

export default {
  async fetch(request, env, ctx) {
    // Your Google Apps Script Web App URL
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwjQZWbjpAhxfmxAYvdA_g_8rIRDqhLhJwWJ74GyZ7PEGEwJbAlmNGd7TceCLvKBfxx/exec';

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Only allow POST and GET requests
    if (request.method !== 'POST' && request.method !== 'GET') {
      return new Response(JSON.stringify({ 
        error: 'Method not allowed',
        allowed: ['GET', 'POST']
      }), { 
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    try {
      // GET request - health check
      if (request.method === 'GET') {
        const response = await fetch(APPS_SCRIPT_URL, {
          method: 'GET',
        });

        const data = await response.text();

        return new Response(data, {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
      }

      // POST request - forward assessment data
      const body = await request.text();
      
      console.log('Proxying request to Google Apps Script');
      console.log('Body length:', body.length);

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      const data = await response.text();
      
      console.log('Response status:', response.status);
      console.log('Response length:', data.length);

      // Return with CORS headers
      return new Response(data, {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });

    } catch (error) {
      console.error('Proxy error:', error);
      
      return new Response(JSON.stringify({ 
        error: error.message,
        details: 'Cloudflare Worker could not reach Google Apps Script',
        timestamp: new Date().toISOString()
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
