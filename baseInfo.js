const halfOrc = {
    "race": "Half-Orc",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "Orc"],
    "stats": {
        "STR": 2,
        "CON": 1
    },
    "skillProficiencies": ["Intimidation"],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Relentless Endurance – when reduced to 0 hp and not killed, can drop to 1 hp instead. Once per long rest.",
        "Savage Attacks – can add one extra damage die to melee weapon crits"
    ]
}

const elf = {
    "race": "Elf",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "Elvish", "any"],
    "stats": {
        "CHA": 2,
        "ANY": 1,
        "ANY": 1
    },
    "skillProficiencies": ["any", "any", "Perception"],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Fey Ancestry – advantage on saves vs being charmed; can't be put to sleep by magic",
        "Trance – don’t need to sleep; meditating for 4 hours counts as a full rest"
    ]
}

const acolyte = {
    "background": "Acolyte",
    "skillProficiencies": ["any", "any", "Perception"],
    "languages": ["any", "any"],
    "equipment": ["holy symbol", "prayer book or prayer wheel", "incense sticks (5)", "vestments", "common clothes"],
    "money": { "GP": 10 },
    "feats": [
        "Shelter of the Faithful – you and your party can receive free healing and care at a shrine or temple of your faith. You (alone) will receive support from followers. You can also ask for assistance from your “home temple” priests, so long as the assistance is not hazardous and you’re on good terms."
    ]
}

const outlander = {
    "background": "Outlander",
    "skillProficiencies": ["Athletics", "Survival"],
    "languages": ["any"],
    "equipment": ["staff", "hunting trap", "trophy from animal", "traveler's clothes"],
    "money": { "GP": 10 },
    "feats": [
        "Wanderer – can always recall general layout of terrain and other features around you and can find food and fresh water for up to 6 people every day if the land has it. Considered rude and uncouth among civilized folk and not used to life in the cities"
    ]
}

const testData = [
  {
    "race": "Half-Orc",
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
      "CHA": 12,
      "AC": 8,
      "HP": 14
    },
    "savingThrows": [],
    "skillProficiencies": [],
    "feats": [],
    "spells": {
      "cantrips": [],
      "lvl1": [],
      "lvl2": []
    }
  },
  {}
];