<?php

session_start();

//start: Get User Command
if(!isset($_POST['command'])) {
	$gameCommand = 'NULLCOMMAND';
} else {
	$gameCommand = $_POST['command'];
}
//end: Get User Command

//Assertion: check game commad
//echo $gameCommand;

//start: User Command Check
switch ($gameCommand) {
	case 'login':
	
		//Authenticate user via authenticate class
		include('authenticate.php');
		
		//post user data
		$postUsername = $_POST['loginUser'];
		$postPassword = $_POST['loginPassword'];
		
		
		$clsAuthenticate = new Authenticate($postUsername, $postPassword);
		if(!$clsAuthenticate->authenticateUser()) {
			echo $clsAuthenticate->getError();
			exit;
		}
		
		//disposing class
		$clsAuthenticate = null;
		
				
		// -> user authenticated
		//Redirecting to index.php without any command (i.e. default command)
		header("Location: index.php");
		
		break;
		
		
		
	case 'newGame':
		//Check authentication before newGame command
		$uid = userAuthenticated();
		
		
		include('newGame.php');
	
		$nGame = new newGame($uid);
		$nGame->createNewGame();
		echo $nGame->xmlDrawCard();
		$nGame->dispose();
		
		break;
	case "drawOneCard":
		$uid = userAuthenticated();
		
		
		//post select data
		$positionID = $_POST['positionID'];
		$existingCardID = $_POST['existingCardID'];
		
				
		include('drawCard.php');
		$nDrawCard = new drawCard($uid);
		$nDrawCard->drawOneCard($positionID, $existingCardID);
		echo $nDrawCard->xmlDrawCard();
		$nDrawCard->dispose();
		break;
		
	case "drawCard":
		$uid = userAuthenticated();
		
		$positionID1 = $_POST['positionID1'];
		$positionID2 = $_POST['positionID2'];
		$existingCardID1 = $_POST['existingCardID1'];
		$existingCardID2 = $_POST['existingCardID2'];						
	
		include('drawCard.php');
		$nDrawCard = new drawCard($uid);
		$nDrawCard->drawCard($positionID1, $positionID2, $existingCardID1, $existingCardID2);
		
		echo $nDrawCard->xmlDrawCard();
		$nDrawCard->dispose();
		break;
		
	case 'restartGame':
		//Check authentication before restart command
		userAuthenticated();
		break;
	case 'logout':
		
		break;
		
	default:
		//Check authentication before default command
		userAuthenticated();
		
		//Default screen for user 			
		include('defaultPanel.php');
		
		break;
}
//end: User Command Check



//start function(): Authenticated user
function userAuthenticated() {

	if(!isset($_SESSION['UserID'])) {	
	  header("Location:login.php");  
	  exit;
	}
	
	
	$UID = $_SESSION['UserID'];	
	return $UID;
	
}//end function(): Authenticated user







/*include('MySQLDAO.php');
include('commonUtility.php');

$gameDAO = new MySQLDAO();
$gameUtility = new commonUtility();

$gameTableName = "Game$authenticatedUserID";

if (!$gameDAO->isTableExist($gameTableName)) {
	//create game first
	
	$gameDAO->executeSQL(funCreateGame($gameTableName));
	
	//echo funCreateGame("Game$authenticatedUserID");		
} */




//funStartGame($gameTableName, $cardCode);

?>








<?php

/*
$gameREC = $gameDAO->returnRecordSet
("SELECT * FROM UserGame WHERE GameOwnerID=".$gameUtility->quoteString($authenticatedUserID));



$cntREC = $gameDAO->countRecordNum($gameREC);

if($cntREC==1) {

	//$rowREC = mysql_fetch_object($gameREC);
	//echo "Loading game.....";
	//header("Location: openGame.php");	
	
	include('openGame.php');
	
	$myGame = new openGame($authenticatedUserID, $gameDAO);
	
	echo $myGame->GameDescription();
	
	
} else {	
	echo funCreateGame();	
}

$gameDAO->funcDisconnect();



function funCreateGame($tableName) { 
	$gameTableSQL = "CREATE TABLE  $tableName (
	`CardID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
	`CardCode` VARCHAR( 10 ) NULL ,
	`Drawn` INT NULL DEFAULT  '0',
	UNIQUE (`CardCode`)
	)";	
	return $gameTableSQL;
}

function funStartGame($tableName, $cardArray) {
	//gamestartcode
	
	$iCnt = 0;
	
	$tempDeck = array();
	
	do{
		mt_srand ((double) microtime() * 9999999);
		$cardIndex = mt_rand (0,51);
		
		if (!in_array($cardIndex, $tempDeck)) {
			
			//card file name in array
			$imgCard = $cardArray[$cardIndex];
			
			//display card
			echo "<img src='$imgCard'/>";
			
			//add card to temp tech
			$tempDeck[$iCnt]=$cardIndex;
			$iCnt++;
			
		}
	
	} while($iCnt<52); 
}
*/
?>



