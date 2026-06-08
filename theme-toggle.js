/**
 * Theme Toggle Functionality
 * Handles dark mode / light mode switching with localStorage persistence
 */

(function() {
  'use strict';

  // Get theme from localStorage or default to light
  const getTheme = () => {
    return localStorage.getItem('theme') || 'light';
  };

  // Set theme on document
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  };

  // Update the theme toggle icon
  const updateThemeIcon = (theme) => {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  // Initialize theme on page load
  const initTheme = () => {
    const currentTheme = getTheme();
    setTheme(currentTheme);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Add a subtle animation effect
    document.body.style.transition = 'background-color 0.3s ease';
  };

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      setupToggleButton();
    });
  } else {
    initTheme();
    setupToggleButton();
  }

  // Setup the toggle button event listener
  function setupToggleButton() {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
      
      // Add keyboard support
      toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }
  }

  // Expose theme functions globally if needed
  window.themeToggle = {
    getTheme,
    setTheme,
    toggleTheme
  };

})();
