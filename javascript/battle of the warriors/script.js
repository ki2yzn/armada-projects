// Define character objects
const thor = {
	name: 'Thor',
	hp: 100,
	strength: 25,
	attack: function() {
		return Math.floor(Math.random() * (this.strength + 1));
	}
}

const zeus = {
	name: 'Zeus',
	hp: 120,
	strength: 20,
	attack: function() {
		return Math.floor(Math.random() * (this.strength + 1));
	}
};

// Display damage dealt by a character
function showDamage(attacker, defender, damage) {
	console.log(`${attacker.name} attacks ${defender.name} and does ${damage} damage!`)
}

// Update the hp property of a character
function updateHP(character, damage) {
	character.hp -= damage; 
}

// Display the hp of a character
function showHP() {
	console.log(`${thor.name} HP: ${thor.hp} | ${zeus.name} HP: ${zeus.hp}`);
}

// Check if a character drops their hp to less than or equal to 0
function isThereKO(character) {
	if(character.hp <= 0) {
		return true;
	} 

	return false;
}

// Simulate the battle using for loops
for(let i = 1; i <= 10; i++) {
	console.log(`=== Round ${i} === `);

	const thorDamage = thor.attack(); // Calculate the damage
	showDamage(thor, zeus, thorDamage); // Display the damage
	updateHP(zeus, thorDamage); // Update the hp property of the character
	showHP(); // Display the hp
	if(isThereKO(zeus)) break; // Stops the loop if Zeus' hp reached below or equal to 0.

	console.log();

	const zeusDamage = zeus.attack(); // Calculate the damage
	showDamage(zeus, thor, zeusDamage); // Display the damage
	updateHP(thor, zeusDamage); // Update the hp property of the character
	showHP(); // Display the hp
	if(isThereKO(thor)) break; // Stops the loop if Thor's hp reached below or equal to 0.

	console.log('\n--------------------\n');
}

// Display the winner between zeus and thor by comparing their hp
if(thor.hp !== zeus.hp) {
	console.log(`\n🏆 ${thor.hp > zeus.hp ? thor.name : zeus.name} WINS the battle! 🏆`)
} else {
	console.log(`\n⚖️ It's a Draw ⚖️`)
}