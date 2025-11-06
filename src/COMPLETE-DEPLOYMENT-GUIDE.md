# Complete Deployment Guide - From Zero to Live on Framer

## 🎯 Goal

Get your Integration Coach app live on your Framer website in about 20 minutes.

## 📚 Documentation Overview

You have several guides. Here's which one to use:

| Guide | Use When | Time |
|-------|----------|------|
| **This Guide** | Follow step-by-step for complete deployment | 20 min |
| `GITHUB-BEGINNER-GUIDE.md` | Need detailed Git/GitHub help | Reference |
| `GITHUB-QUICK-COMMANDS.md` | Just want the commands | 2 min |
| `VERCEL-DEPLOYMENT.md` | Need Vercel deployment details | Reference |
| `FRAMER-QUICKSTART.md` | Ready to embed in Framer | 5 min |
| `EMBED-README.md` | Overview of Framer options | Reference |

---

## 🚀 Complete Workflow (Start to Finish)

### Phase 1: Push to GitHub (10 minutes)

### Phase 2: Deploy to Vercel (5 minutes)

### Phase 3: Embed in Framer (5 minutes)

Let's go! 👇

---

## Phase 1: Push Code to GitHub

### Prerequisites:
- [ ] Git installed on your computer
- [ ] GitHub account created
- [ ] Terminal/Command Prompt access

### Step 1: Install Git (if needed)

**Windows:** Download from https://git-scm.com/download/win  
**Mac:** Run `git --version` in Terminal (installs automatically)  
**Linux:** Run `sudo apt-get install git`

**Verify:**
```bash
git --version
# Should show: git version 2.x.x
```

### Step 2: Configure Git (first time only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the same email as your GitHub account!

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name:** `integration-coach`
3. **Visibility:** Public or Private (your choice)
4. **⚠️ IMPORTANT:** Don't check any boxes (no README, no .gitignore, no license)
5. Click **"Create repository"**
6. **Copy the repository URL** shown on the next page
   - Looks like: `https://github.com/YOUR-USERNAME/integration-coach.git`

### Step 4: Open Terminal in Your Project

**Windows:**
- Open File Explorer
- Navigate to your Integration Coach project folder
- Click in the address bar, type `cmd`, press Enter

**Mac:**
- Open Terminal
- Type `cd ` (with space)
- Drag your project folder into Terminal
- Press Enter

**Linux:**
- Open Terminal
- Run: `cd /path/to/integration-coach`

**Verify you're in the right place:**
```bash
ls  # Mac/Linux
dir # Windows
# You should see: package.json, src, components, etc.
```

### Step 5: Initialize Git and Push

Copy and paste these commands **one at a time:**

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit - Integration Coach app"

# 4. Rename branch to main
git branch -M main

# 5. Connect to GitHub (REPLACE WITH YOUR URL!)
git remote add origin https://github.com/YOUR-USERNAME/integration-coach.git

# 6. Push to GitHub
git push -u origin main
```

### Step 6: Authenticate

When prompted:
- **Username:** Your GitHub username
- **Password:** Your Personal Access Token (NOT your password!)

**Don't have a token? Create one:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "Integration Coach"
4. Check "repo" scope
5. Click "Generate token"
6. **Copy the token** (starts with `ghp_`)
7. Use this as your password

### Step 7: Verify

1. Go to https://github.com/YOUR-USERNAME/integration-coach
2. You should see all your files!

✅ **Phase 1 Complete!** Code is on GitHub.

---

## Phase 2: Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest!)
4. Authorize Vercel to access GitHub
5. Choose **Hobby (Free)** plan

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find your `integration-coach` repository in the list
3. Click **"Import"**

### Step 3: Configure Project (Auto-Detected!)

Vercel automatically detects:
- **Framework Preset:** Vite ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist` ✅

**Don't change anything!** Just click **"Deploy"**

### Step 4: Wait for Deployment

- First deployment takes 2-3 minutes
- You'll see a progress screen
- Wait for "Congratulations!" message

### Step 5: Get Your URL

After deployment:
1. You'll see your app preview
2. **Copy the production URL**
   - Format: `https://integration-coach.vercel.app`
   - Or: `https://integration-coach-username.vercel.app`

### Step 6: Test Your App

