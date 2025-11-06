# 🚀 Deployment Checklist: Manual GPT Workflow

## ✅ Pre-Deployment (5 Minutes)

### 1. Create Custom GPT
- [ ] Go to https://chatgpt.com/create
- [ ] Name: "Celigo Integration Coach" (or your preference)
- [ ] Copy Custom GPT instructions from `/MANUAL-GPT-WORKFLOW.md` → "Step 1: Create Your Custom GPT"
- [ ] Save and copy the full URL (e.g., `https://chatgpt.com/g/g-abc123xyz`)

### 2. Update Code
- [ ] Open `/components/ManualGPTDialog.tsx`
- [ ] Find line ~17: `const CUSTOM_GPT_URL = ...`
- [ ] Replace `YOUR_CUSTOM_GPT_ID` with your actual Custom GPT URL
- [ ] Save file

### 3. Test Locally
- [ ] Run your dev server
- [ ] Complete a test assessment (use any dummy data)
- [ ] Click "See my recommendations" on Review step
- [ ] Verify modal opens with instructions
- [ ] Click "Copy Assessment + Prompt" - verify toast appears
- [ ] Click "Ready to Upload" (or wait for auto-advance)
- [ ] Upload `/example-recommendations.json`
- [ ] Verify recommendations display correctly
- [ ] Verify all sections render (summary, quick wins, recommendations, etc.)
- [ ] Click "Download" button - verify JSON downloads
- [ ] Click "Back to Assessment" - verify it returns to review

### 4. Test with Real GPT
- [ ] Complete a new test assessment
- [ ] Click "Copy Assessment + Prompt"
- [ ] Open your Custom GPT in a new tab
- [ ] Paste (Ctrl+V / Cmd+V) the clipboard content
- [ ] Wait for ChatGPT to respond
- [ ] Verify it returns JSON in a code block
- [ ] Click "Copy code" button in ChatGPT
- [ ] Paste into text editor and save as `test-recommendations.json`
- [ ] Upload to your webapp
- [ ] Verify recommendations display correctly

---

## 🧪 Testing Scenarios

### Scenario A: Happy Path ✅
- [ ] User completes assessment
- [ ] User clicks "See my recommendations"
- [ ] User copies assessment + prompt
- [ ] User pastes in Custom GPT
- [ ] User gets JSON response
- [ ] User uploads JSON
- [ ] **Expected:** Beautiful recommendations display

### Scenario B: Invalid File ❌
- [ ] User tries to upload a `.txt` file
- [ ] **Expected:** Error toast: "Invalid file type. Please upload a JSON file"

### Scenario C: Invalid JSON ❌
- [ ] Create a file `bad.json` with content: `{ "invalid": "structure" }`
- [ ] User tries to upload it
- [ ] **Expected:** Error toast: "Invalid JSON file. Please make sure you uploaded the recommendations file from ChatGPT"

### Scenario D: Drag and Drop 🎯
- [ ] Open upload dialog
- [ ] Drag `example-recommendations.json` over upload area
- [ ] Verify hover state activates (blue border, blue background)
- [ ] Drop file
- [ ] **Expected:** Recommendations display

### Scenario E: Navigation 🔄
- [ ] View recommendations
- [ ] Click "Back to Assessment"
- [ ] **Expected:** Returns to review step, recommendations hidden
- [ ] Click "See my recommendations" again
- [ ] Upload file again
- [ ] **Expected:** Works as expected

---

## 🎨 Visual Regression Testing

Check these visual elements:

### Modal Dialog
- [ ] Modal centers on screen
- [ ] Step numbers are blue circles with white text
- [ ] Buttons have correct styling (primary/outline)
- [ ] Info alert has blue background
- [ ] Upload area has dashed border
- [ ] Drag hover state is visible

### Recommendations Display
- [ ] Executive summary has blue gradient header
- [ ] Quick wins have yellow background
- [ ] Priority badges have correct colors:
  - High = Red background
  - Medium = Yellow background  
  - Low = Green background
- [ ] Integration opportunities display correctly
- [ ] Next steps are numbered
- [ ] CTA section has dark gradient
- [ ] Download button is visible in header

### Review Step
- [ ] "See my recommendations" button has Sparkles icon
- [ ] Button is in blue gradient section
- [ ] "What's Next?" section displays when no recommendations
- [ ] "Back to Assessment" appears when recommendations shown
- [ ] Assessment summary remains visible

---

## 📱 Browser Testing

Test in these browsers:

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Key features to verify:**
- Clipboard copy works
- File upload works
- Drag-and-drop works
- Modal scrolling works on mobile
- Buttons are tappable on mobile
- Text is readable on mobile

---

