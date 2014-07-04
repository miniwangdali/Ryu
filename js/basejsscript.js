// JavaScript Document

var currentTab = "tab_1";
var currentPoint = "point_1";

function getById(id){
	return document.getElementById(id);
}
function changeTab(id){
	if(id == currentTab){
		return;
	}else{
		getById(currentTab).state = "hidden";
		getById(id).state = "show";
		getById(currentTab).style.display = "none";
		getById(id).style.display = "block";
		currentTab = id;
	}
}
function changePoint(id){
	if(id == currentPoint){
		return;
	}else{
		document.getElementById(currentPoint).state = "off";
		document.getElementById(id).state = "on";
		document.getElementById(currentPoint).src = "image/selector_off.png";
		document.getElementById(id).src = "image/selector_on.png";
		currentPoint = id;
	}
}