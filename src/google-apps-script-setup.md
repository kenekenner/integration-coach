# Google Apps Script Setup Guide

## Problem
You're getting "Failed to fetch" because Google Apps Script needs specific CORS configuration.

## Solution

### 1. Complete Google Apps Script Code

Copy this entire code into your Google Apps Script editor:

```javascript
function doGet(e) {
  // Handle CORS preflight
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Parse incoming data
    const requestData = JSON.parse(e.postData.contents);
    const assessment = requestData.assessment;
    
    // Log for debugging
    Logger.log('Received assessment from: ' + assessment.email);
    Logger.log('Company: ' + assessment.companyName);
    Logger.log('Apps count: ' + Object.values(assessment.selectedApps || {}).flat().length);
    
    // TODO: Add your ChatGPT API call here
    // Example:
    // const analysis = callChatGPT(assessment);
    // const pdfUrl = generatePDF(analysis);
    
    // For now, return a success response
    const response = {
      success: true,
      message: 'Assessment received successfully',
      assessment: assessment,
      // analysis: analysis,  // Add when ready
      // pdfUrl: pdfUrl,      // Add when ready
      timestamp: new Date().toISOString()
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        error: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 2. Deployment Steps (CRITICAL)

1. **Save your script** (Ctrl+S or Cmd+S)

2. **Click Deploy** → **New deployment**

3. **Configuration:**
   - Type: **Web app**
   - Description: "Celigo Assessment API"
   - Execute as: **Me** (your-email@celigo.com)
   - Who has access: **Anyone** ⚠️ THIS IS CRITICAL

4. **Authorize:**
   - Click "Authorize access"
   - Choose your account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"

5. **Copy the Web App URL:**
   - Should look like: `https://script.google.com/a/macros/celigo.com/s/AKfycb.../exec`
   - This is your API_URL

6. **Test the deployment:**
   - Open the URL in a browser
   - You should see: `{"status":"ok"}`

### 3. Common Issues

**Issue: "Authorization required"**
- Solution: Make sure "Execute as: Me" is selected

**Issue: "Script function not found"**
- Solution: Make sure function is named `doPost` (case-sensitive)

**Issue: Still getting CORS errors**
- Solution: 
  1. Create a NEW deployment (don't update existing)
  2. Make absolutely sure "Who has access" is set to "Anyone"
  3. Use the NEW deployment URL

### 4. Testing

After deployment, test with this curl command:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"assessment":{"firstName":"Test","email":"test@example.com"}}' \
  https://script.google.com/a/macros/celigo.com/s/YOUR_DEPLOYMENT_ID/exec
```

You should get a JSON response back.

### 5. Next Steps

Once the basic POST is working:
1. Integrate your ChatGPT API call
2. Add PDF generation
3. Update the response to include analysis and pdfUrl
