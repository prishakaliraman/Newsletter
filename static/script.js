document.getElementById('subscribe-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    validateEmail();
});

document.getElementById('email-input').addEventListener('input', function() {
    const emailInput = document.getElementById('email-input');
    const errorMessage = document.getElementById('error-message');

    // Clear error message and reset input box style
    errorMessage.style.display = 'none';
    emailInput.classList.remove('invalid');
});

document.getElementById('email-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the form from submitting
        validateEmail();
    }
});

function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const errorMessage = document.getElementById('error-message');
    const emailValue = emailInput.value;

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        // Show error message and style the input box
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.display = 'block';
        emailInput.classList.add('invalid');
    } else {
        // Hide error message and reset input box style
        errorMessage.style.display = 'none';
        emailInput.classList.remove('invalid');
        // Submit the form
        document.querySelector('form').submit();
    }
}