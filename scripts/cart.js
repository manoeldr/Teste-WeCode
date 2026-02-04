// Retorna o carrinho do localStorage
function getCart() {
    const cart = localStorage.getItem('wecode_cart');
    return cart ? JSON.parse(cart) : [];
}

// Salva o carrinho no localStorage
function saveCart(cart) {
    localStorage.setItem('wecode_cart', JSON.stringify(cart));
}

// Adiciona produto ao carrinho
function addToCart(product) {
    let cart = getCart();
    
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart(cart);
    updateCartCount();
    return cart;
}

// Remove produto do carrinho
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
    return cart;
}

// Atualiza a quantidade de um produto
function updateQuantity(productId, quantity) {
    let cart = getCart();
    const product = cart.find(item => item.id === productId);
    
    if (product) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            product.quantity = quantity;
            saveCart(cart);
            updateCartCount();
        }
    }
    
    return cart;
}

// Retorna o total de itens no carrinho
function getTotalItems() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Retorna o valor total do carrinho
function getTotalPrice() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Atualiza o contador visual no header
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = getTotalItems();
    }
}

// Limpa todo o carrinho
function clearCart() {
    localStorage.removeItem('wecode_cart');
    updateCartCount();
}

// Atualiza o contador ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});