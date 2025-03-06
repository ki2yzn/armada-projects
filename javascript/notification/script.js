// Added notification count to indentify the latest notification
let notificationCount = 1;

// Remove notification based on its id
function removeNotification(notificationID) {
	const notification = document.getElementById(notificationID);
	notification.remove();
};
	
function addNotification() {
	// Create the notification element
	const notification = document.createElement('p');

	// Add class and id to the notification 
	notification.id = `notification${notificationCount}`;
	notification.className = 'notification'

	// Insert the message and remove button of the notification
	notification.innerHTML = `
		${notificationCount}. You have a new message! 
		<button onclick="removeNotification('${notification.id}')">X</button>
	`;

	// Get the container element for notifications
	const notificationContainer = document.getElementById('notifications-container');

	// Check if the notification container is empty
	if(!notificationContainer.innerText.length) {
		// Add notification using appendChild
		notificationContainer.appendChild(notification);

		console.log('First notification added using appendChild()');
		
	} else {
		// Get reference Element
		const referenceElement = document.querySelector('p');

		// Add notification using insertBefore()
		notificationContainer.insertBefore(notification, referenceElement);

		console.log('Notification already exists. Using insertBefore() now');
	}

	notificationCount++;

	// Automatically removes the notification after 5 seconds not if closed manually
	setTimeout(() => {
		notification.remove();
	}, 5000);
}