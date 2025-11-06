# 🧪 Quick Test Checklist

Use this checklist to verify everything is working before publishing.

## ✅ Pre-Flight Test (Do This Now)

### Step 0: Welcome Screen
- [ ] Celigo logo displays correctly
- [ ] "Get Started" button works
- [ ] Clean, professional appearance

### Step 1: Basic Information
- [ ] All fields are fillable
- [ ] Email validation works
- [ ] Required fields block "Next" when empty
- [ ] Company size dropdown works
- [ ] "Next" button advances to Step 2

### Step 2: ERP System
- [ ] "Yes/No" selection works
- [ ] If "Yes", ERP multi-select appears
- [ ] Common ERPs listed (NetSuite, SAP, etc.)
- [ ] Can select multiple ERPs
- [ ] "Next" button works

### Step 3: Technology Stack
- [ ] All 13+ categories display
- [ ] App search works within categories
- [ ] Real app logos load from Celigo CDN
- [ ] Can add custom apps with text input
- [ ] Selected apps show in chips/badges
- [ ] **VISUAL CHECK:** Background constellation shows dots for selected apps
- [ ] Can remove apps by clicking X
- [ ] "Next" button works

### Step 4: App Context
- [ ] Shows list of all selected apps
- [ ] Can add context notes for each app
- [ ] **VISUAL CHECK:** Dots in background get larger glow when context added
- [ ] Can skip this step (context is optional)
- [ ] "Back" button works
- [ ] "Next" button works

### Step 5: Integration Details
- [ ] Shows all selected apps in two dropdowns
- [ ] Can select "From" and "To" apps
- [ ] Integration type selector works (Native/Prebuilt/Custom/Manual)
- [ ] Can add multiple integrations
- [ ] Integration list displays added connections
- [ ] **VISUAL CHECK:** Animated lines connect integrated apps in background
- [ ] Can remove integrations
- [ ] Can skip this step
- [ ] "Next" button works

### Step 6: Pain Points & Goals
- [ ] Pain points multi-select works
- [ ] Goals multi-select works
- [ ] Additional context textarea works
- [ ] Can deselect items
- [ ] "Next" button works

### Step 7: Review & Submit
- [ ] Contact information displays correctly
- [ ] ERP systems show (if applicable)
- [ ] Tech stack summary shows app count
- [ ] All selected apps listed by category
- [ ] Integration count shows (if applicable)
- [ ] Pain points & goals summary displays
- [ ] "Get AI-Powered Recommendations" button visible
- [ ] "Download Assessment" button works (downloads JSON file)
- [ ] "Back" button works

### Step 7.1: Submit Test
- [ ] Click "See my recommendations" button
- [ ] Button shows "Analyzing..." loading state
- [ ] **Open Browser Console (F12)** - should see:
  - `Sending to API: https://script.google.com/...`
  - `Response status: 200`
  - `Test Mode?: true`
  - `Exported JSON (preview): {object with all data}`
- [ ] Success toast appears
- [ ] Toast says "✅ Test successful! Your wizard works perfectly"
- [ ] Toast description says "TEST MODE is enabled"
- [ ] Console shows full assessment JSON

---

## 🎨 Visual Verification

### Background Constellation System

**After Step 3 (Tech Stack):**
- [ ] Dots appear in background (one per selected app)
- [ ] Dots are positioned in a horizontal constellation pattern
- [ ] Dots have subtle glow effect
- [ ] ERP systems (if any) appear larger and central

**After Step 4 (App Context):**
- [ ] Dots with context get LARGER glow rings
- [ ] Visual distinction between apps with/without context

**After Step 5 (Integration Details):**
- [ ] Animated lines connect integrated apps
- [ ] Lines have subtle animation/pulse
- [ ] Lines don't overlap awkwardly
- [ ] Background remains performant (no lag)

**Throughout Flow:**
- [ ] Constellation stays fixed in background as you scroll
- [ ] Smooth transitions when new elements appear
- [ ] No visual glitches or flickering

---

## 📊 Data Verification

### Check Console for Exported Data

