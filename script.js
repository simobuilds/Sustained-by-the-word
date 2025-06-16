const themeSwitcherButtons = document.querySelectorAll('[data-theme-option]');
const body = document.body;
const themeStorageKey = 'websiteTheme';

// Function to set the theme
function setTheme(theme) {
  body.setAttribute('data-theme', theme);
  localStorage.setItem(themeStorageKey, theme);
}

// Event listeners for theme buttons
themeSwitcherButtons.forEach(button => {
  button.addEventListener('click', () => {
    const themeOption = button.getAttribute('data-theme-option');
    setTheme(themeOption);
  });
});

// Check for saved theme on page load
const savedTheme = localStorage.getItem(themeStorageKey);
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Optionally set a default theme (e.g., light) on first visit
  setTheme('light');
}
