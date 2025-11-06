# Embedding in Framer - Complete Package

## 📦 What's Included

I've created a complete package for embedding your Integration Coach app in your Framer website.

## 🚀 Quick Start (Choose One)

### Option 1: Full App (Recommended) ⭐

**Steps:**
1. Deploy to Vercel (free, 3 minutes)
2. Get your URL: `https://your-app.vercel.app`
3. Embed in Framer with this iframe:

```html
<iframe 
  src="https://your-app.vercel.app" 
  style="width: 100%; height: 100vh; border: none;"
  allow="clipboard-read; clipboard-write"
></iframe>
```

**Result:** Full-featured app with all capabilities!

### Option 2: Placeholder Page

Use `standalone-embed.html` for a simple placeholder (limited features).

## 📚 Documentation Files

| File | Purpose | Start Here? |
|------|---------|-------------|
| **FRAMER-SUMMARY.md** | Overview of everything | ✅ YES - Read first |
| **FRAMER-QUICKSTART.md** | 5-minute deployment guide | ⭐ FOLLOW THIS |
| **FRAMER-EMBED-GUIDE.md** | Complete embedding instructions | Reference |
| **VERCEL-DEPLOYMENT.md** | Detailed Vercel setup | Reference |
| **standalone-embed.html** | Simple HTML version | Testing only |
| **vercel.json** | Vercel configuration | Auto-used |

## 🎯 Recommended Reading Order

1. **FRAMER-SUMMARY.md** (2 min) - Understand the approach
2. **FRAMER-QUICKSTART.md** (5 min) - Deploy and embed
3. Done! (Reference others as needed)

## ✨ What You Get

### With Vercel Deployment (Recommended):

✅ Full 8-step assessment wizard  
✅ Real app logos from API  
✅ Integration constellation view  
✅ AI recommendations workflow  
✅ PDF/HTML export  
✅ Dev mode for testing  
✅ Scenario upload  
✅ Professional hosting  
✅ Automatic updates  
✅ Mobile responsive  
✅ Free hosting (Vercel free tier)  

### With Standalone HTML:

⚠️ Basic placeholder page  
⚠️ Limited functionality  
⚠️ Instructions to deploy full version  

## 🔧 Technical Details

### Architecture:
```
Framer Website
  ├── Your normal pages
  └── Integration Assessment page
       └── iframe embedding:
            https://your-app.vercel.app
```

### Requirements:
- Vercel account (free)
- GitHub repository
- Framer website

### Time to Deploy:
- First deployment: 5 minutes
- Updates: Automatic (<2 minutes)

## 📋 Deployment Checklist

### Setup (One Time):
- [ ] Push code to GitHub
- [ ] Create Vercel account
- [ ] Import GitHub repo to Vercel
- [ ] Deploy (automatic)
- [ ] Copy production URL

### Framer Integration:
- [ ] Create new page in Framer
- [ ] Add Embed component
- [ ] Paste iframe code
- [ ] Set dimensions (100% width, 100vh height)
- [ ] Add clipboard permissions
- [ ] Publish Framer site

### Testing:
- [ ] Test Vercel URL directly
- [ ] Test in Framer preview
- [ ] Test all wizard steps
- [ ] Test GPT workflow
- [ ] Test on mobile
- [ ] Test file downloads

## 🎨 Customization

### Branding:
The app inherits your design system. To customize further:

1. Edit app components (in `/src`)
2. Push to GitHub
3. Vercel auto-deploys
4. Iframe shows updated version

### Domain:
Use a custom subdomain:
- `integrations.yoursite.com`
- Configure in Vercel → Domains
- Update iframe src URL

## 🐛 Troubleshooting

### Issue: App doesn't load in iframe
**Fix:** Check iframe src URL is correct and accessible

### Issue: Clipboard doesn't work
**Fix:** Add `allow="clipboard-read; clipboard-write"` to iframe

### Issue: Height is wrong
**Fix:** Set explicit height: `height: 100vh` or `height: 1200px`

### Issue: Build fails on Vercel
**Fix:** Check deployment logs in Vercel dashboard

## 📊 Performance

- **Load time:** 2-3 seconds (initial)
- **Navigation:** Instant (single-page app)
- **Hosting:** Global CDN via Vercel
- **Bandwidth:** Free tier sufficient

## 🔄 Update Workflow

```bash
# Make changes locally
# ... edit files ...

# Commit and push
git add .
git commit -m "Your changes"
git push

# Vercel auto-deploys
# Framer iframe shows new version automatically
# No manual action required!
```

## 💰 Cost

- **Vercel:** FREE (generous free tier)
- **Framer:** Your existing plan
- **Total additional cost:** $0

## 📞 Support

If you need help:

1. Check browser console (F12) for errors
2. Review Vercel deployment logs
3. Verify iframe configuration
4. Test Vercel URL directly (outside iframe)
5. Check the troubleshooting sections in guides

## 🎓 Learning Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Framer Embed Guide](https://www.framer.com/developers/guides/custom-code/)
- [iframe Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

## ✅ Success Criteria

Your integration is successful when:

1. ✅ App loads in Framer page
2. ✅ All wizard steps accessible
3. ✅ GPT workflow functions (copy/upload)
4. ✅ File downloads work
5. ✅ Mobile responsive
6. ✅ No console errors
7. ✅ Fast load times

## 🎉 You're Ready!

Everything you need is in this package. Follow **FRAMER-QUICKSTART.md** to get started!

---

**Questions?** All guides include troubleshooting sections and common issues.

**Updates?** Just push to GitHub - Vercel handles the rest!

**Custom needs?** The app is fully customizable - edit and redeploy!

---

### Quick Links

- 📖 [Start Here: FRAMER-SUMMARY.md](./FRAMER-SUMMARY.md)
- 🚀 [Quick Start: FRAMER-QUICKSTART.md](./FRAMER-QUICKSTART.md)
- 📚 [Full Guide: FRAMER-EMBED-GUIDE.md](./FRAMER-EMBED-GUIDE.md)
- ⚙️ [Deployment: VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md)

---

Happy deploying! 🎨✨
