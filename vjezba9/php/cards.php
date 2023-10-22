<?php
require_once("DatabaseAccess.php");


function getCardsFromDb(){
    // execute query and get cards data from the Cards table in the database
	return getDbAccess()->executeQuery("SELECT * FROM Cards");
}

// generate html code for cards using data from the database
function generateCardsHtml(){
    $html = "";

    $cards = getCardsFromDb();

    foreach($cards as $card){
        // get values of the columns in the table in order 
        $id = $card[0];
        $title = $card[1];
        $imageUrl = $card[2];
        $description = $card[3];
        $liked = $card[4];

        $heartClass = $liked == '1' ? "fa-heart" : "fa-heart-o";

        // html template filled with data
        $html .= "<article class='card' data-card-id='$id'>
                    <i class='fa fa-times delete-button clickable-icon'></i>
                    <img src='$imageUrl' alt='$title'/>
                    <h3><span class='card-title-label'>$title</span> <i class='fa $heartClass heart-icon clickable-icon'></i></h3>
                    <p>$description</p>
                    <i class='fa fa-plus add-paragraph-icon clickable-icon'></i>
                  </article>";
    }

    return $html;
}

function toggleCardLike($id, $liked) {
    getDbAccess()->executeQuery("UPDATE Cards SET Liked='$liked' WHERE ID='$id'");
}