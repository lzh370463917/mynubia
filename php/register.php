<?php
	
	/*允许跨域*/
	header("Access-Control-Allow-Origin:*");
	
	$username = $_POST["username"];
	$password = $_POST["password"];
	
	mysql_connect("localhost:3306", "root", "");
	
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	
	mysql_select_db("mynubia");
	
	$sql="INSERT INTO  `mynubia`.`users` (
		`username` ,
		`password` 
	) VALUES ('$username',  '$password')";
	$result = mysql_query($sql);
	
	// 根据执行结果判断
	if ($result) { // 成功，则跳转到登录页面
		echo "<script>location='/mynubia/html/login.html';</script>";
	} else { // 失败，跳转到注册页面重新输入
		echo "<script>location='/mynubia/html/register.html';</script>";
	}
	// 关闭数据库连接
	mysql_close();
	
	
	
?>