1. Click "Visit" or open the URL in a new tab
2. Test the app:
   - Does it load?
   - Can you navigate the wizard?
   - Do app logos appear?
3. If everything works, continue!

✅ **Phase 2 Complete!** App is live on Vercel.

---

## Phase 3: Embed in Framer

### Step 1: Prepare Iframe Code

Take your Vercel URL and create this iframe code:

```html
<iframe 
  src="https://YOUR-APP.vercel.app" 
  style="width: 100%; height: 100vh; border: none; display: block; margin: 0;"
  title="Integration Assessment Tool"
  allow="clipboard-read; clipboard-write"
></iframe>
```

**Replace `YOUR-APP.vercel.app` with your actual Vercel URL!**

**Example:**
```html
<iframe 
  src="https://integration-coach-abc123.vercel.app" 
  style="width: 100%; height: 100vh; border: none; display: block; margin: 0;"
  title="Integration Assessment Tool"
  allow="clipboard-read; clipboard-write"
></iframe>
```

### Step 2: Create Page in Framer

1. Open your Framer project
2. Create a new page
3. Name it: "Integration Assessment" (or whatever you prefer)

### Step 3: Add Embed Component

1. Delete any default content on the page
2. Click **Insert** (or press **I**)
3. Search for **"Embed"** or **"Code"**
4. Click to add Embed component
5. Paste your iframe code
6. Resize to fill the page:
   - Width: **100%** (or stretch to edges)
   - Height: **100vh** (full viewport height)

### Step 4: Configure Page Settings

**For best results:**
- Set page padding to **0** on all sides
- Remove header/footer if you want full-screen experience
- Set background to white or match your design

### Step 5: Preview and Test

1. Click **Preview** in Framer
2. Test the app in preview mode:
   - Does it load?
   - Can you interact with it?
   - Does it work on mobile preview?

### Step 6: Publish!

1. Click **Publish** in Framer
2. Wait for deployment
3. Visit your live Framer site
4. Test the integration assessment page

✅ **Phase 3 Complete!** App is live on your Framer website!

---

## 🎉 Success Checklist

You're done when all of these are checked:

- [ ] Code is on GitHub
- [ ] Vercel deployment is successful
- [ ] Vercel URL loads the app correctly
- [ ] Framer page created
- [ ] Iframe embedded in Framer
- [ ] Framer preview works
- [ ] Framer site published
- [ ] Live site tested (desktop)
- [ ] Live site tested (mobile)
- [ ] GPT workflow tested (clipboard works)
- [ ] File downloads work
- [ ] All wizard steps accessible

---

## 🔄 Future Updates Workflow

When you want to update the app:

### 1. Make Changes Locally
Edit your code as needed.

### 2. Push to GitHub
```bash
git add .
git commit -m "Describe your changes"
git push
```

### 3. Vercel Auto-Deploys
- Vercel detects the GitHub push
- Automatically rebuilds and deploys
- Takes 1-2 minutes
- No action needed!

### 4. Framer Shows New Version
- The iframe automatically shows the updated version
- No changes needed in Framer
- Just wait for Vercel deployment to complete

**That's it!** Update workflow is 3 commands.

---

## 📊 What You've Built

```
Developer (You)
    │
    ├─── Pushes code to ──→ GitHub
    │                         │
    │                         ↓
    │                      Vercel (auto-detects)
    │                         │
    │                         ↓
    │                   Live App URL
    │                   (https://your-app.vercel.app)
    │                         │
    │                         ↓
    └─── Embeds via ─────→ Framer Website
                            (iframe)
                              │
                              ↓
                        Your Live Website
                   (https://yoursite.com/integration-assessment)
```

---

## 🐛 Troubleshooting Common Issues

### Issue: Git push fails with authentication error

**Solution:**
1. Create Personal Access Token at https://github.com/settings/tokens
2. Use token as password (not your GitHub password)
3. Check "repo" scope when creating token

### Issue: Vercel build fails

**Solution:**
1. Check Vercel deployment logs
2. Look for error messages (usually dependency issues)
3. Ensure `package.json` has all dependencies
4. Try deploying again

### Issue: App doesn't load in Framer iframe

**Solution:**
1. Test Vercel URL directly in browser (outside iframe)
2. If it works, check iframe code syntax
3. Verify `src` URL is correct
4. Check browser console for errors (F12)

