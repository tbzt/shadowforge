// Objet pour stocker les valeurs d'attributes de base et de max en fonction du métatype
let characterData = {
  SIN: {},
  attributes: {
    body: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    agility: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    reaction: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    strength: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    willpower: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    logic: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    intuition: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    charisma: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    edge: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    magic: {
      base: 0,
      added: 0,
      value: 1,
      max: 6,
    },
    resonance: {
      base: 0,
      added: 0,
      value: 1,
      max: 6,
    },
  },
  skills: {
    firearms: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "tasers",
        "holdOuts",
        "lightPistols",
        "machinePistols",
        "heavyPistols",
        "submachineGuns",
        "shotguns",
        "rifles",
        "machineGuns",
        "assaultCannons",
      ],
      untrained: true,
    },
    exoticWeapon: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [],
      untrained: false,
    },
    astral: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "astralCombat",
        "astralSignatures",
        "emotionalStates",
        "spiritTypes",
      ],
      untrained: false,
    },
    athletics: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "archery",
        "climbing",
        "flying",
        "gymnastics",
        "sprinting",
        "swimming",
        "throwing",
      ],
      untrained: true,
    },
    biotech: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "biotechnology",
        "cybertechnology",
        "firstAid",
        "medicine",
      ],
      untrained: false,
    },
    closeCombat: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["blades", "clubs", "unarmedCombat"],
      untrained: true,
    },
    conjuring: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["banishing", "summoning"],
      untrained: false,
    },
    electronics: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["computer", "hardware", "software"],
      untrained: true,
    },
    stealth: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["camouflage", "palming", "sneaking"],
      untrained: true,
    },
    influence: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "charisma",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "etiquette",
        "instruction",
        "intimidation",
        "leadership",
        "negotiation",
      ],
      untrained: true,
    },
    enchanting: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["alchemy", "artificing", "disenchanting"],
      untrained: false,
    },
    con: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "charisma",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "acting",
        "disguise",
        "impersonation",
        "performance",
      ],
      untrained: true,
    },
    engineering: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "aeronauticsMechanic",
        "armorer",
        "automotiveMechanic",
        "demolitions",
        "gunnery",
        "industrialMechanic",
        "lockpicking",
        "nauticalMechanic",
      ],
      untrained: true,
    },
    perception: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "visual",
        "aural",
        "tactile",
        "woods",
        "desert",
        "urbanArea",
      ],
      untrained: true,
    },
    piloting: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "reaction",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["groundCraft", "aircraft", "watercraft"],
      untrained: true,
    },
    cracking: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["cybercombat", "electronicWarfare", "hacking"],
      untrained: false,
    },
    outdoors: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "navigation",
        "survival",
        "tracking",
        "woods",
        "desert",
        "urbanArea",
      ],
      untrained: true,
    },
    sorcery: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
      rdd: 0,
      specializations: [],
      proposedSpecializations: [
        "counterspelling",
        "ritualSpellcasting",
        "spellcasting",
      ],
      untrained: false,
    },
    tasking: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "resonance",
      rdd: 0,
      specializations: [],
      proposedSpecializations: ["compiling", "decompiling", "registering"],
      untrained: false,
    },
  },
  knowledges: [],
  languages: [{ key: "Anglais", level: 3 }],
  qualities: [],
  contacts: [],
  rangedWeapons: [],
  meleeWeapons: [],
  grenades: [],
  protections: [],
  ammunitions: [],
  augmentations: [],
  vehicles: [],
  drugs: [],
  stuffs: [],
  SINS: [],
  lifestyles: [],
  spells: [],
  rituals: [],
  spirits: [],
  foci: [],
  adeptPowers: [],
  metamagics: [],
  echoes: [],
  complexForms: [],
  sprites: [],
  devices: [],
  points: {
    skills: {
      base: 0,
      spent: 0,
    },
    knowledges: {
      base: 0,
      spent: 0,
    },
    Prio: {
      base: 0,
      spent: 0,
    },
    Adjustment: {
      base: 0,
      spent: 0,
    },
    Karma: {
      base: 50,
      spent: 0,
    },
    contacts: {
      base: 0,
      spent: 0,
    },
  },
  selectAttributeType: "Prio",
  selectSkillsType: "Skills",
  alreadyMaxAttribute: "",
  alreadyMaxSkill: "",
  magicChoice: "",
  isMagic: false,
  isTechno: false,
  metatype: "",
  special: "",
  resources: 0,
  prioritiesSelected: {
    metatypes: null,
    attributes: null,
    skills: null,
    magicOrResonance: null,
    resources: null,
  },
  actualPriority: null,
  selectedCells: {
    metatypes: null,
    attributes: null,
    skills: null,
    magicOrResonance: null,
    resources: null,
  },
  IDselectedCells: {
    metatypes: null,
    attributes: null,
    skills: null,
    magicOrResonance: null,
    resources: null,
  },
};

