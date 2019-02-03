const ABILITY_NAMES = ["str", "dex", "con", "int", "wis", "cha"];

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

//simulates rolling 4 dice and adding the highest three
function roll4add3() {
  const first = rollDice(6);
  const second = rollDice(6);
  const third = rollDice(6);
  const fourth = rollDice(6);
  
  let rolls = [first, second, third, fourth];
  rolls.sort(function(a, b){return b - a});

  const total = rolls[0] + rolls[1] + rolls[2];
  return total;
}

function rollAbilities() {
  for(i=0; i <= 6; i++) {
		let target = "#" + ABILITY_NAMES[i];
		let defaultVal = roll4add3();
		$(target).val(defaultVal);
	}
}

function assignAbilityScores(charClass) {
  let abilityObject = {}

  ABILITY_NAMES.forEach(ability => {
    let abilityInput = '#' + ability;
    let thisVal = $(abilityInput).val();
    abilityObject[ability] = calculateMod(thisVal);
  });

  abilityObject.AC = 10 + abilityObject.dex.mod;
  abilityObject.HP = charClass.HP + abilityObject.con.mod;

  return abilityObject;
}

function calculateMod(statLevel) {
  let modifier = Math.floor((statLevel - 10) / 2);
  return {
    "lvl": statLevel,
    "mod": modifier
  }
}

function assignStats() {
  let abilityObject = {
    "HP": 0
  }

  ABILITY_NAMES.forEach(ability => {
    let abilityInput = '#' + ability;
    let thisVal = $(abilityInput).val();
    abilityObject[ability] = calculateMod(thisVal);
  });

  abilityObject.AC = 10 + abilityObject.dex.mod;

  return abilityObject;
}

//needs a better name
function reassignStats() {
  $('.ability-score').remove();

  // ABILITY_NAMES.forEach(ability => {
  //   let abilityInput = 'input#' + ability;
  //   $(abilityInput).before(
  //     `<button type="button" class="ability-score" value="${ability}">${ability.toUpperCase()}</button>`
  //   );    
  // });

	$('input#str').before('<button type="button" class="ability-score" value="str">STR</button>');
	$('input#dex').before('<button type="button" class="ability-score" value="dex">DEX</button>');
	$('input#con').before('<button type="button" class="ability-score" value="con">CON</button>');
	$('input#int').before('<button type="button" class="ability-score" value="int">INT</button>');
	$('input#wis').before('<button type="button" class="ability-score" value="wis">WIS</button>');
	$('input#cha').before('<button type="button" class="ability-score" value="cha">CHA</button>');
}

function readySwap(ability) {
  $('.ability-score').off('click');
	$('.ability-score').on('click', function() {
    let newAbility = $(this).val();
		swapStats(ability, newAbility);
  });
  $('.ability-scores h3').text('Swap with?');
}

function rearrangeClasses(original, substitute) {
	const originalSelector = '#' + document.getElementsByClassName(original)[0].id;
  const substituteSelector = '#' + document.getElementsByClassName(substitute)[0].id;

  $(originalSelector).removeClass(original).addClass(substitute);
  $(substituteSelector).removeClass(substitute).addClass(original);
}

//need better names
function swapStats(original, substitute) {
  rearrangeClasses(original, substitute);
  reassignStats();
	
	$('.ability-score').off('click');
	$('.ability-score').on('click', function() {
		let ability = $(this).val();
		readySwap(ability);
  });
  $('.ability-scores h3').text('Click on an ability to swap it with another');
}

function addRacialBonuses(baseStats, bonuses) {
  let statSum = {};
  Object.keys(baseStats).forEach(abilityScore => {
    const baseAbility = baseStats[abilityScore];
    const baseLevel = parseInt(baseAbility.lvl);
    const bonusLevels = parseInt(bonuses[abilityScore]);

    if(bonusLevels) {
      let summedLevel = baseLevel + bonusLevels;
      statSum[abilityScore] = calculateMod(summedLevel);
    } else {
      statSum[abilityScore] = baseAbility;
    }
  });

  return statSum;
}

