# 🚀 Manual GPT Workflow - Quick Reference Card

*Print this page for your desk or save as a bookmark!*

---

## 🎯 For Sales Team: Demo Script

### Opening (30 seconds)
> "Let me show you our AI-powered integration assessment tool. It takes about 10 minutes to complete, and you'll get personalized recommendations based on your specific tech stack."

### During Demo (8 minutes)
1. **Contact Info** - "First, we capture basic information..."
2. **ERP Selection** - "Understanding your ERP is critical for recommendations..."
3. **Tech Stack** - "Now select the apps you use - we have 200+ preloaded..."
4. **App Context** - "You can add notes about how you use each app..."
5. **Integrations** - "Document any existing integrations..."
6. **Pain Points** - "Select your biggest challenges..."
7. **Goals** - "What do you want to achieve?"
8. **Review** - "Here's your complete assessment..."

### Getting Recommendations (2 minutes)
> "Now watch this - with one click, your assessment is copied. Open our Custom GPT, paste it in, and in 15 seconds you get personalized recommendations. Upload the result here and..."

### The Wow Moment
> "...look at this beautiful report! Priority recommendations with effort estimates, quick wins you can implement this week, and integration opportunities specific to YOUR apps."

### Closing
> "You can download this report, share it with your team, and we're here to help implement any of these recommendations."

---

## 🎬 For Prospects: User Guide

### Step 1: Complete Assessment (8 min)
1. Enter your contact information
2. Select your ERP system
3. Choose your apps (200+ available)
4. Add context to key apps (optional)
5. Document existing integrations (if any)
6. Select pain points and goals
7. Review your assessment

### Step 2: Get AI Analysis (2 min)
1. Click **"See my recommendations"**
2. Click **"Copy Assessment + Prompt"**
3. Click **"Open Custom GPT"**
4. Paste in ChatGPT (Ctrl+V / Cmd+V)
5. Wait 15 seconds for analysis
6. Copy the JSON from the code block
7. Save as `recommendations.json`
8. Upload back to the assessment tool

### Step 3: View Results (instant)
- **Executive Summary** - High-level overview
- **Quick Wins** - Implement today!
- **Priority Recommendations** - Strategic initiatives
- **Integration Opportunities** - Specific app connections
- **Next Steps** - Your roadmap

### Download & Share
Click the **Download** button to save your full report as JSON. Share with your team, reference later, or use as a basis for planning.

---

## 🔧 For IT Team: Technical Setup

### One-Time Setup (5 minutes)

1. **Create Custom GPT**
   ```
   URL: https://chatgpt.com/create
   Name: Celigo Integration Coach
   Instructions: Copy from CUSTOM-GPT-INSTRUCTIONS.txt
   ```

2. **Update Code**
   ```
   File: /components/ManualGPTDialog.tsx
   Line: 17
   Change: CUSTOM_GPT_URL to your GPT URL
   ```

3. **Test**
   ```
   Upload: example-recommendations.json
   Verify: Recommendations display correctly
   ```

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Modal doesn't open | Check ReviewStep.tsx line ~358 |
| Copy doesn't work | Check browser clipboard permissions |
| Upload fails | Verify file is valid JSON |
| Wrong format | Check JSON has all required fields |

### Support Contacts
- Technical docs: `/MANUAL-GPT-WORKFLOW.md`
- Setup guide: `/QUICK-START-MANUAL-GPT.md`
- Checklist: `/DEPLOYMENT-CHECKLIST-MANUAL-GPT.md`

---

## 📊 For Management: Success Metrics

### Engagement Metrics
- **Assessment Completion Rate:** Target >80%
- **Recommendations Upload Rate:** Target >70%
- **Report Download Rate:** Target >50%
- **Time to Complete:** Target <15 minutes

### Quality Metrics
- **Lead Quality Score:** Track improvement
- **Sales Conversion Rate:** Monitor impact
- **Customer Satisfaction:** Survey after use
- **Team Satisfaction:** Sales team feedback

### Business Impact
- **Pipeline Velocity:** Faster deals?
- **Deal Size:** Larger opportunities?
- **Win Rate:** More conversions?
- **Time to Close:** Shorter cycles?

---

## 💡 For Support: Common Questions

### "Is my data secure?"
> "Yes! Your assessment goes directly to ChatGPT when YOU paste it. We don't store your data on our servers. You have complete control."

### "Can I use this without ChatGPT Plus?"
> "You need a free ChatGPT account or ChatGPT Plus subscription to use our Custom GPT. Most IT leaders already have access."

