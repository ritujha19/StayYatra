document.addEventListener("DOMContentLoaded", function () {
  const pricePerNight = Number(document.getElementById("listing-data").dataset.price);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // --- Air Datepicker Setup ---
  let checkinPicker, checkoutPicker;

  checkinPicker = new AirDatepicker('#checkinDate', {
    minDate: tomorrow,
    dateFormat: 'dd-MM-yyyy',
    autoClose: true,
    onSelect: function ({date}) {
      if (date) {
        // Set min/max for checkout (1 to 5 nights after check-in)
        let minCheckout = new Date(date);
        minCheckout.setDate(minCheckout.getDate() + 1);
        let maxCheckout = new Date(date);
        maxCheckout.setDate(maxCheckout.getDate() + 5);

        checkoutPicker.update({
          minDate: minCheckout,
          maxDate: maxCheckout
        });

        // If current checkout value is out of range, clear it
        const checkoutInput = document.getElementById('checkoutDate');
        if (checkoutInput.value) {
          const [d, m, y] = checkoutInput.value.split('-');
          const dt = new Date(`${y}-${m}-${d}`);
          if (dt < minCheckout || dt > maxCheckout) {
            checkoutInput.value = '';
          }
        }
      }
      updateTotalPrice();
      document.getElementById('checkinDate').dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  checkoutPicker = new AirDatepicker('#checkoutDate', {
    dateFormat: 'dd-MM-yyyy',
    autoClose: true,
    onSelect: function () {
      updateTotalPrice();
      document.getElementById('checkoutDate').dispatchEvent(new Event('change', { bubbles: true }));
    }
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
