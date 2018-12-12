//globals
const races = [elf, halfOrc];
const backgrounds = [acolyte, outlander];

function findMatchingObject(selection, globalArr, type) {
    let matchedObject;
    for(i=0; i<globalArr.length; i++) {
        if (selection === globalArr[i][type]) {
            matchedObject = globalArr[i];
            break;
        }
    }
    return matchedObject;
}

function readyListeners() {
    $('.character-generator').submit(event => {
        event.preventDefault();
        let selectedRace = document.querySelector('input[name="race"]:checked').value;
        selectedRace = findMatchingObject(selectedRace, races, "race");

        let selectedBackground = document.querySelector('input[name="background"]:checked').value;
        selectedBackground = findMatchingObject(selectedBackground, backgrounds, "background");

        generateCharacter(selectedRace, selectedBackground);
    });
}

function loadPage() {
    readyListeners();
}

$(loadPage);