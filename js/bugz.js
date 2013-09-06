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
		case "backstory": html = backstoryPage; localStorage.setItem('html', 'backstory'); value='backstory'; break;
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
var backstoryPage = "<p>Infection Backstory:</p> \
<p>Some miners were digging when they broke into an ancient tunnel, when they went exploring, they found some ruins. They were exploring \
the ruins when the bugs found them. These werent regular bugs, they were much larger, and much more deadly. There were different types of bugs. \
There were the large ones, the fighters. There were the smaller ones, which were the infection spreaders, and there were the medium sized ones, \
which are the workers.</p> \
<br/><p>Mine Backstory:</p> \
<p>The (InsertMineNameHere) Mine was built to harvest Sephorium. Sephorium is a rare orange ore. When this ore is crushed, and added to water, it emits light. \
Just like salt water, when you put the water out in the sun, it will start evaporate, leaving behind only the Sephorium. This makes the ore extremely useful, \
and quite expensive.<\p> \
<br/><p>Ruins Backstory:</p> \
<p>The ruins were found when the miners broke into a tunnel system. They explored the tunnels, and found the ruins. Inside of the ruins, there is what looks \
to be remains of a fight. There were weapons scattered across the floors, partly eaten corpses, and some very large bug shells. The shells were dog sized, and \
were littered around the floor aswell as the corpses.<\p> \
<br/><p>Town Backstory:</p> \
<p>The town of (InsertTownNameHere) was a small mining town. It was built around the Sephorium mine, so that they could work there. \
There are farms to sustain food, a large factory, nearby cities, a small military base,and basic town things, like houses, police station, \
post office, small hospital, and a fire department.<\p> \
<br/><p>-Supreme Overlord Cor-hay Jones</p>";
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