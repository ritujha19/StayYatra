document.addEventListener("DOMContentLoaded", function () {
  function setupPasswordToggles() {
    const toggleButtons = document.querySelectorAll(".togglePassword");

    toggleButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Toggle button clicked");

        // Find input field
        const inputGroup = this.closest(".input-group");
        const input = inputGroup.querySelector(".password-input");

        if (!input) {
          console.error("Password input not found");
          return;
        }

        // Toggle password visibility
        const currentType = input.type;
        input.type = currentType === "password" ? "text" : "password";

        // Toggle icon
        const icon = this.querySelector("i");
        if (icon) {
          console.log("Changing icon from", icon.className);
          if (currentType === "password") {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
          } else {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
          }
          console.log("Icon changed to", icon.className);
        }
      });
    });
  }

  // Initialize on DOM load
  document.addEventListener("DOMContentLoaded", setupPasswordToggles);
});
