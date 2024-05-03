// Character Option Validation
const charForm = document.getElementById("character");
const charCharacter = charForm.elements["character-select"];
const charLightCone = charForm.elements["light-cone-select"];
const charLevel = charForm.elements["level"];
const charEidolon = charForm.elements["eidolon"];

// Relic and Stat Option Validation
const relicForm = document.getElementById("relics");
const relicHead = relicForm.elements["head"];
const relicHands = relicForm.elements["hands"];
const relicChest = relicForm.elements["chest"];
const relicFeet = relicForm.elements["feet"];
const relicSphere = relicForm.elements["sphere"];
const relicRope = relicForm.elements["rope"];

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
    console.log(charVal);
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

    arrCharInfo.push(charInfoObj); // Push Character Object into Character Info Array
    console.log(arrCharInfo);
}

// function relicValidate(evt) {
//     evt.preventDefault();

// }

////////////////////////////////////////////////////////////////////////
// Individual Option Validate Functions

// Char Selection Validate
function charSelectValidate() {
    if (charCharacter.value === "") {
        alert("Please choose a character.");
        charCharacter.focus();
        return false;
    }
    return charCharacter.value;
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

// Alert Message Function
function alert(msg) {
    const errorEl = document.getElementById("errorDisplay");
    errorEl.style.display = "block";
    errorEl.textContent = msg;

    setTimeout(() => {
        errorEl.style.display = "none";
    }, 3000);
}