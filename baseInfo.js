//goal is to move all of this into a JSON of sorts
const RACES = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
        "race": "Halfling_(Lightfoot)",
        "size": "small",
        "speed": 25,
        "languages": ["Common", "Halfling"],
        "stats": {
            "DEX": 2,
            "CHA": 1
        },
        "proficiencies": [],
        "feats": [
            "Lucky – can reroll the die (once) after getting a 1 on an attack, check, or saving throw",
            "Brave – advantage on saving throws against being frightened",
            "Halfling Nimbleness. You can move through the space of any creature that is of a size larger than yours.",
            "Naturally Stealthy. You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
        ]
    },
    {
        "race": "Halfling_(Stout)",
        "size": "small",
        "speed": 25,
        "languages": ["Common", "Halfling"],
        "stats": {
            "DEX": 2,
            "CON": 1
        },
        "proficiencies": [],
        "feats": [
            "Lucky – can reroll the die (once) after getting a 1 on an attack, check, or saving throw",
            "Brave – advantage on saving throws against being frightened",
            "Halfling Nimbleness. You can move through the space of any creature that is of a size larger than yours.",
            "Stout Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage."
        ]
    },
    {
        "race": "Half-Elf",
        "size": "medium",
        "speed": 30,
        "languages": ["Common", "Elvish", "any"],
        "stats": {
            "CHA": 2,
            "ANY": 1,
            "ANY": 1
        },
        "proficiencies": [
            "Skill Versatility – proficient in any two skills"
        ],
        "feats": [
            "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
            "Fey Ancestry – advantage on saves vs being charmed; can't be put to sleep by magic"
        ]
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
        "race": "Tiefling",
        "size": "medium",
        "speed": 30,
        "languages": ["Common", "Infernal"],
        "stats": {
            "CHA": 2,
            "INT": 1
        },
        "proficiencies": [],
        "feats": [
            "Darkvision – can see in dim light up to 60ft like bright light; can see in darkness like dim light",
            "Hellish Resilience – resistance to fire damage",
            "Infernal Legacy – Free spells, out of CHA:<br>Cantrip: thaumaturgy<br>(at 3rd level) Hellish Rebuke as 2nd level spell, once per day<br>(at 5th level) Darkness, once per day"
        ]
    }
];

