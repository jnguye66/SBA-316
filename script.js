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
const relicHead = relicForm.elements[0];
const relicHands = relicForm.elements[1];
const relicChest = relicForm.elements[2];
const relicFeet = relicForm.elements[3];
const relicSphere = relicForm.elements[4];
const relicRope = relicForm.elements[5];

let arrCharInfo = []; // Array to hold character objects

// Both validate functions go off of same submit press
charForm.addEventListener("submit", charValidate); // Character validate
//relicForm.addEventListener("submit", relicValidate); // Relic validate

////////////////////////////////////////////////////////////////////////
// Validate Functions
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

    const lightConeVal = lightConeSelectValidate();
    if (lightConeVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.lightCone = lightConeSelectValidate();
    }

    // Character Level Validation
    const charLvl = charLevelValidate();
    if (charLvl === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.level = charLevelValidate();
    }

    console.log(charInfoObj);
    arrCharInfo.push(charInfoObj); // Push Character Object into Character Info Array
    console.log(arrCharInfo);
}

// function relicValidate(evt) {
//     evt.preventDefault();

// }

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
// let selectedElement = document.getElementById('character-select'); Grabs character-select 
// let output = selectedElement.options[1].value; // grabs option 1
// console.log(selectedElement) // Logs character-select 
// console.log(output) // Outputs option 1's value, which is acheron

// Light Cone Selection Validate
function lightConeSelectValidate(){
    let selectedElement = charLightCone;
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    if (output === ''){
        alert("Please select a light cone.");
        charLevel.focus();
        return false;
    }

    return output;
}


// Char Level Validate
function charLevelValidate() {
    if (charLevel.value === ""){
        alert("Please enter your characters level");
        charLevel.focus();
        return false;
    } else if (charLevel.value.parseInt > 80) {
        alert("Max level is 80.");
        charLevel.focus();
        return false;
    } else if (charLevel.value.parseInt <= 0){
        alert("Minimum level is 1.");
        charLevel.focus();
        return false;
    }
    return charLevel.value;
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