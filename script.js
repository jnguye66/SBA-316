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
const relicChest = relicForm.elements[2];
const relicFeet = relicForm.elements[3];
const relicSphere = relicForm.elements[4];
const relicRope = relicForm.elements[5];

let arrCharInfo = []; // Array to hold character objects

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
    const charLvl = charLevelValidate();
    if (charLvl === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.level = charLevelValidate();
    }

    // Character Eidolon Validation
    const charEidolon = charEidolonValidate();
    if (charEidolon === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.eidolon = charEidolonValidate();
    }

    console.log(charInfoObj);
    arrCharInfo.push(charInfoObj); // Push Character Object into Character Info Array
    console.log(arrCharInfo);
}

// Relic Set Validate
function relicValidate(evt) {
    evt.preventDefault();

    let charRelicSetInfo = {}; // Character Object Information

    // Relic Chest Validation
    const relicChest = relChestValidate();
    if (relicChest === false) {
        evt.returnValue = false;
        return false;
    } else {
        charRelicSetInfo.chest = relChestValidate();
    }
}

////////////////////////////////////////////////////////////////////////
// Charater Options Validate Functions

// Character Selection Validate
function charSelectValidate() {
    let charSelectElement = document.getElementById('character-select');
    let output = charSelectElement.options[charSelectElement.selectedIndex].value;

    if (output === ''){
        alert("Please select a character.");
        charLevel.focus();
        return false;
    }

    return output;
}

// Light Cone Selection Validate
function lightConeSelectValidate(){
    let selectedElement = charLightCone;
    let output = selectedElement.options[selectedElement.selectedIndex].textContent;

    if (output === ''){
        alert("Please select a light cone.");
        charLevel.focus();
        return false;
    }

    return output;
}

// Character Level Validate
function charLevelValidate() {
    if (charLevel.value === ""){
        alert("Please enter your characters level");
        charLevel.focus();
        return false;
    } else if (parseInt(charLevel.value) > 80) {
        alert("Maximum level is 80.");
        charLevel.focus();
        return false;
    } else if (parseInt(charLevel.value) <= 0){
        alert("Minimum level is 1.");
        charLevel.focus();
        return false;
    }
    return charLevel.value;
}

// Character Eidolon Validate
function charEidolonValidate() {
    let selectedElement = charEidolon;
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    return output;
}

////////////////////////////////////////////////////////////////////////
// Relic Options Validate Functions

// Relic Chest Validate
function relChestValidate() {
    let selectedElement = relicChest;
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    if (output === ''){
        alert("Please select a chest main stat.");
        charLevel.focus();
        return false;
    }

    return output;
}

// Relic Feet Validate
function relFeetValidate() {
    
}

// Relic Sphere Validate
function relSphereValidate() {
    
}

// Relic Rope Validate
function relRopeValidate() {
    
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