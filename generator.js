function loadPage() {
  generateCharacter(elf, acolyte);
  generateCharacter(halfOrc, outlander);
}

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

function rollStats() {
  return {
    "STR": roll4add3(),
    "DEX": roll4add3(),
    "CON": roll4add3(),
    "INT": roll4add3(),
    "WIS": roll4add3(),
    "CHA": roll4add3(),
    "AC": 10,
    "HP": 10
  }
}

function generateCharacter(race, background) {
  const languages = [...race.languages, ...background.languages];
  const skillProficiencies = [...race.skillProficiencies, ...background.skillProficiencies];
  const feats = [...race.feats, ...background.feats];
  const combinedStats = {languages, skillProficiencies, feats}
  
  let combinedObject = Object.assign({}, race, background);
  let character = Object.assign({}, combinedObject, combinedStats);

  character.stats = rollStats();
  
  displayCharacter(character);
}

function displayCharacter(character) {
    $('main').append(`
      <h2>Race: ${character.race}</h2>
      <h3>Background: ${character.background}</h3>
      <p>
        STR: ${character.stats.STR}<br>
        DEX: ${character.stats.DEX}<br>
        CON: ${character.stats.CON}<br>
        INT: ${character.stats.INT}<br>
        WIS: ${character.stats.WIS}<br>
        CHA: ${character.stats.CHA}
      </p>
      <p></p>
    `);
}

$(loadPage);