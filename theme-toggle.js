(() => {

  const key = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  const modes = ['system','light','dark'];

  let current = localStorage.getItem(key) || 'system';

  const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function apply(mode) {

    // update text label
    toggle.textContent =
      mode === 'system' ? 'system theme' : mode;

    // apply theme
    if (mode === 'system') {

      delete root.dataset.theme;

    } else {

      root.dataset.theme = mode;

    }

  }

  // initial load
  apply(current);

  // click cycle
  toggle.addEventListener('click', () => {

    let index = modes.indexOf(current);
    current = modes[(index + 1) % modes.length];

    localStorage.setItem(key, current);

    apply(current);

  });

  // auto-update when system theme changes
  systemQuery.addEventListener('change', () => {

    if (current === 'system') {
      apply('system');
    }

  });

})();