function assignSkillBonuses(characterProficiencies, abilityScores, proficiencyScore=0) {
	const strMod = abilityScores.str.mod;
	const dexMod = abilityScores.dex.mod;
	const intMod = abilityScores.int.mod;
	const wisMod = abilityScores.wis.mod;
	const chaMod = abilityScores.cha.mod;
	
	const skills = {
		"Acrobatics": dexMod,
		"Animal Handling": wisMod,
		"Arcana": intMod,
		"Athletics": strMod,
		"Deception": chaMod,
		"History": intMod,
		"Insight": wisMod,
		"Intimidation": chaMod,
		"Investigation": intMod,
		"Medicine": wisMod,
		"Nature": intMod,
		"Perception": wisMod,
		"Performance": chaMod,
		"Persuasion": chaMod,
		"Religion": intMod,
		"Sleight of Hand": dexMod,
		"Stealth": dexMod,
		"Survival": wisMod
  }

  for(i=0; i<characterProficiencies.length; i++) {
    let proficientSkill = characterProficiencies[i].value;
		skills[proficientSkill] += proficiencyScore;
  }
	return skills;
}

function mergeArrays(arr1, arr2, arr3=null) {
  if(arr3) {
    return [...arr1, ...arr2, ...arr3];
  } else {
    return [...arr1, ...arr2];
  }
}

function mergeEquipment(backgroundEquipment, classEquipment) {
  let selectedEquipment = [];
  for(i=0; i < classEquipment.length; i++) {
    //for equipment that the user must select, there will be an array
    if(classEquipment[i][0].length > 1) {
      let selectedItem = $(`input[name="equip-opt-${i}"]:checked`).val();
      selectedEquipment.push(selectedItem);
      //some equipment is always given to a certain class
    } else {
      selectedEquipment.push(classEquipment[i]);
    }
  }
  return [...backgroundEquipment, ...selectedEquipment];
}

function generateCharacter(race, background, classname) {
  const languages = mergeArrays(race.languages, background.languages, classname.languages);
  const proficiencies = mergeArrays(race.proficiencies, background.proficiencies, classname.proficiencies);
  const feats = mergeArrays(race.feats, background.feats, classname.feats);
  const equipment = mergeEquipment(background.equipment, classname.equipment);

  //stores combined arrays
  const combinedStats = {languages, proficiencies, feats, equipment}
  
  //combined arrays we stored will fill in the missing items
  let character = Object.assign({}, race, background, classname, combinedStats);
  const baseStats = assignStats();

  console.log(baseStats);
  character.stats = addRacialBonuses(baseStats, character.stats);

  let selectedCharSkills = $('.js-class-skills input:checked');
  character.skills = assignSkillBonuses(selectedCharSkills, character.stats, character["proficiency-bonus"]);
  
  displayCharacter(character);
}

function generateList(arr) {
  let mappedArr = arr.map(listItem => `<li>${listItem}</li>\n`);
  return mappedArr.join('');
}

function addPlusSign(modifier) {
  if(modifier > 0) {
    modifier = "+" + modifier;
  }
  return modifier
}

function generateSkillsList(skillsObj) {
  let skillsArray = Object.keys(skillsObj);
  let mappedArr = skillsArray.map(skillName => 
    `<li>${skillName}: ${addPlusSign(skillsObj[skillName])}</li>\n`
  );
  return mappedArr.join('');
}

function generateAbilityList(statsObj) {
  let scoresAndMods = '<p>';

  ABILITY_NAMES.forEach(ability => {
    let mod = addPlusSign(statsObj[ability].mod);
    scoresAndMods += `${ability.toUpperCase()}: ${statsObj[ability].lvl}, ${mod}<br>`
  });
  
  scoresAndMods += 'AC: ' + statsObj.AC
  return `${scoresAndMods}</p>`;
}

function displayCharacter(character) {
  const langList = generateList(character.languages);
  const featList = generateList(character.feats);
  const equipment = generateList(character.equipment);
  const HP = character.HP + character.stats.con.mod;
  const proficiencyScore = addPlusSign(character["proficiency-bonus"]);

  const abilityList = generateAbilityList(character.stats);
  const skillList = generateSkillsList(character.skills);

  $('.character-info').html(`
    <h2>${character.race.split('_').join(' ')} ${character.classname} </h2>
    <h3>Background: ${character.background.split('_').join(' ')}</h3>
    <h4>HP: ${HP}</h4>
    <h4>Proficiency: ${proficiencyScore}</h4>
    <h4>Initiative: ${addPlusSign(character.stats.dex.mod)}</h4>
    ${abilityList}
    <h4>Languages:</h4>
    <ul>
      ${langList}
    </ul>
    <h4>Skills:</h4>
    <ul>
      ${skillList}
    </ul>
    <h4>Features:</h4>
    <ul>
      ${featList}
    </ul>
    <h4>Equipment:</h4>
    <ul>
      ${equipment}
    </ul>
  `);
}