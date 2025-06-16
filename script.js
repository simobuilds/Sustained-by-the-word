// Theme Switcher Script
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcherButtons = document.querySelectorAll('[data-theme-option]');
  const body = document.body;
  const themeStorageKey = 'websiteTheme';
  const defaultTheme = 'light'; // Set your default theme here

  // Function to set the theme
  function setTheme(theme) {
    try {
      // Remove all theme classes first
      body.classList.remove('light-mode', 'dark-mode', 'pink-mode');
      
      // Add the selected theme class
      body.classList.add(`${theme}-mode`);
      
      // Update localStorage
      localStorage.setItem(themeStorageKey, theme);
      
      // Update ARIA attributes for accessibility
      themeSwitcherButtons.forEach(btn => {
        const btnTheme = btn.getAttribute('data-theme-option');
        btn.setAttribute('aria-pressed', btnTheme === theme ? 'true' : 'false');
      });
      
      // Update active button styling
      updateActiveButton(theme);
      
      // Dispatch custom event in case other scripts need to react
      document.dispatchEvent(new CustomEvent('themeChanged', { detail: theme }));
    } catch (error) {
      console.error('Error setting theme:', error);
      // Fallback to default theme if something goes wrong
      setTheme(defaultTheme);
    }
  }

  // Update active button styling
  function updateActiveButton(activeTheme) {
    themeSwitcherButtons.forEach(button => {
      const buttonTheme = button.getAttribute('data-theme-option');
      if (buttonTheme === activeTheme) {
        button.classList.add('active-theme');
        button.setAttribute('aria-current', 'true');
      } else {
        button.classList.remove('active-theme');
        button.setAttribute('aria-current
