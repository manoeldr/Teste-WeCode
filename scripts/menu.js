const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Abre o menu
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Fecha o menu - botão X
if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Fecha o menu - clicando no overlay
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Submenu toggle
const submenuTriggers = document.querySelectorAll('.has-submenu');

submenuTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        const submenuId = this.getAttribute('data-submenu');
        const submenu = document.getElementById('submenu-' + submenuId);
        
        // Toggle active class
        this.classList.toggle('active');
        submenu.classList.toggle('active');
    });
});