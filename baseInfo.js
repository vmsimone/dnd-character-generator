//goal is to move all of this into a JSON of sorts
//races
const dragonborn = {
    "race": "Dragonborn",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "Draconic"],
    "stats": {
        "STR": 2,
        "CHA": 1
    },
    "proficiencies": ["Intimidation"],
    "feats": [
        "Draconic Ancestry – Breath weapon and damage resistance",
        "Breath Weapon – Can use breath as an action. Saving throw for everyone in range, DC = 8 + CON + PROF. 2d6 on fail, 1d6 on success. (3d6 at level 6, 4d6 at 11, 5d6 at 16). Once per rest.",
        "Damage resist – resistant to ancestral damage type"
    ]
}

const hillDwarf = {
    "race": "Hill_Dwarf",
    "size": "medium",
    "speed": 25,
    "languages": ["Common", "Dwarvish"],
    "stats": {
        "CON": 2,
        "WIS": 1
    },
    "proficiencies": [
        "Dwarven Combat Training -  You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.",
        "Tool Proficiency – proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.",
        "Stonecunning – Double proficient in Intelligence (History) check related to the origin of stonework"
    ],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Dwarven Resilience – You have advantage on saving throws against poison, and you have resistance against poison damage (explained in chapter 9).",
        "Dwarven Toughness – Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
    ]
}

const mtnDwarf = {
    "race": "Mountain_Dwarf",
    "size": "medium",
    "speed": 25,
    "languages": ["Common", "Dwarvish"],
    "stats": {
        "CON": 2,
        "STR": 1
    },
    "proficiencies": [
        "Dwarven Combat Training -  You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.",
        "Tool Proficiency – proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.",
        "Stonecunning – Double proficient in Intelligence (History) check related to the origin of stonework"
    ],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Dwarven Resilience – You have advantage on saving throws against poison, and you have resistance against poison damage (explained in chapter 9).",
        "Dwarven Armor Training – Light and med armor proficiency"
    ]
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
    "proficiencies": ["Intimidation"],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Relentless Endurance – when reduced to 0 hp and not killed, can drop to 1 hp instead. Once per long rest.",
        "Savage Attacks – can add one extra damage die to melee weapon crits"
    ]
}

const highElf = {
    "race": "High_Elf",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "Elvish", "any", "any"],
    "stats": {
        "CHA": 2,
        "ANY": 1,
        "ANY": 1,
        "INT": 1
    },
    "proficiencies": [
        "any", "any", "Perception", 
        "Elf Weapon Training – You have proficiency with the longsword, shortsword, shortbow, and longbow."
    ],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Fey Ancestry – advantage on saves vs being charmed; can't be put to sleep by magic",
        "Trance – don’t need to sleep; meditating for 4 hours counts as a full rest",
        "Cantrip – from the wizard spell list; INT is your spellcasting ability for it."
    ]
}

const woodElf = {
    "race": "Wood_Elf",
    "size": "medium",
    "speed": 35,
    "languages": ["Common", "Elvish", "any"],
    "stats": {
        "CHA": 2,
        "ANY": 1,
        "ANY": 1,
        "WIS": 1
    },
    "proficiencies": [
        "any", "any", "Perception", 
        "Elf Weapon Training – You have proficiency with the longsword, shortsword, shortbow, and longbow."
    ],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Fey Ancestry – advantage on saves vs being charmed; can't be put to sleep by magic",
        "Trance – don’t need to sleep; meditating for 4 hours counts as a full rest",
        "Mask of the Wild – You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
    ]
}

