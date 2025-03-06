// Disable default behavior of form refreshing after clicking button
document.getElementById('update-form').addEventListener('submit', (event) => {
	event.preventDefault();
});

function isInputValid(value) {
	if(value.length > 0) {
		return true;
	}

	alert('Input is empty!');
	return false;
}

// Can update both name and bio only
function updateInfo(inputID, elementID, type) {
	// Get the value of new info
	const newInfo = document.getElementById(inputID).value;
	if(!isInputValid(newInfo)) return;

	// Set the value of new info
	document.getElementById(elementID).innerHTML = newInfo;

	// Provide feedback
	console.log(`${type} updated succesfully!`);
};

function updateImage() {
	// Get the value of new src
	const newSrc = document.getElementById('update-image-url').value;
	if(!isInputValid(newSrc)) return;

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