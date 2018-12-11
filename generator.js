const testData = [
  {
    "race": "Orc",
    "background": "Outerlander",
    "class": {
      "classname": "Barbarian",
      "level": 1,
      "subclass": null
    },
    "stats": {
      "STR": 10,
      "DEX": 7,
      "CON": 18,
      "INT": 9,
      "WIS": 11,
      "CHA": 12
    }
  },
  {}
]

function displayCharacters() {
  testData.forEach(character => {
    $('main').append(`
      <h2>Level ${character.class.level} ${character.class.classname} ${character.race}</h2>
      <h3>Background: ${character.background}</h3>
      <p>
        STR: ${character.stats.STR}<br>
        DEX: ${character.stats.DEX}<br>
        CON: ${character.stats.CON}<br>
        INT: ${character.stats.INT}<br>
        WIS: ${character.stats.WIS}<br>
        CHA: ${character.stats.CHA}
      </p>
    `);
  })
}

$(displayCharacters);
