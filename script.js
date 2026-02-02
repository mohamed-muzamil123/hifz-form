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

// Copy UPI ID function
function copyUpiId() {
    const upiId = 'ktaflah295-1@oksbi';

    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(upiId).then(() => {
            alert('UPI ID copied: ' + upiId);
        }).catch(() => {
            // Fallback
            fallbackCopy(upiId);
        });
    } else {
        // Fallback for older browsers
        fallbackCopy(upiId);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('UPI ID copied: ' + text);
    } catch (err) {
        alert('Failed to copy. UPI ID: ' + text);
    }
    document.body.removeChild(textArea);
}
