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

  // ===== FIX DROPDOWN ISSUES =====
  console.log("Initializing dropdown fix...");

  // Method 1: Initialize Bootstrap dropdowns manually
  const dropdownElementList = document.querySelectorAll('[data-bs-toggle="dropdown"]');
  if (dropdownElementList.length > 0) {
    console.log("Found", dropdownElementList.length, "dropdown(s)");
   
    dropdownElementList.forEach(function(dropdownToggle) {
      // Create Bootstrap dropdown instance
      try {
        new bootstrap.Dropdown(dropdownToggle);
        console.log("Dropdown initialized for:", dropdownToggle);
      } catch (error) {
        console.error("Error initializing dropdown:", error);
      }
    });
  }

  // Method 2: Fallback manual toggle (in case Bootstrap fails)
  dropdownElementList.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
     
      console.log("Dropdown clicked!");
     
      // Get the dropdown menu
      const menu = this.nextElementSibling;
     
      if (menu && menu.classList.contains('dropdown-menu')) {
        // Close all other dropdowns first
        document.querySelectorAll('.dropdown-menu.show').forEach(function(openMenu) {
          if (openMenu !== menu) {
            openMenu.classList.remove('show');
          }
        });
       
        // Toggle current dropdown
        menu.classList.toggle('show');
        console.log("Dropdown toggled. Show class:", menu.classList.contains('show'));
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
        menu.classList.remove('show');
      });
    }
  });

  // Prevent dropdown from closing when clicking inside
  document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
    menu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  console.log("Dropdown initialization complete!");
}); 