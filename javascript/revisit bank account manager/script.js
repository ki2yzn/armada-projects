// Disable default form submit behavior
document.getElementById('bank-form').addEventListener('submit', (event) => {
	event.preventDefault();
});

let balance = 0;
let withdrewAmmount = 0;
const dailyWithdrawLimit = 500;
const inputElement = document.getElementById('cash-input');

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
	const value = Number(inputElement.value);
	
	switch(mode) {
		case 'deposit':
			balance += value;
			break;

		case 'withdraw':
			// Check if balance is enough
			if(value <= balance && balance > 0) {
				// Check if daily limit has been reached. Stop the transaction if true
				if((withdrewAmmount + value) > dailyWithdrawLimit) {
					showNotification('Daily withdraw limit reached!', 'fail');
					inputElement.value = ''; //Clear the cash input
					return;
				}

				withdrewAmmount += value;
				balance -= value;
			} 
			
			else {
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

	console.log(withdrewAmmount);
};

// Add event listener for the deposit button
document.getElementById('deposit').addEventListener('click', () => {
	doTransaction('deposit');
});

// Add event listener for the withdraw button
document.getElementById('withdraw').addEventListener('click', () => {
	doTransaction('withdraw');
});