// Task 1
const number = 5;

for(let i = 1; i <= 10; i++) {
	console.log(`${number} x ${i} = ${number * i}`);
}



// Task 2
const n = 5;
let sum = 0;

for(let i = 1; i <= n; i++) {
	sum += i;
}

console.log(`The sum of the first ${n} numbers is: ${sum}`);



// Task 3
const numbers = [19, -2, 69, 89, 1209];

for(let i = 0; i < numbers.length; i++) {
	console.log(`Array Element: ${numbers[i]}`);
};



// Task 4
for(let row = 1; row <= 5; row++) {
	let stars = '*';

	for(let col = 1; col < row; col++) {
		stars += '*';
	}

	console.log(stars);
}



// Task 5
const numbers2 = [82, 256, -29, 172, 98, 354];

for(let i = numbers2.length-1; i > -1; i--) {
    console.log(numbers2[i]);
}