<!--requied to add ajax funtionality -->
<html>
<head>
</head>
<body>
	<form method="POST" action="index.php">	
		<table border="10">
			<tr>
				<td>
					Player Name
				</td>
				<td>
					<input name="loginUser" type="Text"/>
				</td>
			</tr>
			<tr>
				<td>
					Password
				</td>
				<td>
					<input name="loginPassword" type="password" />
				</td>
			</tr>		
			<tr>
			<td></td>
			<td><input type="submit"/></td>
			</tr>
		</table>
		<input type="hidden" name="command" value="login"/>
		<h4>For Login</h4>
		Use username - <b>demo</b><br>
		Password - <b>demo</b>
	</form>

</body>

</html>