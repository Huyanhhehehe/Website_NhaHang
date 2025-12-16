// Show success dialog after 30 seconds
window.addEventListener('DOMContentLoaded', function() {
    const successDialog = document.getElementById('successDialog');
    
    // Show dialog after 30 seconds (30000 milliseconds)
    setTimeout(function() {
        successDialog.classList.add('show');
    }, 30000);
});

console.log('Payment page loaded successfully');
