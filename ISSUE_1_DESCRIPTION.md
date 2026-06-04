# Issue #1: Build Student List/Table View with Search and Filter

## Overview
Create a clean, reusable student list display component with search, filter, and sorting capabilities. This will be a core page that displays all recorded students and allows users to interact with student data.

## Tasks

### 1. **Student List Table Component**
   - Create a table that displays all students with columns:
     - Name
     - Email
     - Grade
     - Attendance
     - Actions (Edit, View, Delete buttons)
   - Make table responsive (mobile-friendly)
   - Use design system components from Issue #5

### 2. **Search Functionality**
   - Add search bar to filter students by name or email
   - Real-time search (filters as user types)
   - Clear button to reset search
   - Show "No results found" when search returns nothing

### 3. **Filter Functionality**
   - Filter by grade (A, B, C, D, F)
   - Filter by attendance status (Good, Average, Poor)
   - Ability to combine multiple filters
   - Show count of filtered results

### 4. **Sort Functionality**
   - Sort by: Name (A-Z), Grade (High-Low), Attendance
   - Toggle between ascending/descending
   - Visual indicator showing current sort

### 5. **Styling & Layout**
   - Use colors and components from design system (Issue #5)
   - Clean, professional layout
   - Proper spacing and typography
   - Responsive design for mobile/tablet/desktop

### 6. **Data Integration**
   - Read data from LocalStorage (from Issue #6)
   - Update table when data changes
   - Handle empty state (show "No students recorded" message)

## Acceptance Criteria
- ✅ Student table displays all students with correct columns
- ✅ Search functionality works in real-time
- ✅ Filter by grade and attendance works
- ✅ Sort functionality works for all columns
- ✅ Responsive design on mobile/tablet/desktop
- ✅ Uses design system colors and components
- ✅ Reads data from LocalStorage
- ✅ Empty state is handled gracefully
- ✅ Code is clean, commented, and follows project standards

## Files to Create
- `src/components/StudentTable.js` (main component)
- `src/components/StudentTable.css` (styling)
- `src/pages/StudentListPage.js` (page container)
- `src/pages/StudentListPage.css` (page styling)

## Dependencies
- ⚠️ Issue #5 (Design System) - MUST be done first
- ⚠️ Issue #6 (Data Recording) - For LocalStorage data

## Notes
- Keep it beginner-friendly with comments
- This is a foundational page - do it well!
- Focus on functionality first, fancy animations later
- Test thoroughly with different screen sizes
