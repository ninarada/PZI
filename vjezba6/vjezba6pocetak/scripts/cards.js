const heartIcons = document.querySelectorAll('#cards-container .card .heart-icon');

for (let index = 0; index < heartIcons.length; index++) {
    const heartIcon = heartIcons[index];
        
    heartIcon.addEventListener('click', handleHeartIconClick);
}

function handleHeartIconClick(event){
    const heartIcon = event.currentTarget;

    if(heartIcon.classList.contains('fa-heart-o')){
        heartIcon.classList.remove('fa-heart-o');
        heartIcon.classList.add('fa-heart');
    }

    else if(heartIcon.classList.contains('fa-heart')){
        heartIcon.classList.remove('fa-heart');
        heartIcon.classList.add('fa-heart-o');
    }
}

const plusIcons = document.querySelectorAll('#cards-container .card .add-paragraph-icon');

for (let index = 0; index < plusIcons.length; index++) {
    const plusIcon = plusIcons[index];
        
    plusIcon.addEventListener('click', handlePlusIconClick);
 }

function handlePlusIconClick(event){
    const text = prompt('Input new paragraph: ');

    if(text){

    const newParagraph = document.createElement('p'); 
    newParagraph.textContent = text; 

    const addParagraphIcon = event.currentTarget; 

    const card = addParagraphIcon.parentElement;

    card.appendChild(newParagraph);

    }
}

const removeIcons = document.querySelectorAll('#cards-container .card .delete-button');

for (let index = 0; index < removeIcons.length; index++) {
    const removeIcon = removeIcons[index];
        
    removeIcon.addEventListener('click', handleDeleteButtonClick);
}

function handleDeleteButtonClick(event){
    const xButton = event.currentTarget;

    const card = xButton.parentElement;

    const title = card.querySelector("h3").textContent;

    
    if(confirm(`Želite li izbrisati karticu ${title}?`)){
        event.currentTarget.parentElement.remove();
    }

}
