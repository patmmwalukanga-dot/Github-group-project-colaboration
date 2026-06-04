# Contributing to Student Tracker Project

Welcome to the Student Tracker project! This guide will help you understand how to work on your assigned issues and contribute to the project.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Setup](#project-setup)
3. [Git Workflow](#git-workflow)
4. [Working on Issues](#working-on-issues)
5. [Code Style & Standards](#code-style--standards)
6. [Pull Request Process](#pull-request-process)
7. [Communication](#communication)

---

## Getting Started

### Prerequisites
- Git installed on your machine
- Node.js and npm installed
- A GitHub account
- Text editor/IDE (VS Code recommended)

### First Time Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/patmmwalukanga-dot/Github-group-project-colaboration.git
   cd Github-group-project-colaboration
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Project Setup

### Project Structure
```
Github-group-project-colaboration/
├── src/
│   ├── components/       (React components)
│   ├── pages/           (Page components)
│   ├── styles/          (CSS/styling files)
│   ├── utils/           (Helper functions, storage utilities)
│   ├── App.js           (Main app component)
│   └── index.js         (Entry point)
├── public/              (Static files)
├── package.json         (Dependencies)
└── README.md            (Project overview)
```

### Installing Dependencies
All team members should run:
```bash
npm install
```

This installs the exact versions of packages needed.

---

## Git Workflow

### Branch Naming Convention
Create branches based on your issue number and task:

```
feature/issue-{number}-{short-description}
```

**Examples:**
- `feature/issue-4-data-visualization`
- `feature/issue-5-design-system`
- `feature/issue-6-data-recording`

### Creating a Branch
1. Update main branch:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create your feature branch:
   ```bash
   git checkout -b feature/issue-{number}-{description}
   ```

### Committing Changes
Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Issue #X: Brief description of what you did"
```

**Good commit messages:**
- `Issue #4: Add pie chart for grade distribution`
- `Issue #5: Create button component with design system colors`
- `Issue #6: Implement student add form with LocalStorage`

**Bad commit messages:**
- `fixed stuff`
- `update`
- `final`

### Pushing Changes
Push your branch to GitHub:
```bash
git push origin feature/issue-{number}-{description}
```

---

## Working on Issues

### 1. Claim Your Issue
- Go to your assigned issue on GitHub
- Comment: "Starting work on this" (so others know you're working on it)

### 2. Read the Issue Description
- Understand all requirements
- Check acceptance criteria
- Note any dependencies on other issues

### 3. Create a Feature Branch
Follow the naming convention above.

### 4. Start Coding
- Work in your feature branch
- Make regular commits (don't commit everything at once)
- Test your changes locally

### 5. Keep Your Branch Updated
If main branch gets updates:
```bash
git fetch origin
git rebase origin/main
```

---

## Code Style & Standards

### JavaScript/React Standards
- Use **arrow functions** when possible
- Use **const** by default, **let** when needed, avoid **var**
- Add **comments** for complex logic
- Keep components **small and focused**
- Use **meaningful variable names**

**Example:**
```javascript
// Good
const handleStudentAdd = (studentData) => {
  // Save to localStorage
  const students = JSON.parse(localStorage.getItem('students')) || [];
  students.push(studentData);
  localStorage.setItem('students', JSON.stringify(students));
};

// Bad
const add = (d) => {
  let s = JSON.parse(localStorage.getItem('students')) || [];
  s.push(d);
  localStorage.setItem('students', JSON.stringify(s));
};
```

### CSS/Styling Standards
- Follow the **design system colors and spacing** from Issue #5
- Use **semantic class names**
- Keep styles in separate CSS files
- Use consistent spacing (padding, margins)

### Component Structure
```javascript
// Import statements
import React, { useState } from 'react';
import './ComponentName.css';

// Component
const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState('');

  // Handlers
  const handleClick = () => { /* ... */ };

  // Render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

---

## Pull Request Process

### Before Creating a PR
1. ✅ Test your changes locally
2. ✅ Make sure all commits are clean and meaningful
3. ✅ Update your branch with latest main: `git rebase origin/main`
4. ✅ Run any tests (if applicable)

### Creating a Pull Request
1. Push your branch to GitHub
2. Go to the repository and click "Compare & pull request"
3. Fill in the PR template:

```markdown
## Description
Brief description of what you did

## Related Issue
Closes #X (use the issue number)

## Changes Made
- List of changes
- Another change
- Another change

## Testing
How did you test your changes?

## Screenshots (if applicable)
Any images showing the work
```

### PR Title Format
```
Issue #X: Brief description
```

**Examples:**
- `Issue #4: Add grade distribution pie chart`
- `Issue #5: Create reusable button and card components`

### Code Review
- A team member will review your PR
- Respond to comments respectfully
- Make requested changes in new commits
- Once approved, it will be merged to main

---

## Communication

### Asking for Help
- Ask questions in issue comments
- Use GitHub discussions if available
- Don't hesitate to ask - this is a learning project!

### Stuck?
1. Check the issue description again
2. Look at similar code in the project
3. Ask for help in the issue comments
4. Share what you've tried

### Merge Conflicts
If you get a merge conflict:
1. Don't panic - it's normal
2. Ask for help in the PR comments
3. Team lead can help resolve

---

## Quick Command Reference

```bash
# Setup
git clone <repo-url>
npm install

# Daily workflow
git checkout main
git pull origin main
git checkout -b feature/issue-X-description

# Making changes
git add .
git commit -m "Issue #X: Description"
git push origin feature/issue-X-description

# Update with latest main
git fetch origin
git rebase origin/main

# Delete old branch (after PR merged)
git branch -d feature/issue-X-description
git push origin --delete feature/issue-X-description
```

---

## Questions?
- Comment on your issue if you're stuck
- Ask the project lead (@patmmwalukanga-dot)
- Check previous issues for similar solutions

**Happy coding! 🚀**