const drow = {
    "race": "Drow",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "Elvish", "any"],
    "stats": {
        "CHA": 2,
        "ANY": 1,
        "ANY": 1,
        "CHA": 1
    },
    "proficiencies": [
        "any", "any", "Perception",
        "Drow Weapon Training – You have proficiency with rapiers, shortswords, and hand crossbows."
    ],
    "feats": [
        "Superior Darkvision – can see in dim light up to 120ft like bright light; can see in darkness like dim light",
        "Fey Ancestry – advantage on saves vs being charmed; can't be put to sleep by magic",
        "Trance – don’t need to sleep; meditating for 4 hours counts as a full rest",
        "Sunlight Sensitivity – You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target o f your attack, or whatever you are trying to perceive is in direct sunlight.",
        "Drow Magic (CHA) – Free spells: <br>1st lvl – dancing lights (cantrip) <br>3rd lvl – faerie fire once /day <br>5th lvl – darkness once /day"
    ]
}

const forestGnome = {
    "race": "Forest_Gnome",
    "size": "small",
    "speed": 25,
    "languages": ["Common", "Gnomish"],
    "stats": {
        "INT": 2,
        "DEX": 1
    },
    "proficiencies": [],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Gnome Cunning – advantage on all INT, WIS, and CHA saving throws against magic",
        "Natural Illusionist – You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.",
        "Speak with Small Beasts – Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts."
    ]
}

const rockGnome = {
    "race": "Rock_Gnome",
    "size": "small",
    "speed": 25,
    "languages": ["Common", "Gnomish"],
    "stats": {
        "INT": 2,
        "CON": 1
    },
    "proficiencies": [
        "Artificer’s Lore – Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
        "Tinker – You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth o f materials to construct a Tiny clockwork device (AC 5, 1 hp). (see rule-book for this weird shit)"
    ],
    "feats": [
        "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
        "Gnome Cunning – advantage on all INT, WIS, and CHA saving throws against magic"
    ]
}

const human = {
    "race": "Human",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "any"],
    "stats": {
        "STR": 1,
        "DEX": 1,
        "CON": 1,
        "INT": 1,
        "WIS": 1,
        "CHA": 1,
    },
    "proficiencies": [],
    "feats": []
}

const humanVariant = {
    "race": "Human_Variant",
    "size": "medium",
    "speed": 30,
    "languages": ["Common", "any"],
    "stats": {
        "ANY": 1,
        "ANY": 1
    },
    "proficiencies": ["any skill/tool/kit"],
    "feats": ["any feat"]
}

//backgrounds
const acolyte = {
    "background": "Acolyte",
    "proficiencies": ["any", "any", "Perception"],
    "languages": ["any", "any"],
    "equipment": ["holy symbol", "prayer book or prayer wheel", "incense sticks (5)", "vestments", "common clothes"],
    "money": { "GP": 10 },
    "feats": [
        "Shelter of the Faithful – you and your party can receive free healing and care at a shrine or temple of your faith. You (alone) will receive support from followers. You can also ask for assistance from your “home temple” priests, so long as the assistance is not hazardous and you’re on good terms."
    ]
}

const charlatan = {
    "background": "Charlatan",
    "proficiencies": ["Deception", "Sleight of Hand", "disguise kit", "forgery kit"],
    "languages": [],
    "equipment": [
        "fine clothes", 
        "disguise kit", 
        "tools of chosen con"
    ],
    "money": { "GP": 15 },
    "feats": [
        "Favorite Scheme – cheating, forging, etc",
        "False Identity: can assume a secondary persona/identity and can forge documents so long as you've seen an example"
    ]
}

const outlander = {
    "background": "Outlander",
    "proficiencies": ["Athletics", "Survival"],
    "languages": ["any"],
    "equipment": ["staff", "hunting trap", "trophy from animal", "traveler's clothes"],
    "money": { "GP": 10 },
    "feats": [
        "Wanderer – can always recall general layout of terrain and other features around you and can find food and fresh water for up to 6 people every day if the land has it. Considered rude and uncouth among civilized folk and not used to life in the cities"
    ]
}

//classes (not yet utilized)
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
//     "proficiencies": [],
//     "feats": [],
//     "spells": {
//       "cantrips": [],
//       "lvl1": [],
//       "lvl2": []
//     }
//   },
//   {}
// ];