// Inicializa o carrossel de produtos
const productsSwiper = new Swiper('.products-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    grabCursor: true,
});

// Favoritar produtos
const favoriteBtns = document.querySelectorAll('.favorite-btn');

favoriteBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const heartIcon = this.querySelector('.heart-icon');
        const isFavorited = heartIcon.src.includes('heart-b.svg');
        
        if (isFavorited) {
            heartIcon.src = 'assets/icons/shop/heart-w.svg';
        } else {
            heartIcon.src = 'assets/icons/shop/heart-b.svg';
        }
    });
});

// Adicionar produtos ao carrinho
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const toast = document.getElementById('cart-toast');

addToCartBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPriceElement = productCard.querySelector('.product-price');
        const productImage = productCard.querySelector('.product-image').src;
        
        let price;
        const discountPrice = productCard.querySelector('.price-discount');
        
        if (discountPrice) {
            price = parseFloat(discountPrice.textContent.replace('R$', '').replace(',', '.').trim());
        } else {
            price = parseFloat(productPriceElement.textContent.replace('R$', '').replace(',', '.').trim());
        }
        
        const product = {
            id: index + 1,
            name: productName,
            price: price,
            image: productImage
        };
        
        addToCart(product);
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
});