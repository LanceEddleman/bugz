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

var dPistol = 1.25;
var dRifle = 1.75;
var dShovel = 0.5;
var dPick = 0.75;

var pistol = true;
var rifle = true;
var pick = true;
var shovel = false;
var weaponTrue = [];
var weaponChoice = '';
var weaponList = function() {
    if (pistol === true){
        weaponTrue.push("pistol");
    }
    if (rifle === true){
        weaponTrue.push("rifle");
    }
    if (pick === true){
        weaponTrue.push("pick");
    }
    if (shovel === true){
        weaponTrue.push("shovel");
    }
};
weaponList();
var arrayRifle = (weaponTrue.indexOf("rifle") > -1);
var arrayPistol = (weaponTrue.indexOf("pistol") > -1);
var arrayShovel = (weaponTrue.indexOf("shovel") > -1);
var arrayPick = (weaponTrue.indexOf("pick") > -1);

var weaponChoosing = function() {
weaponChoice = prompt("Choose your weapon: " + weaponTrue).toLowerCase();
var weapon = "Weapon: " + weaponChoice;
document.getElementById('weaponChoice').innerHTML = weapon;
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
var weaponDamage = 0;
var loot = ["pistol", "shovel"];
var attack = 0;
var health = 250;
var strength = 10;
var endurance = 6;
var constitution = 8;
var perception = 10;
var agility = 8;
var luck = 10;
var zMinerHealth = 100;
var zMinerDamage = 3;
var zMinerArmor = 0;
var pDamage = '';
var encounters = function(){
    if (weaponChoice === "pistol"){
    weaponDamage = dPistol;
    }
    else if (weaponChoice === "rifle"){
    weaponDamage = dRifle
    }
    else if (weaponChoice === "pick"){
    weaponDamage = dPick
    }
    else if (weaponChoice === "shovel"){
    weaponDamage = dShovel
    }
    var pHit1 = Math.floor((Math.random()*11) + agility);
    var pHit2 = Math.floor((Math.random()*11) + luck);
    var pHit = pHit1 + pHit2;
    var pRangeDamage1 = Math.floor((Math.random()*11) + perception * weaponDamage);
    var pRangeDamage2 = Math.floor((Math.random()*11) + luck * weaponDamage);
    var pRangeDamage = pRangeDamage1 + pRangeDamage2;
    var pMeleeDamage1 = Math.floor((Math.random()*11) + agility * weaponDamage);
    var pMeleeDamage2 = Math.floor((Math.random()*11) + agility * weaponDamage);
    var pMeleeDamage = pMeleeDamage1 + pMeleeDamage2;
    if (weaponChoice === "pistol" || "rifle"){
        pDamage = pRangeDamage;
    }
    else if (weaponChoice === "shovel" || "pick"){
        pDamage = pMeleeDamage;
    }
};

var firstEncounter = function(){
    encounters();
    console.log(pDamage)
    attack = confirm("Do you attack? You've got " + health + " health left.");
    if (attack === true){
        encounters();
        if (zMinerHealth > 0){
        zMinerHealth = zMinerHealth - pDamage;
        health = health - zMinerDamage;
        console.log("Miner's Health: " + zMinerHealth);
        var stuff =  "Miner's Health: " + zMinerHealth;
        document.getElementById('firstEncounter').innerHTML = stuff;
        console.log("Your Health: " + health);
        firstEncounter();
    }
    else{
        var receiveLoot = confirm("You defeated the Miner! Click to receive your loot.");
        if (receiveLoot === true)
        {
        var receivedLoot = loot[Math.floor(Math.random() * loot.length)];
        var postmessage = "You've recieved a " + receivedLoot + "!";
        console.log(postmessage);
        if (receivedLoot === "pistol"){
        pistol = true;
        aPistol = aPistol + 1;
        console.log(aPistol)
        }
        if (receivedLoot === "shovel"){
        shovel = true;
        aShovel = aShovel + 1;
        console.log(aShovel)
        }
        }
    }
    }
    else{
        console.log("Rerun it, not added yet.");
    }
};
//weaponChoosing();
//firstEncounter();