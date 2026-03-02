(() => {
  const key = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const nextMode = {
  system: 'light',
  light: 'dark',
  dark: 'system'
  };
  let current = localStorage.getItem(key) || 'system';
  const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');
  function apply(mode) {
      const label = mode === 'system' ? 'system theme' : mode;
  if (toggle.textContent !== label) {
    toggle.textContent = label;
  }
      if (mode === 'system') {
      root.removeAttribute('data-theme');
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
