// Used for adding id to task elements
let count = 1; 

// Used for resetting existing setTimeout
let timeoutId;

// Disable default behavior of form. Refreshing when submitted.
document.getElementById('task-form').addEventListener('submit', (event) =>  {
	event.preventDefault();
});

// Hide the notification by changing its display property to none
function hideNotification(notification) {
	notification.style.display = 'none';
};

// Show notification by changing the display property of the notification element
function showNotification(content) {
	// Get the notification element
	const notificationElement = document.getElementById('notification');

	// Set the content
	notificationElement.innerHTML = `${content} <button onclick="hideNotification(${notificationElement.id})">X</button>`;

	// Display the notification
	notificationElement.style.display = 'flex';

	// Clear previous existing timeouts
	clearTimeout(timeoutId)

	// Automatically hide the notification after 5 secs
	timeoutId = setTimeout(() => {
		notificationElement.style.display = 'none';
	}, 5000);
};

// Remove the task from the dom by using remove()
function removeTask(task, value) {
	showNotification(`Task removed: ${value}`);
	task.remove();
}

function addTask() {
	// Get the task input
	const taskInput = document.querySelector('.task-name-input');

	// Stop the code here if input is empty
	if(!taskInput.value) {
		showNotification('Task is empty!');
		return;
	};

	// Get the task container
	const taskContainer = document.querySelector('.tasks-container');

	// Create the task element with ID
	const taskElement = document.createElement('li');
	taskElement.id = `task${count}`;

	// Add remove button for the task
	taskElement.innerHTML = `
		<p>${taskInput.value}</p> 
		<button onclick="removeTask(${taskElement.id}, '${taskInput.value}')">
			Remove
		</button>
	`;

	// Add event listener to the task so it can be toggled as complete
	taskElement.addEventListener('click', () => {
		taskElement.classList.toggle('complete');
	});

	// Insert the task to the container
	taskContainer.appendChild(taskElement);

	// Show notification
	showNotification(`Task added: ${taskInput.value}`);

	// Clear the add task input
	taskInput.value = '';

	count++;
};