//backgrounds
const BACKGROUNDS = [
    {
        "background": "Acolyte",
        "proficiencies": ["any", "any", "Perception"],
        "languages": ["any", "any"],
        "equipment": ["holy symbol", "prayer book or prayer wheel", "incense sticks (5)", "vestments", "common clothes"],
        "money": { "GP": 10 },
        "feats": [
            "Shelter of the Faithful – you and your party can receive free healing and care at a shrine or temple of your faith. You (alone) will receive support from followers. You can also ask for assistance from your “home temple” priests, so long as the assistance is not hazardous and you’re on good terms."
        ]
    },
    {
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
    },
    {
        "background": "Criminal/ Spy",
        "proficiencies": ["Deception", "Stealth", "Thieves' Tools", "one gaming set"],
        "languages": [],
        "equipment": ["crowbar", "dark common clothes w/ hood"],
        "money": { "GP": 15 },
        "feats": [
            "Criminal Contact – reliable and trustworthy contact who can send messages through criminal networks",
            "Criminal Specialty – Blackmail, Pickpocket, etc"
        ]
    },
    {
        "background": "Entertainer/ Gladiator",
        "proficiencies": ["Acrobatics", "Performance", "Disguise kit", "one musical instrument"],
        "languages": [],
        "equipment": ["instrument", "admirer’s favor (love letter, hair, trinket)", "costume"],
        "money": { "GP": 15 },
        "feats": [
            "By Popular Demand – you can always find a place to perform that will give you free lodging and food, so long as you perform there each night. People who’ve seen you perform will like you.",
            "Entertainer Routine – Actor, Dancer, etc."
        ]
    },
    {
        "background": "Folk_Hero",
        "proficiencies": ["Animal Handling", "Survival", "land vehicles", "Artisan’s Tools"],
        "languages": [],
        "equipment": ["artisan's tools", "shovel", "iron pot", "common clothes"],
        "money": { "GP": 10 },
        "feats": [
            "Rustic Hospitality – Can find a place to hide or rest among common-folk as long as you’re non-threatening. They will also shield you from the law, etc, but not risk their lives.",
            "Defining event – stood up to a monster, saved people, etc"
        ]
    },
    {
        "background": "Guild_Artisan",
        "proficiencies": ["Insight", "Persuasion", "Artisan’s Tools"],
        "languages": [],
        "equipment": ["artisan's tools", "letter of introduction from guild", "traveler's clothes"],
        "money": { "GP": 15 },
        "feats": [
            "Guild Membership – guild members will provide you lodging and food and you can meet patrons, allies, etc in guild halls. Can gain political sway and amnesty for justified crimes through guild if paying dues of 5gp per month and staying in good standing."
        ]
    },
    {
        "background": "Hermit",
        "proficiencies": ["Medicine", "Religion", "Herbalism Kit"],
        "languages": ["any"],
        "equipment": ["scroll case filled with notes", "winter blanket", "common clothes", "herbalism kit"],
        "money": { "GP": 5 },
        "feats": [
            "Discovery – you have knowledge of an extremely important piece of information or have discovered something of great significance"
        ]
    },
    {
        "background": "Noble",
        "proficiencies": ["History", "Persuasion", "a gaming set"],
        "languages": ["any"],
        "equipment": ["fine clothes", "signet ring", "scroll of pedigree"],
        "money": { "GP": 25 },
        "feats": [
            "Position of Privilege – people tend to think the best of you and you’re welcome in high society. Common folk accommodate you and avoid your displeasure. You can secure audience with local nobles."
        ]
    },
    {
        "background": "Outlander",
        "proficiencies": ["Athletics", "Survival"],
        "languages": ["any"],
        "equipment": ["staff", "hunting trap", "trophy from animal", "traveler's clothes"],
        "money": { "GP": 10 },
        "feats": [
            "Wanderer – can always recall general layout of terrain and other features around you and can find food and fresh water for up to 6 people every day if the land has it. Considered rude and uncouth among civilized folk and not used to life in the cities"
        ]
    },
    {
        "background": "Urchin",
        "proficiencies": ["Sleight of Hand", "Stealth", "Thieves' Tools", "Disguise kit"],
        "languages": [],
        "equipment": ["small knife", "map of hometown", "pet mouse", "token to remember parents", "common clothes"],
        "money": { "GP": 10 },
        "feats": [
            "City Secrets – can navigate back alleys and urban sprawls to reach any location twice as fast"
        ]
    }
];

