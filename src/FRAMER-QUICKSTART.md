# Framer Embed - Quick Start (5 Minutes)

## TL;DR

1. Deploy to Vercel (3 min)
2. Copy deployment URL
3. Embed in Framer with iframe (1 min)
4. Done! ✅

---

## Step 1: Deploy to Vercel (One-Time Setup)

### A. Push to GitHub

```bash
git init
git add .
git commit -m "Integration Coach"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### B. Deploy

1. Visit [vercel.com/new](https://vercel.com/new)
2. Click "Import" next to your GitHub repo
3. Click "Deploy"
4. Wait 2 minutes
5. **Copy your URL:** `https://your-app.vercel.app`

---

## Step 2: Embed in Framer

### Option A: Full Page Embed (Recommended)

1. In Framer, create new page called "Integration Assessment"
2. Delete all default content
3. Add **Embed** component (from Insert menu)
4. Paste this code:

```html
<iframe 
  src="https://your-app.vercel.app" 
  style="width: 100%; height: 100vh; border: none; display: block; margin: 0;"
  allow="clipboard-read; clipboard-write"
></iframe>
```

5. Set Embed component to fill page:
   - Width: 100%
   - Height: 100vh (or fixed height like 1200px)
   - Padding: 0
   - Margin: 0

6. **Publish!**

### Option B: Section Embed

1. Add Embed component to existing page
2. Use same iframe code
3. Set minimum height: 800px or 100vh
4. Ensure container has no overflow hidden

---

## Step 3: Test

Visit your Framer site and verify:

- ✅ App loads
- ✅ Wizard navigation works
- ✅ All steps accessible
- ✅ "Get Recommendations" button works
- ✅ Clipboard copy works (download prompt)
- ✅ File upload works
- ✅ Mobile responsive

---

## Iframe Code (Copy-Paste Ready)

### Full-Page Version:
```html
<iframe 
  src="https://YOUR-APP.vercel.app" 
  style="width: 100%; height: 100vh; border: none; display: block; margin: 0; padding: 0;"
  title="Integration Assessment Tool"
  allow="clipboard-read; clipboard-write"
  loading="eager"
></iframe>
```

### Section Version (Scrollable):
```html
<iframe 
  src="https://YOUR-APP.vercel.app" 
  style="width: 100%; height: 1200px; border: none; display: block;"
  title="Integration Assessment Tool"
  allow="clipboard-read; clipboard-write"
  loading="lazy"
></iframe>
```

---

## Framer Settings

### Page Settings (for full-page embed):
- **Width:** Stretch
- **Height:** 100vh
- **Padding:** 0 on all sides
- **Background:** None (app has its own)

### Embed Component Settings:
- **Position:** Relative or Absolute (fill container)
- **Size:** 100% width, 100vh height
- **Z-index:** Auto (or higher if needed)

---

## Styling Tips

### Remove Framer Header/Footer (Optional)

If you want the integration tool to be completely standalone:

1. Create page without navigation
2. Set page to "No Header"
3. Set page to "No Footer"
4. Full-screen iframe

### Match Your Brand

The app will appear in the iframe. To brand it:

1. **Option A:** Wrap iframe in branded container:
   ```html
   <div style="background: #yourcolor; padding: 20px;">
     <h1>Your Company - Integration Assessment</h1>
     <iframe src="..." ...></iframe>
   </div>
   ```

2. **Option B:** Customize the app itself (edit App.tsx) and redeploy

---

## Troubleshooting

### App Doesn't Show
- Check Vercel URL is accessible in browser
- Verify iframe `src` URL is correct
- Check browser console for errors

### Clipboard Doesn't Work
- Add `allow="clipboard-read; clipboard-write"` to iframe
- Some browsers require HTTPS (Vercel provides this)

### Height Issues
- Set explicit height: `height: 100vh` or `height: 1200px`
- Avoid `height: auto` (doesn't work with iframes)

### Mobile Issues
- App is responsive by default
- Test on real mobile devices
- Adjust iframe height for mobile if needed

---

## Updates

When you update the app:

```bash
git add .
git commit -m "Update feature"
git push
```

Vercel auto-deploys in 1-2 minutes. Framer iframe shows new version automatically!

---

## Custom Domain (Optional)

### 1. In Vercel:
- Go to Project Settings → Domains
- Add: `integrations.yoursite.com`
- Follow DNS instructions

### 2. In Framer:
Update iframe src to:
```html
src="https://integrations.yoursite.com"
```

---

## Common Use Cases

### Use Case 1: Dedicated Tool Page
```
yoursite.com/integration-assessment
  └── Full-page iframe embed
```

### Use Case 2: Section on Existing Page
```
yoursite.com/solutions
  ├── Hero section
  ├── Features section
  └── Integration tool embed (section)
```

### Use Case 3: Modal/Popup (Advanced)
```
Framer button → Opens modal → Contains iframe
```

---

## Resources

- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Deployment URL:** Check Vercel after deployment
- **Full Guide:** See FRAMER-EMBED-GUIDE.md
- **Deployment Help:** See VERCEL-DEPLOYMENT.md

---

## Success!

Your integration assessment tool is now live on your Framer website! 🎉

**Live URL Pattern:**
- Vercel: `https://your-app.vercel.app`
- Framer: `https://yoursite.com/integration-assessment`

---

## Next Steps

1. ✅ Test all functionality
2. ✅ Test on mobile devices
3. ✅ Add page to navigation (if desired)
4. ✅ Monitor analytics in Vercel
5. ✅ Share with your team!

Need help? Check the browser console and Vercel deployment logs for errors.
