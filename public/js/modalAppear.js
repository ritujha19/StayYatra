document.addEventListener("DOMContentLoaded", function () {
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
  const forgotPasswordModalEl = document.getElementById("forgotPasswordModal");
  const openForgotPasswordBtn = document.getElementById(
    "openForgotPasswordModal"
  );

  console.log("Element check:");
  console.log("- Login modal element:", !!loginModalEl);
  console.log("- Register modal element:", !!registerModalEl);
  console.log("- Login trigger:", !!loginTrigger);
  console.log("- Register trigger:", !!registerTrigger);
  console.log("- Register link in login modal:", !!openRegisterFromLogin);
  console.log("- Login link in register modal:", !!openLoginFromRegister);

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

  // Switch to Forgot Password modal
  if (openForgotPasswordBtn && forgotPasswordModalEl) {
    openForgotPasswordBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Switching to forgot password modal...");

      // Move focus away
      document.activeElement.blur();

      loginModalEl.addEventListener(
        "hidden.bs.modal",
        function handler() {
          console.log("Login modal hidden, showing forgot password modal");
          const forgotPasswordModal = new bootstrap.Modal(
            forgotPasswordModalEl
          );
          forgotPasswordModal.show();
        },
        { once: true }
      );

      const loginModal = bootstrap.Modal.getInstance(loginModalEl);
      loginModal.hide();
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
});
