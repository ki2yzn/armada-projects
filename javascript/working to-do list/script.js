// Used for adding id to task elements
let count = 1; 

// Disable default behavior of form. Refreshing when submitted.
document.getElementById('task-form').addEventListener('submit', (event) =>  {
	event.preventDefault();
});

function removeTask(task, value) {
	alert(`Task removed: ${value}`);
	task.remove();
}

function addTask() {
	// Get the task input
	const taskInput = document.querySelector('.task-name-input');

	// Get the task container
	const taskContainer = document.querySelector('.tasks-container');

	// Create the task element with ID
	const taskElement = document.createElement('li');
	taskElement.id = `task${count}`;

	// Add remove button for the task
	taskElement.innerHTML = `${taskInput.value} <button onclick="removeTask(${taskElement.id}, '${taskInput.value}')">Remove</button>`;

	// Insert the task to the container
	taskContainer.appendChild(taskElement);

	// Show notification
	alert(`Task added: ${taskInput.value}`);

	// Clear the add task input
	taskInput.value = '';

	count++;
};