/**
 * @author Anand
 */
var progress=0;
var totalmissions=0;
function clearText(box)
{
	box.value="";
}
function fillText(box,text)
{
	box.value=text;
}
function initialise(){
	var nummeter=document.getElementById("nummeter");
	var prg;
	if(totalmissions==0)
		prg=100;
	else
		prg=(progress/totalmissions)*100 ;
	nummeter.innerHTML=prg + "%";
	document.getElementById("meter").style.width=prg+"%";
}
