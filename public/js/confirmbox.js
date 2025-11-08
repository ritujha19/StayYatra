const setupConfirmationSystem = () => {
  // Delete buttons
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const deleteOverlay = document.getElementById("confirm-delete-overlay");
  const deleteForm = document.getElementById("delete-form");

  // Cancel booking buttons
  const cancelBtns = document.querySelectorAll(".cancel-booking-btn");

  // Handle delete buttons
  if (deleteBtns) {
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const form = btn.closest("form");
        const formAction = form.getAttribute("action");

        // Update confirmation form action
        deleteForm.setAttribute("action", formAction);

        // Show delete overlay
        deleteOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });
  }
  // Handle cancel booking buttons
  if (cancelBtns) {
    cancelBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const form = btn.closest("form");
        const formAction = form.getAttribute("action");

        // Update confirmation form action
        const cancelForm = document.getElementById("cancel-booking-form");
        cancelForm.setAttribute("action", formAction);

        // Show cancel overlay
        const cancelOverlay = document.getElementById("confirm-cancel-overlay");
        cancelOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });
  }

  // Handle overlay closing for both overlays
  document.querySelectorAll(".confirm-overlay").forEach((overlay) => {
    // Close button handler
    const closeBtn = overlay.querySelector(".cancel-overlay-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        document.body.style.overflow = "";
      });
    }
    // Click outside to close
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  });
};

// Initialize confirmation system
setupConfirmationSystem();
