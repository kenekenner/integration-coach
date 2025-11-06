# 🚀 Production Deployment Guide

## Get Real AI Analysis Working in 3 Steps

Choose the method that works best for you. I recommend trying Option 1 first (5 minutes), then Option 2 if needed.

---

## ✅ **Option 1: Enhanced Google Apps Script (Try First - 5 min)**

Sometimes adding explicit CORS headers to Google Apps Script works. Let's try it.

### Step 1: Update Google Apps Script

1. **Open your Google Apps Script editor**
   - Go to: https://script.google.com
   - Open your "Celigo Integration Coach" project

2. **Replace Code.gs with new version**
   - Open the file `/Code-with-CORS.gs` in this project
   - Copy ALL the code
   - In Google Apps Script, select all code in `Code.gs` and replace it
   - **IMPORTANT:** Line 20 should now say: `const TEST_MODE = false;`

3. **Add your OpenAI API key**
   - In Google Apps Script: File → Project properties → Script properties
   - Click "Add row"
   - Property name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key (starts with `sk-proj-...`)
   - Click "Save"

4. **Deploy new version**
   - Click "Deploy" → "Manage deployments"
   - Click the ⚙️ (settings) icon next to your existing deployment
   - Click "New version" in the dropdown
   - Click "Deploy"
   - Copy the new Web App URL (ends with `/exec`)

### Step 2: Test the API

Open your new Web App URL in a browser. You should see:
```json
{
  "status": "ok",
  "message": "Celigo AI Integration Coach API is running",
  "timestamp": "2025-10-27T...",
  "version": "1.0.0",
  "testMode": false
}
```

✅ **If `testMode: false`, you're ready!**

### Step 3: Test from Your App

1. **Run your wizard**
2. **Complete all steps**
3. **Submit on final screen**
4. **Check console (F12)**

**What to look for:**
- ✅ No CORS errors
- ✅ Response status: 200
- ✅ "OpenAI analysis complete" in logs
- ✅ Real analysis data returned (not mock)

### ✅ Success Scenario

If you see real AI analysis and no CORS errors, **you're done!** 🎉

Your assessment is now fully functional with real OpenAI integration.

---

## 🔧 **Option 2: Vercel Serverless Function (If Option 1 Fails - 10 min)**

If Option 1 gives CORS errors, deploy a simple proxy on Vercel (free, easier than Cloudflare).

### Prerequisites

- Node.js installed (check: `node --version`)
- Free Vercel account: https://vercel.com/signup

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy the Proxy

```bash
# Navigate to the vercel-proxy directory
cd vercel-proxy

# Login to Vercel (opens browser)
vercel login

# Deploy (follow prompts)
vercel --prod
```

**Prompts you'll see:**
- "Set up and deploy?" → Yes
- "Which scope?" → Select your account
- "Link to existing project?" → No
- "What's your project's name?" → `celigo-assessment-proxy` (or any name)
- "In which directory is your code located?" → `./` (current directory)

**Result:** You'll get a URL like:
```
https://celigo-assessment-proxy.vercel.app
```

### Step 3: Update Your Frontend

Edit `/components/ReviewStep.tsx` line 45:

**Change from:**
```javascript
const API_URL = "https://script.google.com/macros/s/AKfycbw.../exec";
```

**Change to:**
```javascript
const API_URL = "https://your-vercel-url.vercel.app/api/submit";
```

Replace `your-vercel-url` with the URL Vercel gave you.

### Step 4: Test

1. Run your wizard
2. Complete all steps and submit
3. Check console - should see real OpenAI analysis!

**Expected console output:**
```
Sending to API: https://your-vercel-url.vercel.app/api/submit
Response status: 200
AI Analysis: {summary: "Based on your current...", by_function: [...]}
PDF Link: https://drive.google.com/file/d/...
```

---

## 🛠️ **Option 3: Cloudflare Worker via Wrangler CLI (Alternative)**

If you prefer Cloudflare, use their CLI instead of the buggy dashboard.

### Prerequisites

- Node.js installed
- Free Cloudflare account

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login

```bash
wrangler login
```

This opens your browser to authenticate.

### Step 3: Deploy

```bash
# From your project root
wrangler deploy cloudflare-worker.js --name celigo-proxy
```

### Step 4: Update Frontend

You'll get a URL like:
```
https://celigo-proxy.your-subdomain.workers.dev
```

Update ReviewStep.tsx line 45 with this URL.

---

## 📋 Quick Decision Matrix

| Method | Difficulty | Time | Works? |
|--------|-----------|------|--------|
| **Option 1: Enhanced Apps Script** | ⭐ Easy | 5 min | Maybe (60% chance) |
| **Option 2: Vercel Function** | ⭐⭐ Medium | 10 min | Yes (95% chance) |
| **Option 3: Cloudflare CLI** | ⭐⭐ Medium | 10 min | Yes (95% chance) |

**My recommendation:**
1. Try Option 1 first (quickest)
2. If CORS errors persist, use Option 2 (Vercel is simpler than Cloudflare)

---

## 🧪 Testing Real AI Analysis

Once deployed, here's how to verify it's working:

### 1. Test API Directly

Open your API URL in a browser:
- **Google Apps Script:** Should show `{"status":"ok"..., "testMode":false}`
- **Vercel/Cloudflare:** May show error (expected - needs POST)

