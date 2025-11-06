# Push Your Code to GitHub - Complete Beginner Guide

## What You'll Need

- ✅ Your Integration Coach app files (already have this!)
- ✅ A GitHub account (free - we'll create one)
- ✅ Git installed on your computer (we'll install this)
- ✅ 10-15 minutes

---

## Step 1: Create a GitHub Account (Skip if you have one)

### 1.1 Go to GitHub

1. Open your web browser
2. Go to: **https://github.com**
3. Click the **"Sign up"** button (top right corner)

### 1.2 Sign Up

1. Enter your email address
2. Create a password (make it strong!)
3. Choose a username (this will be public - e.g., "yourname" or "yourcompany")
4. Complete the verification puzzle
5. Click **"Create account"**
6. Check your email and verify your account

### 1.3 Choose Free Plan

1. Select **"Free"** plan (it's perfect for this!)
2. Click **"Continue"**
3. You can skip the questionnaire or fill it out
4. Click **"Complete setup"**

✅ **Done!** You now have a GitHub account.

---

## Step 2: Install Git on Your Computer

### For Windows:

1. **Download Git:**
   - Go to: https://git-scm.com/download/win
   - Download should start automatically
   - File name will be like: `Git-2.43.0-64-bit.exe`

2. **Install Git:**
   - Double-click the downloaded file
   - Click "Next" through all the screens (default settings are fine)
   - Wait for installation to complete
   - Click "Finish"

3. **Verify Installation:**
   - Press `Windows Key + R`
   - Type `cmd` and press Enter
   - In the black window, type: `git --version`
   - You should see something like: `git version 2.43.0`

### For Mac:

**Option A: Install Xcode Command Line Tools (Easiest)**

1. Open **Terminal** (Applications → Utilities → Terminal)
2. Type: `git --version` and press Enter
3. If Git is not installed, a popup will appear
4. Click **"Install"** in the popup
5. Wait for installation (may take a few minutes)
6. Type `git --version` again to verify

**Option B: Install via Homebrew**

1. If you have Homebrew installed:
   ```bash
   brew install git
   ```
2. Verify: `git --version`

### For Linux:

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# Verify
git --version
```

✅ **Done!** Git is now installed.

---

## Step 3: Configure Git (First Time Only)

Open your terminal/command prompt and run these commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Example:**
```bash
git config --global user.name "John Smith"
git config --global user.email "john@company.com"
```

**Important:** Use the same email you used for GitHub!

✅ **Done!** Git knows who you are.

---

## Step 4: Create a Repository on GitHub

### 4.1 Create New Repository

1. Go to: **https://github.com**
2. Log in to your account
3. Click the **"+"** icon (top right corner)
4. Click **"New repository"**

### 4.2 Fill in Repository Details

1. **Repository name:** `integration-coach` (or any name you like)
   - Use lowercase letters, numbers, and hyphens only
   - No spaces!

2. **Description:** (optional) 
   - Example: "Integration assessment tool for ecommerce companies"

3. **Public or Private:**
   - Choose **"Public"** if you want it visible to everyone
   - Choose **"Private"** if you want it private (still free!)

4. **Initialize repository:**
   - ⚠️ **DO NOT** check "Add a README file"
   - ⚠️ **DO NOT** add .gitignore
   - ⚠️ **DO NOT** choose a license
   - (Leave all checkboxes unchecked!)

5. Click **"Create repository"**

### 4.3 Copy Your Repository URL

After creating, you'll see a page with instructions. Look for a section that says:

**"…or push an existing repository from the command line"**

You'll see a URL like:
```
https://github.com/YOUR-USERNAME/integration-coach.git
```

**Copy this URL!** You'll need it in a moment.

✅ **Done!** Your GitHub repository is ready.

---

## Step 5: Open Terminal in Your Project Folder

### Windows:

**Method 1: Using File Explorer**
1. Open File Explorer
2. Navigate to your Integration Coach project folder
3. Click in the address bar (top of window)
4. Type `cmd` and press Enter
5. A Command Prompt window opens in your project folder

**Method 2: Using Command Prompt**
1. Press `Windows Key + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```bash
   cd C:\path\to\your\integration-coach
   ```

### Mac:

**Method 1: Using Terminal**
1. Open Terminal (Applications → Utilities → Terminal)
2. Type `cd ` (with a space after cd)
3. Drag your project folder into the Terminal window
4. Press Enter

**Method 2: Using Finder**
1. Open Finder
2. Navigate to your project folder
3. Right-click the folder
4. Hold the **Option** key
5. Click "Copy [folder name] as Pathname"
6. Open Terminal
7. Type `cd ` and paste the path
8. Press Enter

**To verify you're in the right folder:**
```bash
ls
# You should see your project files (package.json, src, etc.)
```

### Linux:

```bash
cd /path/to/your/integration-coach
ls  # Verify you see your project files
```

✅ **Done!** Terminal is open in your project folder.

---

## Step 6: Initialize Git and Add Your Files

### 6.1 Initialize Git Repository

In your terminal, type:

```bash
git init
```

**You should see:**
```
Initialized empty Git repository in /your/project/path/.git/
```

### 6.2 Add All Files

```bash
git add .
```

**Note:** That's `git add` followed by a dot (period).

This command tells Git to track all your files.

**You won't see any output** - that's normal!

### 6.3 Check What Will Be Committed (Optional)

```bash
git status
```

You should see a list of files in green that says "Changes to be committed"

### 6.4 Commit Your Files

```bash
git commit -m "Initial commit - Integration Coach app"
```

**You should see:**
```
[main xxxxxxx] Initial commit - Integration Coach app
 XX files changed, XXXX insertions(+)
 create mode 100644 package.json
 create mode 100644 src/App.tsx
 ... (more files)
```

✅ **Done!** Files are committed locally.

---

## Step 7: Connect to GitHub and Push

### 7.1 Rename Branch to "main" (if needed)

```bash
git branch -M main
```

This ensures your branch is called "main" (GitHub's default).

### 7.2 Add GitHub Repository as Remote

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

**Replace with your actual URL from Step 4.3!**

**Example:**
```bash
git remote add origin https://github.com/johnsmith/integration-coach.git
```

### 7.3 Push to GitHub

```bash
git push -u origin main
```

**What happens next:**

1. **First Time:** GitHub will ask for your credentials
   
   **For HTTPS (recommended for beginners):**
   - **Username:** Your GitHub username
   - **Password:** ⚠️ NOT your GitHub password!
   - You need a **Personal Access Token** (see below)

2. **Files upload to GitHub**
   - You'll see progress messages
   - Should complete in 10-30 seconds

### 7.4 Create Personal Access Token (If Asked for Password)

GitHub no longer accepts passwords. You need a token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** "Integration Coach deployment"
4. **Expiration:** Choose "90 days" or "No expiration"
5. **Select scopes:** Check **"repo"** (this checks all repo boxes)
6. Scroll down and click **"Generate token"**
7. **Copy the token!** (You won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxx`
8. Use this token as your password when Git asks

**Paste the token when prompted for password**

### 7.5 Push Again

```bash
git push -u origin main
```

**Success looks like:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), X.XX MiB | X.XX MiB/s, done.
Total XX (delta X), reused X (delta X)
To https://github.com/YOUR-USERNAME/YOUR-REPO.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Done!** Your code is on GitHub!

---

## Step 8: Verify on GitHub

1. Go to: **https://github.com/YOUR-USERNAME/YOUR-REPO-NAME**
2. You should see all your files!
3. Click around to explore

**You should see:**
- `package.json`
- `src/` folder
- `components/` folder
- `README.md`
- All your other files

🎉 **Success!** Your code is now on GitHub!

---

## Common Issues and Solutions

### Issue: "git: command not found"

**Solution:** Git is not installed or not in PATH
- Re-install Git (Step 2)
- Restart your terminal after installation

### Issue: "Permission denied"

**Solution:** 
- Make sure you're using your Personal Access Token, not your password
- Verify your GitHub username is correct

### Issue: "fatal: not a git repository"

**Solution:** You're not in the right folder
- Navigate to your project folder (Step 5)
- Run `git init` again

### Issue: "failed to push some refs"

**Solution:** Repository might not be empty
1. If your GitHub repo has files, pull first:
   ```bash
   git pull origin main --allow-unrelated-histories
   ```
2. Then push again:
   ```bash
   git push -u origin main
   ```

### Issue: Authentication keeps failing

**Solution:** Use SSH instead of HTTPS (Advanced)

Or create a new Personal Access Token and try again.

---

## Quick Reference: Future Updates

After your initial push, updating is easier:

```bash
# 1. Make changes to your code
# ... edit files ...

# 2. Add changed files
git add .

# 3. Commit with a message
git commit -m "Describe what you changed"

# 4. Push to GitHub
git push

# Done! Changes are on GitHub
```

---

## Visual Command Summary

```bash
# First time only:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Future updates:
git add .
git commit -m "Your message"
git push
```

---

## What to Do Next

Now that your code is on GitHub:

1. ✅ **Deploy to Vercel** - Follow `VERCEL-DEPLOYMENT.md`
2. ✅ **Get your app URL**
3. ✅ **Embed in Framer** - Follow `FRAMER-QUICKSTART.md`

---

## Tips for Success

### Good Commit Messages:
- ✅ "Add email validation to contact form"
- ✅ "Fix issue with logo display"
- ✅ "Update GPT prompt instructions"
- ❌ "changes"
- ❌ "fix"
- ❌ "update"

### Commit Often:
- After each feature
- After fixing a bug
- Before trying something risky

### Check Status:
```bash
git status  # See what changed
git log     # See commit history
```

---

## Helpful Commands

```bash
# See what changed
git status

# See commit history
git log

# Undo changes to a file (before commit)
git checkout -- filename.txt

# See remote URL
git remote -v

# Update from GitHub
git pull
```

---

## Next Steps

1. ✅ Code is on GitHub
2. → Deploy to Vercel (next!)
3. → Embed in Framer
4. → Launch! 🚀

**Continue with:** `VERCEL-DEPLOYMENT.md`

---

## Need Help?

### Can't get it working?

**Alternative Method: GitHub Desktop (No Command Line!)**

1. Download GitHub Desktop: https://desktop.github.com
2. Install and log in
3. Click "Add" → "Add existing repository"
4. Select your project folder
5. Click "Publish repository"
6. Done!

This is a visual way to use Git without the command line!

---

**Questions?** Check the Common Issues section above or try GitHub Desktop as an alternative!

You've got this! 💪