After submitting, expand the `Exported JSON (preview)` in console and verify:

```javascript
{
  firstName: "...",           // ✓ Your input
  lastName: "...",            // ✓ Your input
  jobTitle: "...",            // ✓ Your input
  email: "...",               // ✓ Your input
  companyName: "...",         // ✓ Your input
  companySize: "...",         // ✓ Selected size
  hasERP: true/false,         // ✓ Your selection
  erpSystems: [...],          // ✓ Selected ERPs (if applicable)
  selectedApps: {             // ✓ All apps by category
    "eCommerce": [...],
    "Marketing": [...],
    // etc.
  },
  categoryInteractions: {...}, // ✓ Tracks which categories you opened
  integrations: [...],        // ✓ All integration connections
  painPoints: [...],          // ✓ Selected pain points
  goals: [...],               // ✓ Selected goals
  additionalContext: "...",   // ✓ Your notes
  timestamp: "2025-..."       // ✓ Auto-generated
}
```

**Verify:**
- [ ] All your inputs are captured correctly
- [ ] No missing or undefined fields
- [ ] Arrays are properly formatted
- [ ] Timestamp is present

---

## 🔧 Browser Compatibility Test

Test in multiple browsers (if possible):

- [ ] **Chrome** - Primary target
- [ ] **Safari** - Common on Mac
- [ ] **Firefox** - Good for testing
- [ ] **Mobile Safari** (iPhone) - Responsive check
- [ ] **Mobile Chrome** (Android) - Responsive check

### Expected Behavior:
- Layout should be responsive
- Buttons should be touch-friendly on mobile
- Constellation may be simplified on mobile (expected)
- All core functionality works

---

## ⚠️ Known Limitations (TEST_MODE)

These are EXPECTED in TEST_MODE:

✅ **Working:**
- Full wizard flow
- Data collection
- Visual feedback
- JSON export
- API submission
- Mock response

❌ **Not Working (TEST_MODE disabled):**
- Real OpenAI analysis (returns mock data)
- PDF report generation (returns mock URL)
- Email delivery (not implemented yet)

🔜 **Coming Next:**
- Results/recommendations display screen
- Real OpenAI integration (when TEST_MODE disabled)
- Cloudflare Worker CORS proxy

---

## 🐛 Common Issues & Fixes

### Issue: Apps don't appear in Tech Stack
**Fix:** Check browser console for CDN errors. Some corporate networks block external images.

### Issue: Background constellation doesn't show
**Fix:** This is CSS/performance dependent. Try:
- Refresh page
- Check if browser has hardware acceleration enabled
- Disable browser extensions

### Issue: Submit button does nothing
**Fix:** Check console for errors. Likely causes:
- Network blocked Google Apps Script domain
- CORS issue (shouldn't happen in TEST_MODE)

### Issue: Toast notifications don't appear
**Fix:** Check if browser has notifications blocked. Toast library should still work.

---

## ✅ Test Complete Checklist

Before publishing to WordPress:

- [ ] All 8 steps work correctly
- [ ] Visual feedback system working
- [ ] Data exports correctly to console
- [ ] Submit returns TEST_MODE success
- [ ] Download JSON works
- [ ] Tested on at least 2 browsers
- [ ] Tested on mobile (if target audience uses mobile)
- [ ] No console errors (warnings are OK)
- [ ] Performance is smooth (no lag)

---

## 🚀 Ready to Publish?

Once all items are checked:

1. **Export your app** from Figma Make (or build manually)
2. **Create WordPress page** with iframe or full integration
3. **Share internal URL** with team
4. **Collect feedback** on UX, copy, flow
5. **Come back here** to build the results screen!

---

## 📞 Next Session Prep

For our next session when you're ready to build the results/recommendations screen, have ready:

- [ ] Feedback from internal testing
- [ ] Any copy changes needed
- [ ] Design preferences for results screen
- [ ] Decision on CORS solution (Cloudflare vs alternatives)
- [ ] OpenAI API key (if moving to production)

**Want to build the AI recommendations display next?** 🎨
