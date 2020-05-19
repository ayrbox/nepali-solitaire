<?php

class MySQLDAO {

	private $myConnection;
	private $myDB;

	//contructor overloads	
	function MySQLDAO() {
	
		$this->funcConnect();	
		return;
	}
	///////////////////////
	
	
	
	public function funcConnect() {		
	
		include('config.php');
		$myConnection = mysql_connect($dbhost, $dbuser, $dbpass) or die("Connection failed!!");				
		mysql_select_db($dbName) or die("Data connection failed !!");
		$myDB = $dbName;
	}
	
	public function funcDisconnect() {
		
		if(isset($this->myConnection)) {
			mysql_close($this->myConnection);
			unset($this->myConnection);
		}		
	}	
	
	public function funcCreateTable($ddlSQL) {
		$tRec = mysql_query($ddlSQL);
		
	}	

   	public function returnRecordSet($selectSQL) {		
		$returnSet = mysql_query($selectSQL);
		return $returnSet;
	}

	public function countRecordNum($recordSet) {
		$returnRowCount = mysql_num_rows($recordSet);
		return $returnRowCount;
	}
	
	public function insertRecord($tableName, $fieldList, $valueList) {
		$sqlInsert = "INSERT INTO $tableName ($fieldList) VALUES ($valueList)";
		
		echo $sqlInsert;
		return (mysql_query($sqlInsert));
		
	}
	
	
	public function isTableExist($tableName) {
		$testSQL = "SELECT * FROM $tableName";
		
		$result = mysql_query($testSQL);
		
		if (!$result) {			
			return 0;
		} else {
			return 1;
		}
	}
	
	public function executeSQL($sqlStatement) {	
		return (mysql_query($sqlStatement));
	}
}


?>