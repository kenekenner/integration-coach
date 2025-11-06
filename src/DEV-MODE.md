# Dev Mode - Quick Testing Guide

## Overview
Two hidden developer features for rapidly testing different parts of the assessment workflow:

1. **"dev"** - Upload recommendations JSON and skip to final display
2. **"scenario"** - Upload assessment data JSON and pre-fill the wizard

## How to Use

### Option 1: Test Recommendations Display (dev)

1. **Start the app** - Navigate to the welcome screen
2. **Click "dev" link** - Very subtle, small gray text at the bottom of the card
3. **Upload recommendations JSON** - Must match the recommendations format
4. **View immediately** - Skips to review step with recommendations displayed

**Use Case:** Testing different ChatGPT recommendation outputs, verifying formatting, testing export functions

### Option 2: Test Full Flow with Pre-Filled Data (scenario)

1. **Start the app** - Navigate to the welcome screen
2. **Click "scenario" link** - Next to the "dev" link, separated by "|"
3. **Upload scenario JSON** - Assessment data matching the wizard structure
4. **Skips to review** - All data pre-filled, ready to use Manual GPT flow
5. **View summary card** - See contact info and tech stack overview
6. **Get recommendations** - Use the normal workflow to paste GPT output

**Use Case:** Testing different customer scenarios, testing the manual GPT workflow, verifying summary card display

## Expected JSON Formats

### Recommendations JSON (for "dev" upload)

```json
{
  "executiveSummary": "2-3 sentence overview...",
  "priorityRecommendations": [
    {
      "title": "Recommendation title",
      "priority": "High|Medium|Low",
      "description": "Detailed description",
      "expectedBenefit": "What they'll gain",
      "estimatedEffort": "Low|Medium|High"
    }
  ],
  "integrationOpportunities": [
    {
      "integration": "App A → App B",
      "useCase": "Description of use case",
      "businessImpact": "How this helps business"
    }
  ],
  "quickWins": [
    "Quick win item 1",
    "Quick win item 2"
  ],
  "nextSteps": [
    "Step 1",
    "Step 2"
  ]
}
```

### Scenario JSON (for "scenario" upload)

```json
{
  "firstName": "Elena",
  "lastName": "Park",
  "jobTitle": "IT Director",
  "email": "test@company.com",
  "companyName": "Company Name",
  "companySize": "70m-80m",
  "hasERP": true,
  "erpSystems": ["Oracle NetSuite"],
  "selectedApps": {
    "ERP / Financial Management": [
      {
        "name": "Oracle NetSuite",
        "context": "Description of how it's used"
      }
    ],
    "Storefronts & Marketplaces": [
      {
        "name": "Shopify Plus",
        "context": "Primary D2C storefront"
      }
    ]
  },
  "categoryInteractions": {
    "ERP / Financial Management": true,
    "Storefronts & Marketplaces": true
  },
  "integrations": [
    {
      "from": "Shopify Plus",
      "to": "NetSuite",
      "type": "prebuilt"
    }
  ],
  "painPoints": [
    "Pain point 1",
    "Pain point 2"
  ],
  "goals": [
    "Goal 1",
    "Goal 2"
  ],
  "additionalContext": "Additional context about integration needs...",
  "timestamp": "2025-10-30T18:42:00.000Z"
}
```

## Sample Files

- **Recommendations:** `/example-recommendations.json`
- **Scenario:** `/example-scenario.json`

## Testing Workflows

### Workflow 1: Test Recommendations Display Only

1. Get ChatGPT recommendations → Save as JSON
2. Upload via **"dev"** link
3. Test the recommendations display
4. Export as HTML/PDF to verify formatting
5. Iterate on prompt/structure as needed

### Workflow 2: Test Full End-to-End Scenario

1. Create or get scenario JSON from ChatGPT
2. Upload via **"scenario"** link
3. Review pre-filled summary card
4. Click "Get Recommendations" button
5. Copy assessment + prompt to clipboard
6. Paste into ChatGPT and get recommendations
7. Upload recommendations JSON back to the app
8. Verify recommendations display
9. Test exports (HTML, JSON, Print)

### Workflow 3: Rapid Iteration on Multiple Scenarios

1. Prepare multiple scenario files (Persona1.json, Persona2.json, etc.)
2. For each scenario:
   - Upload scenario
   - Get recommendations via manual GPT flow
   - Review and refine
   - Export deliverable
3. Refresh page and repeat with next scenario

## Removing Dev Mode

When ready for production:

1. Open `/App.tsx`
2. Remove or comment out both props:
   ```tsx
   // Remove these lines:
   onDevModeUpload={currentStep === 0 ? handleDevModeUpload : undefined}
   onScenarioUpload={currentStep === 0 ? handleScenarioUpload : undefined}
   ```
3. Both dev links will disappear from the welcome screen

Alternatively, set to `undefined` to disable:
```tsx
onDevModeUpload={undefined}
onScenarioUpload={undefined}
```

## Notes

### Dev Mode ("dev" link)
- Uploads **recommendations only**
- Skips directly to recommendations display
- Assessment data will be empty (normal for testing)
- Use when you want to test different recommendation formats/outputs
- All export functions work normally

### Scenario Mode ("scenario" link)
- Uploads **assessment data** (contact info, apps, integrations, etc.)
- Skips to review step with pre-filled summary card
- No recommendations loaded initially
- Use the "Get Recommendations" button to trigger manual GPT flow
- Perfect for testing multiple customer personas/scenarios

### General
- Both links appear on the **welcome screen** only (step 0)
- Links are intentionally subtle (opacity 0.3) to avoid user confusion
- Links appear side-by-side: `dev | scenario`
- Both modes skip to the review step (step 7)
- All normal app functionality works after upload (back button, exports, etc.)