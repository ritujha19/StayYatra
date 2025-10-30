document.addEventListener("DOMContentLoaded", function () {
  console.log("Booking JS loaded");
  const pricePerNight = Number(document.getElementById("listing-data").dataset.price);

 document.addEventListener("DOMContentLoaded", function () {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const checkinElem = document.getElementById('checkinDate');
  const checkoutElem = document.getElementById('checkoutDate');

  // Vanilla JS Datepicker setup
  const checkinPicker = new Datepicker(checkinElem, {
    format: 'dd-mm-yyyy',
    autohide: true,
    minDate: tomorrow
  });

  const checkoutPicker = new Datepicker(checkoutElem, {
    format: 'dd-mm-yyyy',
    autohide: true
  });

  // When check-in changes, update checkout min/max dates
  checkinElem.addEventListener('change', function () {
    const checkinDate = checkinPicker.getDate();
    if (checkinDate) {
      let minCheckout = new Date(checkinDate);
      minCheckout.setDate(minCheckout.getDate() + 1);
      let maxCheckout = new Date(checkinDate);
      maxCheckout.setDate(maxCheckout.getDate() + 5);

      checkoutPicker.setOptions({
        minDate: minCheckout,
        maxDate: maxCheckout
      });

      // Clear checkout if it's out of range
      const checkoutDate = checkoutPicker.getDate();
      if (checkoutDate && (checkoutDate < minCheckout || checkoutDate > maxCheckout)) {
        checkoutElem.value = "";
      }
    }
    updateTotalPrice();
  });

  checkoutElem.addEventListener('change', function () {
    updateTotalPrice();
  });

});


  // --- Price/duration display ---
  function updateTotalPrice() {
    const checkinStr = document.getElementById('checkinDate').value;
    const checkoutStr = document.getElementById('checkoutDate').value;
    const priceDisplay = document.querySelector(".alert-info p.mb-0");
    if (checkinStr && checkoutStr) {
      const [cd, cm, cy] = checkinStr.split('-');
      const [cod, com, coy] = checkoutStr.split('-');
      const checkinDate = new Date(`${cy}-${cm}-${cd}`);
      const checkoutDate = new Date(`${coy}-${com}-${cod}`);
      const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
      if (nights > 0) {
        const totalPrice = nights * pricePerNight;
        priceDisplay.innerHTML = `
          Price per night: ₹${pricePerNight}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="text-success fw-bold">Total for ${nights} nights: ₹${totalPrice}</span>
          <span class="text-muted text-small d-block">includes all fees</span>
        `;
        return;
      }
    }
    priceDisplay.innerHTML = `
      Price per night: ₹${pricePerNight}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span class="text-muted text-small">includes all fees</span>
    `;
  }

  // --- Guest selection ---
  function updateGuestLabel() {
    const adults = parseInt(document.getElementById("adult-count").textContent, 10);
    const children = parseInt(document.getElementById("child-count").textContent, 10);
    let label = "Add guests";
    if (adults + children > 0) {
      label = `${adults + children} guest${adults + children > 1 ? "s" : ""}`;
    }
    document.getElementById("guest-selected-label").textContent = label;
  }

  document.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const type = this.getAttribute("data-type");
      const countSpan = document.getElementById(type + "-count");
      countSpan.textContent = parseInt(countSpan.textContent, 10) + 1;
      updateGuestLabel();
    });
  });

  document.querySelectorAll(".minus-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const type = this.getAttribute("data-type");
      const countSpan = document.getElementById(type + "-count");
      let current = parseInt(countSpan.textContent, 10);
      if (type === "adult" && current > 1) {
        countSpan.textContent = current - 1;
      } else if (type === "child" && current > 0) {
        countSpan.textContent = current - 1;
      }
      updateGuestLabel();
    });
  });

  updateGuestLabel();
  updateTotalPrice();

  // --- Bootstrap Validation and Alert ---
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Collect data for alert
    const checkInDate = document.getElementById("checkinDate").value;
    const checkOutDate = document.getElementById("checkoutDate").value;
    const adults = parseInt(document.getElementById("adult-count").textContent, 10);
    const children = parseInt(document.getElementById("child-count").textContent, 10);
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

    // Uncomment for real submission:
    // form.submit();
  });
});