### Issue: Clipboard doesn't work in iframe

**Solution:**
Add this attribute to iframe:
```html
allow="clipboard-read; clipboard-write"
```

### Issue: Height is wrong in Framer

**Solution:**
- Set explicit height: `height: 100vh` or `height: 1200px`
- Avoid `height: auto` (doesn't work with iframes)
- Adjust Framer component size settings

---

## 💡 Pro Tips

### Tip 1: Test Locally First
Before pushing to GitHub:
```bash
npm run dev  # Test locally
npm run build  # Verify build works
```

### Tip 2: Use Descriptive Commit Messages
```bash
# Good ✅
git commit -m "Add email validation and improve error messages"

# Bad ❌
git commit -m "changes"
```

### Tip 3: Enable Vercel Analytics
1. Go to Vercel dashboard
2. Your project → Analytics
3. Enable (free tier available)
4. Track usage and performance

### Tip 4: Set Up Custom Domain (Optional)
1. Vercel → Project → Settings → Domains
2. Add: `integrations.yoursite.com`
3. Follow DNS instructions
4. Update Framer iframe src URL

### Tip 5: Monitor Deployments
- Vercel dashboard shows all deployments
- Check logs if something fails
- Preview deployments for testing

---

## 📱 Mobile Optimization

The app is already mobile-responsive, but verify:

1. **Test in Framer preview** (mobile mode)
2. **Test on real devices** (phone, tablet)
3. **Check touch interactions** (wizard navigation)
4. **Verify readability** (text size, spacing)

If you need adjustments, edit the app code and push updates!

---

## 🔒 Security Notes

- ✅ Vercel provides automatic HTTPS
- ✅ CORS headers configured in `vercel.json`
- ✅ Iframe permissions limited to clipboard only
- ✅ No sensitive data exposed (all frontend)

---

## 💰 Cost Breakdown

- **GitHub:** FREE ✅
- **Vercel:** FREE ✅ (generous free tier)
- **Framer:** Your existing plan
- **Total additional cost:** $0/month

---

## 📞 Getting Help

### If stuck on GitHub:
- Read: `GITHUB-BEGINNER-GUIDE.md` (detailed)
- Quick reference: `GITHUB-QUICK-COMMANDS.md`
- Alternative: Use GitHub Desktop (no command line)

### If stuck on Vercel:
- Read: `VERCEL-DEPLOYMENT.md`
- Check Vercel deployment logs
- Visit Vercel documentation

### If stuck on Framer:
- Read: `FRAMER-QUICKSTART.md`
- Read: `FRAMER-EMBED-GUIDE.md`
- Check Framer support docs

### General Debugging:
1. Check browser console (F12)
2. Review Vercel logs
3. Test URL directly (not in iframe)
4. Verify all credentials/tokens

---

## ✅ Quick Command Reference

### GitHub (First Time):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### GitHub (Updates):
```bash
git add .
git commit -m "Your message"
git push
```

### Vercel:
- No commands! Everything is automatic via GitHub integration.

### Framer:
- Just update iframe src URL if you change domains.

---

## 🎓 What You've Learned

By completing this guide, you now know how to:

- ✅ Use Git and GitHub for version control
- ✅ Deploy React apps to Vercel
- ✅ Embed web apps in Framer
- ✅ Set up automatic deployments
- ✅ Configure iframe permissions
- ✅ Update and maintain live apps

These skills apply to any web project! 🎉

---

## 🚀 You're Live!

Your Integration Assessment Tool is now:
- ✅ Hosted professionally on Vercel
- ✅ Embedded seamlessly in Framer
- ✅ Accessible to your prospects
- ✅ Automatically updated when you push code
- ✅ Mobile-friendly
- ✅ Free to host

**Share your live URL with your team and start generating leads!**

---

## Next Steps (Optional Enhancements)

1. **Custom Domain:** `integrations.yourcompany.com`
2. **Analytics:** Track usage in Vercel
3. **Customization:** Update branding, colors, messaging
4. **A/B Testing:** Create variants and test
5. **SEO:** Add meta tags in Framer for your page

---

**Congratulations!** 🎉 Your integration assessment tool is live!

Need to make changes? Just edit, commit, and push - Vercel handles the rest!
