const taskInput = document.getElementById('task-name-input');
const taskContainer = document.getElementById('tasks-container');
const taskData = [];

const addTask = () => {
	const taskValue = taskInput.value;
	if(taskValue.length === 0) return;

	taskData.push(taskValue);
	taskInput.value = '';

	showTask();
};

const handleSubmit = (event) => {
	event.preventDefault();
};

const toggleTask = (id) => {
	console.log(id);

	const task = document.getElementById(`task${id}`);

	if(task.classList.contains('complete')) {
		task.classList.remove('complete')
	} else {
		task.classList.add('complete')
	}
};

const showTask = () => {
	// Save tasks as HTML elements
	let taskHTML = '';
	taskData.forEach((task, index) => {
		taskHTML += `<li><button id="task${index}" onclick="toggleTask(${index})" class="task">${task}</button></li>`
	});

	console.log(taskHTML);

	// Display tasks
	taskContainer.innerHTML = taskHTML;
};

// Add event listener for add task
document.getElementById('add-task').addEventListener('click', addTask);

// Add event listener for toggling task

showTask();