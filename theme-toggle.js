(() => {

  const key = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  const stored = localStorage.getItem(key);

  /* <mark>CHANGED: no system theme detection in JS</mark> */
  /* CSS handles system theme automatically */

  if (stored) {
    root.dataset.theme = stored; /* <mark>CHANGED</mark> */
    toggle.checked = stored === 'dark';
  }

  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    root.dataset.theme = theme; /* <mark>CHANGED</mark> */
    localStorage.setItem(key, theme);
  });

})();
