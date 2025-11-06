# Celigo Integration Assessment Wizard

An Apple-inspired lead generation assessment tool for IT Directors, CIOs, and technology leaders at large ecommerce companies ($30M+ ARR).

## 🎯 What This Does

Captures prospects' technology stack, integration architecture, pain points, and goals through an elegant 8-step wizard, then exports structured JSON data for AI-powered analysis and recommendations.

## ✨ Key Features

### 1. **8-Step Assessment Flow**
- Welcome screen with Celigo branding
- Basic information (name, email, title, company)
- ERP system selection
- Technology stack (13+ functional categories)
- App context collection (why they use each app)
- Integration mapping (types and connections)
- Pain points & goals
- Review & submit

### 2. **Horizontal Constellation Visualization**
- Real-time visual feedback as users select apps
- Fixed background animation that follows scroll
- Progressive enhancement:
  - **Step 3:** Dots appear for each selected app
  - **Step 4:** Dots get larger glows when context is added
  - **Step 5:** Animated connection lines between integrated apps
- ERP systems appear larger and more central

### 3. **Real App Logos**
- 200+ popular apps with actual logos from Celigo CDN
- Covers: eCommerce, Marketing, CRM, ERP, Shipping, Payments, Analytics, Inventory, Returns, Customer Support, Marketplace, Warehouse, Accounting

### 4. **Smart Data Collection**
- Pre-populated app selections (no free-form text)
- High data quality through structured inputs
- Custom app option for unlisted tools
- Optional enrichment data (context, pain points)

