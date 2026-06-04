# Design System Guide - Step by Step

Welcome! This guide will walk you through creating a professional design system for the Student Tracker. Follow each section in order.

## Table of Contents
1. [Color Palette Setup](#color-palette-setup)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Creation](#component-creation)
5. [Implementation](#implementation)

---

## Color Palette Setup

### Primary Colors (Use These First)
```
🟢 PRIMARY GREEN: #10B981 (main color)
🟡 SECONDARY YELLOW: #F59E0B (accent/warnings)
🔴 ERROR RED: #EF4444 (errors, alerts)
🟣 ACCENT PURPLE: #8B5CF6 (highlights, secondary accent)
⚪ LIGHT (Background): #F9FAFB (light backgrounds)
⚫ DARK (Text/Theme): #111827 (dark theme text)
```

### Step 1: Create CSS Variables File

Create `src/styles/colors.css`:

```css
:root {
  /* Primary Colors */
  --color-primary-green: #10B981;
  --color-secondary-yellow: #F59E0B;
  --color-error-red: #EF4444;
  --color-accent-purple: #8B5CF6;
  
  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-light-bg: #F9FAFB;
  --color-gray-light: #E5E7EB;
  --color-gray-medium: #9CA3AF;
  --color-gray-dark: #4B5563;
  --color-dark-text: #111827;
  --color-black: #000000;
  
  /* Status Colors */
  --color-success: var(--color-primary-green);
  --color-warning: var(--color-secondary-yellow);
  --color-error: var(--color-error-red);
  --color-info: var(--color-accent-purple);
  
  /* Dark Theme */
  --color-dark-bg-primary: #1F2937;
  --color-dark-bg-secondary: #111827;
  --color-dark-text-primary: #F9FAFB;
  --color-dark-text-secondary: #D1D5DB;
}
```

### Step 2: Create Tailwind Config (Optional but recommended)

If using Tailwind CSS, update `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#10B981',
        },
        secondary: {
          yellow: '#F59E0B',
        },
        status: {
          error: '#EF4444',
          success: '#10B981',
          warning: '#F59E0B',
        },
        accent: {
          purple: '#8B5CF6',
        },
        neutral: {
          light: '#F9FAFB',
          dark: '#111827',
        },
      },
    },
  },
}
```

---

## Typography

### Font Families
```
Primary Font: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Monospace: 'Courier New', monospace (for code)
```

### Font Sizes
```
Heading 1: 32px (2rem) - Bold (700)
Heading 2: 24px (1.5rem) - Bold (700)
Heading 3: 20px (1.25rem) - Semi-bold (600)
Body Large: 16px (1rem) - Regular (400)
Body Small: 14px (0.875rem) - Regular (400)
Caption: 12px (0.75rem) - Regular (400)
```

### Step 3: Create Typography CSS File

Create `src/styles/typography.css`:

```css
body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-dark-text);
}

h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 12px;
}

.text-large {
  font-size: 16px;
  font-weight: 400;
}

.text-small {
  font-size: 14px;
  font-weight: 400;
}

.text-caption {
  font-size: 12px;
  font-weight: 400;
}
```

---

## Spacing & Layout

### Spacing Scale
```
4px   (xs)
8px   (sm)
12px  (md)
16px  (lg)
24px  (xl)
32px  (2xl)
48px  (3xl)
```

### Step 4: Create Spacing CSS

Create `src/styles/spacing.css`:

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;
  --spacing-3xl: 48px;
}

/* Utility Classes */
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }
.p-xl { padding: var(--spacing-xl); }

.m-sm { margin: var(--spacing-sm); }
.m-md { margin: var(--spacing-md); }
.m-lg { margin: var(--spacing-lg); }
.m-xl { margin: var(--spacing-xl); }

.gap-sm { gap: var(--spacing-sm); }
.gap-md { gap: var(--spacing-md); }
.gap-lg { gap: var(--spacing-lg); }
```

---

## Component Creation

### Step 5: Create Reusable Components

All components go in `src/components/`

#### **1. Button Component**

Create `src/components/Button.js`:

```javascript
import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

