document.addEventListener('DOMContentLoaded', () => {
    console.log("swiper initialized");
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        slidesPerView: 3,
        spaceBetween: 0, // Remove space between slides
        speed: 800,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.9, // Adjust scale to reduce gaps
            slideShadows: true,
        },
        grabCursor: false,
        touchRatio: 0,
        preventClicks: true,
        preventClicksPropagation: true,
        simulateTouch: false
    });
});