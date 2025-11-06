/** Celigo AI Integration Coach API (Apps Script Web App)
 *  ----------------------------------------------------
 *  What this script does:
 *  - Accepts POSTed JSON from your Integration Assessment wizard
 *  - Sends that JSON to OpenAI (using your API key) for structured analysis
 *  - Returns UI-ready JSON (recommendations, quick wins, risks, gaps)
 *  - Builds a simple PDF report in your Google Drive and sends back its shareable link
 *
 *  You don't need to edit any code — just:
 *   1️⃣  Add your OPENAI_API_KEY under File > Project properties > Script properties
 *   2️⃣  Deploy as a Web App (instructions at bottom)
 */

// ------------ CONFIGURATION ------------
const MODEL = "gpt-4o-mini";             // Fast + inexpensive model (corrected from gpt-5.1-mini)
const REPORT_FOLDER_NAME = "Celigo Assessment Reports";  // Folder auto-created in Drive

// Schema that defines how the AI must format its response
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

// ------------ MAIN ENTRYPOINTS ------------

// Add doGet for testing/health checks
function doGet(e) {
  return json_(200, { 
    status: 'ok', 
    message: 'Celigo Assessment API is running',
    timestamp: new Date().toISOString()
  });
}

function doPost(e) {
  try {
    const apiKey = getOpenAIKey_();
    const body = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    const assessment = body && body.assessment ? body.assessment : body;

    // Log for debugging
    Logger.log('Received assessment from: ' + (assessment.email || 'unknown'));
    Logger.log('Company: ' + (assessment.companyName || 'unknown'));

    // 1️⃣  Get analysis from OpenAI
    const analysis = getStructuredAnalysis_(apiKey, assessment);

    // 2️⃣  Build PDF report + get link
    const pdfUrl = buildPdfReport_(analysis, assessment);

    return json_(200, { 
      success: true,
      analysis, 
      pdfUrl,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    Logger.log('Error: ' + String(err.stack || err));
    return json_(500, { 
      error: String(err.message || err),
      details: String(err.stack || '')
    });
  }
}

// ------------ OPENAI CALL (CORRECTED) ------------
function getStructuredAnalysis_(apiKey, assessment) {
  const systemPrompt = [
    'You are "Ask Celigo for eCommerce", an integration assessment analyst.',
    'Analyze the provided JSON describing a customer's current integration setup (apps, flows, data, errors, bottlenecks).',
    'Return concise recommendations by function: recommended integrations, quick wins (low effort / high impact), risks, and gaps.',
    'Focus on stability, scalability, and time-to-value. Output must match the given JSON schema exactly.'
  ].join(' ');

  // Corrected OpenAI API format
  const payload = {
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

  // Corrected endpoint
  const res = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + apiKey },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  if (res.getResponseCode() !== 200) {
    Logger.log("OpenAI error response: " + res.getContentText());
    throw new Error("OpenAI API error: " + res.getContentText());
  }

  const data = JSON.parse(res.getContentText());
  
  // Corrected response parsing
  let jsonText;
  if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
    jsonText = data.choices[0].message.content;
  } else {
    throw new Error("Unexpected OpenAI response format: " + JSON.stringify(data));
  }

  const analysis = JSON.parse(jsonText);
  analysis.meta = analysis.meta || {};
  analysis.meta.version = analysis.meta.version || "v1";
  analysis.meta.timestamp = analysis.meta.timestamp || new Date().toISOString();
  analysis.meta.assessment_id = analysis.meta.assessment_id || Utilities.getUuid();

  return analysis;
}

// ------------ PDF BUILDER (Enhanced) ------------
function buildPdfReport_(analysis, assessment) {
  const folder = getOrCreateFolder_(REPORT_FOLDER_NAME);
  const assessmentId = analysis?.meta?.assessment_id || Utilities.getUuid();
  const companyName = assessment?.companyName || 'Assessment';
  
  const doc = DocumentApp.create(`${companyName} - Integration Assessment Report - ${assessmentId.substring(0, 8)}`);
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
    if (assessment.companySize) body.appendParagraph("Company Size: " + assessment.companySize);
    body.appendParagraph("");
  }

  // Summary
  if (analysis.summary) {
    body.appendParagraph("Executive Summary").setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(analysis.summary);
    body.appendParagraph("");
  }

  // By Function Analysis
  if (Array.isArray(analysis.by_function)) {
    body.appendParagraph("Detailed Analysis by Function").setHeading(DocumentApp.ParagraphHeading.HEADING2);
    
    analysis.by_function.forEach(sec => {
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

  const docFile = DriveApp.getFileById(doc.getId());
  folder.addFile(docFile);
  DriveApp.getRootFolder().removeFile(docFile);

  const pdfBlob = docFile.getAs("application/pdf").setName(docFile.getName() + ".pdf");
  const pdfFile = folder.createFile(pdfBlob);
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  return pdfFile.getUrl();
}

function appendList_(body, title, arr) {
  if (!arr || !arr.length) return;
  body.appendParagraph(title).setHeading(DocumentApp.ParagraphHeading.HEADING4);
  arr.forEach(item => body.appendListItem(item).setGlyphType(DocumentApp.GlyphType.BULLET));
}

// ------------ HELPERS ------------
function json_(status, obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateFolder_(name) {
  const iter = DriveApp.getFoldersByName(name);
  return iter.hasNext() ? iter.next() : DriveApp.createFolder(name);
}

function getOpenAIKey_() {
  const key = PropertiesService.getScriptProperties().getProperty("OPENAI_API_KEY");
  if (!key)
    throw new Error('Missing OPENAI_API_KEY. Add it under File > Project properties > Script properties.');
  return key;
}

/* ---------------- DEPLOY INSTRUCTIONS ----------------
1️⃣  File > Project properties > Script properties:
     Name = OPENAI_API_KEY
     Value = sk-proj-xxxxxx (your secret key)
     
2️⃣  Save (Ctrl+S / Cmd+S)

3️⃣  Deploy → New deployment
     Type = Web app
     Execute as = Me  
     Who has access = Anyone
     
4️⃣  Authorize access (complete OAuth flow)

5️⃣  Copy the Web App URL (ends with /exec)

6️⃣  Test with curl:
     curl https://script.google.com/.../exec
     Should return: {"status":"ok","message":"..."}

7️⃣  In your wizard, POST JSON to that URL:
     fetch(url, {
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({assessment: yourData})
     })
     
8️⃣  Response → { success: true, analysis, pdfUrl }
------------------------------------------------------ */
