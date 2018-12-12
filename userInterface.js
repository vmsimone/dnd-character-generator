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
        selectedRace = findMatchingObject(selectedRace, RACES, "race");

        let selectedBackground = document.querySelector('input[name="background"]:checked').value;
        selectedBackground = findMatchingObject(selectedBackground, BACKGROUNDS, "background");

        generateCharacter(selectedRace, selectedBackground);
    });
}

function createFormLabels(fieldset, arr, name) {
    arr.forEach(obj => {
        $(fieldset).append(`
            <label for=${obj[name]}>
                <input type="radio" name=${name} value=${obj[name]} id=${obj[name]} required>
                ${obj[name].split('_').join(' ')}
            </label>
        `)
    });
}

function loadPage() {
    createFormLabels('.js-race', RACES, 'race');
    createFormLabels('.js-background', BACKGROUNDS, 'background');
    readyListeners();
}

$(loadPage);