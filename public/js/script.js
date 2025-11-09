document.addEventListener("DOMContentLoaded", function () {
  console.log("DEBUGGING MODAL SYSTEM —");

  // Initialize Swiper first
  if (document.querySelector(".swiper")) {
    console.log("Initializing swiper...");
    const swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      slidesPerView: 3,
      spaceBetween: 0,
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
      preventClicks: true,
      preventClicksPropagation: true,
      simulateTouch: false,
      breakpoints: {
        991: { slidesPerView: 2 },
        600: { slidesPerView: 1 },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
    });
  }
});
