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
  const str = roll4add3();
  const dex = roll4add3();
  const con = roll4add3();
  const int = roll4add3();
  const wis = roll4add3();
  const cha = roll4add3();

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

function generateCharacter(race, background) {
  const languages = [...race.languages, ...background.languages];
  const skillProficiencies = [...race.skillProficiencies, ...background.skillProficiencies];
  const feats = [...race.feats, ...background.feats];

  //stores combined arrays
  const combinedStats = {languages, skillProficiencies, feats}
  
  //combined arrays we stored will fill in the missing items
  let character = Object.assign({}, race, background, combinedStats);

  character.stats = rollStats();
  displayCharacter(character);
}

function generateList(arr) {
  let mappedArr = arr.map(listItem => `<li>${listItem}</li>\n`);
  return mappedArr.join('');
}

function displayCharacter(character) {
  const langList = generateList(character.languages);
  const skillList = generateList(character.skillProficiencies);
  const featList = generateList(character.feats);

  $('.character-info').html(`
    <h2>Race: ${character.race}</h2>
    <h3>Background: ${character.background}</h3>
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
    <h4>Skill Proficiencies:</h4>
    <ul>
      ${skillList}
    </ul>
    <h4>Features:</h4>
    <ul>
      ${featList}
    </ul>
  `);
}