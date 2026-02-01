# Visual Accessibility & Contrast Rules

To ensure visibility and high-contrast readability across all devices and for all users, follow these rules strictly:

## 1. Dark Backgrounds (Cards, Heros, KeyTakeaways)
- **Titles/Headings:** Use `!text-primary` (Gold/Orange #D2691E) or pure `!text-white`. Always use `font-black` or `font-bold`.
- **Details/Subtext:** Use `!text-slate-100`. Never use `slate-400` or `slate-500` on dark backgrounds as they are too hard to read.
- **Opacity:** Never use `opacity` lower than `0.9` for text content.

## 2. Prose Overrides
- When adding components inside a `<article>` or `prose` block, always use `!important` (Tailwind `!`) on text color classes to prevent the Prose engine from dimming the text.

## 3. Font Weights
- Lead text: `font-medium` or `font-semibold`.
- Headings: `font-bold` or `font-black`.

*Last Updated: January 2026*