// Objet pour stocker les valeurs d'attributes de base et de max en fonction du métatype
let characterDataBackup = {
  SIN: {},
  attributes: {
    body: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    agility: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    reaction: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    strength: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    willpower: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    logic: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    intuition: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    charisma: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    edge: {
      base: 1,
      added: 0,
      value: 1,
      max: 6,
    },
    magic: {
      base: 0,
      added: 0,
      value: 1,
      max: 6,
    },
    resonance: {
      base: 0,
      added: 0,
      value: 1,
      max: 6,
    },
  },
  skills: {
    firearms: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      specializations: [],
      proposedSpecializations: [
        "tasers",
        "holdOuts",
        "lightPistols",
        "machinePistols",
        "heavyPistols",
        "submachineGuns",
        "shotguns",
        "rifles",
        "machineGuns",
        "assaultCannons",
      ],
      untrained: true,
    },
    exoticWeapon: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      specializations: [],
      proposedSpecializations: [],
      untrained: false,
    },
    astral: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
      specializations: [],
      proposedSpecializations: [
        "astralCombat",
        "astralSignatures",
        "emotionalStates",
        "spiritTypes",
      ],
      untrained: false,
    },
    athletics: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      specializations: [],
      proposedSpecializations: [
        "archery",
        "climbing",
        "flying",
        "gymnastics",
        "sprinting",
        "swimming",
        "throwing",
      ],
      untrained: true,
    },
    biotech: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      specializations: [],
      proposedSpecializations: [
        "biotechnology",
        "cybertechnology",
        "firstAid",
        "medicine",
      ],
      untrained: false,
    },
    closeCombat: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      specializations: [],
      proposedSpecializations: ["blades", "clubs", "unarmedCombat"],
      untrained: true,
    },
    conjuring: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
      specializations: [],
      proposedSpecializations: ["banishing", "summoning"],
      untrained: false,
    },
    electronics: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      specializations: [],
      proposedSpecializations: ["computer", "hardware", "software"],
      untrained: true,
    },
    stealth: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
      specializations: [],
      proposedSpecializations: ["camouflage", "palming", "sneaking"],
      untrained: true,
    },
    influence: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "charisma",
      specializations: [],
      proposedSpecializations: [
        "etiquette",
        "instruction",
        "intimidation",
        "leadership",
        "negotiation",
      ],
      untrained: true,
    },
    enchanting: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
      specializations: [],
      proposedSpecializations: ["alchemy", "artificing", "disenchanting"],
      untrained: false,
    },
    con: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "charisma",
      specializations: [],
      proposedSpecializations: [
        "acting",
        "disguise",
        "impersonation",
        "performance",
      ],
      untrained: true,
    },
    engineering: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      specializations: [],
      proposedSpecializations: [
        "aeronauticsMechanic",
        "armorer",
        "automotiveMechanic",
        "demolitions",
        "gunnery",
        "industrialMechanic",
        "lockpicking",
        "nauticalMechanic",
      ],
      untrained: true,
    },
    perception: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
      specializations: [],
      proposedSpecializations: [
        "visual",
        "aural",
        "tactile",
        "woods",
        "desert",
        "urbanArea",
      ],
      untrained: true,
    },
    piloting: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "reaction",
      specializations: [],
      proposedSpecializations: ["groundCraft", "aircraft", "watercraft"],
      untrained: true,
    },
    cracking: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
      specializations: [],
      proposedSpecializations: ["cybercombat", "electronicWarfare", "hacking"],
      untrained: false,
    },
    outdoors: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
      specializations: [],
      proposedSpecializations: [
        "navigation",
        "survival",
        "tracking",
        "woods",
        "desert",
        "urbanArea",
      ],
      untrained: true,
    },
    sorcery: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
      specializations: [],
      proposedSpecializations: [
        "counterspelling",
        "ritualSpellcasting",
        "spellcasting",
      ],
      untrained: false,
    },
    tasking: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "resonance",
      specializations: [],
      proposedSpecializations: ["compiling", "decompiling", "registering"],
      untrained: false,
    },
  },
  knowledges: [],
  languages: [{ key: "Anglais", level: 3 }],
  qualities: [],
  contacts: [],
  rangedWeapons: [],
  meleeWeapons: [],
  grenades: [],
  protections: [],
  ammunitions: [],
  augmentations: [],
  vehicles: [],
  drugs: [],
  stuffs: [],
  SINS: [],
  lifestyles: [],
  spells: [],
  spirits: [],
  rituals: [],
  foci: [],
  adeptPowers: [],
  metamagics: [],
  echoes: [],
  complexForms: [],
  sprites: [],
  devices: [],
  points: {
    skills: {
      base: 0,
      spent: 0,
    },
    knowledges: {
      base: 0,
      spent: 0,
    },
    Prio: {
      base: 0,
      spent: 0,
    },
    Adjustment: {
      base: 0,
      spent: 0,
    },
    Karma: {
      base: 50,
      spent: 0,
    },
    contacts: {
      base: 0,
      spent: 0,
    },
    essence: {
      base: 0,
      spent: 0,
    },
  },
  selectAttributeType: "Prio",
  selectSkillsType: "Skills",
  alreadyMaxAttribute: "",
  alreadyMaxSkill: "",
  magicChoice: "",
  isMagic: false,
  isTechno: false,
  metatype: "",
  special: "",
  resources: 0,
  prioritiesSelected: {
    metatypes: null,
    attributes: null,
    skills: null,
    magicOrResonance: null,
    resources: null,
  },
  actualPriority: null,
  selectedCells: {
    metatypes: null,
    attributes: null,
    skills: null,
    magicOrResonance: null,
    resources: null,
  },
  IDselectedCells: {
    metatypes: null,
    attributes: null,
    skills: null,
    magicOrResonance: null,
    resources: null,
  },
};