### 5. **Apple-Inspired Design**
- Area Normal font family
- Clean color palette (#1C1C1C black, #FBFBFB background)
- Smooth animations and transitions
- Professional, enterprise-ready aesthetic

## 🚀 Current Status: TEST_MODE ✅

**The wizard is fully functional right now!**

- ✅ All 8 steps working perfectly
- ✅ Visual constellation system operational
- ✅ Data export to Google Apps Script
- ✅ TEST_MODE returns mock AI analysis (no OpenAI costs)
- ✅ Ready for WordPress publishing

### What TEST_MODE Does:

When `TEST_MODE = true` in `/Code.gs`:
- Accepts and validates assessment data
- Skips OpenAI API call (saves costs during testing)
- Returns mock analysis matching production schema
- Still logs all data for verification
- Shows success toast with "TEST MODE" indicator

## 📁 Project Structure

```
/
├── App.tsx                          # Main wizard orchestrator
├── Code.gs                          # Google Apps Script backend (TEST_MODE enabled)
├── components/
│   ├── WelcomeStep.tsx             # Step 0: Welcome
│   ├── BasicInfoStep.tsx           # Step 1: Contact info
│   ├── ERPStep.tsx                 # Step 2: ERP selection
│   ├── TechStackStep.tsx           # Step 3: App selection
│   ├── AppContextStep.tsx          # Step 4: Context collection
│   ├── IntegrationDetailsStep.tsx  # Step 5: Integration mapping
│   ├── PainPointsStep.tsx          # Step 6: Pain points & goals
│   ├── ReviewStep.tsx              # Step 7: Review & submit
│   ├── IntegrationConstellation.tsx # Background visualization
│   ├── StepLogo.tsx                # Celigo branding
│   ├── data/
│   │   └── tech-categories.ts      # App catalog (200+ apps)
│   └── utils/
│       ├── app-logo-map.ts         # Logo CDN mappings
│       └── app-logos.tsx           # Logo components
├── styles/
│   └── globals.css                 # Global styles & tokens
└── cloudflare-worker.js            # CORS proxy (not yet deployed)
```

## 🧪 Testing

See **[TEST-CHECKLIST.md](./TEST-CHECKLIST.md)** for detailed testing instructions.

### Quick Test:
1. Run the app in this environment
2. Complete all 8 steps
3. Submit assessment
4. Check console (F12) for exported JSON
5. Verify success toast shows "TEST MODE" message

## 🌐 Publishing to WordPress

See **[VERIFICATION-AND-PUBLISHING.md](./VERIFICATION-AND-PUBLISHING.md)** for full publishing guide.

### Quick Publish (iframe):

```html
<!-- Add to WordPress page -->
<iframe 
  src="YOUR_FIGMA_MAKE_URL" 
  width="100%" 
  height="900px" 
  frameborder="0"
></iframe>
```

## 🔧 Configuration

### Google Apps Script API

**Current URL:**
```
https://script.google.com/macros/s/AKfycbwjQZWbjpAhxfmxAYvdA_g_8rIRDqhLhJwWJ74GyZ7PEGEwJbAlmNGd7TceCLvKBfxx/exec
```

**Status:** Deployed, TEST_MODE enabled

### Switching to Production:

1. Open Google Apps Script editor
2. Edit `Code.gs` line 20: Change `const TEST_MODE = true;` to `false`
3. Add OpenAI API key:
   - File → Project properties → Script properties
   - Add: `OPENAI_API_KEY` = `sk-proj-xxxxx`
4. Redeploy the script
5. Set up Cloudflare Worker for CORS (or use alternative)

## 🎨 Design System

### Colors
- **Primary Black:** `#1C1C1C`
- **Background:** `#FBFBFB`
- **Accent Blue:** `#3B82F6` (tailwind blue-500)
- **Success Green:** `#10B981` (tailwind green-500)
- **Error Red:** `#EF4444` (tailwind red-500)

### Typography
- **Font Family:** Area Normal (sans-serif fallback)
- **Headings:** System default sizing (h1, h2, h3)
- **Body:** 14-16px base

### Spacing
- **Container:** max-w-5xl (80rem)
- **Padding:** 24px (6 tailwind units)
- **Gap:** 16px (4 tailwind units)

## 📊 Data Schema

### Assessment Output (JSON)

```typescript
{
  // Contact Info
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  companyName: string;
  companySize: string; // e.g., "30m-50m"
  
  // ERP
  hasERP: boolean | null;
  erpSystems: string[]; // e.g., ["NetSuite", "SAP"]
  
  // Tech Stack
  selectedApps: {
    [category: string]: Array<{
      name: string;
      context?: string;
      isCustom?: boolean;
    }>;
  };
  
  // Interactions (metadata)
  categoryInteractions: {
    [category: string]: boolean;
  };
  
  // Integrations
  integrations: Array<{
    from: string;
    to: string;
    type: 'native' | 'prebuilt' | 'custom' | 'manual';
  }>;
  
  // Pain Points & Goals
  painPoints: string[];
  goals: string[];
  additionalContext: string;
  
  // Auto-generated
  timestamp: string; // ISO 8601
}
```

## 🚧 Known Issues & Limitations

### Current (TEST_MODE):
- ✅ Full wizard functional
- ✅ Mock AI analysis returns successfully
- ❌ Real OpenAI integration disabled
- ❌ PDF generation disabled
- ❌ Email delivery not implemented

### CORS Issue (Production Only):
When TEST_MODE is disabled, direct POST to Google Apps Script may fail due to CORS restrictions from Celigo's Google Workspace security policies.

**Solutions:**
1. **Cloudflare Worker** (code ready in `/cloudflare-worker.js`)
2. **Vercel/Netlify Function** (alternative)
3. **AWS API Gateway** (enterprise option)

See **[CORS-SOLUTION-SUMMARY.md](./CORS-SOLUTION-SUMMARY.md)** for details.

## 🔐 Security & Privacy

### Safe for Public Use:
- ✅ No API keys in frontend code
- ✅ Google Apps Script URL is public by design
- ✅ No PII stored in browser localStorage
- ✅ TEST_MODE doesn't process sensitive data

### Production Considerations:
- Add rate limiting to prevent abuse
- Consider reCAPTCHA for bot prevention
- Monitor Google Apps Script quota usage
- Review OpenAI data retention policies

## 📈 Next Steps

### Immediate (Ready Now):
1. ✅ Test wizard in current environment
2. ✅ Export and publish to WordPress
3. ✅ Share internal URL for team feedback

### Short-term (Before Production):
1. 🔧 Resolve CORS with Cloudflare Worker
2. 🎨 Build results/recommendations display screen
3. 🔑 Add OpenAI API key
4. ⚙️ Disable TEST_MODE
5. 🧪 Test with real AI analysis

### Long-term (Production Enhancements):
1. 📊 Add analytics tracking (Google Analytics, etc.)
2. 🎯 A/B test different flows
3. 📧 Email automation for follow-ups
4. 🔗 CRM integration (Salesforce, HubSpot)
5. 📱 Mobile app version

## 🤝 Support

### Questions About:

**Testing:** See [TEST-CHECKLIST.md](./TEST-CHECKLIST.md)  
**Publishing:** See [VERIFICATION-AND-PUBLISHING.md](./VERIFICATION-AND-PUBLISHING.md)  
**CORS Issues:** See [CORS-SOLUTION-SUMMARY.md](./CORS-SOLUTION-SUMMARY.md)  
**Deployment:** See [google-apps-script-setup.md](./google-apps-script-setup.md)

## 📝 License & Usage

This tool is built for Celigo's internal lead generation and marketing campaigns. Not for public redistribution.

## 🎉 Ready to Test?

Your wizard is **100% ready to test right now**. Just:

1. Click through all 8 steps
2. Watch the constellation background update
3. Submit on the final screen
4. See the success message with TEST_MODE indicator

**Want to build the AI recommendations screen next?** 🚀

---

**Last Updated:** October 27, 2025  
**Status:** ✅ Fully Functional (TEST_MODE)  
**Next Milestone:** Results Display Screen
