// JavaScript Document

//	Display page information
function show(page)
{
	var html = "";
	switch(page)
	{
		case "homepage": html = homePage; localStorage.setItem('html', 'homepage'); value='homepage'; break;
		case "comingsoon": html = comingsoonPage; localStorage.setItem('html', 'comingsoon'); value='comingsoon'; break;
		case "about": html = aboutPage; localStorage.setItem('html', 'about'); value='about'; break;
		case "news": html = newsPage; localStorage.setItem('html', 'news'); value='news'; break;
	    	default: html = homePage; localStorage.setItem('html', 'homepage'); value='homepage';
	}
	document.getElementById('center').innerHTML = html;
	console.log(page);
}

// ****************** Pages ******************
var homePage = "<p>This is the homepage.</p> \
<p>The information in this field will describe what the link above it do when you hover it should have a background water mark image \
with the text floating over it.</p> \
<p>This will look cool you will like it once it is working.</p> \
<p>- Supreme Overlord, Cor-hay Jones.</p> ";
var comingsoonPage = "<p>This page is not done, please come back later.</p>";
var aboutPage = "<p>This page will be the 'about' page.</p>";
var newsPage = "News: We're working on it, come back later.<br />...";
// ****************** PagesEnd ******************
// ****************** TimeStamp ******************
var buildCD = function() {
var cdMonth = getMonth();
var cdDate = getDate();
var cdYear = getFullYear();
	var clientDate = function(){
		var displayDate = (cdMonth + '/' + cdDay + '/' + cdYear)
		setInterval(displayDate, 500);
		console.log(displayDate);
	};
};
// ****************** Local Time *****************
function date_time(id)
{
	var date = new Date;
	var year = date.getFullYear();
	var month = date.getMonth();
	var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
	var d = date.getDate();
	var day = date.getDay();
	var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	var h = date.getHours();
	var dd='am'
	console.log(h);
	if(h<10) {h = "0"+h;}
	if(h>12) {h = h-12; dd='pm';}
	m = date.getMinutes();
	if(m<10) {m = "0"+m;}
	s = date.getSeconds();
	if(s<10) {s = "0"+s;}
// result = ''+months[month]+' '+d+', '+year+' '+'<br />'+''+days[day]+' '+' '+h+':'+m+':'+s+' '+dd;
	result = ''+months[month]+' '+d+', '+year+' '+'<br />'+''+days[day]+' '+' '+h+':'+m+' '+dd;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}

// ****************** TimeStampEnd ***************
// Weapon Selection
var pistol = true;
var rifle = true;
var pick = true;
var shovel = true;
var weaponTrue = [];

var weaponList = function() {
    if (pistol === true){
        console.log("pistol");
        weaponTrue.push("pistol");
    }
    if (rifle === true){
        console.log("rifle");
        weaponTrue.push("rifle");
    }
    if (pick === true){
        console.log("pick");
        weaponTrue.push("pick");
    }
    if (shovel === true){
        console.log("shovel");
        weaponTrue.push("shovel");
    }
};
//weaponList();

var arrayRifle = (weaponTrue.indexOf("rifle") > -1);
var arrayPistol = (weaponTrue.indexOf("pistol") > -1);
var arrayShovel = (weaponTrue.indexOf("shovel") > -1);
var arrayPick = (weaponTrue.indexOf("pick") > -1);

var weaponChoosing = function() {
var weaponChoice = prompt("Choose your weapon: " + weaponTrue).toLowerCase();
switch(weaponChoice) {
case "pistol":
    if (arrayPistol){
    console.log("You're armed with your " + weaponChoice + "!");
    }
    else {
    console.log("Object not found, try again.");
    weaponChoosing();
    }
    break;
case "rifle":
    if (arrayRifle){
    console.log("You're armed with your " + weaponChoice + "!");
    }
    else {
    console.log("Object not found, try again.");
    weaponChoosing();
    }
    break;
case "shovel":
    if (arrayShovel){
    console.log("You're armed with your " + weaponChoice + "!");
    }
    else {
    console.log("Object not found, try again.");
    weaponChoosing();
    }
    break;
case "pick":
    if (arrayPick){
    console.log("You're armed with your " + weaponChoice + "!");
    }
    else {
    console.log("Object not found, try again.");
    weaponChoosing();
    }
    break;
default:
    console.log("Object not found, try again.");
    weaponChoosing();
}
};
// weaponChoosing();