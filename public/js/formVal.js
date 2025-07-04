document.addEventListener('DOMContentLoaded', function() {
    // Get all forms that need validation
    const forms = document.querySelectorAll('.needs-validation');

    (() => {
        'use strict'
        const forms = document.querySelectorAll('.needs-validation');
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated');
            }, false)
        });
    })();
    // Add validation on form submit
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            // const inputs = form.querySelectorAll('input, textarea');
            // inputs.forEach(input => addValidationFeedback(input));

            form.classList.add('was-validated');
        });

        // Real-time validation on input
        // const inputs = form.querySelectorAll('input, textarea');
        // inputs.forEach(input => {
        //     input.addEventListener('input', function() {
        //         addValidationFeedback(this);
        //     });
        // });
    });
    const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(profileForm);
      const data = Object.fromEntries(formData.entries());
      try {
        const res = await fetch('/user/profile?_method=PUT', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        if (res.ok) {
          // Option 1: Redirect with JS
          window.location.href = '/user/profile';
          // Option 2: Show a success message without reload
          // document.getElementById('successMsg').innerText = "Profile updated!";
        } else {
          alert('Update failed');
        }
      } catch (err) {
        alert('Error updating profile');
      }
    });
  }
  
});

