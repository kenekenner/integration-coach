# Celigo Assessment Proxy

This is a standalone Vercel serverless function that acts as a CORS proxy between your frontend and Google Apps Script.

## Deployment Instructions

### Option 1: Vercel CLI (Fastest)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to this directory:
   ```bash
   cd VERCEL-STANDALONE
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard (Easiest)

1. Download this entire `VERCEL-STANDALONE` folder to your computer
2. Go to https://vercel.com/new
3. Click "Browse" or drag the folder
4. Upload the `VERCEL-STANDALONE` folder
5. Click "Deploy"

### Option 3: GitHub Integration

1. Create a new GitHub repository
2. Upload these files to the repository
3. Go to https://vercel.com/new
4. Import the GitHub repository
5. Deploy

## After Deployment

Your proxy will be available at:
```
https://your-project-name.vercel.app/api/submit
```

Test it by visiting:
```
https://your-project-name.vercel.app/api/submit
```

You should see:
```json
{
  "status": "ok",
  "message": "Celigo Assessment Proxy is running",
  "endpoint": "/api/submit",
  "methods": ["POST"]
}
```

## Update Your Frontend

Update the `API_URL` in your `ReviewStep.tsx` file to:
```javascript
const API_URL = "https://your-project-name.vercel.app/api/submit";
```
