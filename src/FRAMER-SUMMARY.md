# Framer Website Integration - Summary

## What You Have

I've created everything you need to embed your Integration Coach app in your Framer website:

### Files Created:

1. **`FRAMER-QUICKSTART.md`** ⭐ START HERE
   - 5-minute quick start guide
   - Copy-paste iframe code
   - Essential steps only

2. **`FRAMER-EMBED-GUIDE.md`**
   - Complete embedding guide
   - All options explained
   - Troubleshooting tips

3. **`VERCEL-DEPLOYMENT.md`**
   - Step-by-step Vercel deployment
   - Configuration details
   - Best practices

4. **`vercel.json`**
   - Pre-configured for your app
   - Enables iframe embedding
   - Clipboard permissions set

5. **`standalone-embed.html`**
   - Simplified placeholder version
   - For testing only (limited features)

---

## Recommended Approach

### ✅ Best Option: Vercel + Iframe

**Why?**
- Full functionality (all features work)
- Easy to update (just push to GitHub)
- Professional hosting (fast, reliable, free)
- App logos load correctly
- Clipboard/GPT workflow works perfectly

**Time Required:** 5 minutes

**Steps:**
1. Deploy to Vercel → Get URL
2. Embed in Framer → Use iframe
3. Done!

---

## Quick Iframe Code

Copy this into Framer Embed component:

```html
<iframe 
  src="https://your-app.vercel.app" 
  style="width: 100%; height: 100vh; border: none; display: block; margin: 0;"
  allow="clipboard-read; clipboard-write"
></iframe>
```

**Replace:** `your-app.vercel.app` with your actual Vercel URL

---

## Deployment Checklist

### Pre-Deployment:
- [ ] Code ready in GitHub repository
- [ ] Vercel account created (free)
- [ ] GitHub connected to Vercel

### Deployment:
- [ ] Import project in Vercel
- [ ] Deploy (auto-detected settings)
- [ ] Copy production URL
- [ ] Test URL in browser

### Framer Embedding:
- [ ] Create page in Framer
- [ ] Add Embed component
- [ ] Paste iframe code with your URL
- [ ] Set to full-width (100%)
- [ ] Set height (100vh or 1200px)
- [ ] Enable clipboard permissions
- [ ] Publish Framer site
- [ ] Test on desktop and mobile

---

## What Works in Iframe

✅ **Full Wizard Flow**
- All 8 steps
- Contact information form
- ERP system selection
- App catalog with real logos
- Integration mapping
- Pain points and goals
- Review and export

✅ **AI Recommendations**
- Manual GPT workflow
- Clipboard copy (with permissions)
- File upload
- Recommendations display

✅ **Export Functions**
- JSON download
- HTML download
- Print to PDF
- Standalone HTML export

✅ **Dev Mode**
- Scenario upload
- Recommendations upload
- Rapid testing features

✅ **Responsive Design**
- Desktop optimized
- Tablet friendly
- Mobile adaptive

---

## Key Configuration

### Vercel Settings (Auto-Configured)

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Required Iframe Attributes

```html
allow="clipboard-read; clipboard-write"
```
☝️ Critical for GPT workflow!

### Recommended Iframe Styles

```css
width: 100%;
height: 100vh;
border: none;
display: block;
margin: 0;
```

---

## File Structure for Deployment

```
your-project/
├── src/
│   ├── App.tsx
│   ├── components/
│   └── ...
├── public/
├── package.json
├── vite.config.ts
├── vercel.json          ← Auto-configures deployment
└── README.md
```

All set for Vercel deployment!

---

## Common Questions

### Q: Do I need to modify the app code?
**A:** No! It works as-is. Just deploy and embed.

### Q: Will app logos load in iframe?
**A:** Yes, if using Vercel deployment (recommended).

### Q: Can users download files from iframe?
**A:** Yes, all download functions work normally.

### Q: Does it work on mobile?
**A:** Yes, fully responsive design included.

### Q: How do I update the app?
**A:** Push to GitHub → Vercel auto-deploys → iframe shows new version (no Framer changes needed).

### Q: What if I want a custom domain?
**A:** Add in Vercel settings, update iframe src URL.

### Q: Is it free?
**A:** Yes! Vercel free tier is generous and sufficient for this app.

---

## Performance

### Expected Load Times:
- Initial load: 2-3 seconds
- Subsequent navigations: Instant (SPA)
- Logo images: <1 second (via API)

### Optimization:
- ✅ Vercel global CDN
- ✅ Automatic compression
- ✅ Image optimization
- ✅ Smart caching
- ✅ HTTPS by default

---

## Support & Maintenance

### Monitoring:
- View deployments: [vercel.com/dashboard](https://vercel.com/dashboard)
- Check logs: Project → Deployments → [Select deployment] → Logs
- Analytics: Enable in Vercel project settings

### Updates:
```bash
git add .
git commit -m "Your update message"
git push
# Vercel deploys automatically
```

### Rollback:
- Go to Vercel dashboard
- Select previous deployment
- Click "Promote to Production"

---

## Testing Before Launch

1. **Local Testing:**
   ```bash
   npm run dev
   ```

2. **Build Testing:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Vercel Preview:**
   - Every push to non-main branch gets preview URL
   - Test before merging to production

4. **Framer Preview:**
   - Use Framer preview mode
   - Test iframe functionality
   - Check mobile responsive

---

## Launch Day Checklist

- [ ] Vercel deployment successful
- [ ] Production URL accessible
- [ ] App loads and functions correctly
- [ ] All wizard steps work
- [ ] Clipboard functionality tested
- [ ] File uploads/downloads work
- [ ] Mobile experience tested
- [ ] Framer iframe configured correctly
- [ ] Framer site published
- [ ] Shared with stakeholders
- [ ] Analytics enabled (optional)

---

## Example URLs

After deployment, you'll have:

- **Vercel (Production):** `https://integration-coach.vercel.app`
- **Vercel (Preview):** `https://integration-coach-git-feature.vercel.app`
- **Framer Page:** `https://yoursite.com/integration-assessment`

---

## Next Steps

1. **Read:** `FRAMER-QUICKSTART.md` (5-min guide)
2. **Deploy:** Follow Vercel deployment steps
3. **Embed:** Add iframe to Framer
4. **Test:** Verify all functionality
5. **Launch:** Publish your Framer site

---

## Need Help?

1. Check browser console for errors
2. Review Vercel deployment logs
3. Verify iframe has correct permissions
4. Test Vercel URL directly (outside iframe)
5. Check `vercel.json` configuration

---

## Files You Need

For Framer embedding, you only need:

1. ✅ App deployed to Vercel
2. ✅ Vercel production URL
3. ✅ Iframe code (provided above)

That's it! Simple and clean. 🚀

---

**Ready to deploy?** Start with `FRAMER-QUICKSTART.md`!
