//goal is to move all of this into a JSON of sorts
const dragonborn = {
    "race": "Dragonborn",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "Draconic"],
    "stats": {
        "STR": 2,
        "CHA": 1
    },
    "skillProficiencies": ["Intimidation"],
    "feats": [
        "Draconic Ancestry – Breath weapon and damage resistance",
        "Breath Weapon – Can use breath as an action. Saving throw for everyone in range, DC = 8 + CON + PROF. 2d6 on fail, 1d6 on success. (3d6 at level 6, 4d6 at 11, 5d6 at 16). Once per rest.",
        "Damage resist – resistant to ancestral damage type"
    ]
}

const dwarf = {
    
}

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

const barbarian = {
    "classname": "Barbarian",
    "hitDice": "d12",
    "HP": 12,
    "proficiencies": ["light and medium armor, shields", "simple and martial weapons"],
    "savingThrows": ["STR", "CON"],
    "skills": [2, ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]],
    "equipment": [
        ["greataxe", "martial melee weapon"], 
        ["two handaxes", "simple weapon"], 
        "Explorer’s pack",
        "Javelins (4)"
    ],
    "subClass": null,
    "level": 1,
    "feats": {
        "1": [],
        "2": [],
        "3": []
    }
}

// may be useful as a prototype later
// const testData = [
//   {
//     "race": "Half-Orc",
//     "background": "Outerlander",
//     "class": {
//       "classname": "Barbarian",
//       "level": 1,
//       "subclass": null
//     },
//     "stats": {
//       "STR": 10,
//       "DEX": 7,
//       "CON": 18,
//       "INT": 9,
//       "WIS": 11,
//       "CHA": 12,
//       "AC": 8,
//       "HP": 14
//     },
//     "savingThrows": [],
//     "skillProficiencies": [],
//     "feats": [],
//     "spells": {
//       "cantrips": [],
//       "lvl1": [],
//       "lvl2": []
//     }
//   },
//   {}
// ];