// Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
	return a - b;
}

function divide(a, b) {
	return a / b;
}

console.log(calculate(5, 3, add));      // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(8, 42, subtract)); // Output: -34
console.log(calculate(89, 8, divide)); // Output: 11.125



// Exercise 2
function delayedMessage(message, delay, callback, callback2) {
	callback2(message);

    setTimeout(() => {
        callback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, function(msg) {
    console.log(msg);
}, function(msg) {
	console.log(`The message,'${msg}' will appear in ${2000 / 1000} seconds!`);
});



// Exercise 3
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if(callback(i) === false) {
			break;
		}
    }
}

repeatTask(3, function(index) {
    console.log("Iteration:", index);
    return false;
});