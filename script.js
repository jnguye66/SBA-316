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
const relicHead = relicForm.elements["#head"];
const relicHands = relicForm.elements["#hands"];
const relicChest = relicForm.elements["#chest"];
const relicFeet = relicForm.elements["#feet"];
const relicSphere = relicForm.elements["#sphere"];
const relicRope = relicForm.elements["#rope"];

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
    console.log(charVal)
    if (charVal === false) {
        evt.returnValue = false;
        return false;
    } else {
        charInfoObj.character = charSelectValidate();
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
    let selectedElement = document.getElementById('character-select');
    let output = selectedElement.options[selectedElement.selectedIndex].value;

    return output;
}
// let selectedElement = document.getElementById('character-select'); Grabs character-select 
// let output = selectedElement.options[1].value; // grabs option 1
// console.log(selectedElement) // Logs character-select 
// console.log(output) // Outputs option 1's value, which is acheron




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