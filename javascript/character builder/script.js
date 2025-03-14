const helmetContainer = document.getElementById('helmet-container');
const chestPlateContainer = document.getElementById('chestplate-container');
const leggingsContainer = document.getElementById('leggings-container');
const bootsContainer = document.getElementById('boots-container');

const previewHelmet = document.getElementById('preview-helmet');
const previewChestplate = document.getElementById('preview-chestplate');
const previewLeggings = document.getElementById('preview-leggings');
const previewBoots = document.getElementById('preview-boots');

const armor = {
	helmet: [
		'Arctic_Hood.png',
		'Fiery_Helmet.png',
		'Ironwood_Helmet.png',
		'Knightmetal_Helmet.png',
		'Steeleaf_Helmet.png',
		'Yeti_Horned_Helm.png'
	],
	chestplate: [
		'Arctic_Jacket.png',
		'Fiery_Chestplate.png',
		'Ironwood_Chestplate.png',
		'Knightmetal_Chestplate.png',
		'Steeleaf_Chestplate.png',
		'Yeti_Jacket.png'
	],
	leggings: [
		'Arctic_Leggings.png',
		'Fiery_Leggings.png',
		'Ironwood_Leggings.png',
		'Knightmetal_Greaves.png',
		'Steeleaf_Leggings.png',
		'Yeti_Leggings.png'

	],
	boots: [
		'Arctic_Boots.png',
		'Fiery_Boots.png',
		'Ironwood_Boots.png',
		'Knightmetal_Boots.png',
		'Steeleaf_Boots.png',
		'Yeti_Boots.png'
	],
};

const selectedArmor = {
	helmet: armor.helmet[4],
	chestplate: armor.chestplate[4],
	leggings :armor.leggings[4],
	boots: armor.boots[4]
};

console.log(selectedArmor);

// Render the helmets
let helmetElements = '';
armor.helmet.forEach(item => {
	helmetElements += `
		<li>
			<button class="item-button" data-src="${item}" data-type="helmet"">
				<img src="./images/${item}" alt="Helmet item">
			</button>
		</li>
	`;
});
helmetContainer.innerHTML = helmetElements;

// Render the chestplates
let chestplateElements = '';
armor.chestplate.forEach(item => {
	chestplateElements += `
		<li>
			<button class="item-button" data-src="${item}" data-type="chestplate"">
				<img src="./images/${item}" alt="Chestplate item">
			</button>
		</li>
	`;
});
chestPlateContainer.innerHTML = chestplateElements;

// Render the leggings
let leggingsElements = '';
armor.leggings.forEach(item => {
	leggingsElements += `
		<li>
			<button class="item-button" data-src="${item}" data-type="leggings"">
				<img src="./images/${item}" alt="Legging item">
			</button>
		</li>
	`;
});
leggingsContainer.innerHTML = leggingsElements;

// Render the boots
let bootsElements = '';
armor.boots.forEach(item => {
	bootsElements += `
		<li>
			<button class="item-button" data-src="${item}" data-type="boots"">
				<img src="./images/${item}" alt="Boots item">
			</button>
		</li>
	`;
});
bootsContainer.innerHTML = bootsElements;

/* Add event listeners to the armor items */
document.querySelectorAll('.item-button').forEach(button => {
	button.addEventListener('click', function() {
		const itemSrc = this.getAttribute('data-src');
		const itemType = this.getAttribute('data-type');

		// console.log(itemSrc);
		// console.log(itemType);

		// Update the selectedArmor object
		let containerID;
		switch(itemType) {
			case 'helmet':
				containerID = 'helmet-container'
				selectedArmor.helmet = itemSrc;
				break;
			case 'chestplate':
				containerID = 'chestplate-container'
				selectedArmor.chestplate = itemSrc;
				break;
			case 'leggings':
				containerID = 'leggings-container'
				selectedArmor.leggings = itemSrc;
				break;
			case 'boots':
				containerID = 'boots-container'
				selectedArmor.boots = itemSrc;
				break;
			default:
				containerID = null;
		};

		// Remove border from previous selected items
		document.getElementById(containerID).querySelectorAll('.item-button').forEach(item => {
			item.classList.remove('selected');
		});

		// Apply the border to the new selected item  
		this.classList.add('selected');
	});
});

// Apply the selected armor to the armor preview
document.getElementById('apply-button').addEventListener('click', function() {
	// Prompt the user to lock the build that they selected
	const userConfirmed = confirm('Are you sure you want to lock this build?');

	if(!userConfirmed) {
		return
	} else {
		const path = './images/';	
		previewHelmet.src = path + selectedArmor.helmet;
		previewChestplate.src = path + selectedArmor.chestplate;
		previewLeggings.src = path + selectedArmor.leggings;
		previewBoots.src = path + selectedArmor.boots;
	};
});