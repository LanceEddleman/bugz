var maxWeight = 250;
//Item List-Weights:
//Clothing:
var wHardhat = 1;
var wMinerClothes = 2;
var wWorkBoots = 1;
var wBelt = 1;
var wGloves = 1;
//Tools:
var wShovel = 3;
var wPick = 5;
//Guns:
var wPistol = 1;
var wRifle = 3;
//Supplies:
var wMatches = 0;
var wFlashlight = 1;
var wBatteries = 1;
var wBottledWater = 1;
var wCannedMeat = 1;

//Amounts
var aHardhat = 1;
var aMinerClothes = 1;
var aWorkBoots = 1;
var aBelt = 1;
var aGloves = 1;
var aShovel = 1;
var aPick = 1;
var aPistol = 1;
var aRifle = 1;
var aMatches = 100;
var aFlashlight = 1;
var aBottledWater = 6;
var aCannedMeat = 6;

//Total Weight
var iHardhat = wHardhat * wHardhat;
var iMinerClothes = aMinerClothes * wMinerClothes;
var iWorkBoots = aWorkBoots * wWorkBoots;
var iBelt = aBelt * wBelt;
var iGloves = aGloves * wGloves;
var iShovel = aShovel * wShovel;
var iPick = aPick * wPick;
var iPistol = aPistol * wPistol;
var iRifle = aRifle * wRifle;
var iMatches =  aMatches * wMatches;
var iFlashlight = aFlashlight *  wFlashlight;
var iBottledWater = aBottledWater * wBottledWater;
var iCannedMeat = aCannedMeat * wCannedMeat;

var characterWeight = (iHardhat + iMinerClothes + iWorkBoots + iBelt + iGloves + iPick + iPistol + iRifle + iMatches + iFlashlight + iBottledWater + iCannedMeat);
var displayWeight = (characterWeight + "/" + maxWeight);

//Logging the total weight.
var totalWeight = function() {
//		console.log("Inventory")
//		console.log(characterWeight + "/" + maxWeight)
		document.getElementById("weight").innerHTML = displayWeight;
	};

//totalWeight();


//BugFunctionz =========================================================================
var createCharacter = function() {
	var welcome = confirm("Welcome to the Character Creator")
	var name = prompt("Please choose a name.")
	var gender = prompt("Please choose a gender.")
	var location = prompt("Do you know where you are?").toUpperCase()
	console.log("Name: " + name)
	console.log("Gender: " + gender)

	switch(location) {
	case 'NO':
		var location = "New Eden"
		console.log("Location: " + location)
		break;
	case 'YES':
		var location = prompt("Where are you?", "Type where you are here")
		console.log("Location: " + location)
		break;
	default:
		var location = "New Eden"
		console.log("Location: " + location)
	}
	document.getElementById("Name").innerHTML = name;
	document.getElementById("Gender").innerHTML = gender;
	document.getElementById("Location").innerHTML = location;
};

// abilities
var abilities = function(){
	var health = 0;
	var strength = 0;
	var endurance = 0;
	var constitution = 0;
	var perception = 0;
	var agility = 0;
	var luck = 0;
	var points = 50;

	health = prompt("Points left: " + points + ". How many in health?");
	if (health > points) {
		points = 50;
		abilities()
	}
	else {
		points = points - health;
		strength = prompt("Points left: " + points + ". How many in strength?")
		if (strength > points) {
			points = 50;
			abilities()
		}
		else {
			points = points - strength;
			endurance = prompt("Points left: " + points + ". How many in endurance?")
			if (endurance > points) {
				points = 50;
				abilities()
			}
			else {
				points = points - endurance;
				constitution = prompt("Points left: " + points + ". How many in constitution?")
				if (constitution > points) {
					points = 50;
					abilities()
				}
				else {
					points = points - constitution;
					perception = prompt("Points left: " + points + ". How many in perception?")
					if (perception > points) {
						points = 50;
						abilities()
					}
					else {
						points = points - perception;
						agility = prompt("Points left: " + points + ". How many in agility?")
						if (agility > points) {
							points = 50;
							abilities()
						}
						else {
							points = points - agility;
							luck = prompt("Points left: " + points + ". How many in luck?")
							if (luck > points) {
								points = 50;
								abilities()
							}
						}
					}
				}
			}
		}
	}
// output
	console.log("Ability levels:")
	console.log("Health: " + health)
	console.log("Strength: " + strength)
	console.log("Endurance: " + endurance)
	console.log("Constitution: " + constitution)
	console.log("Perception: " + perception)
	console.log("Agility: " + agility)
	console.log("Luck: " + luck)
	document.getElementById("health").innerHTML = health;
};
//abilities()

//var setAbilities = function() {
//	abilities()
//};


function show(page)
{
	var html = "";
	switch(page)
	{
		case "homepage": html = homePage;break;
		case "comingsoon": html = comingsoonPage;break;
		case "about": html = aboutPage;break;
		case "news": html = newsPage;break;
		default: html = homePage;
	}
	document.getElementById('center').innerHTML = html;
}

var homePage = 'This is the homepage THIS ONE<br /> \
...<p>content center<br/>content center<br/> \
... das dashflajks hflaskjdh <br/> \
flaksjdh flsdjkfh lasdkjf halsdjkf halsdj fhlasdj fhlaskdjfh laskdjfh <br/>  \
lasdkj fhalsd jkfaslh sdlaj fhsldkj hasdljk fhalsdkjh<br/>adfdsjhl <br/>  \
Last Row<br/></p>';
var comingsoonPage = "This is the coming soon page<br />...";
var aboutPage = "This is the about page<br />...";
var newsPage = "This is the news page<br />...";