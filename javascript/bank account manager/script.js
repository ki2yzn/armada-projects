let balance = 0;

// Disable default form submit behavior
document.getElementById('bank-form').addEventListener('submit', (event) => {
	event.preventDefault();
});

// Display notification by modifying the notification element
function showNotification(content, result) {
	// Update the innertext of the notification
	const notificationElement = document.getElementById('notification')
	notificationElement.innerText = content;

	// Change notification color based on result
	notificationElement.style.color = result === 'success' ? 'green' : 'red'; 
};

// Deposit value by incrementing the balance 
function doTransaction(mode) {
	// Get the value of the cash input
	const inputElement = document.getElementById('cash-input');
	const value = Number(inputElement.value);
	
	switch(mode) {
		case 'deposit':
			if(value > 0) {
				balance += value;
			} else {
				console.log(value);
				showNotification('Invalid deposit ammount!', 'fail');
				return;
			}

			break;
			
		case 'withdraw':
			if(value <= balance && balance > 0) {
				balance -= value;
			} else {
				// If balance is insufficient, show notification and stop the code here
				showNotification('Insufficient balance!', 'fail');
				inputElement.value = ''; //Clear the cash input
				return;
			}
			break;

		default:
			console.log('Invalid mode!');
	};

	// Updates the balance on the page
	document.getElementById('balance').innerText = `$${balance}`;

	// Display transaciton notification
	showNotification(`Succesfully ${mode === 'deposit' ? 'deposited' : 'withdrew'} $${value}.`, 'success');

	// Clear the cash input
	inputElement.value = '';
};

// Add event listener for the deposit button
document.getElementById('deposit').addEventListener('click', () => {
	doTransaction('deposit');
});

// Add event listener for the withdraw button
document.getElementById('withdraw').addEventListener('click', () => {
	doTransaction('withdraw');
});