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

        let selectedClass = document.querySelector('input[name="charClass"]:checked').value;
        selectedClass = findMatchingObject(selectedClass, CLASSES, "charClass");

        generateCharacter(selectedRace, selectedBackground);
    });
    $('.dice-roller').on('click', rollStats);
    $('.ability-score').on('click', function() {
		let ability = $(this).val();
		readySwap(ability);
	});
}

function createFormLabels(fieldset, arr, name) {
    arr.forEach(obj => {
        $(fieldset).append(`
            <div class="option">
                <input type="radio" name=${name} value=${obj[name]} id=${obj[name]} required>
                <label for=${obj[name]}>
                    ${obj[name].split('_').join(' ')}
                </label>
            </div>
        `)
    });
}

function createEquipmentForm(charClass) {
    const classEquipment = charClass.equipment;
    $('.js-class').after(`
      <fieldset class='js-class-equipment'>
        <legend>Select Class Equipment:</legend>
      </fieldset>
    `);
    for(i=0; i<classEquipment.length; i++) {
        for(j=0; j<classEquipment[i].length; j++) {
            //prevents letters from becoming inputs
            if(classEquipment[i][j].length > 1) {
                let inputName = `equip-opt-${i}`;
                let uniqueName = `equip-opt-${i}-${j}`;
                $('.js-class-equipment').append(`
                    <div class="option">
                        <input 
                            type="radio" 
                            name=${inputName} 
                            value=${classEquipment[i][j]} 
                            id=${uniqueName} 
                            required
                        >
                        <label for=${uniqueName}>
                            ${classEquipment[i][j]}
                        </label>
                    </div>
                `);
            }
        }
    }
    chooseSkillsForm(charClass);
}

function limitSkillSelection(max) {
    console.log('running');
    $('input[type=checkbox]').on('change', (e) => {
        let boxesChecked = $('input[type=checkbox]:checked').length;
        if(boxesChecked >= max) {
            this.checked = false;
            console.log($('input[type=checkbox]:checked'));
        }
    });
}

function chooseSkillsForm(charClass) {
    $('.js-class-equipment').after(`
      <fieldset class='js-class-skills'>
        <legend>Select ${charClass.skills[0]} Class Skills</legend>
      </fieldset>
    `);
    charClass.skills[1].forEach(skill => {
        $('.js-class-skills').append(`
            <div class="option">
            <input 
                type="checkbox" 
                name="skills" 
                value=${skill} 
                id=${skill}
                required
            >
            <label for=${skill}>
                ${skill}
            </label>
        </div>
        `);
    });
    limitSkillSelection(charClass.skills[0]);
}
  
function chooseSubclassForm(charClass) {
    if(charClass.level >= 3) {
      $('.js-class-skills').after(`
        <fieldset class='js-subclass'>
            <legend>Select SubClass</legend>    
        </fieldset>
      `);
    }
    return charClass;
}

function loadPage() {
    createFormLabels('.js-race', RACES, 'race');
    createFormLabels('.js-background', BACKGROUNDS, 'background');
    createFormLabels('.js-class', CLASSES, 'classname');
    createEquipmentForm(CLASSES[0]);
    reassignStats();
    readyListeners();
}

$(loadPage);