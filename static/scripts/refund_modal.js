document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('refundConfirmationModal');
    const refundForm = document.getElementById('refundForm');
    const confirmationText = document.getElementById('refundConfirmationText');

    const refundButtons = document.querySelectorAll('.refund-button');
    refundButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const eventId = this.getAttribute('data-event-id');
            const refundableQuantity = this.getAttribute('data-refundable-quantity');  // Retrieve refundable_quantity

            console.log(refundableQuantity);  // Log the value to the console

            const actionUrl = `/tickets/${eventId}/refund/`;
            refundForm.setAttribute('action', actionUrl);

            confirmationText.textContent = `Are you sure you want to refund ${refundableQuantity} ticket(s) for Event ID ${eventId}?`;
            modal.style.display = 'block';
        });
    });

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

function closeRefundModal() {
    const modal = document.getElementById('refundConfirmationModal');
    modal.style.display = 'none';
}
