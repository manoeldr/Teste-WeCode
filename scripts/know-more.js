// Know More Swiper Initialization
document.addEventListener('DOMContentLoaded', function() {
    const knowMoreSwiper = new Swiper('.know-more-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        grabCursor: true,
        loop: false,
        initialSlide: 0,
        pagination: {
            el: '.know-more-pagination',
            clickable: true,
            type: 'bullets',
        },
    });
});