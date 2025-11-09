// Password Reset Modal Logic
document.addEventListener("DOMContentLoaded", function () {
  // Get elements once
  const loginModalEl = document.getElementById("loginModal");
  const forgotPasswordModalEl = document.getElementById("forgotPasswordModal");
  const openForgotPasswordBtn = document.getElementById(
    "openForgotPasswordModal"
  );
  const emailVerificationForm = document.getElementById(
    "emailVerificationForm"
  );
  const resetPasswordForm = document.getElementById("resetPasswordForm");
  const emailStep = document.getElementById("emailStep");
  const resetStep = document.getElementById("resetStep");

  // Modal switching
  if (openForgotPasswordBtn && forgotPasswordModalEl) {
    openForgotPasswordBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Opening forgot password modal");

      const loginModal = bootstrap.Modal.getInstance(loginModalEl);
      if (loginModal) {
        loginModal.hide();
        loginModalEl.addEventListener(
          "hidden.bs.modal",
          function handler() {
            loginModalEl.removeEventListener("hidden.bs.modal", handler);
            const forgotPasswordModal = new bootstrap.Modal(
              forgotPasswordModalEl
            );
            forgotPasswordModal.show();
          },
          { once: true }
        );
      }
    });
  }

  // Email verification form handler
  if (emailVerificationForm) {
    emailVerificationForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const email = document.getElementById("resetEmail").value;

      try {
        const response = await fetch("/auth/verify-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (data.success) {
          // Store email for password reset
          localStorage.setItem("resetEmail", email);
          // Show reset password form
          emailStep.style.display = "none";
          resetStep.style.display = "block";
        } else {
          alert(data.message || "Email verification failed");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("An error occurred. Please try again.");
      }
    });
  }

  // Password reset form handler
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const newPassword = document.getElementById("newPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const email = localStorage.getItem("resetEmail");

      if (!email) {
        alert("Email verification required");
        return;
      }

      if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const response = await fetch("/auth/reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password: newPassword,
          }),
        });

        const data = await response.json();

        if (data.success) {
          localStorage.removeItem("resetEmail"); // Clean up
          alert("Password reset successful!");
          // Close the modal
          const modal = bootstrap.Modal.getInstance(
            document.getElementById("forgotPasswordModal")
          );
          modal.hide();
          // Redirect or refresh
          window.location.href = "/";
        } else {
          alert(data.message || "Password reset failed");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("An error occurred. Please try again.");
      }
    });
  }

  // Password toggle buttons
  document.querySelectorAll(".togglePassword").forEach((button) => {
    button.addEventListener("click", function () {
      const input =
        this.closest(".input-group").querySelector(".password-input");
      if (input.type === "password") {
        input.type = "text";
        this.innerHTML = '<i class="fas fa-eye-slash"></i>';
      } else {
        input.type = "password";
        this.innerHTML = '<i class="fas fa-eye"></i>';
      }
    });
  });

  // Open forgot password modal
  document
    .getElementById("openForgotPasswordModal")
    .addEventListener("click", function (e) {
      e.preventDefault();

      // Hide login modal
      const loginModal = bootstrap.Modal.getInstance(
        document.getElementById("loginModal")
      );
      loginModal.hide();

      // Show forgot password modal
      const forgotPasswordModal = new bootstrap.Modal(
        document.getElementById("forgotPasswordModal")
      );
      forgotPasswordModal.show();
    });

  // Add modal close handler
  if (forgotPasswordModalEl) {
    forgotPasswordModalEl.addEventListener("hidden.bs.modal", function () {
      // Remove any leftover backdrops
      const backdrops = document.getElementsByClassName("modal-backdrop");
      while (backdrops.length > 0) {
        backdrops[0].parentNode.removeChild(backdrops[0]);
      }
      // Re-enable body scrolling
      document.body.classList.remove("modal-open");
    });
  }

  // Update the existing close button click handler
  const closeBtn = forgotPasswordModalEl?.querySelector(".btn-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const modal = bootstrap.Modal.getInstance(forgotPasswordModalEl);
      if (modal) {
        modal.hide();
        // Reset form state
        if (emailStep) emailStep.style.display = "block";
        if (resetStep) resetStep.style.display = "none";
        // Clear stored email
        localStorage.removeItem("resetEmail");
      }
    });
  }

  // Handle profile page change password
  const changePasswordBtn = document.getElementById("openForgotPasswordModal");
  if (changePasswordBtn) {
    changePasswordBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Opening password modal from profile");

      const forgotPasswordModal = new bootstrap.Modal(forgotPasswordModalEl);

      // Reset form to initial state
      if (emailStep) emailStep.style.display = "block";
      if (resetStep) resetStep.style.display = "none";

      // Update modal title for profile context
      const modalTitle = forgotPasswordModalEl.querySelector(".modal-title");
      if (modalTitle) {
        modalTitle.innerHTML = '<i class="fas fa-key me-2"></i>Change Password';
      }

      forgotPasswordModal.show();
    });
  }
});
