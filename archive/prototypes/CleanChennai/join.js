/**
 * @author Anand
 */
function clearText(box)
{
	box.value="";
}
function fillText(box,text)
{
	box.value=text;
}
window.onload=function(){
	addAllLocations("li","a");
}
function addAllLocations(tagName,indexLetter){
	var regions=document.getElementById("places");
	var newNode=document.createElement(tagName);
	var content=document.createTextNode("Alandur");
	newNode.appendChild(content);
	regions.appendChild(newNode);
}
