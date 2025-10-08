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
      },
    });
  }

  // Debug: Check if required elements exist
  const loginModalEl = document.getElementById("loginModal");
  const registerModalEl = document.getElementById("registerModal");
  const loginTrigger = document.getElementById("loginModalTrigger");
  const registerTrigger = document.getElementById("registerModalTrigger");
  const openRegisterFromLogin = document.getElementById(
    "openRegisterFromLogin"
  );
  const openLoginFromRegister = document.getElementById(
    "openLoginFromRegister"
  );

  // console.log("Element check:");
  // console.log("- Login modal element:", !!loginModalEl);
  // console.log("- Register modal element:", !!registerModalEl);
  // console.log("- Login trigger:", !!loginTrigger);
  // console.log("- Register trigger:", !!registerTrigger);
  // console.log("- Register link in login modal:", !!openRegisterFromLogin);
  // console.log("- Login link in register modal:", !!openLoginFromRegister);

  // Check Bootstrap Modal availability
  if (
    typeof bootstrap === "undefined" ||
    typeof bootstrap.Modal === "undefined"
  ) {
    console.error("X Bootstrap Modal is not available!");
    return;
  }

  console.log("• Bootstrap is available");

  // Check trigger values
  if (loginTrigger) {
    console.log("Login trigger:", loginTrigger.dataset.show);
  }

  // Auto-show modals based on triggers
  if (loginTrigger && loginTrigger.dataset.show === "true") {
    console.log("Auto-showing login modal...");
    try {
      const loginModal = new bootstrap.Modal(loginModalEl);
      loginModal.show();
    } catch (error) {
      console.error("Error showing login modal:", error);
    }
  }

  if (registerTrigger && registerTrigger.dataset.show === "true") {
    const registerModal = new bootstrap.Modal(
      document.getElementById("registerModal")
    );
    registerModal.show();
  }

  // Switch from Login to Register
  if (openRegisterFromLogin) {
    openRegisterFromLogin.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Switching from login to register...");
      if (!registerModalEl) {
        console.error("X Register modal element not found!");
        alert(
          "Register modal not found. Please check if registerModal is included."
        );
        return;
      }

      // Move focus away to avoid aria-hidden issues
      document.activeElement.blur();

      // Attach the event listener BEFORE hiding
      loginModalEl.addEventListener(
        "hidden.bs.modal",
        function handler() {
          console.log("Login modal hidden, now showing register modal.");
          const registerModal = new bootstrap.Modal(registerModalEl);
          registerModal.show();
        },
        { once: true }
      );

      try {
        const loginModal = bootstrap.Modal.getInstance(loginModalEl);
        loginModal.hide();
      } catch (error) {
        console.error("Error hiding login modal:", error);
      }
    });
  }

  // Switch from Register to Login
  if (openLoginFromRegister) {
    openLoginFromRegister.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Switching from register to login...");

      // Move focus away to avoid aria-hidden issues
      document.activeElement.blur();

      registerModalEl.addEventListener(
        "hidden.bs.modal",
        function handler() {
          console.log("Register modal hidden, now showing login modal.");
          const loginModal = new bootstrap.Modal(loginModalEl);
          loginModal.show();
        },
        { once: true }
      );

      try {
        const registerModal = bootstrap.Modal.getInstance(registerModalEl);
        registerModal.hide();
      } catch (error) {
        console.error("Error hiding register modal:", error);
      }
    });
  }

  // Clear error flash when modals are closed
  if (loginModalEl) {
    loginModalEl.addEventListener("hidden.bs.modal", function () {
      const alert = loginModalEl.querySelector(".alert-danger");
      if (alert) alert.remove();
    });
  }
  if (registerModalEl) {
    registerModalEl.addEventListener("hidden.bs.modal", function () {
      const alert = registerModalEl.querySelector(".alert-danger");
      if (alert) alert.remove();
    });
  }

  // Toggle password visibility for all password fields
  document.querySelectorAll(".togglePassword").forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Find the input in the same input group
      const input =
        this.closest(".input-group").querySelector(".password-input");
      if (!input) return;
      const type =
        input.getAttribute("type") === "password" ? "text" : "password";
      input.setAttribute("type", type);
      // Toggle the eye icon
      const icon = this.querySelector("i");
      if (icon) {
        // If currently showing fa-eye (open eye), switch to fa-eye-slash (closed)
        if (icon.classList.contains("fa-eye")) {
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
        } else {
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
        }
      }
    });
  });

  // Listing delete confirmation
  const deleteBtn = document.querySelector(".delete-btn");
  const confirmOverlay = document.getElementById("confirm-delete-overlay");
  const cancelBtn = document.querySelector(".confirm-overlay .cancel");

  if (deleteBtn && confirmOverlay) {
    deleteBtn.addEventListener("click", function (e) {
      e.preventDefault();
      confirmOverlay.style.display = "flex";
      document.body.style.overflow = "hidden"; // Prevent background scroll
    });
  }

  if (cancelBtn && confirmOverlay) {
    cancelBtn.addEventListener("click", function () {
      confirmOverlay.style.display = "none";
      document.body.style.overflow = ""; // Restore scroll
    });
  }
});
