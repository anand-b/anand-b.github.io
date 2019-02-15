// JavaScript Document
$(document).ready(function(){
	$("#menuicon").mouseover(function(){
		$("#open-menu").animate({marginLeft:"0px"},300);
		$("#menuicon").hide(300);
	});
	$("#menulist").mouseleave(function(){
		$("#open-menu").animate({marginLeft:"-210px"},300);
		$("#menuicon").show(350);
	});
	$("#middle-pane").click(function(){
		$("#registerform").hide(10);
		$("#signinform").hide(10);
	});
	$(".left-pane").click(function(){
		$("#registerform").hide(10);
		$("#signinform").hide(10);
	});

	/*-------------------Register Box Open Close-------------------*/	
	$("#register").click(function(){
		$("#signinform").hide(10);
		$("#registerform").show(10);
	});
	/*-------------------Register Box Open Close-------------------*/
	/*-------------------Signin Box Open Close-------------------*/
	$("#signin").click(function(){
		$("#registerform").hide(10);
		$("#signinform").show(10);
	});
	/*-------------------Signin Box Open Close-------------------*/
	/*-------------------Search--------------------------------*/
	$("#search").click(function(){
		$(this).attr("value","");
		$(this).css("color","#222");
		$(this).css("background-color","#FFF");
	});
	$("#content").click(function(){
		$("#search").attr("value","Search");
		$("#search").css("color","#999");
		$(this).css("background-color","#efefef");
	});
	/*-------------------Search--------------------------------*/
});
