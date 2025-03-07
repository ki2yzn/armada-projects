let balance = 0;
let withdrewAmmount = 0;
const dailyWithdrawLimit = 500;
const inputElement = document.getElementById('cash-input');

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

// Add transaction to the transaction history list
function addTransaction(value, mode) {
	// Get the transaction history element
	const transactionHistory = document.getElementById('history-list');

	// Create the transaction element
	const transaction = document.createElement('li');
	transaction.className = 'transaction';
	transaction.innerText = `${mode === 'deposit' ? 'Deposit' : 'Withdraw'}: $${value}`; 

	// Insert the transaction to the list.
	// If history is empty, use appendChild. Otherwise, use insertBefore so latest transactions stay on top of the list.
	if(!transactionHistory.innerText) {
		transactionHistory.appendChild(transaction);
	} else {
		const reference = document.querySelector('.transaction');
		transactionHistory.insertBefore(transaction, reference);
	}
};

// Deposit value by incrementing the balance 
function doTransaction(mode) {
	// Get the value of the cash input
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
			// Check if balance is enough
			if((value <= balance && value > 0) && balance > 0) {
				// Check if daily limit has been reached. Stop the transaction if true
				if((withdrewAmmount + value) > dailyWithdrawLimit) {
					showNotification('Daily withdraw limit reached!', 'fail');
					inputElement.value = ''; //Clear the cash input
					return;
				}

				withdrewAmmount += value;
				balance -= value;
				
			} 

			// Prevents invalid withdraw ammount
			else if(value <= 0 || !value) {
				showNotification('Invalid withdraw ammount!', 'fail');
				inputElement.value = ''; //Clear the cash input
				return;
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
			return;
	};

	// Updates the balance on the page
	document.getElementById('balance').innerText = `$${balance}`;

	// Display transaction notification
	showNotification(`Succesfully ${mode === 'deposit' ? 'deposited' : 'withdrew'} $${value}.`, 'success');

	// Add the transaction to the history list
	addTransaction(value, mode);

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