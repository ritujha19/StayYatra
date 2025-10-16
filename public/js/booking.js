document.addEventListener("DOMContentLoaded", function () {
    const pricePerNight = Number(
      document.getElementById("listing-data").dataset.price
    );

    // Initialize checkin datepicker
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const checkinPicker = flatpickr("#checkinDate", {
      minDate: tomorrow,
      dateFormat: "d-m-y",
      onChange: function (selectedDates, dateStr, instance) {
        if (selectedDates.length) {
          let checkinDate = new Date(selectedDates[0]);
          // Set minimum checkout date to the day AFTER check-in
          let minCheckoutDate = new Date(checkinDate);
          minCheckoutDate.setDate(minCheckoutDate.getDate() + 1);

          // Set maximum checkout date to 5 days after check-in
          let maxCheckoutDate = new Date(checkinDate);
          maxCheckoutDate.setDate(maxCheckoutDate.getDate() + 5);

          checkoutPicker.set("minDate", minCheckoutDate);
          checkoutPicker.set("maxDate", maxCheckoutDate);

          // Clear checkout date if it's before new minimum
          let currentCheckout = checkoutPicker.selectedDates[0];
          if (currentCheckout && currentCheckout < minCheckoutDate) {
            checkoutPicker.clear();
          }
        }
      },
    });

    const checkoutPicker = flatpickr("#checkoutDate", {
      dateFormat: "d-m-y",
      onChange: function (selectedDates) {
        updateTotalPrice(); // Update price when checkout changes
      },
    });

    // Function to calculate and display total price
    function updateTotalPrice() {
      const checkinDate = checkinPicker.selectedDates[0];
      const checkoutDate = checkoutPicker.selectedDates[0];
      const priceDisplay = document.querySelector(".alert-info p.mb-0");

      if (checkinDate && checkoutDate) {
        // Calculate number of nights
        const diffTime = checkoutDate.getTime() - checkinDate.getTime();
        const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (nights > 0) {
          const totalPrice = nights * pricePerNight;
          priceDisplay.innerHTML = `
                    Price per night: ₹${pricePerNight}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="text-success fw-bold">Total for ${nights} nights: ₹${totalPrice}</span>
                    <span class="text-muted text-small d-block">includes all fees</span>
                `;
        }
      } else {
        priceDisplay.innerHTML = `
                Price per night: ₹${pricePerNight}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-muted text-small">includes all fees</span>
            `;
      }
    }

    // Guest selection logic
    function updateGuestLabel() {
      const adults = parseInt(
        document.getElementById("adult-count").textContent
      );
      const children = parseInt(
        document.getElementById("child-count").textContent
      );
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
        countSpan.textContent = parseInt(countSpan.textContent) + 1;
        updateGuestLabel();
      });
    });

    document.querySelectorAll(".minus-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        const countSpan = document.getElementById(type + "-count");
        let current = parseInt(countSpan.textContent);
        if (type === "adult" && current > 1) {
          // minimum 1 adult
          countSpan.textContent = current - 1;
        } else if (type === "child" && current > 0) {
          countSpan.textContent = current - 1;
        }
        updateGuestLabel();
      });
    });

    // On page load
    updateGuestLabel();
    const checkInInput = document.getElementById('checkinDate');
    const checkOutInput = document.getElementById('checkoutDate');
    const bookNowButton = document.querySelector('.bookButton');
    
    // Add click event listener to the Book Now button
    bookNowButton.addEventListener('click', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Validate all required fields
        const checkInDate = checkInInput.value.trim();
        const checkOutDate = checkOutInput.value.trim();
        
        // Check if all required fields are filled
        if (!checkInDate) {
            alert('Please select a check-in date');
            return;
        }
        if (!checkOutDate) {
            alert('Please select a check-out date');
            return;
        }
        
        // All details are filled - show success alert
        alert(`Booking Confirmed!\n\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nPrice: ₹1200 per night 
            we cannot proceess your payment right now as it is for demo purpose only`);
        // Optionally, proceed with form submission here
        // bookNowButton.closest('form').submit();
    });

    // Replace the existing button event listener
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const checkInDate = document.getElementById('checkinDate').value;
        const checkOutDate = document.getElementById('checkoutDate').value;
        const adults = document.getElementById('adult-count').textContent;
        const children = document.getElementById('child-count').textContent;
        
        if (!checkInDate || !checkOutDate) {
            alert('Please select both check-in and check-out dates');
            return;
        }

        const priceDisplay = document.querySelector(".alert-info p.mb-0");
        const totalPrice = priceDisplay.querySelector('.text-success')?.textContent || 'Price calculation pending';

        alert(`Booking Confirmed!\n
    Check-in: ${checkInDate}
    Check-out: ${checkOutDate}
    Guests: ${parseInt(adults) + parseInt(children)}
    ${totalPrice}
    
    Note: This is a demo booking - no payment will be processed.`);
    });
  });
