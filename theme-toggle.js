(() => {

  const key = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  const modes = ['light','system','dark'];

  let current = localStorage.getItem(key) || 'system';

  function apply(mode) {

    root.dataset.themeMode = mode;

    if (mode === 'system') {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = mode;
    }

  }

  apply(current);

  toggle?.addEventListener('click', (e) => {

    e.preventDefault();

    let index = modes.indexOf(current);
    current = modes[(index + 1) % modes.length];

    localStorage.setItem(key, current);

    apply(current);

  });

})();
