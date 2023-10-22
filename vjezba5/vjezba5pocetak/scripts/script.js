{

    const thumbnails = document.querySelectorAll('.thumbnail');
    let deleteButtons = document.querySelectorAll(".delete-button");
    
    for (let i = 0; i < thumbnails.length; i++) {
        const thumbnail = thumbnails[i];
        thumbnail.addEventListener('click', handleThumbnailClick);
    }
    
    function selectThumbnail(thumbnail){
        const currentlySelectedThumbnail = document.querySelector('.thumbnail.selected');
        currentlySelectedThumbnail.classList.remove('selected');
        thumbnail.classList.add('selected');
        const clickedThumbnailLargeImageUrl = thumbnail.getAttribute('data-large-img-url');
        const sliderImage = document.querySelector('#slider-main-picture-container img');
        sliderImage.setAttribute('src', clickedThumbnailLargeImageUrl);
    }
    
    function handleThumbnailClick(event){
        const thumbnail = event.currentTarget;
        selectThumbnail(thumbnail);
    }
    
    const sliderLeftArrow = document.querySelector('.slider-arrow-left');
    const sliderRightArrow = document.querySelector('.slider-arrow-right');
    
    sliderLeftArrow.addEventListener('click', handleLeftArrowClick);
    sliderRightArrow.addEventListener('click', handleRightArrowClick);
    
    function handleLeftArrowClick(){
        const selectedThumbnailIndex = getSelectedThumbnailIndex();
        if(selectedThumbnailIndex === -1){
        return;
    }
    
    let nextThumbnailIndex = selectedThumbnailIndex -1;
        if(selectedThumbnailIndex === 0){
        nextThumbnailIndex = thumbnails.length -1;
        }
        selectThumbnail(thumbnails[nextThumbnailIndex]);
    }

    function handleRightArrowClick(){
        const selectedThumbnailIndex = getSelectedThumbnailIndex();
        if(selectedThumbnailIndex === -1){
            return;
        }
        let nextThumbnailIndex = selectedThumbnailIndex +1;
        if(selectedThumbnailIndex === thumbnails.length -1){
            nextThumbnailIndex = 0;
        }
        selectThumbnail(thumbnails[nextThumbnailIndex]);
    }
    
    function getSelectedThumbnailIndex(){
        const currentlySelectedThumbnail = document.querySelector('.thumbnail.selected');
        for (let i = 0; i < thumbnails.length; i++) {
            if(currentlySelectedThumbnail === thumbnails[i]){
                return i;
            }
        }
        return 1;
    }
    
    function getSelectedThumbnailIndex(){
        const currentlySelectedThumbnail = document.querySelector('.thumbnail.selected');
        for (let i = 0; i < thumbnails.length; i++) {
            if(currentlySelectedThumbnail === thumbnails[i]){
                return i;
            }
        }
        return -1;
    }
    
    
    for (let i=0; i<deleteButtons.length;i++){
        deleteButtons[i].addEventListener("click", removeSection);
    }
    
    function removeSection(e){
        let deleteButton = e.currentTarget;
        let section = deleteButton.parentElement;
        section.remove();
    }
}