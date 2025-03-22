const characterPreview = document.getElementById('character-preview');
const characterName = document.getElementById('character-name');
const characters = document.querySelectorAll('.character-button');

// Add event listener for each button
characters.forEach(character => {
	character.addEventListener('click', function() {
		/* Get the data the character */
		const newSrc = this.getAttribute('data-src');
		const newName = this.getAttribute('data-name')

		/* Assign the newSrc to the character preview */
		characterPreview.src = `./images/characters/${newSrc}`;

		/* Update the character name */
		characterName.innerText = newName;

		/* Apply selected character effect 
			- Remove effect on previously selected character.
			- Apply the effect on selected character		
		*/
		characters.forEach(character => character.classList.remove("selected"));
		this.classList.add("selected");
	});
});