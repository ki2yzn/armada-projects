// Task 1
const book = {
	title: 'Atomic Habits',
	author: 'James Clear',
	pages: 320,
	isRead: false
};

console.log(book.title);
console.log(book.author);
console.log(book['pages']);
console.log(book['isRead']);

book.isRead = true;
book.genre = 'Self-help';

console.log(book);



// Task 2
const movies = [
	{
		title: 'Interstellar',
		director: 'Christopher Nolan',
		year: 2014
	},
	{
		title: 'All Quiet on the Western Front',
		director: 'Edward Berger',
		year: 2022
	},
	{
		title: 'Transformers: Dark of the Moon',
		director: 'Michael Bay',
		year: 2011
	},
];

console.log(movies[1].title);

movies.push({
	title: 'Superbad',
	director: 'Greg Mottola',
	year: 2007
});

movies[0].year = '20``23'

console.log(movies);



// Task 3
const student = {
	name: 'Edwin',
	age: 21,
	subjects: ['English', 'Math', 'Science']
};

console.log(student.subjects[0]);
student.subjects.push('Filipino');
console.log(student);



// Task 4
const recipe = {
	name: 'Fried Egg',
	ingredients: [
		{
			name: 'Egg',
			quantity: 2,
		},
		{
			name: 'Oil',
			quantity: 1
		},
		{
			name: 'Salt',
			quantity: 2
		}
	],
	isVegetarian: false
};

recipe.ingredients.push({
	name: 'Pepper',
	quantity: 1
});

console.log(recipe.ingredients[1].name);
console.log(recipe);