## 🔒 Security & Privacy Check

- [ ] No API keys or sensitive data in code
- [ ] Assessment data only goes to ChatGPT (user-initiated)
- [ ] No data stored on your servers
- [ ] File upload only accepts .json
- [ ] Uploaded JSON is validated before processing
- [ ] No XSS vulnerabilities in recommendations display

---

## 📊 Performance Check

- [ ] Modal opens instantly (<100ms)
- [ ] Copy to clipboard is instant
- [ ] File upload processes in <500ms
- [ ] Recommendations render in <200ms
- [ ] No console errors
- [ ] No memory leaks (check DevTools)

---

## 📝 Documentation Check

- [ ] `MANUAL-GPT-WORKFLOW.md` is accurate
- [ ] `QUICK-START-MANUAL-GPT.md` is accurate
- [ ] `IMPLEMENTATION-SUMMARY.md` is accurate
- [ ] `example-recommendations.json` loads correctly
- [ ] Custom GPT URL is documented for team

---

## 👥 Team Readiness

- [ ] Sales team trained on workflow
- [ ] Demo script prepared
- [ ] FAQ document ready
- [ ] Support team knows how to troubleshoot
- [ ] Custom GPT URL is accessible to team

---

## 🚀 Production Deployment

### Pre-Deploy
- [ ] All tests passing
- [ ] No console warnings (except the one about CUSTOM_GPT_URL if not set)
- [ ] Code committed to version control
- [ ] Team notified of deployment

### Deploy
- [ ] Build production bundle
- [ ] Deploy to production environment
- [ ] Verify production URL loads
- [ ] Smoke test: Complete one assessment end-to-end

### Post-Deploy
- [ ] Monitor error logs for 24 hours
- [ ] Check analytics for completion rates
- [ ] Collect initial user feedback
- [ ] Document any issues

---

## 📈 Success Metrics (Track These)

### Engagement
- [ ] % who click "See my recommendations"
- [ ] % who copy assessment + prompt
- [ ] % who upload recommendations file
- [ ] Average time to complete full flow

### Quality
- [ ] % of successful uploads (vs errors)
- [ ] % who download final report
- [ ] % who return to assessment after viewing recommendations

### Business
- [ ] Lead quality scores
- [ ] Conversion rate impact
- [ ] Sales team satisfaction
- [ ] Prospect feedback scores

---

## 🐛 Troubleshooting Guide

### If Modal Doesn't Open:
```javascript
// Check ReviewStep.tsx - verify handleOpenManualFlow is called
// Check ManualGPTDialog - verify open prop is passed correctly
```

### If Copy Doesn't Work:
```javascript
// Check browser permissions for clipboard access
// Check if HTTPS (clipboard API requires secure context)
// Fallback: Tell user to manually copy assessment from Download button
```

### If Upload Fails:
```javascript
// Check file extension validation
// Check JSON.parse doesn't throw
// Check JSON structure has required fields
// Log error to help user fix the issue
```

### If Recommendations Don't Display:
```javascript
// Check recommendations state is set
// Check RecommendationsDisplay receives correct props
// Check JSON structure matches expected schema
// Verify all required fields exist
```

---

## ✅ Final Checks Before Go-Live

- [ ] Custom GPT URL is updated and works
- [ ] Example file uploads successfully
- [ ] Real GPT test completed successfully
- [ ] All browsers tested
- [ ] Mobile experience verified
- [ ] Team trained and ready
- [ ] Documentation complete
- [ ] Support plan in place
- [ ] Rollback plan documented
- [ ] Success metrics defined

---

## 🎉 Ready to Ship?

If all boxes are checked above, you're ready to deploy!

**Remember:**
- Start with a soft launch (limited users)
- Monitor closely for first 48 hours
- Collect feedback aggressively
- Iterate based on real usage

**You've got this!** 🚀

---

## 📞 Post-Launch Support

### Week 1:
- [ ] Daily check of error logs
- [ ] Daily review of completion rates
- [ ] Collect team feedback
- [ ] Document common issues

### Week 2-4:
- [ ] Weekly metrics review
- [ ] Update Custom GPT instructions based on feedback
- [ ] Refine recommendations display if needed
- [ ] Optimize workflow based on user behavior

### Month 2+:
- [ ] Consider A/B testing variations
- [ ] Explore API migration
- [ ] Add advanced features
- [ ] Scale to more users

---

**Good luck with your launch!** 🎊

Need help? Refer back to:
- `/MANUAL-GPT-WORKFLOW.md` for technical details
- `/QUICK-START-MANUAL-GPT.md` for team guidance
- `/IMPLEMENTATION-SUMMARY.md` for overview

**Everything you need is documented!** 📚
