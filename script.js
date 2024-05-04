// Character Option Validation
const charForm = document.getElementById("character");
// console.log(charForm.elements)
const charCharacter = charForm.elements["character-select"];
const charLightCone = charForm.elements["light-cone-select"];
const charLevel = charForm.elements["level"];
const charEidolon = charForm.elements["eidolon"];

// Relic and Stat Option Validation
const relicForm = document.getElementById("relics");
//console.log(relicForm.elements)
const relicChest = relicForm.elements["chest"];
const relicFeet = relicForm.elements["feet"];
const relicSphere = relicForm.elements["sphere"];
const relicRope = relicForm.elements["rope"];

// Outputs

const relicOutput = document.getElementById("relic-output");

let arrCharacters = []; // Array to hold character objects
let arrRelicSets = []; // Array to hold relic sets

// Both validate functions go off of same submit press
charForm.addEventListener("submit", charValidate); // Character validate
relicForm.addEventListener("submit", relicValidate); // Relic validate

////////////////////////////////////////////////////////////////////////
// Validate Functions

// Character Validate
function charValidate(evt) {
    evt.preventDefault();

    let charInfoObj = {}; // Character Object Information

    // Character Selection Validation
    const charVal = charSelectValidate();
    if (charVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.character = charSelectValidate();
    }
    console.log(charVal)

    // Light Cone Selection Validation
    const lightConeVal = lightConeSelectValidate();
    if (lightConeVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.lightCone = lightConeSelectValidate().toLowerCase();
    }

    // Character Level Validation
    const charLvlVal = charLevelValidate();
    if (charLvlVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.level = charLevelValidate();
    }

    // Character Eidolon Validation
    const charEidolonVal = charEidolonValidate();
    if (charEidolonVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.eidolon = charEidolonValidate();
    }

    //console.log(charInfoObj);
    arrCharacters.push(charInfoObj); // Push Character Object into Character Info Array
    console.log(arrCharacters);

    // Clear each select/textbox if submission is successful
    if (charCharacter && charLightCone && charLevel && charEidolon) {
        charCharacter.selectedIndex = 0;
        charLightCone.selectedIndex = 0;
        charLevel.value = '';
        charEidolon.selectedIndex = 0;
    }
    // Displays inputted user's character image
    displayCharacterImg(charVal);

    // Displays inputted user's character stats
    displayStats("Character", charVal);
    displayStats("Light Cone", lightConeVal);
    displayStats("Level", charLvlVal);
    displayStats("Eidolons", charEidolonVal);

    // Displays calculated character stats based on level
    displayLevelStats(charLvlVal);
}

// Relic Set Validate
function relicValidate(evt) {
    evt.preventDefault();

    let charRelicSetInfo = {}; // Character Object Information

    // Relic Chest Validation
    const relicChestVal = relChestValidate();
    if (relicChestVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charRelicSetInfo.chest = relChestValidate();
    }

    // Relic Feet Validation
    const relicFeetVal = relFeetValidate();
    if (relicFeetVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charRelicSetInfo.feet = relFeetValidate();
    }

    // Relic Sphere Validation
    const relicSphereVal = relSphereValidate();
    if (relicSphereVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charRelicSetInfo.sphere = relSphereValidate();
    }

    // Relic Rope Validation
    const relicRopeVal = relRopeValidate();
    if (relicRopeVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charRelicSetInfo.rope = relRopeValidate();
    }

    //console.log(charRelicSetInfo);
    arrRelicSets.push(charRelicSetInfo); // Push Character Object into Character Info Array
    console.log(arrRelicSets);

    // Clear each select/textbox if submission is successful
    if (relicChestVal && relicFeetVal && relicSphereVal && relicRopeVal) {
        relicChest.selectedIndex = 0;
        relicFeet.selectedIndex = 0;
        relicSphere.selectedIndex = 0;
        relicRope.selectedIndex = 0;
    }
}

////////////////////////////////////////////////////////////////////////
// Charater Options Validate Functions

// Character Selection Validate
function charSelectValidate() {
    let charSelectElement = charCharacter;
    let output = charSelectElement.options[charSelectElement.selectedIndex].textContent;

    if (output === 'Select a Character') {
        alert("Please select a character.");
        charCharacter.focus();
        return false;
    }

    return output;
}

// Light Cone Selection Validate
function lightConeSelectValidate() {
    let selectedElement = charLightCone;
    let output = selectedElement.options[selectedElement.selectedIndex].textContent;

    if (output === 'Select a Light Cone') {
        alert("Please select a light cone.");
        charLightCone.focus();
        return false;
    }

    return output;
}

// Character Level Validate
function charLevelValidate() {
    if (charLevel.value === "") {
        alert("Please enter your characters level");
        charLevel.focus();
        return false;
    } else if (parseInt(charLevel.value) > 80) {
        alert("Maximum level is 80.");
        charLevel.focus();
        return false;
    } else if (parseInt(charLevel.value) <= 0) {
        alert("Minimum level is 1.");
        charLevel.focus();
        return false;
    }
    return charLevel.value;
}