//classes after first two have had level-ups and subclasses dropped for now
const CLASSES = [
    {
        "classname": "Barbarian",
        "subclass": null,
        "hitDice": "d12",
        "HP": 12,
        "proficiency-bonus": 2,
        "proficiencies": ["light and medium armor, shields", "simple and martial weapons"],
        "savingThrows": ["STR", "CON"],
        "skills": [
            2, 
            ["Animal Handling", 
            "Athletics", 
            "Intimidation", 
            "Nature", 
            "Perception", 
            "Survival"]
        ],
        "equipment": [
            ["greataxe", "martial melee weapon"], 
            ["two handaxes", "simple weapon"], 
            "Explorer’s pack",
            "Javelins (4)"
        ],
        "feats": [
            "Rage (3 /long rest) – enter rage as bonus action in combat. No benefits w/ heavy armor, can’t cast spells, lasts 1m or until you are knocked out or leave combat. Can quit rage any time.<br>advantage on STR checks/saves<br>bonus damage on melee STR attacks (+2)<br>Resist bludgeoning, piercing, and slashing dmg",
            "Unarmored Defense – AC = 10 + DEX + CON when unarmored, even w/ shield"
        ],
        "subClass": null,
        "level": 1,
        "secondLevelBonuses": {
                "feats": [
                    "Reckless Attack – first attack can give advantage on melee STR attack, but will give attacks against you advantage",
                    "Danger Sense – advantage on DEX saves for unseen threats while aware of surroundings"
                ]
            },
        "subclassBonuses": [
            {
                "subclass": "Path of the Berserker",
                "bonuses": [
                    {
                        "feats": [
                            "Frenzy – (rage buff) make a melee attack as a bonus action on each turn during frenzy. Suffer one lvl exhaustion after frenzy ends"
                        ]
                    }
                ]
            },
            {
                "subclass": "Totem Warrior",
                "bonuses": [
                    {
                        "feats": [
                            "Spirit Seeker – can cast beast sense and speak with animals as rituals",
                            "Totem Spirit – Gain totem or features of animal of choice. Bonuses during rage based on animal type:<br>Bear – Very tough; resist all but psychic dmg<br>Eagle – other creatures have disadvantage on opportunity attacks against you. Can dash as bonus action<br>Wolf – friends have advantage on melee attacks against creatures w/in 5ft of you"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "classname": "Bard",
        "subclass": null,
        "hitDice": "d8",
        "HP": 8,
        "proficiency-bonus": 2,
        "proficiencies": [
            "light armor", 
            "hand crossbows, longswords, rapiers, shortswords", 
            "Three musical instruments"
        ],
        "savingThrows": ["DEX", "CON"],
        "skills": [
            3, 
            [
                "Acrobatics",
                "Animal Handling",
                "Arcana",
                "Athletics",
                "Deception",
                "History",
                "Insight",
                "Intimidation",
                "Investigation",
                "Medicine",
                "Nature",
                "Perception",
                "Performance",
                "Persuasion",
                "Religion",
                "Sleight of Hand",
                "Stealth",
                "Survival"
            ]
        ],
        "equipment": [
            ["rapier", "longsword", "simple weapon"], 
            ["diplomat's pack", "entertainer's pack"],
            "a musical instrument",
            "leather armor",
            "dagger"
        ],
        "feats": [
            "Bardic Inspiration (CHA /long rest) – bonus action can give any creature that can hear you (60ft) a d6 to spend w/in 10m. Can be added to any check roll, or save after the d20 roll, but before stating success/failure", 
            "Jack of All Trades – add half proficiency (rounded down) to any check you’re not proficient in",
            "Song of Rest"
        ],
        "spellsKnown": [2, 4],
        "spellSlots": [2],
        "level": 1
    },
    {
        "classname": "Cleric",
        "subclass": null,
        "hitDice": "d8",
        "HP": 8,
        "proficiency-bonus": 2,
        "proficiencies": [
            "light and medium armor, shields", 
            "all simple weapons"
        ],
        "savingThrows": ["WIS", "CHA"],
        "skills": [
            2, 
            [
                "History", 
                "Insight", 
                "Medicine", 
                "Persuasion", 
                "Religion"
            ]
        ],
        "equipment": [
            ["a mace", "a warhammer"], 
            ["scale mail", "leather armor", "chain mail"],
            ["light crossbow + 20 bolts", "simple weapon"],
            ["priest's pack", "explorer's pack"],
            "shield",
            "holy symbol"
        ],
        "feats": [
            "Channel Divinity (once / rest): can use one of the following effects by channeling divine energy",
            "Turn Undead – Present holy symbol as an action. Each undead that perceives you must make a WIS saving throw or be turned for 1 minute (or until taking damage). Turned creatures can only try to escape during their turn and won’t willingly move w/in 30 ft of you"
        ],
        "subClass": null,
        "spellsKnown": [3, "all cleric"],
        "spellSlots": [2],
        "level": 1
    },
    {
        "classname": "Druid",
        "subclass": null,
        "hitDice": "d8",
        "HP": 8,
        "languages": [
            "Druidic"
        ],
        "proficiency-bonus": 2,
        "proficiencies": [
            "(non-metal) light and medium armor, shields", 
            "clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
            "Herbalism kit"
        ],
        "savingThrows": ["INT", "WIS"],
        "skills": [
            2, [
                "Animal Handling", 
                "Insight", 
                "Medicine", 
                "Nature", 
                "Perception", 
                "Religion", 
                "Survival"
            ]
        ],
        "equipment": [
            ["wooden shield", "simple weapon"], 
            ["scimitar", "simple melee weapon"], 
            "leather armor", 
            "explorer’s pack", 
            "druidic focus"
        ],
        "feats": [
            "Wild Shape (2 / rest): Can magically change into a land beast (Max CR ¼) you have seen for ½ druid level hours or until reverting (bonus action)"
        ],
        "subClass": null,
        "spellsKnown": [2, "all druid"],
        "spellSlots": [2],
        "level": 1
    },
    {
        "classname": "Fighter",
        "subclass": null,
        "hitDice": "d10",
        "HP": 10,
        "proficiency-bonus": 2,
        "proficiencies": [
            "all armor, shields", 
            "simple weapons, martial weapons"
        ],
        "savingThrows": ["STR", "CON"],
        "skills": [
            2, 
            [
                "Acrobatics",
                "Animal Handling",
                "Athletics",
                "History",
                "Insight",
                "Perception",
                "Survival"
            ]
        ],
        "equipment": [
            ["chain mail", "leather armor, longbow + 20 arrows"], 
            ["martial weapon and shield", "two martial weapons"],
            ["light crossbow + 20 bolts", "two handaxes"],
            ["dungeoneer's pack", "explorer's pack"]
        ],
        "feats": [
            "Fighting Style:<br>Archery – bonus +2 to atk rolls w/ ranged weapons<br>Defense – gain +1 AC while wearing armor<br>Dueling – bonus +2 dmg to attack rolls when wielding single melee weapon<br>Great Weapon Fighting – can reroll dmg dice for 2h weapon if rolling a 1 or 2<br>Protection – can impose disadvantage on creature attacking target w/in 5ft if wielding a shield<br>Two-Weapon Fighting – add ability mod to dmg of second atk when dual wielding",
            "Second Wind (once / rest): can use bonus action to regain 1d10 + lvl hp using stamina well.",
            "Action Surge (once / rest): can take additional action and possible bonus action"
        ],
        "level": 1
    },
    {
        "classname": "Monk",
        "subclass": null,
        "hitDice": "d8",
        "HP": 8,
        "proficiency-bonus": 2,
        "proficiencies": [
            "simple weapons, shortswords", 
            "artisan's tools or one musical instrument"
        ],
        "savingThrows": ["STR", "DEX"],
        "skills": [
            2, 
            [
                "Acrobatics",
                "Athletics",
                "History",
                "Insight",
                "Religion",
                "Stealth"
            ]
        ],
        "equipment": [
            ["shortsword", "simple weapon"], 
            ["dungeoneer's pack", "explorer's pack"],
            "10 darts"
        ],
        "feats": [
            "Unarmored Defense – AC = 10 + DEX + CON when unarmored, even w/ shield",
            "Martial Arts – mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property. Certain monasteries use specialized forms of the monk weapons, e.g. nunchaku or kama. <br>You gain the following benefits while you are unarmed or wielding only monk weapons (shortswords and any simple melee weapons that don’t have the two-handed or heavy) and you don’t have armor or a shield equipped:<br>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.<br>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon.<br>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. if you haven't already taken a bonus action this turn."
        ],
        "level": 1
    },
    {
        "classname": "Paladin",
        "subclass": null,
        "hitDice": "d10",
        "HP": 10,
        "proficiency-bonus": 2,
        "proficiencies": [
            "All armor, shields", 
            "simple and martial weapons"
        ],
        "savingThrows": ["WIS", "CHA"],
        "skills": [
            2, 
            [
                "Athletics",
                "Insight",
                "Intimidation",
                "Medicine",
                "Persuasion",
                "Religion"
            ]
        ],
        "equipment": [
            ["a martial weapon and shield", "two martial weapons"], 
            ["five javelins", "simple weapon"],
            ["priest's pack", "explorer's pack"],
            "chain mail",
            "a holy symbol"
        ],
        "feats": [
            "Divine Sense (1 + CHA / long rest) – The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know their type, but not their identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated.",
            "Lay on Hands – Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs."
        ],
        "level": 1
    },
    {
        "classname": "Ranger",
        "subclass": null,
        "hitDice": "d10",
        "HP": 10,
        "proficiency-bonus": 2,
        "proficiencies": [
            "light and medium armor, shields",
            "simple and martial weapons"
        ],
        "savingThrows": ["STR", "DEX"],
        "skills": [
            3, 
            [
                "Animal Handling",
                "Athletics",
                "Insight",
                "Investigation",
                "Nature",
                "Perception",
                "Stealth",
                "Survival"
            ]
        ],
        "equipment": [
            ["scale mail", "leather armor"], 
            ["two shortswords", "two simple melee weapons"],
            ["Dungeoneer's pack", "explorer's pack"],
            "longbow and quiver + 20 arrows"
        ],
        "feats": [
            "Favored Enemy: Gain advantage on survival checks to track favored enemy (creature type or two humanoid races) and INT checks to recall info about them. You learn your enemy’s language (if they have one).",
            "Natural Explorer: adept at navigating chosen terrain",
            "Fighting Style:<br>Archery – bonus +2 to atk rolls w/ ranged weapons<br>Defense – gain +1 AC while wearing armor<br>Dueling – bonus +2 dmg to attack rolls when wielding single melee weapon<br>Two-Weapon Fighting – add ability mod to dmg of second atk when dual wielding",
        ],
        "level": 1
    },
    {
        "classname": "Rogue",
        "subclass": null,
        "hitDice": "d8",
        "HP": 8,
        "languages": "Thieves' Cant",
        "proficiency-bonus": 2,
        "proficiencies": [
            "light armor", 
            "simple weapons, hand crossbows, longswords, rapiers, shortswords",
            "Thieves' tools"
        ],
        "savingThrows": ["DEX", "INT"],
        "skills": [
            4, 
            [
                "Acrobatics",
                "Athletics",
                "Deception",
                "Insight",
                "Intimidation",
                "Investigation",
                "Perception",
                "Performance",
                "Persuasion",
                "Sleight of Hand",
                "Stealth"
            ]
        ],
        "equipment": [
            ["rapier", "shortsword"], 
            ["shortbow and quiver + 20 arrows", "shortsword"],
            ["burglar's pack", "dungeoneer's pack", "explorer's pack"],
            "leather armor",
            "two daggers",
            "thieves' tools"
        ],
        "feats": [
            "Expertise – choose two skill proficiencies, or one skill proficiency and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
            "sneak Attack – Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll with a finesse or ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll."
        ],
        "level": 1
    },
    {
        "classname": "Sorcerer",
        "subclass": null,
        "hitDice": "d6",
        "HP": 6,
        "proficiency-bonus": 2,
        "proficiencies": [
            "daggers, darts, slings, quarterstaffs, light crossbows"
        ],
        "savingThrows": ["CON", "CHA"],
        "skills": [
            2, 
            [
                "Arcana",
                "Deception",
                "Insight",
                "Intimidation",
                "Persuasion",
                "Religion"
            ]
        ],
        "equipment": [
            ["light crossbow + 20 bolts", "simple weapon"], 
            ["component pouch", "arcane focus"],
            ["dungeoneer's pack", "explorer's pack"],
            "two daggers"
        ],
        "feats": [
            "Sorcerous Origin – it's complicated; Draconic Bloodline or Wild Magic"
        ],
        "spellsKnown": [4, 2],
        "spellSlots": [2],
        "level": 1
    },
    {
        "classname": "Warlock",
        "subclass": null,
        "hitDice": "d8",
        "HP": 8,
        "proficiency-bonus": 2,
        "proficiencies": [
            "light armor", 
            "simple weapons"
        ],
        "savingThrows": ["WIS", "CHA"],
        "skills": [
            2, 
            [
                "Arcana",
                "Deception",
                "History",
                "Intimidation",
                "Investigation",
                "Nature",
                "Religion"
            ]
        ],
        "equipment": [
            ["light crossbow + 20 bolts", "simple weapon"], 
            ["component pouch", "arcane focus"],
            ["scholar's pack", "dungeoneer's pack"],
            "leather armor",
            "simple weapon",
            "two daggers"
        ],
        "feats": [
        ],
        "spellsKnown": [2, 2],
        "spellSlots": [1],
        "level": 1
    },
    {
        "classname": "Wizard",
        "subclass": null,
        "hitDice": "d6",
        "HP": 6,
        "proficiency-bonus": 2,
        "proficiencies": [
            "daggers, darts, slings, quarterstaffs, light crossbows"
        ],
        "savingThrows": ["INT", "WIS"],
        "skills": [
            2, 
            [
                "Arcana",
                "History",
                "Insight",
                "Investigation",
                "Medicine",
                "Religion"
            ]
        ],
        "equipment": [
            ["quarterstaff", "dagger"], 
            ["component pouch", "arcane focus"],
            ["scholar's pack", "explorer's pack"],
            "spellbook"
        ],
        "feats": [
            "Spellcasting – you have a spellbook containing spells that show the first glimmerings of your true power.",
            "Arcane Recovery – once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."
        ],
        "spellsKnown": [3, "all wizard"],
        "spellSlots": [2],
        "level": 1
    }
];

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