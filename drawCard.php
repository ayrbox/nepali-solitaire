<?php

class drawCard {

	private $UID;
	private $gameTableName;
	private $strError;
	private $localConnection;
	private $returnXML;
	
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
	
	function drawOneCard($position, $existingCardID) { 
				
		include('cardArray.php');		
		$existingCardValue = $cardValues[$existingCardID];
		
		
		//if not $existingCardValue = 0 then drawOneCard is invalid
		if($existingCardValue != 0) {
			$this->strError = "Card above 10 is allowed to draw one card";
			return false;
		} //Close if block:
		
		
		
		
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
			//block: Send error if table does not exits
			$this->strError = "Unexpected Error: Game does not exists";
			return false;
			
			//close block: create tale if not exists					
		} //end block: Check for table existence
		
		
		//start: get new deck id for existing card
		$sqlNewDeckID = "SELECT (MAX(DeckID))+1 AS MaxID FROM ".$this->gameTableName;
		$rsNewDeckID = mysql_query($sqlNewDeckID);
		$recordNewDeckID = mysql_fetch_object($rsNewDeckID);
		//end: get new Deck Id for existing card
		
		
		//start: updating deck position of existing card at the positing
		$sqlUpdateExistingCard = "UPDATE ".$this->gameTableName.
			" SET DeckID=".$recordNewDeckID->MaxID.
			" ,CardPosition=-1".
			" WHERE CardID=".$existingCardID;
		mysql_query($sqlUpdateExistingCard);
		//end : updating deck position of existing card at the positing
		
		
		//start : one draw card from deck
		$sqlDrawOneCard = "SELECT * FROM ".$this->gameTableName." WHERE CardPosition<0
			ORDER BY DeckID LIMIT 1";		
		$rsCard = mysql_query($sqlDrawOneCard);		
		$recordCard = mysql_fetch_object($rsCard);
		
		//start: generate xml
		$tempXML = "<seteleven>";
			$tempXML .= "<msg msgtype='onecard'>";
				$iCardIndex = $recordCard->CardID;			
				$tempXML .= "<card cardid='".$iCardIndex."' 
					position='".$position."' 
					cardvalue='".$cardValues[$iCardIndex]."'>";
					
						//updating position of card in database
						$sqlUpdateCard = "UPDATE ".$this->gameTableName.
							" SET CardPosition=".$position.
							" WHERE CardID=".$iCardIndex;
						mysql_query($sqlUpdateCard);
									
						//card image value
						$tempXML .= $cardCode[$iCardIndex];
							
							
				$tempXML.= "</card>";
			$tempXML .= "</msg>";
		$tempXML .= "</seteleven>";
		$this->returnXML = $tempXML;
		//end: generate xml
		
		return true;
		
	} //close function: drawOneCard()
	
	
	function drawCard($position1, $position2, $existingCardID1, $existingCardID2) { 
				
		include('cardArray.php');		
		$existingCardValue1 = $cardValues[$existingCardID1];
		$existingCardValue2 = $cardValues[$existingCardID2];
		
		
		//if sum of existing card value is not 11 then drawCard is invalid and returns error message to user
		if(($existingCardValue1 + $existingCardValue2) != 11) {
			$errorXML = "<seteleven>
					<msg msgtype='message'>Invalid selection: Sum of two card is required to be 11</msg>
				</seteleven>";
			$this->returnXML = $errorXML;
			//logical error occured which returns an error XML
			return true;
		} //Close if block:
		
		
		
		
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
			//block: Send error if table does not exits
			$this->strError = "Unexpected Error: Game does not exists";
			return false;
			
			//close block: create tale if not exists					
		} //end block: Check for table existence
				
		
		//start : one draw card from deck
		$sqlDrawCard = "SELECT * FROM ".$this->gameTableName." WHERE CardPosition<0
			ORDER BY DeckID LIMIT 2";		
		$rsCards = mysql_query($sqlDrawCard);		
		
		
		$iCnt=1;
		//start: generate xml
		$tempXML = "<seteleven>";
			$tempXML .= "<msg msgtype='drawcard'>";
			
				while ($recordCard = mysql_fetch_object($rsCards)) {
					$iCardIndex = $recordCard->CardID;
					
					//start block if: select variable one or two					
					$position = ($iCnt==1)?$position1:$position2;
					$tempXML .= "icnt = $iCnt and postion  = $position";
					$tempXML .= "<card cardid='".$iCardIndex."' 
						position='".$position."' 
						cardvalue='".$cardValues[$iCardIndex]."'>";
						
							//updating position of card in database
							$sqlUpdateCard = "UPDATE ".$this->gameTableName.
								" SET CardPosition=".$position.
								" WHERE CardID=".$iCardIndex;
							mysql_query($sqlUpdateCard);										
							//card image value
							$tempXML .= $cardCode[$iCardIndex];																
					$tempXML.= "</card>";					
					$iCnt++;					
				}// Close while: $recordCard = fetch from $rsCard
				
				//send extra node called gamefinished to indicate that game has finished
				if($this->isGamefinished()) {
					$tempXML .= "<gamefinished>true</gamefinished>";
				}
				
			$tempXML .= "</msg>";
		$tempXML .= "</seteleven>";		
		$this->returnXML = $tempXML;
		//end: generate xml
		
		return true;
		
	} //close function: drawCard()
	
	function isGameFinished() {
		//start: get max deck id for existing card
		//$sqlMaxDeckID = "SELECT MAX(DeckID) AS MaxID FROM ".$this->gameTableName;
		//$rsNewDeckID = mysql_query($sqlNewDeckID);
		//$recordNewDeckID = mysql_fetch_object($rsNewDeckID);
		//end: get new Deck Id for existing card
		
		
		$sqlDrawCard = "SELECT * FROM ".$this->gameTableName." WHERE CardPosition<0";
		$rsDrawCard = mysql_query($sqlDrawCard);
		
		$rowCount = mysql_num_rows($rsDrawCard);
		
		return ($rowCount<=0);
		
	}
	
	
	function xmlDrawCard() {
		$tempXML = $this->returnXML;
		$this->returnXML = "";
		return $tempXML;
	}		
	
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
