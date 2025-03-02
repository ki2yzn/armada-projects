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

const isEarlyWin = false;

function showDamage(firstCharacter, secondCharacter, damage) {
	console.log(`${firstCharacter.name} attacks ${secondCharacter.name} and does ${damage} damage!`)
}

function updateHP(character, damage) {
	character.hp = character.hp - damage; 
}

function showHP() {
	console.log(`Thor HP: ${thor.hp} | Zeus HP: ${zeus.hp}`);
}

function showWinner() {
	if(thor.hp !== zeus.hp) {
		console.log(`\n🏆 ${thor.hp > zeus.hp ? thor.name : zeus.name} WINS the battle! 🏆`)
	} else {
		console.log(`\n⚖️ It's a Draw ⚖️`)
	}
}

function isThereKO(character) {
	if(character.hp <= 0) {
		return true;
	} 

	return false;
}

for(let i = 1; i <= 10; i++) {
	console.log(`=== Round ${i} === `);

	const thorDamage = thor.attack();
	showDamage(thor, zeus, thorDamage);
	updateHP(zeus, thorDamage);
	showHP();
	if(isThereKO(zeus)) break; // Stops the loop if Zeus' hp reached below or equal to 0.

	console.log();

	const zeusDamage = zeus.attack();
	showDamage(zeus, thor, zeusDamage);
	updateHP(thor, zeusDamage);
	showHP();
	if(isThereKO(thor)) break; // Stops the loop if Thor's hp reached below or equal to 0.

	console.log('\n----------\n');
}

showWinner();