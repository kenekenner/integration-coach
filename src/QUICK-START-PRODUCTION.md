# ⚡ Quick Start: Enable Real AI Analysis

## 🎯 Goal
Get your wizard working with REAL OpenAI analysis (not mock data) in under 15 minutes.

---

## ✅ Method 1: Try Enhanced CORS Headers First (5 minutes)

### Step 1: Update Google Apps Script (2 min)

1. Open https://script.google.com
2. Open your "Celigo Integration Coach" project
3. Replace all code in `Code.gs` with code from `/Code-with-CORS.gs`
4. **Verify line 20 says:** `const TEST_MODE = false;`

### Step 2: Add OpenAI API Key (1 min)

1. In Apps Script: **File → Project properties → Script properties**
2. Click "**Add row**"
   - Property: `OPENAI_API_KEY`
   - Value: Your OpenAI key (get from https://platform.openai.com/api-keys)
3. Click "**Save**"

### Step 3: Deploy New Version (1 min)

1. Click "**Deploy**" → "**Manage deployments**"
2. Click ⚙️ next to existing deployment
3. Click "**New version**"
4. Click "**Deploy**"
5. **Copy the URL** (ends with `/exec`)

### Step 4: Test (1 min)

**Open the URL in your browser.** You should see:
```json
{
  "status": "ok",
  "testMode": false  ← Should be FALSE!
}
```

**Now test from your wizard:**
1. Run the wizard
2. Fill out a quick assessment
3. Submit
4. **Check browser console (F12)**

**✅ Success:** No CORS errors + real AI analysis  
**❌ CORS Error:** Proceed to Method 2 below

---

## 🔧 Method 2: Deploy Vercel Proxy (10 minutes)

Use this if Method 1 gave CORS errors.

### Step 1: Install Vercel CLI (2 min)

```bash
npm install -g vercel
```

### Step 2: Deploy (3 min)

```bash
cd vercel-proxy
vercel login       # Opens browser to login
vercel --prod      # Deploy
```

**Follow prompts:**
- Project name: `celigo-assessment-proxy`
- Deploy? Yes

**Copy your URL:** `https://celigo-assessment-proxy.vercel.app`

### Step 3: Update Frontend (2 min)

Edit `/components/ReviewStep.tsx` line 45:

**Change:**
```typescript
const API_URL = "https://script.google.com/macros/s/AKfycbw.../exec";
```

**To:**
```typescript
const API_URL = "https://celigo-assessment-proxy.vercel.app/api/submit";
```

### Step 4: Test (3 min)

1. Run wizard
2. Complete assessment
3. Submit
4. Check console for real AI analysis!

---

## 🧪 How to Verify It's Working

### In Browser Console (F12):

**✅ Working correctly:**
```javascript
Sending to API: [your-url]
Response status: 200
Test Mode?: false
AI Analysis: {
  summary: "Based on your current tech stack and integration patterns...",
  by_function: [
    {
      function: "Order Management",
      recommended_integrations: [
        "Shopify → NetSuite (real-time order sync)",
        "ShipStation → NetSuite (fulfillment updates)"
      ],
      quick_wins: [...],
      risks: [...],
      gaps: [...],
      confidence: 85
    }
  ]
}
PDF Link: https://drive.google.com/file/d/...
```

**❌ Still in test mode:**
```javascript
Test Mode?: true  ← Should be FALSE
```
→ You forgot to set `TEST_MODE = false` in Code.gs line 20

**❌ CORS error:**
```
Access to fetch... has been blocked by CORS policy
```
→ Use Method 2 (Vercel proxy)

**❌ API key error:**
```
Error: Missing OPENAI_API_KEY
```
→ Add API key to Script Properties (see Method 1, Step 2)

---

## 📊 Expected Behavior

### What happens when you submit:

1. **Frontend** sends assessment JSON to API
2. **API** (Google Apps Script or Vercel proxy) receives it
3. **Apps Script** calls OpenAI with structured schema
4. **OpenAI** analyzes your tech stack (20-30 seconds)
5. **Apps Script** creates PDF report in Google Drive
6. **Response** returns with AI analysis + PDF link
7. **Frontend** shows success message

### What you'll see:

**During submission:**
- Button shows "Analyzing..."
- User waits 20-30 seconds (normal for AI analysis)

**After completion:**
- Success toast: "Analysis complete! Check your email for recommendations."
- Console shows full AI analysis
- PDF URL is logged

---

## 💰 Cost Check

**Per assessment with gpt-4o-mini:**
- ~$0.01-0.02 per submission
- Very affordable for lead gen!

**Monthly estimate:**
- 50 assessments: ~$1
- 100 assessments: ~$2
- 500 assessments: ~$10

---

## 🎯 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| **CORS error** | Use Method 2 (Vercel) |
| **Test Mode still true** | Set `TEST_MODE = false` in Code.gs line 20 |
| **Missing API key** | Add `OPENAI_API_KEY` to Script Properties |
| **Timeout** | Normal for complex analyses (up to 30s) |
| **PDF fails** | Check Google Drive quota & permissions |

---

## ✅ You're Done When...

- [ ] Browser console shows `Test Mode?: false`
- [ ] Submitting returns **real AI analysis** (not mock)
- [ ] Console shows **PDF URL** (Google Drive link)
- [ ] **No CORS errors**
- [ ] Analysis is **relevant to submitted data**

---

## 🚀 Next Steps After This Works

1. **Test with varied data** - Try different tech stacks
2. **Review AI quality** - Are recommendations useful?
3. **Build results display** - Show analysis in a beautiful UI
4. **Add email notifications** - Send PDF to prospects
5. **Launch!** 🎉

---

**Ready to enable real AI analysis?** Start with Method 1! ⚡