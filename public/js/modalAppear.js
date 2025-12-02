document.addEventListener("DOMContentLoaded", function () {
  const loginModalEl = document.getElementById("loginModal");
  const registerModalEl = document.getElementById("registerModal");
  const forgotPasswordModalEl = document.getElementById("forgotPasswordModal");
  const loginTrigger = document.getElementById("loginModalTrigger");
  const registerTrigger = document.getElementById("registerModalTrigger");
  const openRegisterFromLogin = document.getElementById("openRegisterFromLogin");
  const openLoginFromRegister = document.getElementById("openLoginFromRegister");
  const openForgotPasswordBtn = document.getElementById("openForgotPasswordModal");


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

  // Switch Login → Register
  if (openRegisterFromLogin) {
    openRegisterFromLogin.addEventListener("click", function (e) {
      e.preventDefault();
      loginModalEl.addEventListener(
        "hidden.bs.modal",
        () => bootstrap.Modal.getOrCreateInstance(registerModalEl).show(),
        { once: true }
      );
      bootstrap.Modal.getOrCreateInstance(loginModalEl).hide();
    });
  }

  // Switch Register → Login
  if (openLoginFromRegister) {
    openLoginFromRegister.addEventListener("click", function (e) {
      e.preventDefault();
      registerModalEl.addEventListener(
        "hidden.bs.modal",
        () => bootstrap.Modal.getOrCreateInstance(loginModalEl).show(),
        { once: true }
      );
      bootstrap.Modal.getOrCreateInstance(registerModalEl).hide();
    });
  }

  // Switch Login → Forgot Password
  if (openForgotPasswordBtn) {
    openForgotPasswordBtn.addEventListener("click", function (e) {
      e.preventDefault();
      loginModalEl.addEventListener(
        "hidden.bs.modal",
        () => bootstrap.Modal.getOrCreateInstance(forgotPasswordModalEl).show(),
        { once: true }
      );
      bootstrap.Modal.getOrCreateInstance(loginModalEl).hide();
    });
  }

 document.addEventListener("hidden.bs.modal", function () {
  // Only clean when ALL modals are closed
  if (!document.querySelector(".modal.show")) {
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach(b => b.remove());
  }
});
});
