# 🗺️ Deployment Flowchart

## Choose Your Path to Real AI Analysis

```
┌─────────────────────────────────────────────────────────────┐
│  START: You have TEST_MODE enabled, need real AI analysis  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
         ┌───────────────────────────────────┐
         │  Do you have an OpenAI API key?   │
         └───────────┬───────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼ NO                      ▼ YES
┌───────────────┐         ┌──────────────────┐
│ Get API Key:  │         │ Add to Google    │
│ platform.     │         │ Apps Script:     │
│ openai.com    │─────────▶ Script           │
│ /api-keys     │         │ Properties       │
└───────────────┘         └────────┬─────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────┐
                    │ Update Code.gs:              │
                    │ • Replace with Code-with-    │
                    │   CORS.gs                    │
                    │ • Set TEST_MODE = false      │
                    │ • Deploy new version         │
                    └──────────────┬───────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────┐
                    │ Test API in browser          │
                    │ Should show:                 │
                    │ {"status":"ok",              │
                    │  "testMode":false}           │
                    └──────────────┬───────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────┐
                    │ Test from your wizard        │
                    │ Submit an assessment         │
                    └──────────────┬───────────────┘
                                   │
                ┌──────────────────┴──────────────────┐
                │                                     │
                ▼ CORS ERROR                          ▼ SUCCESS
┌───────────────────────────┐         ┌──────────────────────────┐
│ CORS Issue Detected       │         │ ✅ You're Done!          │
│ Need a proxy              │         │                          │
└───────────┬───────────────┘         │ Real AI analysis is      │
            │                         │ working!                 │
            ▼                         │                          │
┌───────────────────────────┐         │ Next: Build results      │
│ Choose proxy solution:    │         │ display screen           │
│                           │         └──────────────────────────┘
│ A) Vercel (recommended)   │
│ B) Cloudflare Worker      │
│ C) Netlify Function       │
└───────────┬───────────────┘
            │
    ┌───────┴───────┬───────────────┐
    │               │               │
    ▼ A             ▼ B             ▼ C
┌─────────┐  ┌────────────┐  ┌────────────┐
│ Vercel  │  │ Cloudflare │  │  Netlify   │
│ Deploy  │  │   Worker   │  │  Function  │
└────┬────┘  └─────┬──────┘  └─────┬──────┘
     │             │               │
     │             │               │
     └─────────────┴───────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ Update ReviewStep.   │
        │ tsx with proxy URL   │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ Test again           │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ ✅ Success!          │
        │ Real AI analysis     │
        │ working via proxy    │
        └──────────────────────┘
```

---

## 📋 Decision Tree

### "Which deployment method should I use?"

**Choose based on your situation:**

#### 🟢 Try First: Enhanced Google Apps Script CORS
- **Time:** 5 minutes
- **Cost:** Free
- **Success rate:** 60%
- **Complexity:** ⭐ Easy
- **Use when:** You want the quickest solution

#### 🔵 Recommended: Vercel Serverless Function
- **Time:** 10 minutes
- **Cost:** Free (generous limits)
- **Success rate:** 95%
- **Complexity:** ⭐⭐ Medium
- **Use when:** Enhanced CORS didn't work
- **Why:** Easier than Cloudflare, great free tier

#### 🟡 Alternative: Cloudflare Worker
- **Time:** 10 minutes
- **Cost:** Free (100k requests/day)
- **Success rate:** 95%
- **Complexity:** ⭐⭐ Medium
- **Use when:** You prefer Cloudflare ecosystem
- **Note:** Use Wrangler CLI, not dashboard

#### 🟣 Enterprise: Netlify Function
- **Time:** 10 minutes
- **Cost:** Free (125k requests/month)
- **Success rate:** 95%
- **Complexity:** ⭐⭐ Medium
- **Use when:** You already use Netlify

---

## 🎯 My Recommendation

```
START HERE → Enhanced Apps Script CORS (5 min)
     │
     ├─ Works? ✅ → Done! 🎉
     │
     └─ CORS error? ❌ → Deploy Vercel proxy (10 min)
             │
             └─ Done! ✅ 🎉
```

**Why this order?**
1. Enhanced CORS is fastest (sometimes works)
2. Vercel is easiest proxy to deploy
3. You'll be done in 15 minutes max

---

## 🔍 Detailed Steps by Method

