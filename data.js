
// Objet pour stocker les valeurs d'attributes de base et de max en fonction du métatype
const characterData = {
    attributes: {
    body: {
      base: 1,
      value: 1,
      max: 6,
    },
    agility: {
      base: 1,
      value: 1,
      max: 6,
    },
    reaction: {
      base: 1,
      value: 1,
      max: 6,
    },
    strength: {
      base: 1,
      value: 1,
      max: 6,
    },
    willpower: {
      base: 1,
      value: 1,
      max: 6,
    },
    logic: {
      base: 1,
      value: 1,
      max: 6,
    },
    intuition: {
      base: 1,
      value: 1,
      max: 6,
    },
    charisma: {
      base: 1,
      value: 1,
      max: 6,
    },
    edge: {
      base: 1,
      value: 1,
      max: 6,
    },
    magic: {
      base: 0,
      value: 1,
      max: 6,
    },
    resonance: {
      base: 0,
      value: 1,
      max: 6,
    },
},
skills: {
    firearms: {
      base: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    exoticWeapons: {
      base: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    astral: {
      base: 0,
      value: 0,
      linkedAttribute: "intuition",
    },
    athletics: {
      base: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    biotech: {
      base: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    closeCombat: {
      base: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    conjuring: {
      base: 0,
      value: 0,
      linkedAttribute: "magic",
    },
    electronics: {
      base: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    stealthing: {
      base: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    influence: {
      base: 0,
      value: 0,
      linkedAttribute: "charisma",
    },
    enchanting: {
      base: 0,
      value: 0,
      linkedAttribute: "magic",
    },
    con: {
      base: 0,
      value: 0,
      linkedAttribute: "charisma",
    },
    engineering: {
      base: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    peception: {
      base: 0,
      value: 0,
      linkedAttribute: "intuition",
    },
    pilot: {
      base: 0,
      value: 0,
      linkedAttribute: "reaction",
    },
    cracking: {
      base: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    outdoors: {
      base: 0,
      value: 0,
      linkedAttribute: "intuition",
    },
    sorcery: {
      base: 0,
      value: 0,
      linkedAttribute: "magic",
    },
    tasking: {
      base: 0,
      value: 0,
      linkedAttribute: "resonance",
    },
  }
};

const tablePrioritiesMetatypes = {
    "A": {
      "12": ["hanuman", "pixie"],
      "13": ["dwarf", "duende", "gnome", "koborokuru", "minotaur", "oni", "sasquatch", "troll"],
      "14": ["fomori", "giant"]
    },
    "B": {
      "10": ["nocturna", "xapiri_thepe", "menehune", "pixie"],
      "11": ["elf", "dalakitnon", "dryade", "wakyambi", "valkyrie", "dwarf", "duende", "gnome", "koborokuru", "minotaur", "oni", "sasquatch", "troll", "cyclope", "hobgobelin", "ork", "ogre", "centaure", "fomori", "giant"],
      "12": ["wakyambi"],
    },
    "C": {
      "4": ["naga"],
      "10": ["nartaki", "valkyrie"],
      "8": ["nocturna", "xapiri_thepe"],
      "9": ["elf", "dalakitnon", "dryade", "wakyambi", "nocturna", "dwarf", "duende", "gnome", "koborokuru", "minotaur", "oni", "sasquatch", "troll", "cyclope", "hobgobelin", "ork", "ogre", "centaure", "fomori", "giant"]
    },
    "D": {
      "2": ["naga"],
      "4": ["elf", "dalakitnon", "dryade", "nocturna", "valkyrie", "dwarf", "duende", "gnome", "koborokuru", "minotaur", "oni", "sasquatch", "troll", "cyclope", "fomori", "giant", "hobgobelin", "ogre", "ork"],
      "5": ["triton"]
    },
    "E": {
      "1": ["elf", "dalakitnon", "dryade", "nocturna", "xapiri_thepe", "human", "dwarf", "duende", "gnome", "hanuman", "koborokuru", "minotaur", "hobgobelin", "ork", "ogre", "oni", "troll", "cyclope", "giant"]
    }
  };

  
  const prio_A = [].concat(...Object.values(tablePrioritiesMetatypes["A"]));
  const prio_B = [].concat(...Object.values(tablePrioritiesMetatypes["B"]));
  const prio_C = [].concat(...Object.values(tablePrioritiesMetatypes["C"]));
  const prio_D = [].concat(...Object.values(tablePrioritiesMetatypes["D"]));
  const prio_E = [].concat(...Object.values(tablePrioritiesMetatypes["E"]));




  
