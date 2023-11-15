function setLang(language) {
  // Utilisez le tableau de traduction correspondant à la langue
  console.log("setLang(",language,")");

  terms = translations[language];

  console.log("setLang(",language,") : terms : ", terms);
}

function setLanguage(language) {
  const source = document.getElementById("container").innerHTML;
  const template = Handlebars.compile(source);

  terms = translations[language];

  const html = template(terms);
  document.getElementById("container").innerHTML = html;
}

function changeLang(language) {
  // Utilisez le tableau de traduction correspondant à la langue
  console.log("setLang(",language,")");

  setLang(language);
  setLanguage(language);

  $("#define, #shape").find("input[type='checkbox']").prop('checked', false);
  $("#container").find(".collapse").collapse('hide');

  
  handleSIN();
  handleAttributes();
  handleSkills();
  updateKnowledgePoints() ;
  handleDropdownModal("knowledges");
  handleDropdownModal("languages");

  idToUpdate = [
    {
      id:"title",
      term: "title"
    }, 
    {
      id:"identityTitle",
      term: "identity"
    }, 
    {
      id:"priorityTableTitle",
      term: "priorityTable"
    }, 
    {
      id:"metatypeTitle",
      term: "metatypeChoice"
    }, 
    {
      id:"specialTitle",
      term: "specialAttributeChoice"
    }, 
    {
      id:"attributeTitle",
      term: "attributes"
    }, 
    {
      id:"skillTitle",
      term: "skills"
    }, 
    {
      id:"priorityTableAttributes",
      term: "attributes"
    }, 
    {
      id:"priorityTableSkills",
      term: "skills"
    }, 
    {
      id:"priorityTableResources",
      term: "resources"
    }, 
    {
      id:"resetButton",
      term: "reinitialize"
    }, 
    {
      id:"character",
      term: "character"
    }, 
    {
      id:"attributesAttributes",
      term: "attributes"
    }, 
    {
      id:"attributesAdded",
      term: "added"
    }, 
    {
      id:"attributesActual",
      term: "actual"
    }, 
    {
      id:"attributesMaximum",
      term: "maximum"
    }, 
    {
      id:"skillsSkills",
      term: "skills"
    }, 
    {
      id:"skillsAdded",
      term: "added"
    }, 
    {
      id:"skillsDices",
      term: "dices"
    }, 
    {
      id:"qualitiesHeader",
      term: "qualities"
    },
    {
      id:"descriptionQualities",
      term: "descriptions"
    }, 
    {
      id:"typeQualities",
      term: "types"
    }, 
    {
      id:"karmaCostQualities",
      term: "karmaCost"
    }]
  
    idToUpdate.forEach((element) => {
      document.getElementById(element.id).innerText = capitalized(terms[element.term]);
    }); 
  document.getElementById(priorityTableMetatpeAdjustment).innerText = capitalized(terms.metatypes) + " (" + terms.adjustment + ")"; 
  document.getElementById(priorityTableSpecial).innerText = capitalized(terms.magic) + "/" + capitalized(terms.resonance);
  document.getElementById("firstname").placeholder = capitalized(terms.firstname);
  document.getElementById("surname").placeholder = capitalized(terms.surname);
  document.getElementById("name").placeholder = capitalized(terms.name);
    
  handleSIN(); 
  showPriorities();
  handleAttributes();
  showAttributesToSpend();
  handleSkills(); 

  console.log("setLang(",language,") : terms : ", terms);
}

let terms = [];

