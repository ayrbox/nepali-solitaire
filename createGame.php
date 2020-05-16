<?php

require('authenticated.php');

$userID = $_SESSION['userID'];
$gameName = $_POST['gameName'];

include('MySQLDAO.php');
include('commonUtility.php');

$createDAO = new MySQLDAO();
$createUtility = new commonUtility();



if ($createDAO->insertRecord("usergame", "GameOwnerID, Description", "$userID, '$gameName'")) {
	echo "Game Created";
	header("Location: index.php");	
} else {
	echo "Unable to create game";
	header("Location: index.php");	
}


$createDAO->funcDisconnect();

?>