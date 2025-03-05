// // Task 1: Custom Array Filter
// function customFilter(arr, callback) {
//     // Your code here
// 	let filteredArr = [];

// 	for(const num of arr) {
// 		// Insert each even element in the filtered array
// 		if(callback(num)) {
// 			filteredArr.push(num);
// 		}
// 	}

// 	return filteredArr;
// }

// function isEven(num) {
//     return num % 2 === 0;
// }

// var numbers = [1, 2, 3, 4, 5, 6];
// var evenNumbers = customFilter(numbers, isEven);
// console.log(evenNumbers);  // Output: [2, 4, 6]	



// // Task 2: Countdown Timer
// function countdown(start, callback) {
//     // Your code here
// 	// Use a multiplier for duration so each timeout has 1 second interval
// 	for(let i = start, multiplier = 1; i >= 1; i--, multiplier++) {
// 		setTimeout(function() {
// 			callback(i);
// 		}, 1000 * multiplier);
// 	}
// }

// function displayNumber(num) {
//     console.log(num);
// }

// countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)



// // Task 3: Simple Event Listener
// function createButton(buttonText, callback) {
// 	// Create the button
// 	const button = document.createElement('button');
// 	button.innerText = buttonText;

// 	// Insert the button to the document
// 	document.body.appendChild(button);

// 	// Add event listener to the button
// 	button.addEventListener('click', function() {
// 		callback();
// 	})
// }

// function buttonClicked() {
//     console.log("Button Clicked!");
// }

// createButton("Click Me", buttonClicked);  



// Task 4: Task Runner
function runTasks(tasks) {
	// Use i as the multiplier for timeout duration
	for(let i = 0; i < tasks.length; i++) {
		setTimeout(function() {
			tasks[i]();
		}, 1000 * (i + 1)); // Need to +1 since i starts at 0
	}
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  



// // Task 5: Interactive Quiz Game (Extra Miles)
// function askQuestion(question, choices, correctAnswer, callback) {
// 	// Store the user's answer to the question
// 	const answer = prompt(`${question} Choices: ${choices}`);
	
// 	// Evaluate the user's answer if correct by comparing it to the correctAnswer parameter
// 	callback(answer === correctAnswer);
// }

// function checkAnswer(isCorrect) {
//     if (isCorrect) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }
// }

// askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);