const translations = {
  fr: {
    title: "Créateur de Personnage Shadowrun 6",
    firstname: "prénom",
    name: "nom",
    surname: "surnom",
    metatypes: "métatypes",
    attributes: "attributs",
    adjustment: "ajustement",
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
    perception: "perception",
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
    addTo: "ajouter",
    actual: "actuel",
    maximum: "maximum",
    dices: "dès",
    specialization: "spécialisation",
    specializations: "spécialisations",
    character: "personnage",
    reinitialize: "réinitialisation",
    pointsToSpend: "points à dépenser",
    new: "nouvelle",
    astralCombat: "combat astral",
    astralSignatures: "signatures astrales",
    emotionalStates: "états émotionnels",
    spiritTypes: "types d'esprit",
    archery: "archerie",
    climbing: "escalade",
    flying: "vol",
    gymnastics: "gymnastique",
    sprinting: "sprint",
    swimming: "natation",
    throwing: "lancer",
    biotechnology: "biotechnologie",
    cybertechnology: "cybertechnologie",
    firstAid: "premiers soins",
    medicine: "médecine",
    blades: "armes tranchantes",
    clubs: "armes contondantes",
    unarmedCombat: "combat à mains nues",
    acting: "comédie",
    disguise: "déguisement",
    impersonation: "imposture",
    performance: "représentation",
    banishing: "bannissement",
    summoning: "invocation",
    cybercombat: "cybercombat",
    electronicWarfare: "guerre électronique",
    hacking: "hacking",
    computer: "informatique",
    hardware: "matériel électronique",
    software: "logiciel",
    alchemy: "alchimie",
    artificing: "création d'artefact",
    disenchanting: "désenchantement",
    aeronauticsMechanic: "mécanique aéronautique",
    armorer: "armurerie",
    automotiveMechanic: "mécanique automobile",
    demolitions: "démolition",
    gunnery: "armes de véhicule",
    industrialMechanic: "mécanique industrielle",
    lockpicking: "crochetage",
    nauticalMechanic: "mécanique nautique",
    tasers: "tasers",
    holdOuts: "pistolets de poche",
    lightPistols: "pistolets légers",
    machinePistols: "pistolets automatiques",
    heavyPistols: "pistolets lourds",
    submachineGuns: "mitraillettes",
    shotguns: "shotguns",
    rifles: "fusils",
    machineGuns: "mitrailleuses",
    assaultCannons: "canons d'assaut",
    etiquette: "étiquette",
    instruction: "enseignement",
    intimidation: "intimidation",
    leadership: "leadership",
    negotiation: "négociation",
    navigation: "orientation",
    survival: "survie",
    tracking: "pistage",
    woods: "forêts",
    desert: "déserts",
    urbanArea: "milieux urbains",
    visual: "visuelle",
    aural: "auditive",
    tactile: "tactile",
    groundCraft: "véhicules terrestres",
    aircraft: "véhicules aériens",
    watercraft: "véhicules aquatiques",
    counterspelling: "contresort",
    ritualSpellcasting: "magie rituelle",
    spellcasting: "lancement de sorts",
    camouflage: "camouflage",
    palming: "escamotage",
    sneaking: "discrétion",
    compiling: "compilation",
    decompiling: "décompilation",
    registering: "inscription",
    knowledges: "connaissances",
    languages: "langues",
    knowledge: "connaissance",
    language: "langue",
    qualities: "traits",
    quality: "trait",
    description: "description",
    descriptions: "descriptions",
    type: "type",
    types: "types",
    karma: "karma",
    karmaCost: "coût en karma",
    karmaCosts: "coûts en karma",
    specialist: "spécialiste",
    expert: "expert",
    native: "langue maternelle",
    positive: "qualité",
    negative: "défaut",
    maximumQualities: "Vous avez atteint le nombre maximum de Traits à la création (6).",
  },
  en: {
    title: "Shadowrun 6 Character Creator",
    firstname: "Firstname",
    name: "Name",
    surname: "Surname",
    metatypes: "Metatypes",
    attributes: "attributes",    
    adjustment: "adjustment",
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
    perception: "perception",
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
    giant: "giant",
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
    addTo: "add",
    actual: "actual",
    maximum: "maximum",
    dices: "dices",
    specialization: "specialization",
    specializations: "specializations",
    character: "character",
    reinitialize: "reinitialize",
    pointsToSpend: "Points to Spend",
    new: "new",
    astralCombat: "astral combat",
    astralSignatures: "astral signatures",
    emotionalStates: "emotional states",
    spiritTypes: "spirit types",
    archery: "archery",
    climbing: "climbing",
    flying: "flying",
    gymnastics: "gymnastics",
    sprinting: "sprinting",
    swimming: "swimming",
    throwing: "throwing",
    biotechnology: "biotechnology",
    cybertechnology: "cybertechnology",
    firstAid: "firstAid",
    medicine: "medicine",
    blades: "blades",
    clubs: "clubs",
    unarmedCombat: "unarmed Combat",
    acting: "acting",
    disguise: "disguise",
    impersonation: "impersonation",
    performance: "performance",
    banishing: "banishing",
    summoning: "summoning",
    cybercombat: "cybercombat",
    electronicWarfare: "electronic Warfare",
    hacking: "hacking",
    computer: "computer",
    hardware: "hardware",
    software: "software",
    alchemy: "alchemy",
    artificing: "artificing",
    disenchanting: "disenchanting",
    aeronauticsMechanic: "aeronautics Mechanic",
    armorer: "armorer",
    automotiveMechanic: "automotive Mechanic",
    demolitions: "demolitions",
    gunnery: "gunnery",
    industrialMechanic: "industrial Mechanic",
    lockpicking: "lockpicking",
    nauticalMechanic: "nautical Mechanic",
    tasers: "tasers",
    holdOuts: "hold-Outs",
    lightPistols: "light Pistols",
    machinePistols: "machine Pistols",
    heavyPistols: "heavy Pistols",
    submachineGuns: "submachine Guns",
    shotguns: "shotguns",
    rifles: "rifles",
    machineGuns: "machine Guns",
    assaultCannons: "assault Cannons",
    etiquette: "etiquette",
    instruction: "instruction",
    intimidation: "intimidation",
    leadership: "leadership",
    negotiation: "negotiation",
    navigation: "navigation",
    survival: "survival",
    tracking: "tracking",
    woods: "woods",
    desert: "desert",
    urbanArea: "urbanArea",
    visual: "visual",
    aural: "aural",
    tactile: "tactile",
    groundCraft: "ground Craft",
    aircraft: "aircraft",
    watercraft: "watercraft",
    counterspelling: "counterspelling",
    ritualSpellcasting: "ritualSpellcasting",
    spellcasting: "spellcasting",
    camouflage: "camouflage",
    palming: "palming",
    sneaking: "sneaking",
    compiling: "compiling",
    decompiling: "decompiling",
    registering: "registering",
    knowledges: "knowledges",
    languages: "languages",
    knowledge: "knowledge",
    language: "language",
    qualities: "qualities",
    quality: "quality",
    description: "description",
    descriptions: "descriptions",
    type: "type",
    types: "types",
    karma: "karma",
    karmaCost: "karma cost",
    karmaCosts: "karma costs",
    specialist: "specialist",
    expert: "expert",
    native: "native",
    positive: "positive",
    negative: "negative",
    maximumQualities: "you have reached the maximum number of Qualities for creation (6).",
  },
};
