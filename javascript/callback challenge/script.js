// Task 1 Custom Map Function
function task1() {
	function customMap(numbers, callback) {
		const updatedArr = [];

		for(let number of numbers) {
			updatedArr.push(callback(number));
		}

		return updatedArr;
	}

	let numbers = [7, 4, 3, 5, 12];
	let doubled = customMap(numbers, function(num) { return num * 2; });
	console.log(doubled); // Should output: [2,4,6]
}
// task1();



// Task 2 Filter Function
function task2() {
	function filter(arr, callback) {
		const updatedArr = [];

		for(let number of arr) {
			if(callback(number)) updatedArr.push(number);
		}

		return updatedArr;
	}

	let result = filter([1,2,3,4,15], function(val) { return val < 10; });
	console.log(result); // Should output: [1,2,3,4]
};
// task2();



// Task 3 Some Function
function task3() {
	function some(arr, callback) {
		for(let number of arr) {
			if(callback(number)) return true;
		}

		return false;
	}

	let result = some([1,2,3,4], function(val) { return val>5; });
	console.log(result); 
};
// task3();



// Task 4 Every Function
function task4() {
	function every(arr, callback) {
		for(let number of arr) {
			if(!callback(number)) return false;
		}

		return true;
	}

	let result = every([1,2,3], function(val) { return val>0; });
	console.log(result); // Should output: true
};
// task4();



// Task 5 Reduce Function
function task5() {
	function reduce(arr, callback) {
		let sum = 0;
		for(let number of arr) {
			sum = callback(sum, number);
		}

		return sum;
	}

	let sum = reduce([1,2,3], function(acc, num) { return acc + num; });
	console.log(sum); // Should output: 6
};
// task5();



// Task 6 Includes Check
function task6() {
	function includes(arr, callback) {
		for(let number of arr) {
			if(callback(number)) return true;
		}	

		return false;
	}

	let result = includes([1,2,3], function(val) { return val===2; });
	console.log(result); // Should output: true
};
task6();