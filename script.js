document.addEventListener('DOMContentLoaded', () => {
    const paymentSection = document.getElementById('payment-section');
    const registrationSection = document.getElementById('registration-section');
    const proceedBtn = document.getElementById('btn-proceed');
    const paymentCheckbox = document.getElementById('payment-check');

    /* 
       Step 2 Checkbox Logic:
       Although not explicitly asked to disable the button until checked in the main prompt code requirements,
       it's good UX to only allow proceeding if checked.
       However, the prompt says "Check if checkbox is checked" logic.
    */
    
    proceedBtn.addEventListener('click', () => {
        if (!paymentCheckbox.checked) {
            alert('Please confirm that you have completed the payment and taken a screenshot.');
            return;
        }

        // Hide Payment Section with specific step 1 & 2
        paymentSection.classList.add('hidden');
        
        // Show Hidden Google Form Section
        registrationSection.classList.remove('hidden');
        registrationSection.classList.add('fade-in');
    });
});
