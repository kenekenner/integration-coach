/** Celigo AI Integration Coach API (Apps Script Web App)
 *  ----------------------------------------------------
 *  PRODUCTION VERSION with Enhanced CORS Headers
 *  
 *  Setup:
 *   1) File → Project properties → Script properties:
 *      Name: OPENAI_API_KEY   Value: sk-proj-xxxxxx
 *   2) Change TEST_MODE to false (line 20)
 *   3) Deploy → New deployment → Web app
 *      Execute as: Me     Who has access: Anyone
 */

// --------------- CONFIG ---------------
const MODEL = "gpt-4o-mini";
const REPORT_FOLDER_NAME = "Celigo Assessment Reports";
const TEST_MODE = false; // ⚠️ SET TO FALSE FOR PRODUCTION

// JSON Schema for OpenAI
const ANALYSIS_SCHEMA = {
  "type": "object",
  "properties": {
    "summary": { "type": "string" },
    "by_function": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "function": { "type": "string" },
          "recommended_integrations": { "type": "array", "items": { "type": "string" } },
          "quick_wins": { "type": "array", "items": { "type": "string" } },
          "risks": { "type": "array", "items": { "type": "string" } },
          "gaps": { "type": "array", "items": { "type": "string" } },
          "confidence": { "type": "integer", "minimum": 0, "maximum": 100 }
        },
        "required": ["function","recommended_integrations","quick_wins","risks","gaps","confidence"]
      }
    },
    "meta": {
      "type": "object",
      "properties": {
        "assessment_id": { "type": "string" },
        "version": { "type": "string" },
        "timestamp": { "type": "string" }
      }
    }
  },
  "required": ["summary","by_function"]
};

// --------------- CORS HELPER ---------------
function addCorsHeaders_(output) {
  // Try to add CORS headers (sometimes works with Google Apps Script)
  return output
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

// --------------- HEALTH CHECK (GET) ---------------
function doGet(e) {
  Logger.log("doGet called - health check");
  
  const output = ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    message: "Celigo AI Integration Coach API is running",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    testMode: TEST_MODE
  }));
  
  return addCorsHeaders_(output);
}

// --------------- OPTIONS HANDLER (for CORS preflight) ---------------
function doOptions(e) {
  Logger.log("doOptions called - CORS preflight");
  
  const output = ContentService.createTextOutput("");
  return addCorsHeaders_(output);
}

// --------------- MAIN ENTRYPOINT (POST) ---------------
function doPost(e) {
  const startTime = new Date();
  Logger.log("doPost called at " + startTime.toISOString());
  
  try {
    // Parse the incoming request
    const payload = parseRequestBody_(e);
    Logger.log("Request body parsed successfully");

    // Accept either {assessment: {...}} or bare object {...}
    const assessment = payload && payload.assessment ? payload.assessment : payload;
    
    if (!assessment || typeof assessment !== "object") {
      Logger.log("ERROR: Invalid assessment payload");
      return jsonWithCors_(400, { 
        error: "Missing or invalid 'assessment' payload (must be a JSON object).",
        timestamp: new Date().toISOString()
      });
    }

    Logger.log("Assessment received from: " + (assessment.email || "unknown"));
    Logger.log("Company: " + (assessment.companyName || "unknown"));
    
    // TEST MODE - Skip OpenAI and return mock data
    if (TEST_MODE) {
      Logger.log("TEST MODE: Returning mock analysis");
      const mockAnalysis = getMockAnalysis_();
      return jsonWithCors_(200, { 
        analysis: mockAnalysis, 
        pdfUrl: "https://example.com/mock-report.pdf",
        testMode: true,
        timestamp: new Date().toISOString()
      });
    }

    // PRODUCTION MODE - Call OpenAI
    const apiKey = getOpenAIKey_();
    Logger.log("OpenAI API key retrieved");

    // 1) Ask OpenAI for structured analysis (schema-locked)
    Logger.log("Calling OpenAI API...");
    const analysis = getStructuredAnalysis_(apiKey, assessment);
    Logger.log("OpenAI analysis complete");

    // 2) Create PDF in Drive and get a shareable link
    Logger.log("Building PDF report...");
    const pdfUrl = buildPdfReport_(analysis, assessment);
    Logger.log("PDF created: " + pdfUrl);

    const endTime = new Date();
    const duration = (endTime - startTime) / 1000;
    Logger.log("Total processing time: " + duration + " seconds");

    return jsonWithCors_(200, { 
      success: true,
      analysis, 
      pdfUrl,
      processingTime: duration + "s",
      timestamp: new Date().toISOString()
    });
    
  } catch (err) {
    Logger.log("ERROR in doPost: " + err.toString());
    Logger.log("Stack trace: " + (err.stack || "No stack trace available"));
    
    return jsonWithCors_(500, { 
      error: String(err.message || err),
      details: String(err.stack || ""),
      timestamp: new Date().toISOString()
    });
  }
}

