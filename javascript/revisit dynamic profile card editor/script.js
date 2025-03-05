// Disable default behavior of form refreshing after clicking button
document.getElementById('update-form').addEventListener('submit', (event) => {
	event.preventDefault();
});

// Can update both name and bio only
function updateInfo(inputID, elementID, type) {
	// Get the value of new info
	const newInfo = document.getElementById(inputID).value;

	// Set the value of new info
	document.getElementById(elementID).innerHTML = newInfo;

	// Provide feedback
	console.log(`${type} updated succesfully!`);
};

function updateImage() {
	// Get the value of new src
	const newSrc = document.getElementById('update-image-url').value;

	// Set the new src
	document.getElementById('user-profile-picture').setAttribute('src', newSrc);

	// Provide feedback
	console.log('Profile picture updated succesfully!');
}

function updateBackgroundColor() {
	// Get the value of the new bg color
	const newColor = document.getElementById('update-background-color').value;

	// Set the new bg color
	document.getElementById('profile-card').style.backgroundColor = newColor;

	// Provide feedback
	console.log('Background color updated succesfully!');
}

function updateProfile() {
	// Update the name
	updateInfo('update-name', 'user-name', 'name');

	// Update the bio
	updateInfo('update-bio', 'user-bio', 'bio');

	// Update the profile picture
	updateImage();

	// Update the background color
	updateBackgroundColor();
};

// Add event listener to the update button
document.getElementById('update-button').addEventListener('click', () => {
	updateProfile();
});