function setLang(language) {
  // Utilisez le tableau de traduction correspondant à la langue
  terms = translations[language];
}

function setLanguage(language) {
  const source = document.getElementById("container").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(terms);
  document.getElementById("container").innerHTML = html;
}

let terms = [];

const translations = {
  fr: {
    firstname: "prénom",
    name: "nom",
    surname: "surnom",
    metatypes: "métatypes",
    attributes: "attributs",
    adjustement: "ajustement",
    skills: "compétences",
    magicOrResonance: "Magie/Résonance",
    resources: "ressources",
    body: "constitution",
    agility: "agilité",
    reaction: "réaction",
    strength: "force",
    willpower: "volonté",
    logic: "logique",
    intuition: "intuition",
    charisma: "charisme",
    edge: "atout",
    magic: "magie",
    resonance: "résonance",
    identity: "Identité",
    priorityTable: "Table des priorités",
    metatypeChoice: "Choix du métatype",
    specialAttributeChoice: "Choix de l'attribut spécial",
    colons: " :",
    firearms: "armes à feu",
    exoticWeapons: "armes exotiques",
    astral: "astral",
    athletics: "athlétisme",
    biotech: "biotech",
    closeCombat: "combat rapproché",
    conjuring: "invocation",
    electronics: "électronique",
    stealth: "furtivité",
    influence: "influence",
    enchanting: "enchantement",
    con: "escroquerie",
    engineering: "ingénierie",
    peception: "perception",
    piloting: "pilotage",
    cracking: "piratage",
    outdoors: "plein air",
    sorcery: "sorcellerie",
    tasking: "technomancie",
    fullMagician: "magicien pur",
    mysticAdept: "adepte mystique",
    adept: "adepte",
    aspectedMagician: "magicien spécialisé",
    technomancer: "technomancien",
    mundane: "ordinaire",
    dwarf: "nain",
    ork: "ork",
    elf: "elfe",
    human: "humain",
    troll: "troll",
    duende: "duende",
    gnome: "gnome",
    hanuman: "hanuman",
    koborokuru: "koborokuru",
    menehune: "menehune",
    hobgobelin: "hobgobelin",
    ogre: "ogre",
    oni: "oni",
    satyr: "satyre",
    cyclops: "cyclope",
    fomorian: "fomori",
    giant: "géant",
    minotaur: "minotaure",
    dalakitnon: "dalakitnon",
    dryad: "dryade",
    nocturna: "nocturna",
    wakyambi: "wakyambi",
    xapiri_thepe: "xapiri thëpë",
    valkyrie: "valkyrisatyre",
    nartaki: "nartaki",
    centaur: "centaure",
    naga: "naga",
    pixie: "pixie",
    sasquatch: "sasquatch",
    merrow: "triton",    
    formula: "formule",
    formulas: "formules",
    complexForm: "forme complexe",
    complexForms: "formes complexes",
    added: "ajout",
    actual: "actuel",
    maximum: "maximum",
    dices: "dès",
    specializations: "spécialisations",
    character: "personnage",
    reinitialize: "réinitialisation",
    pointsToSpend: "Points à dépenser",
  },
  en: {
    firstname: "Firstname",
    name: "Name",
    surname: "Surname",
    metatypes: "Metatypes",
    attributes: "attributes",
    skills: "skills",
    magicOrResonance: "Magic or Resonance",
    resources: "Resources",
    body: "Body",
    agility: "Agility",
    reaction: "Reaction",
    strength: "Strength",
    willpower: "Willpower",
    logic: "Logic",
    intuition: "Intuition",
    charisma: "Charisma",
    edge: "Edge",
    magic: "Magic",
    resonance: "Resonance",
    identity: "Identity",
    priorityTable: "Priority Table",
    metatypeChoice: "Metatype Choice",
    specialAttributeChoice: "Special Attribute Choice",
    colons: ":",
    firearms: "firearms",
    exoticWeapons: "exotic weapons",
    astral: "astral",
    athletics: "athletics",
    biotech: "biotech",
    closeCombat: "close combat",
    conjuring: "conjuring",
    electronics: "electronics",
    stealth: "stealth",
    influence: "influence",
    enchanting: "enchanting",
    con: "con",
    engineering: "engineering",
    peception: "perception",
    piloting: "piloting",
    cracking: "cracking",
    outdoors: "outdoors",
    sorcery: "sorcery",
    tasking: "tasking",
    fullMagician: "full Magician",
    mysticAdept: "mystic Adept",
    adept: "adept",
    aspectedMagician: "aspected Magicien",
    technomancer: "technomancer",
    mundane: "mundane",
    dwarf: "dwarf",
    ork: "ork",
    elf: "elf",
    human: "human",
    troll: "troll",
    duende: "duende",
    gnome: "gnome",
    hanuman: "hanuman",
    koborokuru: "koborokuru",
    menehune: "menehune",
    hobgobelin: "hobgobelin",
    ogre: "ogre",
    oni: "oni",
    satyr: "satyr",
    cyclops: "cyclops",
    fomorian: "fomorian",
    giant: "géant",
    minotaur: "minotaure",
    dalakitnon: "dalakitnon",
    driad: "dryad",
    nocturna: "nocturna",
    wakyambi: "wakyambi",
    xapiri_thepe: "Xapiri thëpë",
    valkyrie: "valkyrie",
    nartaki: "nartaki",
    centaur: "centaur",
    naga: "naga",
    pixie: "pixie",
    sasquatch: "sasquatch",
    merrow: "merrow",   
    formula: "formula",
    formulas: "formulas",
    complexForm: "complex form",
    complexForms: "complex forms",
    added: "added",
    actual: "actual",
    maximum: "maximum",
    dices: "dices",
    specializations: "specializations",
    character: "character",
    reinitialize: "reinitialize",
    pointsToSpend: "Points to Spend",
  },
};
