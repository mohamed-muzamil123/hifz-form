document.addEventListener('DOMContentLoaded', () => {
    const proceedBtn = document.getElementById('btn-proceed');
    const paymentCheckbox = document.getElementById('payment-check');

    // Function to toggle disabled state
    function toggleProceedButton() {
        if (paymentCheckbox.checked) {
            proceedBtn.classList.remove('disabled');
        } else {
            proceedBtn.classList.add('disabled');
        }
    }

    // Initial check (in case browser caches checkbox state)
    toggleProceedButton();

    // Listen for changes
    paymentCheckbox.addEventListener('change', toggleProceedButton);
});
