// Define containers for different character attributes
const classes = [
	"Warrior", 
	"Mage", 
	"Archer", 
	"Healer", 
	"Assassin"
];

const specialAbilities = [
	"Fireball", 
	"Healing Touch", 
	"Stealth", 
	"Lightning Strike", 
	"Power Slash"
];

const names = [
	"Thorin", 
	"Elara", 
	"Zane", 
	"Ivy", 
	"Dante"
];

// Generates random index up to a given max value
function getRandomIndex(maxValue) {
	return Math.floor(Math.random() * maxValue)
}

// Manually defining a character object
const character = {
	name: 'Hero',
	health: 100,
	class: classes[getRandomIndex(classes.length)],

	randomizeHealth: function() {
		// Gets a random integer from 50 to 150
		this.health = Math.floor(Math.random() * (151 - 50) + 50);
	},

	specialAbility: specialAbilities[getRandomIndex(specialAbilities.length)],
};

// Returns a single random character
function generateCharacter(name) {
	return {
		name: name ? name : names[getRandomIndex(names.length)],
		class: classes[getRandomIndex(classes.length)],
		health: Math.floor(Math.random() * (151 - 50) + 50),
		specialAbility: specialAbilities[getRandomIndex(specialAbilities.length)],

		battle: function(otherCharacter) {
			// Set a random damage from 5 to 20 
			const damage = Math.floor(Math.random() * (21 - 5) + 5);
			const updatedHealth = otherCharacter.health - damage;

			console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${otherCharacter.health} to ${updatedHealth}.`);

			otherCharacter.health = updatedHealth;
		}
	};
}

// Returns multiple characters contained in an array
function generateMultipleCharacters(count) {
	let charactersArr = [];

	for(let i = 1; i <= count; i++) {
		charactersArr.push(generateCharacter());
	}

	console.log(`\n🛡️  Party of ${count} created! 🛡️`);

	return charactersArr;
}

// Display the character object with randomized health
character.randomizeHealth();
console.log(character);

// Create a random character named 'Drake'
const drake = generateCharacter('Drake');
console.log(drake);

// Create a random character with no defined name
const randomCharacter = generateCharacter();
console.log(randomCharacter);

// Drake attacks Random Character & Vice-versa
drake.battle(randomCharacter);
randomCharacter.battle(drake);

// Display updated info about Drake and Random Character
console.log(drake);
console.log(randomCharacter);

// Create x number of random chracters
const party = generateMultipleCharacters(5);
console.log(party);