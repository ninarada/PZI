<?php
$mysqli = new mysqli("localhost", "RadaN", "RadaN_2022", "RadaN");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>