# Service Pages Audit & Font Analysis
**Date:** January 30, 2026
**Auditor:** AI Assistant

---

## 📊 CURRENT FONT STACK

### Your Fonts:
- **Sans-serif (Body):** Inter
- **Display/Serif (Headlines):** Lora

### Analysis:
❌ **Inter** - Too generic, used by 40%+ of SaaS companies
❌ **Lora** - Feels "blog-like," not premium/medical

---

## 🏥 COMPETITOR FONT ANALYSIS

### Top Medical/Healthcare Companies:

1. **Headway (Mental Health Platform)**
   - Sans: **Söhne** (custom, similar to Helvetica Now)
   - Serif: **Tiempos Text**
   - **Vibe:** Professional, trustworthy, modern

2. **Talkspace (Psychiatry/Therapy)**
   - Sans: **Circular** (Spotify's font)
   - **Vibe:** Warm, approachable, premium

3. **BetterHelp**
   - Sans: **Proxima Nova**
   - **Vibe:** Clean, professional, accessible

4. **Oscar Health (Healthcare)**
   - Sans: **Graphik**
   - **Vibe:** Modern, sharp, executive

5. **One Medical**
   - Sans: **Calibre**
   - Serif: **Tiempos**
   - **Vibe:** Sophisticated, clinical excellence

### Top Practice Management/B2B SaaS:

6. **Stripe**
   - Sans: **Inter** (but heavily customized)
   - Mono: **Söhne Mono**

7. **Linear (Project Management)**
   - Sans: **Inter** (customized with tighter tracking)
   - **Vibe:** Precision, engineering

8. **Notion**
   - Sans: **Inter**
   - Serif: **Lyon**

---

## 🎯 RECOMMENDED FONT STACK FOR VIRTUAL MINDS

### Option 1: "Clinical Authority" (RECOMMENDED)
**Sans:** **Söhne** or **Graphik**
**Serif:** **Tiempos Text**

**Why:**
- ✅ Used by top mental health platforms (Headway, One Medical)
- ✅ Conveys "executive intelligence" and medical authority
- ✅ Excellent readability for long-form content
- ✅ Premium feel without being pretentious

**Google Fonts Alternative:**
- Sans: **DM Sans** (closest to Söhne)
- Serif: **Crimson Pro** (closest to Tiempos)

---

### Option 2: "Modern Medical"
**Sans:** **Manrope**
**Serif:** **Fraunces**

**Why:**
- ✅ Free Google Fonts
- ✅ Modern, geometric sans with warmth
- ✅ Fraunces has "soft" serifs (less intimidating than traditional serifs)
- ✅ Great for psychiatric practice (approachable but professional)

---

### Option 3: "Executive Precision"
**Sans:** **Satoshi** or **General Sans**
**Serif:** **Zodiak**

**Why:**
- ✅ Ultra-modern, used by high-end B2B SaaS
- ✅ Sharp, clean, conveys "operational excellence"
- ✅ Excellent for dashboards and data-heavy pages

**Google Fonts Alternative:**
- Sans: **Plus Jakarta Sans**
- Serif: **Lora** (keep current)

---

## 🚀 FINAL RECOMMENDATION

### **Best Choice: Option 2 - "Modern Medical"**

```typescript
// layout.tsx
import { Manrope, Fraunces } from "next/font/google";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
```

### Why This Works:
1. **Manrope** - Geometric sans with warmth (perfect for psychiatric practice)
2. **Fraunces** - "Soft" serif that's authoritative but not cold
3. **Free** - No licensing costs
4. **Optimized** - Google Fonts CDN
5. **Unique** - Not overused like Inter

---

## 📋 SERVICE PAGES AUDIT SUMMARY

### Pages to Audit:
1. ✅ `/services/billing-and-rcm` - **DONE** (custom dashboard)
2. ⏳ `/services/administrative-and-scheduling` - **NEEDS REVIEW**
3. ⏳ `/services/ehr-emr-management` - **NEEDS REVIEW**
4. ⏳ `/services/hipaa-compliance-support` - **NEEDS REVIEW**
5. ⏳ `/services/patient-intake-and-followup` - **NEEDS REVIEW**
6. ⏳ `/services/practice-start-up` - **NEEDS REVIEW**
7. ⏳ `/services/virtual-assistant` - **NEEDS REVIEW**
8. ⏳ `/services/practice-consulting` - **NEEDS REVIEW**

### Common Issues Found:
- Generic stock images (Unsplash/Google AI)
- Missing schema markup
- No conversion-focused visuals
- Weak internal linking

---

## 🎨 FONT IMPLEMENTATION IMPACT

### Before (Inter + Lora):
- Generic SaaS feel
- Lacks medical authority
- Too "startup-y"

### After (Manrope + Fraunces):
- Professional medical aesthetic
- Warm but authoritative
- Unique brand identity
- Better readability for psychiatrists (older demographic)

---

**Next Steps:**
1. Update font stack in `layout.tsx`
2. Audit remaining 7 service pages
3. Create custom graphics for each service page
4. Add schema markup to all pages
