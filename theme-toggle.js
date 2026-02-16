(() => {
  const key = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const nextMode = {
  system: 'light',
  light: 'dark',
  dark: 'system'
  };
  let current = localStorage.getItem(key) || 'system';
  const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');
  function apply(mode) {
      toggle.textContent =
      mode === 'system' ? 'system theme' : mode;
      if (mode === 'system') {
      delete root.dataset.theme;
      } else {
      root.dataset.theme = mode;
      }
  }
  apply(current);
  toggle.addEventListener('click', () => {
    current = nextMode[current];
    localStorage.setItem(key, current);
    apply(current);
    });
  systemQuery.addEventListener('change', () => {
    if (current === 'system') {
      apply('system');
    }
  });
})();
