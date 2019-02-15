/**
 * @author Anand
 */
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()<100)
		{
			$("#btt").css("display","none");
		}
		else
		{
			$("#btt").css("display","block");
		}
	});
	$("#btt").click(function(){
		$("body").animate({scrollTop:0},500);
		
	});
	/*$(window).scroll(function(){
			if($(this).scrollTop() < 30 )
			{
				$("#navmenu").css("backgroundColor","");
				$("#navmenu").css("color","#444444");
			}
			else
			{
				$("#navmenu").css("backgroundColor","#588500");
				$("#navmenu").css("color","white");
			}	
	});*/
});
