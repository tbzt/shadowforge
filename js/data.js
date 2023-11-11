// Objet pour stocker les valeurs d'attributes de base et de max en fonction du métatype
const characterData = {
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
    },
    exoticWeapons: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    astral: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
    },
    athletics: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    biotech: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    closeCombat: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    conjuring: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
    },
    electronics: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    stealthing: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "agility",
    },
    influence: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "charisma",
    },
    enchanting: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
    },
    con: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "charisma",
    },
    engineering: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    peception: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
    },
    pilot: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "reaction",
    },
    cracking: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "logic",
    },
    outdoors: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "intuition",
    },
    sorcery: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "magic",
    },
    tasking: {
      base: 0,
      added: 0,
      value: 0,
      linkedAttribute: "resonance",
    },
  },
  points: {
    skills: {
      base: 0,
      spent: 0,
    },
    Prio: {
      base: 0,
      spent: 0,
    },
    Adjustement: {
      base: 0,
      spent: 0,
    },
  },
  selectAttributeType: "Prio",
  alreadyMaxAttribute: "",
  magicChoice: "",
  isMagic: false,
  isTechno: false,
  metatype: "",
};