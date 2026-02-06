(() => {

  const key = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  const stored = localStorage.getItem(key);

  // Apply saved theme (CSS handles default system theme)
  if (stored) {
    root.dataset.theme = stored;
    toggle.checked = stored === 'dark';
  }

  // Save user preference
  toggle?.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    root.dataset.theme = theme;
    localStorage.setItem(key, theme);
  });

})();
