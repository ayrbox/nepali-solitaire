<!--START OF DEFAULT HTML-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html>
<head>
<link rel="stylesheet" href="css/style.css" type="text/css" />
</head>

<body>
<!--START OF DEFAULT HTML-->



<?php

require('authenticated.php');

$authenticatedUserID = $_SESSION['userID'];

$authenticatedUser = $_SESSION['userName'];
echo "$authenticatedUser is authenticated";

echo "<a href='logout.php'>Logout</a>";


echo "<hr>";


include('MySQLDAO.php');
include('commonUtility.php');

$gameDAO = new MySQLDAO();
$gameUtility = new commonUtility();

$gameTableName = "Game$authenticatedUserID";

if (!$gameDAO->isTableExist($gameTableName)) {
	//create game first
	
	$gameDAO->executeSQL(funCreateGame($gameTableName));
	
	//echo funCreateGame("Game$authenticatedUserID");		
}


$cardCode = array(
"cards/h1.gif" , "cards/h2.gif" , "cards/h3.gif" , "cards/h4.gif" , "cards/h5.gif" , "cards/h6.gif" , "cards/h7.gif" , "cards/h8.gif" , "cards/h9.gif" , "cards/h10.gif" , "cards/h11.gif" , "cards/h12.gif" , "cards/h13.gif" , 
"cards/s1.gif" , "cards/s2.gif" , "cards/s3.gif" , "cards/s4.gif" , "cards/s5.gif" , "cards/s6.gif" , "cards/s7.gif" , "cards/s8.gif" , "cards/s9.gif" , "cards/s10.gif" , "cards/s11.gif" , "cards/s12.gif" , "cards/s13.gif" , 
"cards/d1.gif" , "cards/d2.gif" , "cards/d3.gif" , "cards/d4.gif" , "cards/d5.gif" , "cards/d6.gif" , "cards/d7.gif" , "cards/d8.gif" , "cards/d9.gif" , "cards/d10.gif" , "cards/d11.gif" , "cards/d12.gif" , "cards/d13.gif" , 
"cards/c1.gif" , "cards/c2.gif" , "cards/c3.gif" , "cards/c4.gif" , "cards/c5.gif" , "cards/c6.gif" , "cards/c7.gif" , "cards/c8.gif" , "cards/c9.gif" , "cards/c10.gif" , "cards/c11.gif" , "cards/c12.gif" , "cards/c13.gif" );


$cardValues = array(
"1", "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "0" , "0" , "0", 
"1", "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "0" , "0" , "0", 
"1", "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "0" , "0" , "0", 
"1", "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "0" , "0" , "0");

//funStartGame($gameTableName, $cardCode);

?>


<input type="button" id="newGame" value="New Game" />
<hr>

<div id="gameWrapper">
	<?php
	for($iCnt=0;$iCnt<=11;$iCnt++){
	
		echo "<div id='CardPlaceID$iCnt'";
		echo " class='cardWrapper'>";		
		echo "<img src='$cardCode[$iCnt]'/>";
		echo "</div>";
	}
	?>
</div>





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



<!--END OF DEFAULT HTML0-->

<div id='desc'>Message</div>
<script type="text/JavaScript" src="jquerylibrary.js"></script>
<script type="text/JavaScript">
	//jQuery('div').find('img').andSelf().css('border','1px solid #FF0000');
	
	var firstCard = -1;
	var secondCard = -1;
	var gameStarted = false;
	
	
	$(document).ready(function() {
		
	<?php		
		for($iCnt=0;$iCnt<=11;$iCnt++){
			echo "jQuery('#CardPlaceID$iCnt').bind('click',
				{CardPlaceID:$iCnt}, 
				cardClicked);\n";
			
		}		
	?>
	
	
	function cardClicked(e) {
		if(!gameStarted) {
			alert('Game not started');
			return;
		}
		
		

		jQuery('#desc').text('You clicked the card ' + e.data.CardPlaceID);						
		jQuery('#CardPlaceID' + e.data.CardPlaceID).stop().fadeTo(600,0.5);	
		
		//Accessing Attribute 
		//alert( jQuery('#CardPlaceID' + e.data.CardPlaceID).attr('id') );		
		
		
		if(firstCard < 0) {
			firstCard = e.data.CardPlaceID;
		} else {
			secondCard = e.data.CardPlaceID;
			
			
			alert('Card Selected \nFirst Card: ' + firstCard + '\nSecond Card: ' + secondCard);
						
			// if both matches then 
			//reset card opacity
			jQuery('#CardPlaceID' + firstCard).stop().fadeTo(10,1);	
			jQuery('#CardPlaceID' + secondCard).stop().fadeTo(10,1);	
			//reset global varialble
			firstCard = -1;
			secondCard = -1;
			
			
		}
	}
	
	$('#newGame').click( function() {
		
	
	
	
	
	
		gameStarted = true;		
	});
	
	
	$('#update').click( function () {
			$.ajax({
				type: 'POST',
				url: 'hello-ajax.php',
				dataType: 'html',
				success: function(html, textStatus) {
					$('body').append(html);
				},
				error: function(xhr, textStatus, errorThrown) {
					alert('An error occurred! '+( errThrown ? errorThrown : xhr.status));
				}
			});
	});	
	
	
	});
	
	
	
	
</script>

</html>
<!--END OF DEFAULT HTML0-->