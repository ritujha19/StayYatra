document.addEventListener('DOMContentLoaded', () => {
    console.log("swiper initialized");
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        slidesPerView: 3,
        spaceBetween: 0, // Remove space between slides
        speed: 800,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.9, // Adjust scale to reduce gaps
            slideShadows: true,
        },
        grabCursor: false,
        touchRatio: 0,
        preventClicks: true,
        preventClicksPropagation: true,
        simulateTouch: false
    });

    // Review delete confirmation
    const reviewDeleteForms = document.querySelectorAll('.review-delete-form');
    reviewDeleteForms.forEach(form => {
        form.addEventListener('submit', showReviewConfirmDialog);
    });

    // Confirm delete button
    document.querySelector('.confirm-review-delete').addEventListener('click', () => {
        if (currentReviewForm) {
            currentReviewForm.submit();
        }
        document.querySelector('.review-confirm-delete').style.display = 'none';
    });

    // Cancel delete button
    document.querySelector('.cancel-review-delete').addEventListener('click', () => {
        document.querySelector('.review-confirm-delete').style.display = 'none';
        currentReviewForm = null;
    });
});

let currentReviewForm = null;

function showReviewConfirmDialog(event) {
    event.preventDefault();
    currentReviewForm = event.target;
    const confirmDialog = document.querySelector('.review-confirm-delete');
    confirmDialog.style.display = 'flex';
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the eye icon (optional)
    this.querySelector('i').classList.toggle("fa-eye");
    this.querySelector('i').classList.toggle("fa-eye-slash");
});

