<!--?php
    phpinfo();
?-->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>OneLogin</title>
		<meta name="description" content="">
		<meta name="author" content="Anand">

		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<script src="jquery-1.9.1.min.js" type="text/javascript"></script>
		<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
		<link rel="shortcut icon" href="./favicon.png">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
		<link href="register.css" type="text/css" rel="stylesheet">
		
	</head>

	<body>
		<div>
			<header>	
			</header>
			<div id="wrapper">
				<div id="welcome">
					<img src="icon.png">
					<form id="onelogin">
						<input id="username" type="text" value="Username" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
						<input id="password" type="password" value="Password" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
						<br><br>
						<input id="chg" type="checkbox" name="mail" >Gmail
						<input id="cho" type="checkbox" name="mail" >Outlook
						<input id="chy" type="checkbox" name="mail" >Yahoo!
					</form>
				</div>
				<div id="google">
					<img id="g" src="googleLogo.png">
					<form id="gform"> 
						<input id="gmail" type="email" value="example@gmail.com" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
						<input id="gpass" type="password" value="password" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
					</form>
				</div>
				<div id="outlook">
					<img id="o" src="Outlook_1.png">
					<form id="oform">
						<input id="omail" type="email" value="example@hotmail.com" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
						<input id="opass" type="password" value="password" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
					</form>
				</div>
				<div id="yahoo">
					<img id="y" src="yahoologo.png">
					<form id="yform">
						<input id="ymail" type="email" value="example@yahoo.com" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
						<input id="ypass" type="password" value="password" onfocusin="clearText(this);" onfocusout="fillText(this,"Username");">
					</form>
				</div>
				<div style="clear:both;"></div>
				<form id="register">
					<input id="regbutton" type="submit" value="Register">
					<input id="cancel" onclick="goback();" type="button" value="Cancel">
				</form>
			</div>
			<footer>
			
			</footer>
		</div>
	</body>
	<script>
		function clearText(field)
		{
			field.value="";
		}
		function fillText(field,text)
		{
			if(field.value=="")
			{
				field.value=text;
			}
		}
		$(document).ready(function(){
			$("#chg").click(function(){
				if($(this).is(':checked'))
				{
					$('#google').css("display","block");
				}
				else
				{
					$('#google').css("display","none");
				}
			});
			$("#cho").click(function(){
				if($(this).is(':checked'))
				{
					$('#outlook').css("display","block");
				}
				else
				{
					$('#outlook').css("display","none");
				}
			});
			$("#chy").click(function(){
				if($(this).is(':checked'))
				{
					$('#yahoo').css("display","block");
				}
				else
				{
					$('#yahoo').css("display","none");
				}
			});
		});
		function goback()
		{
			window.location.href="./index.php";
		}
	</script>
</html>
