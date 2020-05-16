<?php

class Authenticate {

	private $strUsername = "";
	private $strPassword = "";
	private $strError = "";
	
	public function __construct($Username, $Password) {
		$this->strUsername = $Username;
		$this->strPassword = $Password;		
	}
	
	public function getUsername() { 
		return $this->strUsername;
	}
	
	public function setUsername($newUsername) {
		$this->strUsername = $newUsername;
	}
	
	public function setPassword($newPassword) {
		$this->strPassword = $newPassword;
	}
	
	public function getError() {
		return $this->strError;
	}
	
	
	public function authenticateUser() {
		
		//Start: Connecting to Database
		include('config.php');
		$dbConnection = mysql_connect($dbhost, $dbuser, $dbpass) or die("Connection failed!!");				
		mysql_select_db($dbName) or die("Data connection failed !!");
		$db = $dbName;
		//End: Connection to Database

		
		//Start: Checking Database Connection
		if($db==null) {
			$this->strError = "Unexpected Error: Unable to connect to database";
			return false;
		}
		//End: Checking database Connection

		
		
		//Start: Reterive User information
		$strSQL = "SELECT * FROM GameUsers WHERE Username='".$this->strUsername."'";
		$rsUser = mysql_query($strSQL);
		
		
		$cntRec = mysql_num_rows($rsUser);		
		//End: Reterive User inforation

		
		//Start: Checking user existence
		if($cntRec!=1) {
			$this->strError = "Login failed: User does not exists";
			return false;
		}
		//End: Checking user existence

		//Fetch User record into a variable $rowUser
		$rowUser = mysql_fetch_object($rsUser);
	
		//Checking Userpassword
		if ($this->strPassword != $rowUser->UserPassword) {
			$this->strError = "Login failed: Incorrect password";
			return false;
		}
		
		
		
		//Start: Creating session for successful login
		session_start();
		$_SESSION['UserID'] = $rowUser->UserID;
		$_SESSION['Username'] = $rowUser->UserName;
		//End: Creating session for successful login
		
		
		//Disconnecting database
		if($dbConnection!=null) {
			mysql_close($dbConnection);
			unset($dbConnection);
		}	
		//End: disconnecting database
		
		//return true for successful authentication
		return true;		
	}
}
?>
