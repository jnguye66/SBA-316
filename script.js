// Character Option Validation
const charForm = document.getElementById("character");
// console.log(charForm.elements)
const charCharacter = charForm.elements[0];
const charLightCone = charForm.elements[1];
const charLevel = charForm.elements[2];
const charEidolon = charForm.elements[3];

// Relic and Stat Option Validation
const relicForm = document.getElementById("relics");
//console.log(relicForm.elements)
const relicChest = relicForm.elements[0];
const relicFeet = relicForm.elements[1];
const relicSphere = relicForm.elements[2];
const relicRope = relicForm.elements[3];

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
    displayCharacterStats("Character", charVal);
    displayCharacterStats("Light Cone", lightConeVal);
    displayCharacterStats("Level", charLvlVal);
    displayCharacterStats("Eidolons", charEidolonVal);
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
    let charSelectElement = document.getElementById('character-select');
    let output = charSelectElement.options[charSelectElement.selectedIndex].textContent;

    if (output === '') {
        alert("Please select a character.");
        charLevel.focus();
        return false;
    }

    return output;
}

// Light Cone Selection Validate
function lightConeSelectValidate() {
    let selectedElement = charLightCone;
    let output = selectedElement.options[selectedElement.selectedIndex].textContent;

    if (output === '') {
        alert("Please select a light cone.");
        charLevel.focus();
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
        charLevel.focus();
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
        charLevel.focus();
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
        charLevel.focus();
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
        charLevel.focus();
        return false;
    }

    return output;
}
////////////////////////////////////////////////////////////////////////
// Displaying Character Info Functions

// Uses clone to display inputted character information
function displayCharacterStats(stat, elem) {
    const charOutput = document.getElementById("char-output");

    const charTemplate = document.getElementById("char-stats")
    const clone = charTemplate.content.cloneNode(true);

    const charStat = clone.querySelector('h5');

    charStat.textContent = `${stat}: ${elem}`;
    
    charOutput.appendChild(charStat);
}

// Displays a picture of character inputted
function displayCharacterImg (character) {
    const charOutput = document.getElementById("char-output");
    const charImg = document.createElement('img');

    if (character === "Acheron"){
        charImg.src = 'images/acheron_pfp.webp';
    } else if (character === "Black Swan") {
        charImg.src = 'images/black_swan_pfp.webp';
    } else if (character === "Kafka") {
        charImg.src = 'images/kafka_pfp.webp';
    }
    charOutput.appendChild(charImg);
}


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

