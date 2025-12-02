document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing app...");

  // ===== Initialize Swiper (unchanged) =====
  if (document.querySelector(".swiper")) {
    const swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      slidesPerView: 3,
      speed: 800,
      centeredSlides: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
      },
      simulateTouch: false,
      preventClicks: true,
      breakpoints: {
        991: { slidesPerView: 2 },
        600: { slidesPerView: 1 },
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 15 }
      }
    });
  }
});
