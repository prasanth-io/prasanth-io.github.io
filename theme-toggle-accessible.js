(() => {
    const key = 'theme';
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');
    
    if (!toggle || !label) return;
    
    const nextMode = {
        system: 'light',
        light: 'dark',
        dark: 'system'
    };
    
    let current = localStorage.getItem(key) || 'system';
    const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function apply(mode) {
        const displayText = mode === 'system' ? 'system theme' : mode;
        
        if (label.textContent !== displayText) {
            label.textContent = displayText;
            toggle.setAttribute('aria-label', `Toggle theme (current: ${displayText})`);
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
