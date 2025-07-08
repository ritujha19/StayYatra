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

            form.classList.add('was-validated');
        });
    });
    const profileForm = document.getElementById('profileForm');

    if (profileForm) {
      profileForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(profileForm);
        const urlData = new URLSearchParams(formData);

        try {
          const res = await fetch('/user/profile?_method=PUT', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
            },
            body: urlData
          });

          const result = await res.json();
          const successMsg = document.getElementById('successMsg');

          if (result.success) {
            successMsg.innerText = result.message;
            successMsg.style.display = "inline-block";
            setTimeout(() => successMsg.style.display = "none", 3000);
          } else {
            alert(result.message || 'Something went wrong');
          }

        } catch (err) {
          console.error(err);
          alert("Something went wrong while updating");
        }
      });
    }
});