Create `src/components/Button.css`:

```css
.btn {
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

/* Sizes */
.btn-sm {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 14px;
}

.btn-md {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: 16px;
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: 18px;
}

/* Variants */
.btn-primary {
  background-color: var(--color-primary-green);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #059669;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.btn-secondary {
  background-color: var(--color-accent-purple);
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #7C3AED;
}

.btn-danger {
  background-color: var(--color-error-red);
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background-color: #DC2626;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--color-primary-green);
  color: var(--color-primary-green);
}

.btn-outline:hover:not(:disabled) {
  background-color: var(--color-light-bg);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

#### **2. Card Component**

Create `src/components/Card.js`:

```javascript
import React from 'react';
import './Card.css';

const Card = ({ children, className = '', onClick = null }) => {
  return (
    <div 
      className={`card ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
```

Create `src/components/Card.css`:

```css
.card {
  background-color: var(--color-white);
  border-radius: 8px;
  padding: var(--spacing-lg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--color-gray-light);
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.card.interactive {
  cursor: pointer;
}
```

---

#### **3. Input Component**

Create `src/components/Input.js`:

```javascript
import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  error = false,
  errorMessage = '',
  required = false,
  ...props
}) => {
  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`input ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && errorMessage && (
        <span className="error-message">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
```

Create `src/components/Input.css`:

```css
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-lg);
}

.input-label {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: var(--spacing-sm);
  color: var(--color-dark-text);
}

.required {
  color: var(--color-error-red);
}

.input {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid var(--color-gray-light);
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-green);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.input-error {
  border-color: var(--color-error-red);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-message {
  color: var(--color-error-red);
  font-size: 12px;
  margin-top: var(--spacing-sm);
}
```

---

#### **4. Form Component**

Create `src/components/Form.js`:

```javascript
import React from 'react';
import './Form.css';

const Form = ({ children, onSubmit, className = '' }) => {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
```

Create `src/components/Form.css`:

```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: 500px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.form-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-end;
  margin-top: var(--spacing-lg);
}
```

---

## Implementation

### Step 6: Import Styles in Your App

Update `src/index.js` or `src/App.js`:

```javascript
import './styles/colors.css';
import './styles/typography.css';
import './styles/spacing.css';
```

### Step 7: Use Components in Your App

Example `src/App.js`:

```javascript
import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import Form from './components/Form';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div style={{ padding: 'var(--spacing-xl)' }}>
      <h1>Student Tracker</h1>
      
      <Card>
        <h2>Add Student</h2>
        <Form onSubmit={(e) => { e.preventDefault(); }}>
          <Input 
            label="Student Name" 
            placeholder="John Doe"
            required={true}
          />
          <Input 
            label="Email" 
            type="email"
            placeholder="john@example.com"
            required={true}
          />
          <Input 
            label="Grade" 
            placeholder="A, B, C, etc."
          />
          <div className="form-actions">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Add Student</Button>
          </div>
        </Form>
      </Card>

      <div style={{ marginTop: 'var(--spacing-2xl)' }}>
        <Button variant="primary" onClick={handleClick}>
          Primary Button
        </Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
}

export default App;
```

---

## Checklist for Completion

- [ ] Create `src/styles/colors.css` with color variables
- [ ] Create `src/styles/typography.css` with font rules
- [ ] Create `src/styles/spacing.css` with spacing variables
- [ ] Create `src/components/Button.js` and `Button.css`
- [ ] Create `src/components/Card.js` and `Card.css`
- [ ] Create `src/components/Input.js` and `Input.css`
- [ ] Create `src/components/Form.js` and `Form.css`
- [ ] Import all styles in `src/App.js` or `src/index.js`
- [ ] Test components in your App
- [ ] Document any custom components you add
- [ ] Commit and push your branch

---

## Next Steps

Once you've completed this:
1. Commit to your feature branch: `git commit -m "Issue #5: Create design system and components"`
2. Push: `git push origin feature/issue-5-design-system`
3. Create a Pull Request
4. Team can now use these components for their features!

**Questions?** Ask in the issue comments. You've got this! 🚀
