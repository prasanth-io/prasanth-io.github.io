(function(){
  const STORAGE_KEY = 'theme';
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (toggle) toggle.checked = theme === 'dark';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function preferSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const stored = getStoredTheme();
    const initial = stored || preferSystemTheme();
    applyTheme(initial);

    if (!toggle) return;

    // Keep checkbox state in sync if user toggles manually
    toggle.addEventListener('change', function() {
      const newTheme = toggle.checked ? 'dark' : 'light';
      try { localStorage.setItem(STORAGE_KEY, newTheme); } catch (e) {}
      applyTheme(newTheme);
    });
  });
})();
