document.addEventListener("DOMContentLoaded", function () {
  const loginModalEl = document.getElementById("loginModal");
  const registerModalEl = document.getElementById("registerModal");
  const forgotPasswordModalEl = document.getElementById("forgotPasswordModal");

  const openRegisterFromLogin = document.getElementById("openRegisterFromLogin");
  const openLoginFromRegister = document.getElementById("openLoginFromRegister");
  const openForgotPasswordBtn = document.getElementById("openForgotPasswordModal");

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
