/*Zadatak 1: Toggle srce on/off */
//a) Dohvati sve srca u karticama
let heartIcons = document.querySelectorAll(".card .heart-icon");
for(let i = 0; i < heartIcons.length; i++){
    let heartIcon = heartIcons[i];
    //b) Za svako srce registiraj funkciju koja će se pokrenuti na klik
    heartIcon.addEventListener("click", handleHeartIconClick);
}

function handleHeartIconClick(e){
    //c) Promini klase fa-heart fa-heart-o za efekt punog/praznog srca
    let heartIcon = e.currentTarget; //Srce na koje smo sad klikli
    if(heartIcon.classList.contains("fa-heart-o")){ //"prazno" srce
        heartIcon.classList.remove("fa-heart-o");
        heartIcon.classList.add("fa-heart");
    }
    else {
        heartIcon.classList.remove("fa-heart");
        heartIcon.classList.add("fa-heart-o");
    }
}

/*2. zadatak: Dodavanje paragrafa kad se klikne na + */
let addParagraphIcons = document.querySelectorAll(".card .add-paragraph-icon");
for(let i = 0; i < addParagraphIcons.length; i++){
    let addParagraphIcon = addParagraphIcons[i];
    addParagraphIcon.addEventListener("click", handleAddParagraphClick);
}

function handleAddParagraphClick(e){
    let addParagraphIcon = e.currentTarget;
    let text = prompt("Unesi tekst novog paragrafa");

    if(text){
        let newParagraph = document.createElement("p");
        newParagraph.textContent = text;

        let card = addParagraphIcon.parentElement;
        card.appendChild(newParagraph);
    }
}

/*3. zadatak: Brisanje */
let deleteCardIcons = document.querySelectorAll(".card .delete-button");
for(let i = 0; i < deleteCardIcons.length; i++){
    let deleteCardIcon = deleteCardIcons[i];
    deleteCardIcon.addEventListener("click", handleDeleteCardClick);
}

function handleDeleteCardClick(e){
    let deleteCardIcon = e.currentTarget;
    let card = deleteCardIcon.parentElement;
    let cardTitle = card.querySelector("h3");

    if(confirm("Izbrisati karticu: " + cardTitle.textContent + "?")){
        card.remove();
    }
}







const addCardButton = document.getElementById('add-card-button');
addCardButton.addEventListener("click", handleAddCardClick);

function handleAddCardClick(e){
    
    let cardTitle = prompt("Unesite naslov nove kartice: ", 'Default title');
    if(!cardTitle) return;
   
    let imgPath = prompt("Unesite putanju do slike: ", 'images/cetina.jpg');
    if(!imgPath) return;
    
    let cardDescription = prompt("Unesite opis kartice: ", 'default description');
    if(!cardDescription) return;

    const cardTemplate = document.getElementById('card-template');
    const cardElement = document.importNode(cardTemplate.content, true); 

    cardElement.querySelector('.card-title-label').textContent = cardTitle;
    cardElement.querySelector('img').src = imgPath;
    cardElement.querySelector('p').textContent = cardDescription ;

    const stars = cardElement.querySelectorAll('.star-icon');

    cardElement.querySelector('.heart-icon').addEventListener('click', handleHeartIconClick);
    cardElement.querySelector('.delete-button').addEventListener('click', handleDeleteCardClick);
    cardElement.querySelector('.add-paragraph-icon').addEventListener('click', handleAddParagraphClick);
    
    for(let i = 0; i < stars.length; i++){
        let starIcon = stars[i];
        
        starIcon.addEventListener('click', handleStarIconClick);
    }

    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.appendChild(cardElement); 
}

document.getElementById('search-box').addEventListener('keyup',(e)=>{
    const value = e.currentTarget.value;
    const cards = document.querySelectorAll('.card');

    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];

        if(card.textContent.indexOf(value) >= 0) 
        {
            card.classList.remove('hidden');
        }

        else
        {
            card.classList.add('hidden'); 
        }
    }
    

})


let starIcons = document.querySelectorAll(".card .star-icon");
for(let i = 0; i < starIcons.length; i++){
    let starIcon = starIcons[i];
    
    starIcon.addEventListener("click", handleStarIconClick);
}

function handleStarIconClick(e){

    const clickedStar = e.currentTarget;
    const starContainer = clickedStar.parentElement;
    const starSiblings = starContainer.children;
    
    let flag = false; 

    for (let index = 0; index < starSiblings.length; index++) {
        const currentStar = starSiblings[index];


        if(!flag) 
        {
            currentStar.classList.remove('fa-star-o');
            currentStar.classList.add('fa-star');
        }

        else
        {
            currentStar.classList.remove('fa-star');
            currentStar.classList.add('fa-star-o');
        }
        
        if(currentStar == clickedStar)
        {
            flag = true;
        }
    }
}