

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
    var pHit1 = Math.floor((Math.random()*11) + agility);
    var pHit2 = Math.floor((Math.random()*11) + luck);
    var pHit = pHit1 + pHit2;
    var pRangeDamage1 = Math.floor((Math.random()*11) + perception);
    var pRangeDamage2 = Math.floor((Math.random()*11) + luck);
    var pRangeDamage = pRangeDamage1 + pRangeDamage2;
    var pMeleeDamage1 = Math.floor((Math.random()*11) + agility);
    var pMeleeDamage2 = Math.floor((Math.random()*11) + agility);
    var pMeleeDamage = pMeleeDamage1 + pMeleeDamage2;
    if (weaponChoice === "pistol"){
        pDamage = pRangeDamage;
    }
};
var firstEncounter = function(){
    encounters();
    attack = confirm("Do you attack, or run?");
    if (attack === true){
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
        var recieveLoot = confirm("You defeated the Miner! Click to recieve your loot.");
        if (recieveLoot === true)
        {
        var recievedLoot = loot[Math.floor(Math.random() * loot.length)];
        var postmessage = "You've recieved a " + recievedLoot + "!";
        console.log(postmessage);
        if (recievedLoot === "pistol"){
        pistol = true;
        console.log(pistol)
        }
        if (recievedLoot === "shovel"){
        shovel = true;
        console.log(shovel)
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

var printstuff = function(){
    var stuff = 400;
    	document.getElementById('output').innerHTML = stuff;
    	console.log(stuff);
};