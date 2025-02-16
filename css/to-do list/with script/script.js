const taskContainer = document.getElementById('tasks-container');
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-name-input');

const taskData = [];

const addTask = () => {
	// Get value of the input
	taskData.push(taskInput.value);

	// Update the tasks array
	let taskHTML = '';
	taskData.forEach(task => taskHTML += `<p class="task">${task}</p>`);

	// Display tasks from the array
	taskContainer.innerHTML = taskHTML;

	// Clear task input
	taskInput.value = '';
};