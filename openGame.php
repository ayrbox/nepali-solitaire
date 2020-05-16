<?php


class openGame {

	private $userID;
	private $gameDescription;
	private $gameID;
	
	private $openDAO;
	
	
	
	public function openGame($openUserID, $connectedDAO) {
		$userID = $openUserID;
		
		$openDAO = $connectedDAO;
		
		$this->getGameInfo();
		
	}
	
	public function GameDescription() {
		return $this->gameDescription;
	}
	
	public function GameID() {
		return $this->gameID;
	}
	
	private function getGameInfo() {		
		
		$openREC = $openDAO->returnRecordSet("SELECT * FROM userGame WHERE GameOwnerID=".$this->userID);
	
		$cntREC = $openDAO->countRecordNum($openREC);

		if($cntREC==1) {	

			$openRow = mysql_fetch_object($openREC);
	
			$gameDescription = $openRow->Description;
			$gameID = $openRow->gameID;
		
		} else {	
			$gameDescription = "";
			$gameID = 0;
		}	
		
	}
}
	
	
	
?>

