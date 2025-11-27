document.addEventListener("DOMContentLoaded", function () {
  const forgotPasswordModalEl = document.getElementById("forgotPasswordModal");
  const emailVerificationForm = document.getElementById("emailVerificationForm");
  const resetPasswordForm = document.getElementById("resetPasswordForm");
  const emailStep = document.getElementById("emailStep");
  const resetStep = document.getElementById("resetStep");

  // Step 1 — Verify Email
  if (emailVerificationForm) {
    emailVerificationForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("resetEmail").value;

      try {
        const res = await fetch("/auth/verify-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (data.success) {
          localStorage.setItem("resetEmail", email);
          emailStep.style.display = "none";
          resetStep.style.display = "block";
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert("Error verifying email.");
      }
    });
  }

  // Step 2 — Reset Password
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const newPass = document.getElementById("newPassword").value;
      const confirmPass = document.getElementById("confirmPassword").value;
      const email = localStorage.getItem("resetEmail");

      if (!email) return alert("Please verify your email first.");
      if (newPass !== confirmPass) return alert("Passwords do not match.");

      try {
        const res = await fetch("/auth/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password: newPass }),
        });

        const data = await res.json();

        if (data.success) {
          localStorage.removeItem("resetEmail");
          bootstrap.Modal.getOrCreateInstance(forgotPasswordModalEl).hide();
          window.location.reload();
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert("Error resetting password.");
      }
    });
  }

  // Password toggle
  document.querySelectorAll(".togglePassword").forEach((btn) => {
    btn.addEventListener("click", function () {
      const input =
        this.closest(".input-group").querySelector(".password-input");
      input.type = input.type === "password" ? "text" : "password";

      this.innerHTML =
        input.type === "password"
          ? '<i class="fas fa-eye"></i>'
          : '<i class="fas fa-eye-slash"></i>';
    });
  });

  // Reset modal on close
  const closeBtn = forgotPasswordModalEl.querySelector(".btn-close");
  closeBtn.addEventListener("click", function () {
    emailStep.style.display = "block";
    resetStep.style.display = "none";
    localStorage.removeItem("resetEmail");
  });
});
