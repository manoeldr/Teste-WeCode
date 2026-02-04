// Carrega todos os scripts na ordem correta
(function() {
    const scripts = [
        'scripts/cart.js',
        'scripts/header.js',
        'scripts/banner.js',
        'scripts/categories.js',
        'scripts/products.js',
        'scripts/know-more.js',
        'scripts/menu.js'
    ];

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });
})();