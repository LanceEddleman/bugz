//List of all possible items goes here! (Any 'Clothes' is a shirt/pants combo.)
var pistol = true;
var rifle = true;
var shovel = true;
var pick = true;
var leatherBelt = true;
var minerBoots = true;
var minerClothes = true;
var minerGloves = true;
var hardhat = true;
var hardhatFlashlight = true;
var flashlight = true;
var matches = true;

//Checking if you own an item.
var itemArray = [];
var waistArray = [];
var clothesArray = [];
var handArray = [];
var feetArray = [];
var headArray = [];
var inventoryArray = [itemArray, waistArray, clothesArray, handArray, feetArray, headArray];

var inventoryRun = function(){
if(pistol === true){
    itemArray.push(" pistol");
}
if(rifle === true){
    itemArray.push(" rifle");
}
if(pick === true){
    itemArray.push(" pick");
}
if(shovel === true){
    itemArray.push(" shovel");
}
if(leatherBelt === true){
    waistArray.push(" leather belt");
}
if(minerBoots === true){
    feetArray.push(" miner boots");
}
if(minerClothes === true){
    clothesArray.push(" miner clothes");
}
if(minerGloves === true){
    handArray.push(" miner gloves");
}
if(hardhat === true){
    headArray.push(" hardhat");
}
if(hardhatFlashlight === true){
    headArray.push(" hardhat flashlight");
}
if(flashlight === true){
    itemArray.push(" flashlight");
}
if(matches === true){
    itemArray.push(" matches");
}
}

var arrayRifle = (itemArray.indexOf("rifle") > -1);
var arrayPistol = (itemArray.indexOf("pistol") > -1);
var arrayShovel = (itemArray.indexOf("shovel") > -1);
var arrayPick = (itemArray.indexOf("pick") > -1);
var arrayMinerBoots = (feetArray.indexOf("workBoots") > -1);
var arrayMinerClothes = (clothesArray.indexOf("minerClothes") > -1);
var arrayMinerGloves = (handArray.indexOf("gloves") > -1);
var arrayHardhat = (headArray.indexOf("hardhat") > -1);
var arrayHardhatFlashlight = (headArray.indexOf("hardhatFlashlight") > -1);
var arrayLeatherBelt = (clothesArray.indexOf("belt") > -1);
var arrayMatches = (itemArray.indexOf("matches") > -1);
var arrayFlashlight = (itemArray.indexOf("flashlight") > -1);

//Choosing your outfit/weapon, through an inventory system.
var itemEquip = '';
var headEquip = '';
var clothesEquip = '';
var waistEquip = '';
var handsEquip = '';
var feetEquip = '';

var inventory = function(){
inventoryRun();
var openInventory = "You open your inventory: " + inventoryArray;
document.getElementById('inventoryArray').innerHTML = openInventory;
}

var charItem = function(){
var charItemChoose = prompt(itemArray).toLowerCase();
var itemChoice = "You equip " + charItemChoose;
switch(charItemChoose){
    case 'pistol':
        document.getElementById('characterItem').innerHTML = itemChoice;
        break;
    case 'rifle':
        document.getElementById('characterItem').innerHTML = itemChoice;
        break;
    case 'pick':
        document.getElementById('characterItem').innerHTML = itemChoice;
        break;
    case 'shovel':
        document.getElementById('characterItem').innerHTML = itemChoice;
        break;
    default:
    }
}

var charHead = function(){
var charHeadChoose = prompt(headArray).toLowerCase();
var headChoice = "You equip " + charHeadChoose;
switch(charHeadChoose){
    case 'hardhat':
        document.getElementById('characterHead').innerHTML = headChoice;
        break;
    case 'hardhat flashlight':
        document.getElementById('characterHead').innerHTML = headChoice;
        break;
    default:
    }
}

var charClothes = function(){
var charClothesChoose = prompt(clothesArray).toLowerCase();
var clothesChoice = "You equip " + charClothesChoose;
switch(charClothesChoose){
    case 'miner clothes':
        document.getElementById('characterClothes').innerHTML = clothesChoice;
        break;
    default:
    }
}

var charWaist = function(){
var charWaistChoose = prompt(waistArray).toLowerCase();
var waistChoice = "You equip " + charWaistChoose;
switch(charWaistChoose){
    case 'leather belt':
        document.getElementById('characterWaist').innerHTML = waistChoice;
        break;
    default:
    }
}

var charHands = function(){
var charHandsChoose = prompt(handArray).toLowerCase();
var handsChoice = "You equip " + charHandsChoose;
switch(charHandsChoose){
    case 'miner gloves':
        document.getElementById('characterHands').innerHTML = handsChoice;
        break;
    default:
    }
}

var charFeet = function(){
var charFeetChoose = prompt(feetArray).toLowerCase();
var feetChoice = "You equip " + charFeetChoose;
switch(charFeetChoose){
    case 'miner boots':
        document.getElementById('characterFeet').innerHTML = feetChoice;
        break;
    default:
    }
}