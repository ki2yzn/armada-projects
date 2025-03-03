const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
const specialAbilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

function getRandomIndex(range) {
	return Math.floor(Math.random() * range)
}

const character = {
	name: 'Hero',
	health: 100,
	class: classes[getRandomIndex(classes.length)],
	randomizeHealth: function() {
		let newHealth = 0;
		while(newHealth < 50 || newHealth > 150) {
			newHealth = Math.floor(Math.random() * 151);
		}
		this.health = newHealth;
	},
	specialAbility: specialAbilities[getRandomIndex(specialAbilities.length)],
};

function generateCharacter(name) {
	return {
		name: name ? name : names[getRandomIndex(names.length)],
		health: 100,
		class: classes[getRandomIndex(classes.length)],
		randomizeHealth: function() {
			let newHealth = 0;
			while(newHealth < 50 || newHealth > 150) {
				newHealth = Math.floor(Math.random() * 151);
			}
			this.health = newHealth;
		},
		specialAbility: specialAbilities[getRandomIndex(specialAbilities.length)],
		battle: function(otherCharacter) {
			const damage = Math.floor(Math.random() * (20 - 5) + 5);
			const updatedHealth = otherCharacter.health - damage;

			console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${otherCharacter.health} to ${updatedHealth}.`);

			otherCharacter.health = updatedHealth;
		}
	};
}

const randomCharacter = generateCharacter();
console.log(randomCharacter);  // Logs a character with random attributes

const namedCharacter = generateCharacter("Drake");
console.log(namedCharacter);  // Logs a character named "Drake"

// Battle Simulation
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

character1.battle(character2);
console.log(character1);
console.log(character2);