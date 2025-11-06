# GitHub Quick Command Reference

## 🚀 First Time Setup (Copy & Paste)

### 1. Configure Git (Once Ever)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. Initialize and Push (First Time Only)

```bash
# Navigate to your project folder first!
cd /path/to/your/integration-coach

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Integration Coach app"

# Rename branch to main
git branch -M main

# Add GitHub repository (replace with YOUR URL!)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git push -u origin main
```

**Replace:** `YOUR-USERNAME` and `YOUR-REPO` with your actual GitHub username and repository name!

---

## 🔄 Future Updates (After First Push)

```bash
# 1. Add all changes
git add .

# 2. Commit with a message
git commit -m "Describe what you changed"

# 3. Push to GitHub
git push
```

That's it! These 3 commands are all you need for updates.

---

## 📝 Common Scenarios

### Scenario: I changed some files and want to upload them

```bash
git add .
git commit -m "Updated GPT prompt and fixed styling"
git push
```

### Scenario: I want to see what changed

```bash
git status
```

### Scenario: I want to undo changes I haven't committed yet

```bash
git checkout -- filename.txt
```

### Scenario: I want to see my commit history

```bash
git log
```

### Scenario: I want to update my local code with GitHub changes

```bash
git pull
```

---

## ⚠️ Troubleshooting Quick Fixes

### "git: command not found"
**Fix:** Install Git from https://git-scm.com

### "Permission denied" or "Authentication failed"
**Fix:** Use Personal Access Token instead of password
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Check "repo" scope
4. Copy token
5. Use token as password when pushing

### "fatal: not a git repository"
**Fix:** Run `git init` in your project folder

### "fatal: remote origin already exists"
**Fix:** Run `git remote remove origin` then add it again

### "failed to push some refs"
**Fix:** Pull first, then push
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 🎯 The Only 6 Commands You Need

```bash
git status       # See what changed
git add .        # Stage all changes
git commit -m "" # Save changes with message
git push         # Upload to GitHub
git pull         # Download from GitHub
git log          # See history
```

---

## 📍 Where Am I? Quick Check

```bash
# Check if you're in the right folder
pwd  # Mac/Linux
cd   # Windows

# You should see your project path like:
# /Users/you/projects/integration-coach

# List files to verify
ls    # Mac/Linux
dir   # Windows

# You should see: package.json, src, components, etc.
```

---

## 🔗 Complete Workflow (First Time)

1. **Create GitHub repo** (on GitHub website)
2. **Open terminal** in your project folder
3. **Run these commands:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

4. **Enter credentials** when prompted
   - Username: Your GitHub username
   - Password: Your Personal Access Token (NOT your password!)

5. **Done!** ✅ Code is on GitHub

---

## 🔄 Complete Workflow (Updates)

1. **Make changes** to your code
2. **Run these commands:**

```bash
git add .
git commit -m "Your message here"
git push
```

3. **Done!** ✅ Changes are on GitHub

---

## 🆘 Emergency Reset

If everything is broken and you want to start fresh:

```bash
# Remove Git from project (doesn't delete your files!)
rm -rf .git  # Mac/Linux
rmdir /s .git  # Windows

# Start over with git init
git init
git add .
git commit -m "Fresh start"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main -f
```

⚠️ Use `-f` (force) only if you're sure you want to overwrite GitHub!

---

## 💡 Pro Tips

### Tip 1: Commit Often
Don't wait until everything is perfect. Commit after each small change.

### Tip 2: Write Good Messages
```bash
# Good ✅
git commit -m "Add email validation to contact form"

# Bad ❌
git commit -m "updates"
```

### Tip 3: Check Before You Push
```bash
git status  # See what will be committed
```

### Tip 4: Save Your Token
Store your Personal Access Token securely (password manager) so you don't lose it!

---

## 🎬 Copy-Paste Checklist

### First Time:
- [ ] Install Git
- [ ] Configure Git with name and email
- [ ] Create GitHub repository
- [ ] Navigate to project folder in terminal
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit"`
- [ ] Run: `git branch -M main`
- [ ] Run: `git remote add origin [YOUR-URL]`
- [ ] Run: `git push -u origin main`
- [ ] Enter token when prompted
- [ ] Verify on GitHub website

### Every Update:
- [ ] Make changes to code
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Your message"`
- [ ] Run: `git push`
- [ ] Verify on GitHub website

---

## 🌐 URLs You Need

- **Install Git:** https://git-scm.com
- **GitHub:** https://github.com
- **Create Token:** https://github.com/settings/tokens
- **Your Repo:** https://github.com/YOUR-USERNAME/YOUR-REPO

---

## 📱 Alternative: GitHub Desktop (No Terminal!)

Don't want to use command line? Try GitHub Desktop:

1. Download: https://desktop.github.com
2. Install and sign in
3. Add your repository
4. Click "Publish" to push to GitHub
5. Click "Push origin" for updates

Visual, easy, no commands needed!

---

**Ready?** Open your terminal and start with the "First Time Setup" commands above! 🚀
