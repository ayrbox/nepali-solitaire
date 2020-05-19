<?php


class newGame {

	private $UID;
	private $gameTableName;
	private $strError;
	private $localConnection;
	
	function __construct($authenticatedUID) {
		$this->UID = $authenticatedUID;		
		
		$this->gameTableName = "Game$authenticatedUID";
	}//close constructtor
	
	function dispose() {
		if(isset($this->localConnection)) {
			mysql_close($this->localConnection);
			unset($this->localConnection);
		}		
	}// close function():dispose
	
	function getError() {
		return $this->strError;
	}
	
	function createNewGame() { 
		
		//Start block: Connecting to Database
		include('config.php');		
		$this->localConnection = mysql_connect($dbhost, $dbuser, $dbpass) or die("Connection failed!!");
		mysql_select_db($dbName) or die("Data connection failed !!");
		$db = $dbName;
		//End block: Connection to Database

		
		//Start block: Checking Database Connection
		if($db==null) {			
			$this->strError = "Unexpected Error: Unable to connect to database";
			return false;
		}//End block: Checking database Connection
	
	
	
		//start block: Check for table existence
		if(!$this->isTableExist()){
			//block: create table if not exists
				$sqlCreate = "CREATE TABLE ".$this->gameTableName."(
					`DeckID` INT NOT NULL PRIMARY KEY ,
					`CardID` INT NOT NULL ,
					`CardPosition` INT NULL DEFAULT  '-1',
					UNIQUE (`CardID`)
					)";		
				if(!mysql_query($sqlCreate)) {
					$this->strError = "Unable to create game for the user";					
					return false;
				}				
				//>>>>>>> GAME CREATED >>>>>>>>			
			//close block: create tale if not exists					
		} //end block: Check for table existence
		
		
		
		//delete record from table
		mysql_query("DELETE FROM ".$this->gameTableName);
				
		//generate new game (random deck)
		$this->generateGame();		
		return true;
		
		
		
	} //end function: createNewGame()
	
	
	function xmlDrawCard() {
	
		include('cardArray.php');
	
		$xmlReturn = "";
		$sqlCards = "SELECT * FROM ".$this->gameTableName." WHERE DeckID<12";
		
		$rsCards = mysql_query($sqlCards); 
		
		$xmlReturn = "<seteleven>";
			$iCnt = 0;
			
			$xmlReturn .= "<msg msgtype='initialcards'>";
			while ($recordCard = mysql_fetch_object($rsCards)) {
			
				$iCardIndex = $recordCard->CardID;
			
				$xmlReturn .= "<card cardid='".$iCardIndex."' 
								position='".$iCnt."' 
								cardvalue='".$cardValues[$iCardIndex]."'>";
								
					$xmlReturn .= $cardCode[$iCardIndex];
					
					//updating position of card in database
					$sqlCards = "UPDATE ".$this->gameTableName.
						" SET CardPosition=".$iCnt.
						" WHERE CardID=".$iCardIndex;
					mysql_query($sqlCards);
					
				$xmlReturn .= "</card>";
				
				$iCnt++;
			}			
			$xmlReturn .= "</msg>";
		$xmlReturn .= "</seteleven>";
		
		return $xmlReturn;
	}
	
	function generateGame() {
		
		$iCnt = 0;
		$tempDeck = array();	
		$sqlCard = "";
		
		
		
		
		
		do{
			mt_srand ((double) microtime() * 9999999);
			$cardIndex = mt_rand (0,51);
		
			if (!in_array($cardIndex, $tempDeck)) {
			
				//deck sequence into database				
				$sqlCard = "INSERT INTO ".$this->gameTableName.
					" (DeckID, CardID) VALUES ($iCnt, $cardIndex)";
				mysql_query($sqlCard);
				
				//add card to temp tech
				$tempDeck[$iCnt]=$cardIndex;
				$iCnt++;			
			}	
		} while($iCnt<52); 
	}//close function(): generateGame
	
	function isTableExist() {
		$strSQL = "SELECT * FROM ".$this->gameTableName;
		
		$result = mysql_query($strSQL);
		
		if (!$result) {			
			return false;
		} else {
			return true;
		}
	}// end function: isTableExist
	
	
		
} //Close : class newGame()
?>
