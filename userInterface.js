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

        let selectedClass = document.querySelector('input[name="classname"]:checked').value;
        selectedClass = findMatchingObject(selectedClass, CLASSES, "classname");

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

function createEquipmentForm(classname) {
    const classEquipment = classname.equipment;
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
                        >
                        <label for=${uniqueName}>
                            ${classEquipment[i][j]}
                        </label>
                    </div>
                `);
            }
        }
    }
    chooseSkillsForm(classname);
}

function limitSkillSelection(max, thisSkill) {
    const checkedBoxes = $('input[name="skills"]:checked').length;
    if(checkedBoxes > max) {
        thisSkill.prop('checked', false);
    }
}

function chooseSkillsForm(classname) {
    $('.js-class-equipment').after(`
      <fieldset class='js-class-skills'>
        <legend>Select ${classname.skills[0]} Class Skills</legend>
      </fieldset>
    `);
    classname.skills[1].forEach(skill => {
        $('.js-class-skills').append(`
            <div class="option">
            <input 
                type="checkbox" 
                name="skills" 
                value=${skill} 
                id=${skill}
                onClick='limitSkillSelection(${classname.skills[0]}, $(this))'
            >
            <label for=${skill}>
                ${skill}
            </label>
        </div>
        `);
    });
}
  
function chooseSubclassForm(classname) {
    if(classname.level >= 3) {
      $('.js-class-skills').after(`
        <fieldset class='js-subclass'>
            <legend>Select SubClass</legend>    
        </fieldset>
      `);
    }
    return classname;
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