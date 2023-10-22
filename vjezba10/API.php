<?php
require_once("php/cards.php");

// function that we call from our JS code that processes the request and calls actions that execute queries
function processRequest(){
  $action = getRequestParameter("action");

    // action that was called
    switch ($action) {
      case 'toggleCardLike':
        processToggleCardLike();
        break;
      case 'deleteCard':
        processDeleteCard();
        break;
      case 'addCard':
        processAddCard();
        break;
      case 'toggleStar':
        processToggleStar();
        break;
      default:
      echo(json_encode(array(
         "success" => false,
         "reason" => "Unknown action: $action"
      )));
      break;
    }
}

// getRequestParameter("action") -> "deleteCard"
function getRequestParameter($key) {
   // $_REQUEST[$key] -> a map of keys and values from the request
   return isset($_REQUEST[$key]) ? $_REQUEST[$key] : "";
}

//API.php?action=toggleCardLike&id=1&liked=1
function processToggleCardLike(){
  $success = false;
  $reason = "";

  $id = getRequestParameter("id");
  $liked = getRequestParameter("liked");

  if (is_numeric($id) && is_numeric($liked)) {
    toggleCardLike($id, $liked);
    $success = true;
  } 
  else {
    $success = false;
    $reason = "Needs id:number; like:number";
  }

  echo(json_encode(array(
  "success" => $success,
  "reason" => $reason
  )));
}

//API.php?action=deleteCard&id=1   & odvajanje parametara
function processDeleteCard(){
  $success =false;
  $reason = "";

  $id = getRequestParameter("id");
  
  if(is_numeric($id)){
    deleteCard($id);
    $success = true;
  }

  else{
    $success = false;
    $reason = "Needs id:number;";
  }

  echo(json_encode(array(
    "success" => $success,
    "reason" => $reason
    )));
}

//API.php?action=addCard&title=sthsth&imageUrl=asdfjgk&description=fsefef
function processAddCard(){
  $success =false;
  $reason = "";
  $id = 0;

  $title = getRequestParameter('title');
  $imageUrl = getRequestParameter('imageUrl');
  $description = getRequestParameter('description');

  if($title != "" && $imageUrl != "" && $description != ""){
    $id = addCard($title, $imageUrl, $description);
    $success = true;
  }
  else{
    $success = false;
    $reason = "Needs title, description and imageUrl";
  }

  echo(json_encode(array(
    "success" => $success,
    "reason" => $reason,
    "id" => $id
    )));
}

//API.php?action=toggleStar&id=1&liked=1
function processToggleStar(){
  $success = false;
  $reason = "";

  $id = getRequestParameter("id");
  $starIndex = getRequestParameter("starIndex");

  if (is_numeric($id) && is_numeric($starIndex)) {
    toggleStar($id, $starIndex);
    $success = true;
  } 
  else {
    $success = false;
    $reason = "Needs id:number; starIndex:number";
  }

  echo(json_encode(array(
  "success" => $success,
  "reason" => $reason
  )));
}

processRequest();