### "How accurate are the recommendations?"
> "The recommendations are based on your specific tech stack and goals. They're powered by GPT-4 trained on thousands of successful ecommerce integrations."

### "Can I share the recommendations?"
> "Absolutely! Click the Download button to save the full report as a JSON file. You can share it with your team or reference it later."

### "What if I make a mistake in the assessment?"
> "You can go back to any step using the navigation. If you've already uploaded recommendations and want to redo it, just complete a new assessment."

### "Do you sell the solutions you recommend?"
> "We provide unbiased recommendations based on your needs. Some solutions may be available through our platform, but the assessment is free and designed to help you make informed decisions."

---

## 📞 Quick Links

| Resource | URL/Location |
|----------|--------------|
| Setup Instructions | `/QUICK-START-MANUAL-GPT.md` |
| Technical Docs | `/MANUAL-GPT-WORKFLOW.md` |
| Visual Diagrams | `/WORKFLOW-DIAGRAM.md` |
| Deployment Checklist | `/DEPLOYMENT-CHECKLIST-MANUAL-GPT.md` |
| Example File | `/example-recommendations.json` |
| Custom GPT Instructions | `/CUSTOM-GPT-INSTRUCTIONS.txt` |

---

## ⚡ Emergency Contact Info

**If something breaks:**
1. Check console logs (F12 in browser)
2. Review `/DEPLOYMENT-CHECKLIST-MANUAL-GPT.md`
3. Verify Custom GPT URL is updated
4. Test with `example-recommendations.json`
5. Contact: [Your support contact here]

**If Custom GPT isn't working:**
1. Verify GPT URL is correct
2. Check GPT instructions match template
3. Test GPT directly in ChatGPT
4. Regenerate GPT if needed

**If uploads fail:**
1. Check file is .json extension
2. Verify JSON is valid (use jsonlint.com)
3. Ensure JSON has required fields
4. Try example-recommendations.json

---

## 🎯 Target Audience Reminders

### Perfect For:
- ✅ IT Directors at $30M+ ARR ecommerce companies
- ✅ CIOs evaluating integration solutions
- ✅ Technology leaders planning digital transformation
- ✅ Operations managers dealing with system fragmentation

### Not Ideal For:
- ❌ Companies under $20M ARR (too simple stack)
- ❌ Single-channel sellers (limited integration needs)
- ❌ Companies with <5 apps (minimal complexity)
- ❌ Pure B2B with no ecommerce (wrong use case)

---

## ✅ Pre-Demo Checklist

**Before every demo:**
- [ ] Custom GPT URL is working
- [ ] You've tested the flow yourself recently
- [ ] You have the Custom GPT link bookmarked
- [ ] You can explain "why manual" if asked
- [ ] You have example-recommendations.json ready

**During demo:**
- [ ] Let prospect fill out their real data
- [ ] Show the constellation visualization
- [ ] Emphasize the app context feature
- [ ] Point out data quality & preloaded apps
- [ ] Walk through recommendations together

**After demo:**
- [ ] Send follow-up email with GPT link
- [ ] Offer to help with real assessment
- [ ] Schedule follow-up call
- [ ] Add to CRM with notes

---

## 🏆 Success Stories Template

*Fill this in as you get wins!*

### Company: _______________
**Challenge:** _______________  
**Result:** _______________  
**Quote:** "_______________"

### Company: _______________
**Challenge:** _______________  
**Result:** _______________  
**Quote:** "_______________"

---

## 📈 ROI Calculator

Use these talking points:

**Time Saved:**
- Manual assessment: 2-3 hours → Automated: 10 minutes
- Analysis: 4-6 hours → AI: 15 seconds
- Report creation: 1-2 hours → Instant

**Value Created:**
- Better integration decisions = $50-100K saved
- Faster time-to-value = Earlier ROI
- Reduced errors = Lower operational cost
- Strategic guidance = Better outcomes

**Prospect's Investment:**
- Time: 10 minutes
- Cost: $0
- Risk: None
- Upside: Strategic roadmap worth $$$

---

## 🎊 Celebrate Wins!

Track these milestones:

- [ ] First successful demo
- [ ] First prospect uploads recommendations
- [ ] First download of report
- [ ] First deal influenced by tool
- [ ] First customer testimonial
- [ ] 10 assessments completed
- [ ] 25 assessments completed
- [ ] 50 assessments completed
- [ ] First case study published
- [ ] Tool featured in sales materials

---

**Print this page and keep it handy! Everything you need to know in one place.** 📄

**Questions? Check the full documentation in the links above!** 📚

**Ready to win some deals? Let's go!** 🚀
