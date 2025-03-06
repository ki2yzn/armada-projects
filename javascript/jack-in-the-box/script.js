function openGift(element, src) {
	// Set the img to the gif
	element.src = `./images/${src}`;
};

document.getElementById('open-button').addEventListener('click', function () {
	// Get the status of the button
	const isGiftClose = this.getAttribute('data-status') === 'close' ? true : false;

	// Get the img element and its data
	const imgElement = document.getElementById('gift');
	const gifSrc = imgElement.getAttribute('data-gif-src');
	const gifReversedSrc = imgElement.getAttribute('data-gif-reversed-src');
	const startSrc = imgElement.getAttribute('data-start-src');
	const endSrc = imgElement.getAttribute('data-end-src');

	// Open or close the gift by pointing the src to opening/closing gif files
	imgElement.src = `./images/${isGiftClose ? gifSrc : gifReversedSrc}`

	// Disable the button while gift is opening
	this.innerText = '.....';
	this.setAttribute('disabled', '');

	// Play sound effect during gift opening animation
	if(isGiftClose) {
		setTimeout(() => {
			const soundEffect = new Audio('sabog.mp3');
			soundEffect.play();
		}, 7600);
	}

	// Update the images once the opening/closing gif is finished
	setTimeout(() => {
		imgElement.src = `./images/${isGiftClose ? endSrc : startSrc}`;
		this.innerText = `${isGiftClose ? 'Close \u{1FAF5}\u{1F97A}\u{1F494}' : 'Open \uD83D\uDE0B'}`;
		this.removeAttribute('disabled');
	}, 10000); // This should precisely match the duration of the gif

	// Update button status
	this.setAttribute('data-status', `${isGiftClose ? 'open' : 'close'}`);
});