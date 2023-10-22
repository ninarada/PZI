// document - global object the whole web page
// querySelectorAll -> returns an array of elements that match the selector passed in the argument
const thumbnails = document.querySelectorAll("#slider .thumbnail");
for(let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];
    // addEventListener registers a function to be called
    // when an event (click, mousemove, keyup...) occurs on the object it was called for
    thumbnail.addEventListener("click", handleThumbnailClick);
}

// e -> an event object that the browser passes to the function
// it has data related to the event that ocurred (what was clicked and where, using which keyboard keys...)
function handleThumbnailClick(e){
    const clickedThumbnail = e.currentTarget;
    selectThumbnail(clickedThumbnail);
}

function selectThumbnail(thumbnail) {
    // Get the currently selected thumbnail and remove the blue border (class selected)
    // querySelector -> returns null or the found element
    const currentlySelectedThumbnail = document.querySelector("#slider .thumbnail.selected");
    currentlySelectedThumbnail.classList.remove("selected");
    
    // Add the blue border (class selected) to the clicked thumbnail
    thumbnail.classList.add("selected");
    
    // Find the large image for the clicked thumbnail
    const clickedThumbnailLargeImagePath = thumbnail.getAttribute("data-large-img-url");
    
    // Set the large image as the new main slider image
    const sliderMainImage = document.querySelector("#slider-main-picture-container img");
    sliderMainImage.src = clickedThumbnailLargeImagePath;
}

const sliderRightArrow = document.querySelector("#slider .slider-arrow-right");
sliderRightArrow.addEventListener("click", handleRightArrowClick);

const sliderLeftArrow =  document.querySelector("#slider .slider-arrow-left");
sliderLeftArrow.addEventListener("click", handleLeftArrowClick);

function handleRightArrowClick(){
    const thumbnails = document.querySelectorAll("#slider .thumbnail");
    const currentIndex = getSelectedThumbnailIndex();
    let nextThumbnailIndex = currentIndex + 1;

    if(nextThumbnailIndex >= thumbnails.length) {
        nextThumbnailIndex = 0;
    }
    
    selectThumbnail(thumbnails[nextThumbnailIndex]);
}

function handleLeftArrowClick(){
    const thumbnails = document.querySelectorAll("#slider .thumbnail");
    const currentIndex = getSelectedThumbnailIndex();
    let nextThumbnailIndex = currentIndex - 1;

    if(nextThumbnailIndex < 0) {
        nextThumbnailIndex = thumbnails.length - 1;
    }
    
    selectThumbnail(thumbnails[nextThumbnailIndex]);
}

function getSelectedThumbnailIndex(){
    const thumbnails = document.querySelectorAll("#slider .thumbnail");
    const selectedThumbnail = document.querySelector("#slider .thumbnail.selected");

    for(let i = 0; i < thumbnails.length; i++) {
        if(selectedThumbnail == thumbnails[i]) {
            return i;
        }
    }

    return -1;
}