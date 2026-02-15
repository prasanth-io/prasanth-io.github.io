(() => {
  const key = 'theme';
  const root = document.documentElement;
  const light = document.getElementById('theme-light');
  const system = document.getElementById('theme-system');
  const dark = document.getElementById('theme-dark');
  const stored = localStorage.getItem(key);
  function applyTheme(theme) {
    if (theme === 'system') {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = theme;
    }
  }
  if (stored === 'light') light.checked = true;
  else if (stored === 'dark') dark.checked = true;
  else system.checked = true;
  applyTheme(stored || 'system');
  light?.addEventListener('change', () => {
    localStorage.setItem(key,'light');
    applyTheme('light');
  });
  dark?.addEventListener('change', () => {
    localStorage.setItem(key,'dark');
    applyTheme('dark');
  });
  system?.addEventListener('change', () => {
    localStorage.setItem(key,'system');
    applyTheme('system');
  });
})();
