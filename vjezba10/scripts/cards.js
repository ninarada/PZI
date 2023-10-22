/* Get all elements with class heart-icon */
const heartIcons = document.querySelectorAll('.card .heart-icon');
for (let i = 0; i < heartIcons.length; i++) {
	const heartIcon = heartIcons[i];
	// add an event listener to each heart icon and define what happens on a click event
	heartIcon.addEventListener('click', handleHeartIconClick);
}

async function handleHeartIconClick(e) {
	// add and remove fa-heart and fa-heart-o classes depending on which one is currently present
	const heartIcon = e.currentTarget; // clicked heart icon

	const card = heartIcon.closest('.card');
	const cardId = card.getAttribute('data-card-id');

	const isCurrentlyLiked = heartIcon.classList.contains('fa-heart');
	try {
		const serverResponse = await fetch(
			`API.php?action=toggleCardLike&id=${cardId}&liked=${isCurrentlyLiked ? 0 : 1}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error liking card: ${responseData.reason}`);
		}

		if (!isCurrentlyLiked) {
			// if heart is 'empty'
			heartIcon.classList.remove('fa-heart-o');
			heartIcon.classList.add('fa-heart');
		} else {
			heartIcon.classList.remove('fa-heart');
			heartIcon.classList.add('fa-heart-o');
		}
	} catch (error) {
		throw new Error(error.message || error);
	}
}

/* Add a paragraph to a card */
const addParagraphIcons = document.querySelectorAll('.card .add-paragraph-icon');
for (let i = 0; i < addParagraphIcons.length; i++) {
	const addParagraphIcon = addParagraphIcons[i];
	addParagraphIcon.addEventListener('click', handleAddParagraphClick);
}

function handleAddParagraphClick(e) {
	const addParagraphIcon = e.currentTarget;
	const text = prompt('Upisi tekst novog paragrafa:');

	if (text) {
		const newParagraph = document.createElement('p');
		newParagraph.textContent = text;

		const card = addParagraphIcon.parentElement;
		card.appendChild(newParagraph);
	}
}

/* Delete card */
const deleteCardIcons = document.querySelectorAll('.card .delete-button');
for (let i = 0; i < deleteCardIcons.length; i++) {
	const deleteCardIcon = deleteCardIcons[i];
	deleteCardIcon.addEventListener('click', handleDeleteCardClick);
}

async function handleDeleteCardClick(e) {
	const deleteCardIcon = e.currentTarget;
	const card = deleteCardIcon.parentElement;
	const cardTitle = card.querySelector('h3');

	if (confirm(`Izbrisati karticu: ${cardTitle.textContent}?`)) {
		// Get the card id of the card we want to delete
		const cardId = card.getAttribute('data-card-id');

		try{
			const serverResponse = await fetch(`API.php?action=deleteCard&id=${cardId}`);
			const responseData = await serverResponse.json();

			if(!responseData.success){
				throw new Error(`Error while deleting card: ${responseData.reason}`);
			}
			// If everything went well, make the change on the user interface!!
			card.remove();
		}
		catch(error){
			//alert(error.message || error); da nam se pokaze lipo na ekranu
			throw new Error(error.message || error);
		}
		
	}
}

/* Dynamically create cards */
const addCardButton = document.querySelector('#add-card-button');

// Arrow function, runs when user clicks on addCardButton
addCardButton.addEventListener('click', async (e) => {
	const title = prompt('Unesi naslov kartice', 'naslov');
	if (!title) {
		return;
	}

	const imageUrl = prompt('Unesi url slike', 'images/newsHeadings/cetina.jpg');
	if (!imageUrl) {
		return;
	}

	const description = prompt('Unesi opis', 'opis');
	if (!description) {
		return;
	}

	try{
		const serverResponse = await fetch(`API.php?action=addCard&title=${title}&imageUrl=${imageUrl}&description=${description}`);
		const responseData = await serverResponse.json();
		
		if(!responseData.success){
			
			throw new Error(`Error while adding card: ${responseData.reason}`);
		}

		const cardTemplate = document.querySelector('#card-template');
		// Creates an element based on template
		const cardElement = document.importNode(cardTemplate.content, true);

		// Fill the created card with content
		cardElement.querySelector('.card-title-label').textContent = title;
		cardElement.querySelector('img').src = imageUrl;
		cardElement.querySelector('p').textContent = description;

		// add event listeners to necessary places
		cardElement.querySelector('.heart-icon').addEventListener('click', handleHeartIconClick);
		cardElement.querySelector('.delete-button').addEventListener('click', handleDeleteCardClick);
		cardElement.querySelector('.add-paragraph-icon').addEventListener('click', handleAddParagraphClick);

		const starElements = cardElement.querySelectorAll('.star-icon');
		for (let i = 0; i < starElements.length; i++) {
			const starElement = starElements[i];
			starElement.addEventListener('click', handleStarClick);
		}

		// Add the card to the DOM in the card container
		const cardsContainer = document.querySelector('#cards-container');
		
		cardsContainer.appendChild(cardElement);
	}
	catch(error){
		throw new Error(error.message || error);
	}

	
});

/* Implement search */
document.querySelector('#search-box').addEventListener('keyup', (e) => {
	// Get the value that is currently in the search input
	const query = e.currentTarget.value;

	// Get all cards and iterate through them
	const cards = document.querySelectorAll('.card');
	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		if (card.textContent.indexOf(query) >= 0) {
			// does the card have the value that is in the input
			card.classList.remove('hidden');
		} else {
			// if it doesn't hide it
			card.classList.add('hidden');
		}
	}
});

/* Implement clicking and filling stars */
const starElements = document.querySelectorAll('.card .star-icon');

for (let i = 0; i < starElements.length; i++) {
	const starElement = starElements[i];
	starElement.addEventListener('click', handleStarClick);
}

async function handleStarClick(e) {
	const star = e.currentTarget;
	const starContainer = star.parentElement;
	const starSiblings = starContainer.children;

	const card = star.closest('.card');
	const cardId = card.getAttribute('data-card-id');
	const starIndex = star.getAttribute('star-index');
	
	try{
		const serverResponse = await fetch(
			`API.php?action=toggleStar&id=${cardId}&starIndex=${starIndex}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error toggle star: ${responseData.reason}`);
		}

		let clickedStarPassed = false;

		for (let i = 0; i < starSiblings.length; i++) {
			const currentStar = starSiblings[i];

			if (!clickedStarPassed) {
				currentStar.classList.remove('fa-star-o');
				currentStar.classList.add('fa-star');
			} else {
				currentStar.classList.remove('fa-star');
				currentStar.classList.add('fa-star-o');
			}

			if (currentStar == star) {
				clickedStarPassed = true;
			}
		}

	}
	catch(error){
		throw new Error(error.message || error);
	}
	
}
