# Issue #2: Build Navigation & Layout (Header, Sidebar, Footer)

## Overview
Create the main shell/layout for the application. This includes the header (navigation), sidebar (menu), and footer. Every page will use this layout, so it's critical to get it right!

## Tasks

### 1. **Header/Navigation Component**
   - Logo or app name (Student Tracker)
   - Navigation links to main pages:
     - Dashboard
     - Students
     - Reports
   - User menu (logout button)
   - Mobile hamburger menu (for small screens)
   - Sticky/fixed at top of page

### 2. **Sidebar Component** (Optional for mobile)
   - Main navigation menu
   - Quick links to features
   - App logo/branding
   - Show/hide toggle for mobile
   - Use brand colors (green, purple)

### 3. **Footer Component**
   - Copyright information
   - Project name
   - Link to GitHub repo
   - Sticky at bottom or below content

### 4. **Main Layout Component**
   - Wrapper that combines Header + Sidebar + Main Content + Footer
   - Proper spacing and layout
   - Mobile-responsive (stack vertically on small screens)
   - Dark theme support (header dark, content light)

### 5. **Responsive Design**
   - Desktop: Header + Sidebar + Content + Footer
   - Tablet: Header with dropdown menu + Content + Footer
   - Mobile: Header with hamburger + Content + Footer
   - No horizontal scroll
   - Touch-friendly buttons/links

### 6. **Styling & Brand**
   - Use design system colors (green primary, dark accents)
   - Use design system typography and spacing
   - Professional, clean appearance
   - Consistent with Issue #5 style guide

## Acceptance Criteria
- ✅ Header displays with logo and navigation links
- ✅ All navigation links work properly
- ✅ Sidebar is functional and can be toggled on mobile
- ✅ Footer displays at bottom with info
- ✅ Layout is responsive on all screen sizes
- ✅ Uses design system colors and components
- ✅ Mobile menu (hamburger) works smoothly
- ✅ Proper spacing and typography throughout
- ✅ Code is clean, commented, and organized

## Files to Create
- `src/components/Header.js` and `Header.css`
- `src/components/Sidebar.js` and `Sidebar.css`
- `src/components/Footer.js` and `Footer.css`
- `src/components/Layout.js` (main layout wrapper)
- `src/components/Layout.css`

## Dependencies
- ⚠️ Issue #5 (Design System) - MUST be done first for components and colors
- ⚠️ React Router (for navigation) - May need to install

## Implementation Notes
1. Use React Router `<Link>` for navigation (not `<a>` tags)
2. Consider how other pages will use this layout
3. Keep it flexible so different pages can override styling if needed
4. Think about dark mode from start (even if not implementing yet)

## Testing
- Test on desktop (1920px), tablet (768px), mobile (375px)
- Test hamburger menu opens/closes
- Test all navigation links
- Test footer stays at bottom