// --------------- OPENAI API CALL ---------------
function getStructuredAnalysis_(apiKey, assessment) {
  const systemPrompt = [
    'You are "Ask Celigo for eCommerce", an integration assessment analyst.',
    'Given an assessment JSON describing the current integration landscape (apps, flows, data volumes, errors, constraints),',
    'produce concise recommendations by function: recommended integrations, quick wins (low effort/high impact), risks (tech/ops), and gaps.',
    'Prioritize stability, scalability, and time-to-value. Fill the schema exactly—no extra keys or prose outside fields.',
    'If information is missing, make reasonable assumptions and note them briefly in the relevant lists.'
  ].join(' ');

  // Try Chat Completions API with Structured Outputs
  const requestBody = {
    model: MODEL,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: "Analyze this integration assessment and produce structured recommendations:\n\n" + JSON.stringify(assessment, null, 2) }
    ],
    response_format: {
      type: "json_schema",
      json_schema: { 
        name: "AssessmentResult",
        strict: true,
        schema: ANALYSIS_SCHEMA 
      }
    },
    temperature: 0.7
  };

  Logger.log("Calling Chat Completions API...");
  const res = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + apiKey },
    payload: JSON.stringify(requestBody),
    muteHttpExceptions: true
  });

  const code = res.getResponseCode();
  const text = res.getContentText();
  
  if (code !== 200) {
    Logger.log("OpenAI error (" + code + "): " + text);
    throw new Error("OpenAI API error (" + code + "): " + text);
  }

  const data = JSON.parse(text);
  
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    Logger.log("Unexpected API response: " + text);
    throw new Error("Unexpected OpenAI response format");
  }

  const jsonText = data.choices[0].message.content;
  const analysis = JSON.parse(jsonText);
  
  analysis.meta = analysis.meta || {};
  if (!analysis.meta.version) analysis.meta.version = "v1";
  if (!analysis.meta.timestamp) analysis.meta.timestamp = new Date().toISOString();
  if (!analysis.meta.assessment_id) analysis.meta.assessment_id = Utilities.getUuid();

  return analysis;
}

// --------------- PDF BUILDER ---------------
function buildPdfReport_(analysis, assessment) {
  const folder = getOrCreateFolder_(REPORT_FOLDER_NAME);
  const assessmentId = analysis?.meta?.assessment_id || Utilities.getUuid();
  const companyName = assessment?.companyName || 'Assessment';
  
  const title = companyName + " - Integration Assessment - " + assessmentId.substring(0, 8);
  const doc = DocumentApp.create(title);
  const body = doc.getBody();

  body.clear();
  
  // Header
  body.appendParagraph("Integration Assessment Report")
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  
  if (assessment && assessment.companyName) {
    body.appendParagraph(assessment.companyName)
      .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  }
  
  body.appendParagraph("Generated: " + new Date().toLocaleString());
  body.appendHorizontalRule();

  // Contact Info
  if (assessment) {
    body.appendParagraph("Contact Information").setHeading(DocumentApp.ParagraphHeading.HEADING2);
    if (assessment.firstName || assessment.lastName) {
      body.appendParagraph("Name: " + (assessment.firstName || '') + ' ' + (assessment.lastName || ''));
    }
    if (assessment.jobTitle) body.appendParagraph("Title: " + assessment.jobTitle);
    if (assessment.email) body.appendParagraph("Email: " + assessment.email);
    body.appendParagraph("");
  }

  // Executive Summary
  if (analysis.summary) {
    body.appendParagraph("Executive Summary").setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(analysis.summary);
    body.appendParagraph("");
  }

  // Detailed Analysis
  if (Array.isArray(analysis.by_function)) {
    body.appendParagraph("Detailed Analysis by Function").setHeading(DocumentApp.ParagraphHeading.HEADING2);
    
    analysis.by_function.forEach(function(sec) {
      body.appendParagraph(sec.function || "Function").setHeading(DocumentApp.ParagraphHeading.HEADING3);
      
      appendList_(body, "Recommended Integrations", sec.recommended_integrations);
      appendList_(body, "Quick Wins", sec.quick_wins);
      appendList_(body, "Risks", sec.risks);
      appendList_(body, "Gaps", sec.gaps);

      if (typeof sec.confidence === "number") {
        body.appendParagraph("Confidence Score: " + sec.confidence + "/100");
      }
      body.appendParagraph(""); // spacer
    });
  }

  doc.saveAndClose();

  // Move doc to folder
  const docFile = DriveApp.getFileById(doc.getId());
  folder.addFile(docFile);
  DriveApp.getRootFolder().removeFile(docFile);

  // Export as PDF, store, and share via link
  const pdfBlob = docFile.getAs("application/pdf").setName(docFile.getName() + ".pdf");
  const pdfFile = folder.createFile(pdfBlob);
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  return pdfFile.getUrl();
}

