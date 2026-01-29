// Favorite buttons
const favoriteBtns = document.querySelectorAll('.favorite-btn');

favoriteBtns.forEach(btn => {
    const heartIcon = btn.querySelector('.heart-icon');
    let isFavorited = false;
    
    btn.addEventListener('click', function() {
        isFavorited = !isFavorited;
        
        if (isFavorited) {
            heartIcon.src = 'assets/icons/shop/heart-b.svg';
        } else {
            heartIcon.src = 'assets/icons/shop/heart-w.svg';
        }
    });
});

// Add to cart buttons
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartCountElement = document.querySelector('.cart-count');
const toast = document.getElementById('cart-toast');

let cartCount = parseInt(cartCountElement.textContent) || 0;

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
});

// Products Swiper Initialization
const productsSwiper = new Swiper('.products-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    grabCursor: true,
});