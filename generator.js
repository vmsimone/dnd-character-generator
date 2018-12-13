//simulates rolling 4 dice and adding the highest three
function roll4add3() {
  const first = Math.floor(Math.random() * 6) + 1;
  const second = Math.floor(Math.random() * 6) + 1;
  const third = Math.floor(Math.random() * 6) + 1;
  const fourth = Math.floor(Math.random() * 6) + 1;
  
  let rolls = [first, second, third, fourth];
  rolls.sort(function(a, b){return b - a});

  const total = rolls[0] + rolls[1] + rolls[2]
  return total
}

function calculateMod(statLevel) {
  let modifier = Math.floor((statLevel - 10) / 2);
  if(modifier > 0) {
    modifier = "+" + modifier;
  }
  return {
    "lvl": statLevel,
    "mod": modifier
  }
}

function rollStats() {
  for(i=0; i <= 6; i++) {
		let target = "#stat-" + i;
		let defaultVal = roll4add3();
		$(target).val(defaultVal);
	}
}

function assignStats() {
	const str = $('input.str').val();
  	const dex = $('input.dex').val();
  	const con = $('input.con').val();
  	const int = $('input.int').val();
  	const wis = $('input.wis').val();
  	const cha = $('input.cha').val();

  return {
    "STR": calculateMod(str),
    "DEX": calculateMod(dex),
    "CON": calculateMod(con),
    "INT": calculateMod(int),
    "WIS": calculateMod(wis),
    "CHA": calculateMod(cha),
    "AC": 10 + Math.floor((dex - 10) / 2)
  }
}

//needs a better name
function reassignStats() {
  $('.ability-score').remove();

	$('input.str').before('<button type="button" class="ability-score" value="str">STR</button>');
	$('input.dex').before('<button type="button" class="ability-score" value="dex">DEX</button>');
	$('input.con').before('<button type="button" class="ability-score" value="con">CON</button>');
	$('input.int').before('<button type="button" class="ability-score" value="int">INT</button>');
	$('input.wis').before('<button type="button" class="ability-score" value="wis">WIS</button>');
	$('input.cha').before('<button type="button" class="ability-score" value="cha">CHA</button>');
}

function readySwap(ability) {
  $('.ability-score').off('click');
	$('.ability-score').on('click', function() {
    let newAbility = $(this).val();
		swapStats(ability, newAbility);
  });
  $('.ability-scores legend').after('<h3 class="swap-q">Swap with?</h3>');
}

//needs better names
function swapStats(original, substitute) {
	const originalSelector = '#' + document.getElementsByClassName(original)[0].id;
  const substituteSelector = '#' + document.getElementsByClassName(substitute)[0].id;

  $(originalSelector).removeClass(original).addClass(substitute);
  $(substituteSelector).removeClass(substitute).addClass(original);

  reassignStats();
	
	$('.ability-score').off('click');
	$('.ability-score').on('click', function() {
		let ability = $(this).val();
		readySwap(ability);
  });
  $('.swap-q').remove();
}

function generateCharacter(race, background) {
  const languages = [...race.languages, ...background.languages];
  const proficiencies = [...race.proficiencies, ...background.proficiencies];
  const feats = [...race.feats, ...background.feats];

  //stores combined arrays
  const combinedStats = {languages, proficiencies, feats}
  
  //combined arrays we stored will fill in the missing items
  let character = Object.assign({}, race, background, combinedStats);

  character.stats = assignStats();
  displayCharacter(character);
}

function generateList(arr) {
  let mappedArr = arr.map(listItem => `<li>${listItem}</li>\n`);
  return mappedArr.join('');
}

function displayCharacter(character) {
  const langList = generateList(character.languages);
  const skillList = generateList(character.proficiencies);
  const featList = generateList(character.feats);
  const equipment = generateList(character.equipment);

  $('.character-info').html(`
    <h2>Race: ${character.race.split('_').join(' ')}</h2>
    <h3>Background: ${character.background.split('_').join(' ')}</h3>
    <p>
      STR: ${character.stats.STR.lvl}, ${character.stats.STR.mod}<br>
      DEX: ${character.stats.DEX.lvl}, ${character.stats.DEX.mod}<br>
      CON: ${character.stats.CON.lvl}, ${character.stats.CON.mod}<br>
      INT: ${character.stats.INT.lvl}, ${character.stats.INT.mod}<br>
      WIS: ${character.stats.WIS.lvl}, ${character.stats.WIS.mod}<br>
      CHA: ${character.stats.CHA.lvl}, ${character.stats.CHA.mod}<br>
      AC: ${character.stats.AC}
    </p>
    <h4>Languages:</h4>
    <ul>
      ${langList}
    </ul>
    <h4>Proficiencies:</h4>
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