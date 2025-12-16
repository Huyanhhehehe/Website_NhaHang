// Quantity control functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all quantity controls
    const quantityControls = document.querySelectorAll('.quantity-control');
    
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const qtyValue = control.querySelector('.qty-value');
        const row = control.closest('tr');
        const priceCell = row.querySelector('td:nth-child(3)');
        const totalCell = row.querySelector('.item-total');
        
        // Get unit price (remove 'đ' and parse)
        const unitPrice = parseInt(priceCell.textContent.replace(/[^\d]/g, ''));
        
        // Plus button click
        plusBtn.addEventListener('click', function() {
            let currentQty = parseInt(qtyValue.textContent);
            currentQty++;
            qtyValue.textContent = currentQty;
            updateTotal(currentQty, unitPrice, totalCell);
            updateOrderSummary();
        });
        
        // Minus button click
        minusBtn.addEventListener('click', function() {
            let currentQty = parseInt(qtyValue.textContent);
            if (currentQty > 0) {
                currentQty--;
                qtyValue.textContent = currentQty;
                updateTotal(currentQty, unitPrice, totalCell);
                updateOrderSummary();
            }
        });
    });
    
    // Update item total
    function updateTotal(qty, price, cell) {
        const total = qty * price;
        cell.textContent = total.toLocaleString('vi-VN') + 'đ';
    }
    
    // Update order summary
    function updateOrderSummary() {
        let grandTotal = 0;
        const itemTotals = document.querySelectorAll('.item-total');
        
        itemTotals.forEach(cell => {
            const amount = parseInt(cell.textContent.replace(/[^\d]/g, ''));
            grandTotal += amount;
        });
        
        // Update summary amounts
        const summaryAmounts = document.querySelectorAll('.summary-row .amount');
        if (summaryAmounts.length >= 2) {
            summaryAmounts[0].textContent = grandTotal.toLocaleString('vi-VN') + 'đ';
            summaryAmounts[2].textContent = grandTotal.toLocaleString('vi-VN') + 'đ';
        }
    }
});

console.log('Order page loaded successfully');