// Character Eidolon Validate
function charEidolonValidate() {
    let selectedElement = charEidolon;
    let output = selectedElement.options[selectedElement.selectedIndex].textContent;

    return output;
}

////////////////////////////////////////////////////////////////////////
// Relic Options Validate Functions

// Relic Chest Validate
function relChestValidate() {
    let selectedElement = relicChest;
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    if (output === '') {
        alert("Please select a chest main stat.");
        relicChest.focus();
        return false;
    }

    return output;
}

// Relic Feet Validate
function relFeetValidate() {
    let selectedElement = relicFeet;
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    if (output === '') {
        alert("Please select a feet main stat.");
        relicFeet.focus();
        return false;
    }

    return output;
}

// Relic Sphere Validate
function relSphereValidate() {
    let selectedElement = relicSphere;
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    if (output === '') {
        alert("Please select a sphere main stat.");
        relicSphere.focus();
        return false;
    }

    return output;
}

// Relic Rope Validate
function relRopeValidate() {
    let selectedElement = relicRope;
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    if (output === '') {
        alert("Please select a rope main stat.");
        relicRope.focus();
        return false;
    }

    return output;
}
////////////////////////////////////////////////////////////////////////
// Displaying Character Info Functions

// Uses clone to display inputted character/relic information
function displayStats(stat, elem) {
    const charOutput = document.getElementById("char-output");

    const charTemplate = document.getElementById("char-stats")
    const clone = charTemplate.content.cloneNode(true);

    const charStat = clone.querySelector('h4');

    charStat.innerHTML = `<span>${stat}: </span>${elem}`;
    
    charOutput.appendChild(charStat);

    console.log(charOutput.children);
}

// Displays a picture of character inputted
function displayCharacterImg (character) {
    const charOutput = document.getElementById("char-output");
    const charImg = document.createElement('img');

    if (character === "Acheron"){
        charImg.src = 'images/acheron_pfp.webp';
        charImg.style.width = "30%";
    } else if (character === "Black Swan") {
        charImg.src = 'images/black_swan_pfp.webp';
        charImg.style.width = "30%";
    } else if (character === "Kafka") {
        charImg.src = 'images/kafka_pfp.webp';
        charImg.style.width = "30%";
    }
    charOutput.appendChild(charImg);
}

// Displays Characters stats at level
function displayLevelStats(lvl) {
    const level = lvl;

    const statNames = ["Health", "Defense", "Attack", "Speed", "Critical Rate", "Critical Damage", "Break Effect", "Outgoing Healing Boost", "Max Energy", "Energy Regeneration Rate", "Effect Hit Rate", "Effect Resistance"];

    statNames.forEach((stat, i) => {
        const form = document.getElementById("char-output");
        const statList = document.createElement('ul');

        form.appendChild(statList);

        const li = document.createElement('li');

        if (statNames[i] === "Health"){
            li.textContent = `${stat}: ${(Math.floor(Math.random() * 26) + 40) * lvl}`;
        } else if (statNames[i] === "Defense"){
            li.textContent = `${stat}: ${(Math.floor(Math.random() * 6) + 30) * lvl}`;
        } else if (statNames[i] === "Attack"){
            li.textContent = `${stat}: ${(Math.floor(Math.random() * 15) + 46) * lvl}`;
        } else if (statNames[i] === "Speed"){
            li.textContent = `${stat}: ${(Math.floor(Math.random() * 18) + 92)}`;
        } else if (statNames[i] === "Critical Rate"){
            li.textContent = `${stat}: ${5}%`;
        } else if (statNames[i] === "Critical Damage"){
            li.textContent = `${stat}: ${50}%`;
        } else if (statNames[i] === "Break Effect"){
            li.textContent = `${stat}: ${50}%`;
        } else if (statNames[i] === "Outgoing Healing Bonus"){
            li.textContent = `${stat}: ${0}%`;
        } else if (statNames[i] === "Max Energy"){
            li.textContent = `${stat}: ${140}`;
        } else if (statNames[i] === "Energy Recharge Rate"){
            li.textContent = `${stat}: ${100}%`;
        } else if (statNames[i] === "Effect Hit Rate"){
            li.textContent = `${stat}: ${65}%`;
        } else if (statNames[i] === "Effect Resistance"){
            li.textContent = `${stat}: ${0}%`;
        }
        
        li.style.marginBottom = '3px';
        li.style.fontWeight = 'bold';

        statList.appendChild(li);
    })
}
let test = document.getElementById('char-stats').children;
console.log(test);

////////////////////////////////////////////////////////////////////////

// Alert Message Function
function alert(msg) {
    const errorEl = document.getElementById("errorDisplay");
    errorEl.style.display = "block";
    errorEl.textContent = msg;

    setTimeout(() => {
        errorEl.style.display = "none";
    }, 3000);
}