function appendList_(body, title, arr) {
  if (!arr || !arr.length) return;
  body.appendParagraph(title).setHeading(DocumentApp.ParagraphHeading.HEADING4);
  arr.forEach(function(item) {
    body.appendListItem(item).setGlyphType(DocumentApp.GlyphType.BULLET);
  });
}

// --------------- MOCK DATA (for testing) ---------------
function getMockAnalysis_() {
  return {
    summary: "Based on your current tech stack and integration patterns, we've identified several opportunities to streamline operations and reduce manual workflows.",
    by_function: [
      {
        function: "Order Management",
        recommended_integrations: [
          "Shopify → NetSuite (real-time order sync)",
          "ShipStation → NetSuite (fulfillment updates)"
        ],
        quick_wins: [
          "Automate order creation in ERP",
          "Eliminate manual SKU mapping"
        ],
        risks: [
          "Current manual entry prone to errors",
          "No validation on order sync"
        ],
        gaps: [
          "Missing inventory sync",
          "No automated refund processing"
        ],
        confidence: 85
      }
    ],
    meta: {
      assessment_id: Utilities.getUuid(),
      version: "v1",
      timestamp: new Date().toISOString()
    }
  };
}

// --------------- HELPERS ---------------
function jsonWithCors_(status, obj) {
  const output = ContentService.createTextOutput(JSON.stringify(obj));
  return addCorsHeaders_(output);
}

function parseRequestBody_(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      Logger.log("No POST data found");
      return {};
    }
    return JSON.parse(e.postData.contents);
  } catch (err) {
    Logger.log("parseRequestBody_ error: " + err.toString());
    throw new Error("Invalid JSON body.");
  }
}

function getOrCreateFolder_(name) {
  const it = DriveApp.getFoldersByName(name);
  return it.hasNext() ? it.next() : DriveApp.createFolder(name);
}

function getOpenAIKey_() {
  const key = PropertiesService.getScriptProperties().getProperty("OPENAI_API_KEY");
  if (!key) {
    throw new Error('Missing OPENAI_API_KEY. Add it under File → Project properties → Script properties.');
  }
  return key;
}

/* ---------------- DEPLOYMENT INSTRUCTIONS ----------------
1) Copy this entire script to your Google Apps Script Code.gs file
2) Save (Ctrl+S / Cmd+S)
3) File → Project properties → Script properties:
   - Add: OPENAI_API_KEY = sk-proj-xxxxxx (your OpenAI API key)
4) Change line 20: TEST_MODE = false
5) Deploy → Manage deployments
   - Archive any old deployments (trash icon)
   - Deploy → New deployment
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone (NOT "Anyone within organization")
6) Click Deploy → Authorize → Review permissions → Allow
7) Copy the Web App URL (ends with /exec)
8) Test in browser: Open the URL - should show {"status":"ok"...}
9) Update your ReviewStep.tsx line 45 with the new URL
--------------------------------------------------------- */
