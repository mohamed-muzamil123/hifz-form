document.addEventListener('DOMContentLoaded', () => {
    const paymentCheck = document.getElementById('payment-check');
    const modal = document.getElementById('whatsapp-modal');
    const closeModal = document.querySelector('.close-modal');

    // Show modal when checkbox is checked
    paymentCheck.addEventListener('change', () => {
        if (paymentCheck.checked) {
            modal.style.display = 'block';
        }
    });

    // Close modal when X is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
