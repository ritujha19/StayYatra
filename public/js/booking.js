document.addEventListener("DOMContentLoaded", function () {
  console.log("Booking JS loaded");

  const listingDataElem = document.getElementById("listing-data");
  if (!listingDataElem) {
    console.warn("listing-data element not found, skipping booking JS");
    return;
  }

  const pricePerNight = Number(listingDataElem.dataset.price);
  const checkinElem = document.getElementById("checkinDate");
  const checkoutElem = document.getElementById("checkoutDate");

  // --- DATEPICKER SETUP ---
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const checkinPicker = new Datepicker(checkinElem, {
    format: "dd-mm-yyyy",
    autohide: true,
    minDate: tomorrow,
  });

  let checkoutPicker = new Datepicker(checkoutElem, {
    format: "dd-mm-yyyy",
    autohide: true,
  });

  // --- CHECK-IN DATE HANDLER ---
  function handleCheckinChange() {
    const checkinDate = checkinPicker.getDate();
    if (checkinDate) {
      const minCheckout = new Date(checkinDate);
      minCheckout.setDate(minCheckout.getDate() + 1);

      const maxCheckout = new Date(checkinDate);
      maxCheckout.setDate(maxCheckout.getDate() + 5);

      checkoutPicker.setOptions({
        minDate: minCheckout,
        maxDate: maxCheckout,
      });

      // Clear checkout date if out of range
      const checkoutDate = checkoutPicker.getDate();
      if (
        checkoutDate &&
        (checkoutDate < minCheckout || checkoutDate > maxCheckout)
      ) {
        checkoutElem.value = "";
      }
    }
    updateTotalPrice();
  }

  // --- EVENT LISTENERS ---
  checkinElem.addEventListener("change", handleCheckinChange);
  checkinElem.addEventListener("changeDate", handleCheckinChange);
  checkoutElem.addEventListener("change", updateTotalPrice);
  checkoutElem.addEventListener("changeDate", updateTotalPrice);

  // --- PRICE DISPLAY HANDLER ---
  function updateTotalPrice() {
    const priceDisplay = document.querySelector(".alert-info p.mb-0");
    const totalPriceInput = document.getElementById("total-price-input");

    if (!priceDisplay || !totalPriceInput) return;

    const checkinStr = checkinElem.value;
    const checkoutStr = checkoutElem.value;

    if (checkinStr && checkoutStr) {
      const [cd, cm, cy] = checkinStr.split("-");
      const [cod, com, coy] = checkoutStr.split("-");
      const checkinDate = new Date(`${cy}-${cm}-${cd}`);
      const checkoutDate = new Date(`${coy}-${com}-${cod}`);

      const nights = Math.ceil(
        (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
      );
      if (nights > 0) {
        const totalPrice = nights * pricePerNight;
        totalPriceInput.value = totalPrice; // Update hidden input
        priceDisplay.innerHTML = `
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-success fw-bold">Total for ${nights} nights: ₹${totalPrice}</span>
                <span class="text-muted text-small d-block">includes all fees</span>
            `;
        return;
      }
    }

    // Reset if no valid date range
    totalPriceInput.value = pricePerNight; // Reset to per night price
    priceDisplay.innerHTML = `
        Price per night: ₹${pricePerNight}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="text-muted text-small">includes all fees</span>
    `;
  }

  // --- GUEST SELECTION ---
  function updateGuestLabel() {
    const adults = parseInt(
      document.getElementById("adult-count").textContent,
      10
    );
    const children = parseInt(
      document.getElementById("child-count").textContent,
      10
    );
    let label = "Add guests";
    if (adults + children > 0) {
      label = `${adults + children} guest${adults + children > 1 ? "s" : ""}`;
    }
    document.getElementById("guest-selected-label").textContent = label;
  }

  // Update the guest counter functions
  document.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
       e.preventDefault();  // Prevent dropdown from closing
      const type = this.getAttribute("data-type");
      const countSpan = document.getElementById(type + "-count");
      const hiddenInput = document.getElementById(type + "-count-input");
      const newValue = parseInt(countSpan.textContent, 10) + 1;

      countSpan.textContent = newValue;
      hiddenInput.value = newValue; // Update hidden input
      updateGuestLabel();
    });
  });

  document.querySelectorAll(".minus-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();  // Prevent dropdown from closing
      const type = this.getAttribute("data-type");
      const countSpan = document.getElementById(type + "-count");
      const hiddenInput = document.getElementById(type + "-count-input");
      let current = parseInt(countSpan.textContent, 10);

      if (type === "adult" && current > 1) {
        countSpan.textContent = current - 1;
        hiddenInput.value = current - 1; // Update hidden input
      } else if (type === "child" && current > 0) {
        countSpan.textContent = current - 1;
        hiddenInput.value = current - 1; // Update hidden input
      }
      updateGuestLabel();
    });
  });

  // Initialize labels and prices
  updateGuestLabel();
  updateTotalPrice();

  // --- FORM VALIDATION ---
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const checkInDate = checkinElem.value;
    const checkOutDate = checkoutElem.value;
    const adults = parseInt(
      document.getElementById("adult-count").textContent,
      10
    );
    const children = parseInt(
      document.getElementById("child-count").textContent,
      10
    );

    const priceDisplay = document.querySelector(".alert-info p.mb-0");
    const totalPrice =
      priceDisplay.querySelector(".text-success")?.textContent ||
      "Price calculation pending";

    alert(
      `Booking Confirmed!\n` +
        `Check-in: ${checkInDate}\n` +
        `Check-out: ${checkOutDate}\n` +
        `Guests: ${adults + children}\n` +
        `${totalPrice}\n\n` +
        `Note: This is a demo booking - no payment will be processed.`
    );

    // Uncomment for real submission
    form.submit();
  });
});
