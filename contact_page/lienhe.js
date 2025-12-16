// Get form and dialog elements
const contactForm = document.getElementById('contactForm');
const successDialog = document.getElementById('successDialog');
const dialogOkBtn = document.getElementById('dialogOkBtn');
const phoneInput = document.getElementById('phone');

// Handle form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    
    // Validate phone number
    const phonePattern = /^0[0-9]{9}$/;
    const phoneValue = phoneInput.value.trim();
    
    if (!phonePattern.test(phoneValue)) {
        alert('Số điện thoại phải có 10 số và bắt đầu bằng 0');
        phoneInput.focus();
        return;
    }
    
    // Show success dialog
    successDialog.classList.add('show');
    
    // Reset form
    contactForm.reset();
});

// Handle OK button click
dialogOkBtn.addEventListener('click', function() {
    // Hide dialog and stay on the same page
    successDialog.classList.remove('show');
});

// Close dialog when clicking outside the dialog box
successDialog.addEventListener('click', function(e) {
    if (e.target === successDialog) {
        successDialog.classList.remove('show');
    }
});
