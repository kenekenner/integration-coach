# Embedding Integration Coach in Framer

## ⚠️ Important Note

Due to the complexity of this application (React, TypeScript, 50+ components, real app logos, complex state management), a simple HTML embed won't include all features. 

**Recommended Approach:** Deploy to Vercel and embed via iframe (see Option 1 below).

---

## Option 1: Deploy to Vercel + Embed (RECOMMENDED)

This gives you the **full-featured app** with all functionality.

### Step 1: Deploy to Vercel

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Integration Coach app"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the React app
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Copy your deployment URL (e.g., `https://integration-coach.vercel.app`)

### Step 2: Embed in Framer

**Method A: Full-Page Embed**

1. In Framer, create a new page
2. Delete all default content
3. Add an **Embed** component (or Code component)
4. Paste this code:

```html
<iframe 
  src="https://YOUR-APP.vercel.app" 
  style="width: 100%; height: 100vh; border: none;"
  title="Integration Coach"
  allow="clipboard-read; clipboard-write"
></iframe>
```

5. Set the component to fill the entire page (width: 100%, height: 100vh)

**Method B: Section Embed**

1. Add a section/container to your Framer page
2. Insert an **Embed** component
3. Use the same iframe code above
4. Adjust height as needed (recommended: at least 800px or 100vh)

### Step 3: Enable Clipboard Access (Important!)

The app uses clipboard functionality for the GPT workflow. Add this to your iframe:

```html
allow="clipboard-read; clipboard-write"
```

This is already included in the code above.

---

## Option 2: Simplified Single-File HTML Embed

⚠️ **Limitations:** No app logos, simplified UI, basic functionality only

### What's Included:
- Basic layout
- Placeholder/demo content
- Instructions to deploy full version
- Lightweight (no complex dependencies)

### How to Use:

1. **Upload to Framer:**
   - Download `standalone-embed.html` from your project
   - In Framer, create a new page
   - Add a **Custom Code** or **Embed** component
   - Copy/paste the contents of `standalone-embed.html`
   - Set dimensions (recommended: full page width, 100vh height)

2. **Or Host Externally:**
   - Upload `standalone-embed.html` to any web host
   - In Framer, use an iframe pointing to that URL

### Note:
This simplified version is primarily a placeholder. For the full assessment wizard, recommendations display, and all features, use Option 1 (Vercel deployment).

---

## Option 3: Framer Custom Code Component (Advanced)

Framer supports React components natively, but this requires:
- Converting all components to Framer-compatible format
- Managing all dependencies within Framer
- Potentially rebuilding sections of the app

**Not recommended** due to complexity and maintenance overhead.

---

## Recommended Setup for Production

### Best Practice: Vercel + Framer iframe

```
Your Framer Site (yoursite.com)
  └── Page: "Integration Assessment"
       └── Full-width iframe embedding:
            https://integration-coach.vercel.app
```

### Benefits:
✅ Full functionality (all features work)  
✅ Easy updates (just redeploy to Vercel)  
✅ Independent hosting (doesn't slow down Framer site)  
✅ App logos and real data from logo API  
✅ Proper clipboard access for GPT workflow  
✅ Clean separation of concerns  

### Styling Tips:

1. **Remove Framer page padding:**
   - Set page margins to 0
   - Make iframe full-width and full-height

2. **Seamless integration:**
   ```html
   <iframe 
     src="https://YOUR-APP.vercel.app" 
     style="
       width: 100%; 
       height: 100vh; 
       border: none; 
       display: block;
       margin: 0;
       padding: 0;
     "
     title="Integration Coach"
     allow="clipboard-read; clipboard-write"
     loading="lazy"
   ></iframe>
   ```

3. **Mobile responsiveness:**
   - The app is already mobile-responsive
   - Framer iframe will automatically adapt
   - Test on mobile devices to ensure proper display

---

## Troubleshooting

### Issue: Clipboard doesn't work in iframe

**Solution:** Add `allow="clipboard-read; clipboard-write"` to the iframe tag.

### Issue: Content is cut off

**Solution:** Increase iframe height to `100vh` or a specific pixel value (e.g., `1200px`).

### Issue: App loads slowly

**Solution:** 
- Add `loading="lazy"` to iframe if it's not above the fold
- Or use `loading="eager"` if it's the main page content
- Ensure Vercel deployment is in the same region as your users

### Issue: Styling conflicts with Framer

**Solution:** 
- The iframe isolates the app from Framer's styles
- If using the simplified HTML version, add CSS resets
- Use Vercel deployment for cleanest separation

---

## Custom Domain (Optional)

If you want a branded URL:

1. **Add domain in Vercel:**
   - Go to your Vercel project settings
   - Add custom domain (e.g., `integrations.yourcompany.com`)
   - Update DNS records as instructed

2. **Update Framer iframe:**
   ```html
   <iframe src="https://integrations.yourcompany.com" ...>
   ```

---

## Testing Checklist

Before going live, test:

- [ ] App loads correctly in iframe
- [ ] All 8 steps of wizard work
- [ ] App selection and logo display works
- [ ] Integration mapping displays properly
- [ ] Clipboard copy works (GPT workflow)
- [ ] File upload works (scenario/dev mode)
- [ ] Recommendations display correctly
- [ ] PDF/HTML export functions work
- [ ] Print functionality works
- [ ] Mobile responsive design looks good
- [ ] No console errors
- [ ] Performance is acceptable

---

## Example Framer Page Structure

```
Page: "Integration Assessment Tool"
├── Header (optional - your Framer navigation)
├── Hero Section (optional - brief intro)
└── Full-Width Embed Section
    └── iframe with Integration Coach app
        - Height: 100vh
        - Width: 100%
        - No border
        - Clipboard permissions enabled
```

---

## Support & Updates

### Updating the App:

1. Make changes to your code locally
2. Push to GitHub: `git push`
3. Vercel auto-deploys (usually within 1-2 minutes)
4. No changes needed in Framer - iframe automatically shows updated version

### Monitoring:

- Check Vercel dashboard for deployment status
- View analytics in Vercel to track usage
- Monitor errors in browser console

---

## Quick Start Commands

```bash
# Deploy to Vercel (first time)
npm install -g vercel
vercel login
vercel --prod

# Updates
git add .
git commit -m "Update feature"
git push

# Vercel auto-deploys from GitHub
```

---

## Summary

**For Full Functionality:** Use Vercel deployment + iframe embed  
**For Quick Demo:** Use standalone-embed.html (limited features)  
**Best Performance:** Full-page iframe with clipboard permissions  
**Mobile Support:** Built-in responsive design works in iframe  

Need help? Check the Vercel deployment logs and browser console for errors.
