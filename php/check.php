<?php
	/*允许跨域*/
	header("Access-Control-Allow-Origin:*");
	
	$username = $_POST["username"];
	$password = $_POST["password"];
	
	mysql_connect("localhost:3306", "root", "");
	
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	
	mysql_select_db("mynubia");
	
	$sql = "SELECT * FROM users WHERE username='$username'";
	$result = mysql_query($sql);
	
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo '{"status":1,"message":"success","data":'. json_encode($row) .'}';
	} else {
		echo '{"status":0,"message":"failed","data":{}}';
	}
	
	
	
	
	mysql_close();
?>