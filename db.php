<?php

///////////////////////////////////////////////////
// PHP Blackjack 1.0
// coded by Ben Summers 2001
// bsummers@network-underground.net
///////////////////////////////////////////////////
// do whatever you want with this as long
// as this info stays here
///////////////////////////////////////////////////

	function db_query($query) {
		$result = mysql_query( $query );
		return $result;
	}

	function db_insert($table,$values) {
		$sql = "INSERT INTO $table VALUES ($values)";
		$result = mysql_query( $sql );
		return $result;
	}

	function db_del($table,$where) {
		$sql = "DELETE FROM $table WHERE $where";
		$result = mysql_query( $sql );
		return $result;
	}

	function db_update($table,$set,$where) {
		$sql = "UPDATE $table SET $set WHERE $where";
		echo $sql;
		$result = mysql_query( $sql );
		return $result;
	}

	function db_num_rows($result) {
		return mysql_numrows($result);
	}

	function db_affected_rows() {
		return @mysql_affected_rows();
	}

	function db_fetch_row($result) {
		return mysql_fetch_row($result);
	}

	$conn = mysql_connect( $dbhost, $dbuser, $dbpass );
	mysql_select_db($dbtable);
?>