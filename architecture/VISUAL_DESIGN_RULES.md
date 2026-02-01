# Virtual Minds: Visual Design & Accessibility Rules
## Last Updated: January 31, 2026

To maintain the "Executive Intelligence" premium aesthetic and ensure maximum readability for psychiatric professionals, the following design rules must be strictly followed for all new components and updates.

---

## 🚫 FORBIDDEN COLOR COMBINATIONS

### 1. No Muted Grey on Light Backgrounds
*   **Problem:** Legacy grey `#4A4A4A` or low-contrast slate can appear "washed out" and unprofessional on modern light backgrounds (`#FAF8F3`).
*   **Rule:** Always use the primary brand navy for text on light backgrounds to ensure authority and clarity.
*   **Instead Use:** `text-trust-navy` (defined as `#2A2A2A`).

### 2. No Dark Text on Dark Backgrounds
*   **Problem:** Default headings (which use `trust-navy`) are invisible on dark sections (Navy, Black, or Dark Slate).
*   **Rule:** Any text inside a dark container MUST be explicitly forced to white or a high-contrast primary accent.
*   **Tailwind Class:** Use `!text-white` or `!text-primary` to override global heading styles.

### 3. Avoid Generic Browser Defaults
*   **Problem:** Basic blue links or generic grey borders.
*   **Rule:** Use the defined `primary` (`#D2691E`) or `primary-hover` (`#B8860B`) for interactive elements.

---

## ✅ APPROVED DESIGN PATTERNS

### **Typography & Hierarchy**
*   **Headings:** Use `font-serif` (for specialized/academic authority) or `font-display` (for modern professionalism).
*   **Paragraphs:** Increase base size to `text-lg` or `text-xl` for complex clinical descriptions.
*   **Lists:** Minimum `text-base` for readability.

### **Backgrounds & Containers**
*   **Section Backgrounds:** Use `bg-[#FAF8F3]` (Cream) as the primary base.
*   **High-Contrast Sections:** Use `bg-trust-navy` with `text-white` for "Reality Checks" or "Pain Point" sections.
*   **Cards:** Use `rounded-[2rem]` or `rounded-[3rem]` for a premium, custom-software feel.

### **Brand Colors (Tailwind Reference)**
| Variable | Value | Usage |
| :--- | :--- | :--- |
| `primary` | `#D2691E` | Accents, Primary Buttons, CTAs |
| `trust-navy` | `#2A2A2A` | Primary Text, Dark Containers |
| `cream` | `#FAF8F3` | Page Backgrounds |

---

## 🛠️ AUDIT CHECKLIST FOR NEW BUILDS
1. [ ] are all headings on dark backgrounds forced to white (`!text-white`)?
2. [ ] is all body text on the page either `trust-navy` (on light) or `white` (on dark)?
3. [ ] have all instances of `#4A4A4A` been replaced?
4. [ ] is the paragraph text size at least `text-lg` for readability?