### 2. Test from Wizard

**Fill out assessment:**
- Add your name/email
- Select NetSuite as ERP
- Add 5-10 apps from different categories
- Add context for a few apps
- Create 2-3 integrations
- Select 2-3 pain points and goals

**Submit and check console:**

✅ **Success indicators:**
```javascript
// Console logs
Sending to API: [your-api-url]
Response status: 200
Response ok?: true
Parsed result: {analysis: {...}, pdfUrl: "https://drive.google..."}
AI Analysis: {
  summary: "Based on your current tech stack...",
  by_function: [
    {
      function: "Order Management",
      recommended_integrations: [...],
      quick_wins: [...],
      // ... real AI-generated content
    }
  ]
}
Test Mode?: false  // ← Should be false!
```

❌ **Failure indicators:**
```javascript
// CORS error
Access to fetch at 'https://script.google...' has been blocked by CORS policy
// → Try Option 2 or 3

// OpenAI error
Error: OpenAI API error (401): Invalid API key
// → Check your OPENAI_API_KEY in Script Properties

// OpenAI error
Error: OpenAI API error (429): Rate limit exceeded
// → Check OpenAI account quota/billing
```

---

## 🔑 OpenAI API Key Setup

### Get Your API Key

1. Go to: https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Name it: "Celigo Assessment"
4. Copy the key (starts with `sk-proj-...`)
5. **Save it securely** - you can't view it again

### Add to Google Apps Script

1. Open your script: https://script.google.com
2. File → Project properties → Script properties
3. Add property:
   - Name: `OPENAI_API_KEY`
   - Value: `sk-proj-your-key-here`
4. Click Save

### Verify

In Google Apps Script editor, add this test function:

```javascript
function testOpenAIKey() {
  const key = PropertiesService.getScriptProperties().getProperty("OPENAI_API_KEY");
  Logger.log("API Key found: " + (key ? "Yes (" + key.substring(0, 12) + "...)" : "No"));
}
```

Run it, check logs (View → Logs). Should show:
```
API Key found: Yes (sk-proj-xxx...)
```

---

## 💰 OpenAI Costs

Using `gpt-4o-mini` model:

**Per assessment:**
- Input tokens: ~2,000 (assessment JSON + system prompt)
- Output tokens: ~500-1,000 (structured recommendations)
- Cost: **~$0.01-0.02 per assessment**

**For 100 assessments:** ~$1-2
**For 1,000 assessments:** ~$10-20

Very affordable for lead generation! 💰

---

## 🐛 Troubleshooting

### CORS Errors Persist (After Option 1)

**Symptom:**
```
Access to fetch... has been blocked by CORS policy
```

**Solution:**
- Use Option 2 (Vercel) or Option 3 (Cloudflare)
- These are specifically designed to handle CORS

### OpenAI Timeout

**Symptom:**
```
Error: Request timeout after 30 seconds
```

**Solution:**
- OpenAI sometimes takes 20-30 seconds for complex analyses
- This is normal for large assessments
- User sees "Analyzing..." spinner during this time
- If it consistently times out, simplify the system prompt

### PDF Generation Fails

**Symptom:**
```
Error: Cannot create document
```

**Solution:**
- Check Google Drive quota (must have space)
- Verify script has Drive permissions
- Re-authorize the script (Deploy → Manage deployments → Edit → Re-authorize)

### "Test Mode?" still shows true

**Symptom:**
```javascript
Test Mode?: true
```

**Solution:**
- You forgot to set `TEST_MODE = false` in Code.gs line 20
- Redeploy after changing it

---

## ✅ Success Checklist

Before considering deployment complete:

**Backend:**
- [ ] OpenAI API key added to Script Properties
- [ ] TEST_MODE set to false in Code.gs
- [ ] New deployment created with updated code
- [ ] API health check shows `testMode: false`
- [ ] CORS issue resolved (Option 1, 2, or 3)

**Frontend:**
- [ ] ReviewStep.tsx updated with correct API URL
- [ ] App successfully submits assessment
- [ ] Real AI analysis returns (not mock)
- [ ] PDF URL is a valid Google Drive link
- [ ] No console errors

**Testing:**
- [ ] Completed full assessment flow
- [ ] Received real AI recommendations
- [ ] PDF opens and contains assessment data
- [ ] Recommendations are relevant and accurate

---

## 🎉 What's Next?

Once you have real AI analysis working:

1. **Test with real data** - Run 3-5 assessments with varied inputs
2. **Review AI quality** - Are recommendations useful?
3. **Refine prompts** - Adjust system prompt in Code.gs if needed
4. **Build results screen** - Display recommendations in your app (we'll do this next!)
5. **Add analytics** - Track conversion, completion rate
6. **Launch** - Share with prospects!

---

## 🆘 Still Stuck?

If you're still having issues after trying all three options:

1. **Check browser console** for specific error messages
2. **Check Google Apps Script logs** (View → Executions)
3. **Test API directly** with curl or Postman
4. **Verify OpenAI account** has sufficient quota/billing

**Most common issue:** CORS errors → Solution: Use Option 2 (Vercel)

**Second most common:** API key not set → Solution: Check Script Properties

---

Ready to get real AI analysis working? Start with Option 1! 🚀