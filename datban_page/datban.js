// Reservation form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    
    // Set default date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today; // Prevent selecting past dates
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            guests: document.getElementById('guests').value
        };
        
        // Log form data (in real app, would send to server)
        console.log('Reservation submitted:', formData);
        
        // In production, redirect to success page
        // window.location.href = '../trangthoat1/success.html';
        
        // Reset form
        form.reset();
        dateInput.value = today;
    });
    
    // Phone number validation
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Limit to 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
});
