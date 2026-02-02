document.addEventListener('DOMContentLoaded', () => {
    const paymentCheck = document.getElementById('payment-check');
    const registerBtn = document.getElementById('btn-register');

    function toggleHighlight() {
        if (paymentCheck.checked) {
            registerBtn.classList.add('active');
            // Optional: Change text or add glow
        } else {
            registerBtn.classList.remove('active');
        }
    }

    // Initialize
    toggleHighlight();

    // Listen
    paymentCheck.addEventListener('change', toggleHighlight);
});
