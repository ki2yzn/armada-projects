// Task 1
const score = 89;

if(score >= 90 && score <= 100) {
	console.log('Grade A');
} else if(score >= 80) {
	console.log('Grade B');
} else if(score >= 70) {
	console.log('Grade C');
} else if(score >= 60) {
	console.log('Grade D');
} else {
	console.log('Grade F');
}	



// Task 2
const temperature = 16.78;

if(temperature < 0) {
	console.log("It's freezing outside! Bundle up!");
} else if(temperature >= 0 && temperature <= 15) {
	console.log("It's cold outside. Wear a jacket.");
} else if(temperature >= 16 && temperature <= 30) {
	console.log("The weather is nice. Enjoy your day!");
} else  {
	console.log("It's hot outside. Stay hydrated!")
}



// Task 3
const age1 = 15;

if(age1 < 13) {
	console.log('You are too young for this activity.');
} else if(age1 >= 13 && age1 <= 17) {
	console.log('You need parental permission.');
} else {
	console.log('You are eligible for this activity.');
}



// Task 4
const age2 = 19;
const isMember = false;

if(age2 < 12) {
	console.log('Ticket price: Free');
} else if(age2 >= 12 && isMember) {
	console.log('Ticket price: $10');
} else {
	console.log('Ticket price: $15');
}

// Task 5
const isLeapYear = (year) => {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
};

// Leap years
console.log(isLeapYear(2016));
console.log(isLeapYear(2020));

// Non-leap years
console.log(isLeapYear(2021));
console.log(isLeapYear(2023));