# Issue #3: Implement User Authentication & Login System

## Overview
Build a basic authentication system with login/logout functionality and user session management. This protects the app and ensures each user has their own experience (for future features).

## Tasks

### 1. **Login Page**
   - Clean login form with:
     - Email input field
     - Password input field
     - "Remember Me" checkbox
     - Submit button
   - Form validation:
     - Email must be valid format
     - Password must be at least 6 characters
     - Show error messages for invalid input
   - Use design system components (Input, Button, Card)
   - Professional styling

### 2. **Authentication Logic**
   - Create a simple auth system using localStorage
   - Store logged-in user info (not passwords!)
   - Implement login function
   - Implement logout function
   - Create "remember me" functionality

### 3. **User Session Management**
   - Track if user is logged in
   - Store user data (name, email, role)
   - Auto-logout on browser close (optional)
   - Session timeout warning (optional)

### 4. **Protected Routes**
   - Redirect non-logged-in users to login page
   - Create Route Guards / Protected Routes
   - Allow access to login page only when NOT logged in
   - Redirect to dashboard after successful login

### 5. **User Context/State**
   - Create React Context or state management for user
   - Make user data accessible across all pages
   - Update user info when logging in/out

### 6. **Logout Functionality**
   - Logout button in header (from Issue #2)
   - Clears user session
   - Redirects to login page
   - Confirmation dialog before logout (optional)

## Acceptance Criteria
- ✅ Login page displays correctly with form
- ✅ Form validation works (email format, password length)
- ✅ Users can login (stored in localStorage)
- ✅ Users can logout
- ✅ Non-logged-in users can't access other pages
- ✅ Logged-in users redirected to dashboard
- ✅ User info persists on refresh (if "remember me" checked)
- ✅ Uses design system components and styling
- ✅ Error messages display clearly
- ✅ Code is clean, commented, and beginner-friendly

## Files to Create
- `src/pages/LoginPage.js` and `LoginPage.css`
- `src/context/AuthContext.js` (user state management)
- `src/components/ProtectedRoute.js` (route guard)
- `src/utils/authHelpers.js` (auth functions)

## Dependencies
- ⚠️ Issue #5 (Design System) - For components and styling
- ⚠️ React Router (for navigation and protected routes)
- ⚠️ Issue #2 (Navigation) - For logout button in header

## Sample User Data (for testing)
```javascript
// Example users that can login:
{
  email: "teacher@example.com",
  password: "password123",
  role: "teacher"
}

{
  email: "admin@example.com",
  password: "password123",
  role: "admin"
}
```

## Implementation Notes
1. **DO NOT** store passwords in localStorage in plain text (this is a demo - add encryption later)
2. Use localStorage for user session (temporary solution)
3. Think about future backend integration
4. Create reusable auth context for other pages
5. Consider role-based access (teacher vs admin) for future

## Security Note
⚠️ This is a demo app. For production:
- Use backend authentication
- Hash passwords
- Use secure tokens (JWT)
- Use HTTPS
- Implement proper session management

## Testing
- Test login with valid credentials
- Test login with invalid email/password
- Test form validation messages
- Test logout functionality
- Test redirect to login when not authenticated
- Test redirect to dashboard after login
- Test "remember me" functionality
