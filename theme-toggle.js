const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const switchText = document.querySelector('.switch-text');
const THEME_KEY = 'site-theme';

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    toggle.checked = theme === 'dark';
    switchText.textContent = theme;
}

function getPreferredTheme() {
    return localStorage.getItem(THEME_KEY) ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function deviceThemeChangeListener(e) {
    if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
}

// Initial set
applyTheme(getPreferredTheme());

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', deviceThemeChangeListener);

toggle.addEventListener('change', function () {
    const theme = toggle.checked ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
});
