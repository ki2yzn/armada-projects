// Task 1
const item1 = 39;
const item2 = 2.59;
const item3 = 5;
const totalCost = item1 + item2 + item3;

console.log(`The total cost of the items is: $${totalCost}`);



// Task 2
const num1 = -12;
const num2 = 89.123;
const num3 = 69;

console.log(`The average is: ${(num1 + num2 + num3) / 3}`);



// Task 3
const x = 2;
console.log(`${x} is an ${x % 2 === 0 ? 'even' : 'odd'} number`);



//  Task 4
const origPrice = 619.25;
const discountPercentage = 20;
const discountAmmount = (origPrice * discountPercentage) / 100;
const discountedPrice = origPrice - discountAmmount;

console.log(`The discounted price is: $${discountedPrice}.`);

// Bonus Task
console.log(`The original price before the discount was: $${discountedPrice / (1 - discountPercentage / 100)}.`);