### Method A: Enhanced Google Apps Script

```
1. Replace Code.gs with Code-with-CORS.gs
2. Set TEST_MODE = false (line 20)
3. Add OPENAI_API_KEY to Script Properties
4. Deploy new version
5. Test API in browser
6. Test from wizard
   ├─ Works? ✅ Done!
   └─ CORS? ❌ Go to Method B
```

### Method B: Vercel Proxy

```
1. Install Vercel CLI: npm i -g vercel
2. cd vercel-proxy
3. vercel login
4. vercel --prod
5. Copy URL
6. Update ReviewStep.tsx line 45
7. Test from wizard
   └─ ✅ Done!
```

### Method C: Cloudflare Worker

```
1. Install Wrangler: npm i -g wrangler
2. wrangler login
3. wrangler deploy cloudflare-worker.js --name celigo-proxy
4. Copy URL
5. Update ReviewStep.tsx line 45
6. Test from wizard
   └─ ✅ Done!
```

---

## 🧪 Testing Checklist

After deploying, verify:

### 1. API Health Check
- [ ] Open API URL in browser
- [ ] See `{"status":"ok", "testMode":false}`
- [ ] No error messages

### 2. Wizard Submission
- [ ] Fill out complete assessment
- [ ] Click "See my recommendations"
- [ ] Button shows "Analyzing..." (20-30s)
- [ ] Success toast appears
- [ ] Console shows real AI analysis

### 3. Console Verification
```javascript
✅ Response status: 200
✅ Test Mode?: false
✅ AI Analysis: {summary: "Based on...", by_function: [...]}
✅ PDF Link: https://drive.google.com/file/d/...
❌ No CORS errors
❌ No timeout errors
```

### 4. AI Quality Check
- [ ] Recommendations are relevant
- [ ] Mentions specific apps from assessment
- [ ] Identifies real integration opportunities
- [ ] Quick wins are actionable
- [ ] Confidence scores make sense

---

## 💡 Pro Tips

### If using Enhanced CORS (Method A):
- **Sometimes works in Chrome but not Safari** → Use proxy for Safari users
- **Works for some Google Workspace orgs** → Depends on security settings
- **Worth trying first** → Takes 5 minutes

### If using Vercel (Method B):
- **Free tier is generous** → 100GB bandwidth, 100k invocations/month
- **Fast edge network** → Sub-100ms latency
- **Easy to update** → Just run `vercel --prod` again
- **Built-in logging** → Check dashboard for errors

### If using Cloudflare (Method C):
- **Fastest edge network** → Global CDN
- **100k requests/day free** → More than enough
- **KV storage available** → Can cache responses if needed
- **Use CLI** → Dashboard has bugs, Wrangler is reliable

---

## 🚨 Common Issues

### Issue: "Test Mode still true"
**Cause:** Forgot to set `TEST_MODE = false`  
**Fix:** Edit Code.gs line 20, redeploy

### Issue: "Missing OPENAI_API_KEY"
**Cause:** API key not added to Script Properties  
**Fix:** File → Project properties → Script properties → Add key

### Issue: CORS error
**Cause:** Google Workspace security blocks cross-origin requests  
**Fix:** Use Method B or C (proxy)

### Issue: "OpenAI error 401"
**Cause:** Invalid API key  
**Fix:** Regenerate key at platform.openai.com

### Issue: "OpenAI error 429"
**Cause:** Rate limit or insufficient quota  
**Fix:** Check billing at platform.openai.com

### Issue: Timeout after 30 seconds
**Cause:** Complex assessment or slow OpenAI response  
**Fix:** Normal for large assessments, user sees "Analyzing..."

---

## ✅ Success Metrics

You'll know it's working when:

1. **No mock data** - Analysis is different for each assessment
2. **Relevant recommendations** - AI mentions specific apps/integrations
3. **PDF generated** - Google Drive link is valid
4. **Fast responses** - Most complete in 20-30 seconds
5. **No errors** - Console is clean

---

## 🎉 After Success

Once real AI analysis is working:

1. ✅ Test with 3-5 different tech stacks
2. ✅ Review AI quality and tune prompts if needed
3. ✅ Build results display screen (coming next!)
4. ✅ Add email notifications
5. ✅ Launch to prospects

---

**Ready to deploy?** Start with Enhanced CORS! ⚡