# Style Guide - Color Palette & Design Tokens

## Official Color Palette

### Primary Colors

| Color | Name | Hex Code | Use Case |
|-------|------|----------|----------|
| 🟢 | Primary Green | `#10B981` | Main actions, success, primary buttons |
| 🟡 | Secondary Yellow | `#F59E0B` | Warnings, alerts, secondary highlights |
| 🔴 | Error Red | `#EF4444` | Errors, delete actions, critical alerts |
| 🟣 | Accent Purple | `#8B5CF6` | Secondary accent, highlights, special features |
| ⚪ | White | `#FFFFFF` | Backgrounds, cards, main content areas |
| ⚫ | Dark/Black | `#111827` | Text, dark theme, main text color |

### Neutral Colors (Supporting)

| Color | Hex Code | Use Case |
|-------|----------|----------|
| Light Background | `#F9FAFB` | Light page backgrounds |
| Light Gray | `#E5E7EB` | Borders, dividers, light elements |
| Medium Gray | `#9CA3AF` | Secondary text, disabled states |
| Dark Gray | `#4B5563` | Tertiary text, subtle elements |

---

## Component Color Usage

### Buttons

**Primary Button** (Most used)
```
Background: #10B981 (Green)
Text: White
Hover: #059669 (Darker green)
Shadow: rgba(16, 185, 129, 0.3)
```

**Secondary Button**
```
Background: #8B5CF6 (Purple)
Text: White
Hover: #7C3AED (Darker purple)
```

**Danger Button** (Delete, critical actions)
```
Background: #EF4444 (Red)
Text: White
Hover: #DC2626 (Darker red)
```

**Outline Button** (Alternative action)
```
Background: Transparent
Border: 2px solid #10B981 (Green)
Text: #10B981 (Green)
Hover Background: #F9FAFB (Light gray)
```

---

### Cards

```
Background: #FFFFFF (White)
Border: 1px solid #E5E7EB (Light gray)
Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
Hover Shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
```

---

### Input Fields

**Default State**
```
Border: 2px solid #E5E7EB (Light gray)
Background: #FFFFFF (White)
Text: #111827 (Dark)
```

**Focus State**
```
Border: 2px solid #10B981 (Green)
Shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) (Light green)
```

**Error State**
```
Border: 2px solid #EF4444 (Red)
Error Text: #EF4444 (Red)
Shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) (Light red)
```

---

### Status Colors

| Status | Color | Hex Code | Use Case |
|--------|-------|----------|----------|
| ✅ Success | Green | `#10B981` | Completed actions, success messages |
| ⚠️ Warning | Yellow | `#F59E0B` | Warnings, caution messages |
| ❌ Error | Red | `#EF4444` | Errors, failed actions |
| ℹ️ Info | Purple | `#8B5CF6` | Information, helpful notes |

---

## Dark Theme Integration

For dark mode (future expansion), use:

```css
:root.dark {
  --color-dark-bg-primary: #1F2937;
  --color-dark-bg-secondary: #111827;
  --color-dark-text-primary: #F9FAFB;
  --color-dark-text-secondary: #D1D5DB;
}
```

---

## Spacing System

### Scale
```
4px (xs)   - Small gaps, tight spacing
8px (sm)   - Minor spacing between elements
12px (md)  - Standard internal padding
16px (lg)  - Default spacing, button padding
24px (xl)  - Large sections, card padding
32px (2xl) - Extra large spacing
48px (3xl) - Hero sections, top-level spacing
```

### Examples
- Button padding: `12px 24px` (md horizontal, xl vertical)
- Card padding: `16px` (lg all sides)
- Form field margin: `16px` (lg bottom)
- Section gap: `24px` (xl)

---

## Typography

### Font Family
```
Primary: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Monospace: 'Courier New', monospace (for code blocks)
```

### Sizes & Weights

| Element | Size | Weight | Example |
|---------|------|--------|---------|
| Heading 1 | 32px | 700 (Bold) | Page titles |
| Heading 2 | 24px | 700 (Bold) | Section titles |
| Heading 3 | 20px | 600 (Semi-bold) | Subsection titles |
| Body Large | 16px | 400 (Regular) | Main text |
| Body Small | 14px | 400 (Regular) | Secondary text |
| Caption | 12px | 400 (Regular) | Labels, hints |

### Line Heights
- Headings: 1.2 - 1.4
- Body: 1.5 - 1.6

---

## Border Radius

```
Small buttons, inputs: 6px
Cards, sections: 8px
Full round (badges): 50%
```

---

## Shadows

### Light Shadow (Cards, subtle elevation)
```
0 1px 3px rgba(0, 0, 0, 0.1)
```

### Medium Shadow (Hover states)
```
0 4px 12px rgba(0, 0, 0, 0.15)
```

### Focus Shadow (Input focus)
```
0 0 0 3px rgba(16, 185, 129, 0.1)  (Green for primary)
```

---

## Quick Reference - Copy/Paste Colors

```javascript
// CSS Variables
const colors = {
  primary: '#10B981',
  secondary: '#F59E0B',
  error: '#EF4444',
  accent: '#8B5CF6',
  white: '#FFFFFF',
  dark: '#111827',
  lightBg: '#F9FAFB',
  lightGray: '#E5E7EB',
  mediumGray: '#9CA3AF',
};

// Tailwind Classes
'bg-green-500' // Primary green
'bg-yellow-500' // Secondary yellow
'bg-red-500' // Error red
'bg-purple-500' // Accent purple
'text-gray-900' // Dark text
'bg-gray-50' // Light background
```

---

## Testing Your Colors

### Contrast Check (for accessibility)
- Dark text (#111827) on white (#FFFFFF) ✅ High contrast
- White text on green (#10B981) ✅ High contrast
- Dark text on light backgrounds ✅ Accessible

### Color Blind Friendly
- Green + Red are used with additional indicators (icons, text)
- Yellow is used for warnings with "⚠️" symbol
- All states have text labels, not color-only

---

## Brand Consistency

When creating new components:
1. **Always use defined colors** - No random hex codes
2. **Respect spacing scale** - Use standard spacing values
3. **Follow button styles** - Primary, secondary, danger, outline
4. **Use the typography scale** - Don't create new font sizes
5. **Maintain shadows** - Use defined shadow levels

---

## Example Usage

```jsx
// ✅ CORRECT - Using design system
<button style={{
  backgroundColor: '#10B981',
  padding: '12px 24px',
  borderRadius: '6px',
}}>
  Click Me
</button>

// ❌ WRONG - Random colors/spacing
<button style={{
  backgroundColor: '#00FF00',
  padding: '15px 28px',
  borderRadius: '4px',
}}>
  Click Me
</button>
```

---

## Questions?

- Which color should I use? → Check Component Color Usage section
- What's the button padding? → Check Typography & Spacing sections
- How do I create a new component? → Follow Button/Card examples in DESIGN_SYSTEM_GUIDE.md

**This style guide ensures consistency across the entire project! 🎨**
