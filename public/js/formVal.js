document.addEventListener('DOMContentLoaded', function() {
    // Get all forms that need validation
    const forms = document.querySelectorAll('.needs-validation');

    // Function to add validation feedback
    function addValidationFeedback(input) {
        // Remove existing feedback divs
        const existingFeedback = input.parentElement.querySelectorAll('.valid-feedback, .invalid-feedback');
        existingFeedback.forEach(div => div.remove());

        // Create feedback divs
        const validFeedback = document.createElement('div');
        validFeedback.className = 'valid-feedback';
        validFeedback.textContent = 'Looks good!';

        const invalidFeedback = document.createElement('div');
        invalidFeedback.className = 'invalid-feedback';
        invalidFeedback.textContent = `Please provide a valid ${input.placeholder || 'value'}`;

        // Add feedback divs after the input
        input.parentElement.appendChild(validFeedback);
        input.parentElement.appendChild(invalidFeedback);

        // Add validation classes based on input validity
        if (input.checkValidity()) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
        }
    }

    // Add validation on form submit
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => addValidationFeedback(input));

            form.classList.add('was-validated');
        });

        // Real-time validation on input
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                addValidationFeedback(this);
            });
        });
    });
});