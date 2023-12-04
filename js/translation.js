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
      term: "globalReinitialize"
    }, 
    {
      id:"character",
      term: "thisCharacter"
    }, 
    {
      id:"exportButton",
      term: "exportFoundry"
    },  
    {
      id:"saveCharacter",
      term: "saveCharacter"
    },  
    {
      id:"newCharacter",
      term: "newCharacter"
    },  
    {
      id:"characters",
      term: "shadows"
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
    },
    {
      id:"qualitiesTitle",
      term: "qualities"
    }, 
    {
      id:"sumToTenTitle",
      term: "sumToTen"
    }]
  
    idToUpdate.forEach((element) => {
      try {        
      document.getElementById(element.id).innerText = capitalized(terms[element.term]);
      }
      catch (error) {
        console.log("error : ", error, " for ", element);
      }
    }); 
  document.getElementById("priorityTableMetatpeAdjustment").innerText = capitalized(terms.metatypes) + " (" + terms.adjustment + ")"; 
  document.getElementById("priorityTableSpecial").innerText = capitalized(terms.magic) + "/" + capitalized(terms.resonance);
  document.getElementById("firstname").placeholder = capitalized(terms.firstname);
  document.getElementById("surname").placeholder = capitalized(terms.surname);
  document.getElementById("name").placeholder = capitalized(terms.name);
  document.getElementById("knowledgeTitle").innerText = capitalized(terms.knowledges) + " & " + terms.languages ;
function setButtonTitle(selector, title) {
  var buttons = document.querySelectorAll(selector);
  buttons.forEach(function(button) {
    button.title = capitalized(title);
  });
}

setButtonTitle('a.load-button', terms.loadCharacter);
setButtonTitle('a.export-button', terms.exportFoundry);
setButtonTitle('a.delete-button', terms.deleteCharacter);
  handleSIN(); 
  showPriorities();
  handleAttributes();
  showAttributesToSpend();
  handleSkills();
  handleDropdownModal("knowledges");
  handleDropdownModal("languages");
  handleDropdownModal("qualities");
  handleDropdownModal("contacts");

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
    exoticWeapon: "armes exotiques",
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
    aspectedMagicianSorcery: "magicien spécialisé (sorcellerie)",
    aspectedMagicianConjuring: "magicien spécialisé (invocation)",
    aspectedMagicianEnchanting: "magicien spécialisé (enchantement)",
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
    valkyrie: "valkyrie",
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
    thisCharacter: "ce personnage",
    globalReinitialize: "réinitialisation globale",
    pointsToSpend: "points à dépenser",
    new: "nouveau",    
    newe: "nouvelle",
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
    qualitiesCatalog: "Catalogue des Traits",
    filterName: "Filtrer par nom",
    all: "tous",
    minKarma: "Karma minimum",
    maxKarma: "Karma maximum",
    maximumQualities: "Vous avez dépassé le nombre maximum de Traits à la création (6).",
    ldb: "Livre de base",
    seattleEmeraude: "Seattle : Cité d'Emeraude",
    tombeauOuvert: "À tombeau ouvert",
    compagnon: "Compagnon du 6eme Monde",
    jeuxPouvoir: "Jeux de pouvoir",
    voiesOccultes: "Voies occultes",
    feuNourri: "Feu nourri",
    source: "source",
    exportFoundry: "exporter sur Foundry VTT",
    tooMuchSpecializations: "Vous avez dépassé le nombre maximum de spécialisations à la création (2).",
    stuff: "équipement",
    magicStuff: "équipement magique",
    matrixStuff: "équipement matriciel",
    lifeStuff: "équipement de vie",
    contact: "contact",
    contacts: "contacts",
    connection: "réseau",
    loyalty: "loyauté",
    tooMuchConnectionLoyalty: "Vous avez dépassé le maximum pour le réseau ou la loyauté à la création (Charisme) pour ",
    legalDisclaimer: "Shadowrun et tous les logos et personnages associés sont la propriété de Topps Company, Inc. © 2020 Topps Company, Inc. Les traductions en français sont la propriété de Black Book Editions. Tous droits réservés. Ce site web n'est pas affilié, approuvé, sponsorisé ou approuvé par Topps Company, Inc., Black Book Editions ou l'une de leurs sociétés affiliées ou filiales. Si ce site web enfreint une marque ou une propriété, veuillez me contacter sur Github.",
    livingPersona: "persona incarné",
    mismatchVersion: "La version de l'application a été modifiée. Votre personnage pourrait ne pas se charger correctement, si c'est le cas, cliquez sur le bouton rouge de réinitialisation.",
    mismatchVersionTitle: "Différence de version",
    shadows: "ombres portées",
    loadCharacter: "Charger le personnage",
    deleteCharacter: "Effacer le personnage",
    saveCharacter: "Enregistrer",
    newCharacter: "Nouveau",
    sumToTen: "Système à 10 points",    
    chooseStuff: "Choisissez votre équipement",  
    combatWeapons: "Combat & Armes",  
    vehicles: "Véhicules et drones",  
    augmentations: "Augmentations",  
    otherStuff: "Autres équipements",
    rangedWeapons: "Armes à distance",
    meleeWeapons: "Armes de mêlée",
    grenades: "Grenades",
    protections: "Protections",
    ammunitions:  "Munitions",
    SINS: "SINs",
    lifestyle: "style de vie",
    drugs: "drogues",
    stuffs: "équipements",
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
    exoticWeapon: "exotic weapons",
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
    xapiri_thepe: "xapiri thëpë",
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
    thisCharacter: "this character",
    globalReinitialize: "global reinitialize",
    pointsToSpend: "Points to Spend",
    new: "new",
    newe: "new",
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
    qualitiesCatalog: "Qualities Catalog",
    filterName: "filter by name",
    all: "all",
    minKarma: "minimum Karma",
    maxKarma: "maximum Karma",
    maximumQualities: "you have exceeded the maximum number of Qualities for creation (6).",    
    ldb: "Core Rulebook",
    seattleEmeraude: "Emerald City",
    tombeauOuvert: "Double Clutch",
    compagnon: "6th World Companion",
    jeuxPouvoir: "Power Plays",
    voiesOccultes: "Street Wyrd",
    feuNourri: "Firing Squad",
    source: "source",
    exportFoundry: "export on Foundry VTT",
    tooMuchSpecializations: "You have exceeded the maximum number of specializations for creation (2).",
    stuff: "stuff",
    magicStuff: "magic stuff",
    matrixStuff: "matrix stuff",
    lifeStuff: "life stuff",
    contact: "contact",
    contacts: "contacts",
    connection: "connection",
    loyalty: "loyalty",
    tooMuchConnectionLoyalty: "You have exceeded the maximum for connection or loyalty at creation (Charisma) on ",
    legalDisclaimer: "Shadowrun and all related marks, logos and characters are owned by Topps Company, Inc. © 2020 Topps Company, Inc. All Rights Reserved. This website is not affiliated with, endorsed, sponsored, or specifically approved by Topps Company, Inc. or any of its affiliates or subsidiaries. If this website infringes on any of Topps trademarks, please contact me on Github.",    
    livingPersona: "living persona",
    mismatchVersion: "The version of the application has been modified. Your character may not load correctly, if so, click on the red reset button.",
    mismatchVersionTitle: "Version mismatch",
    shadows: "shadows",
    loadCharacter: "load character",
    deleteCharacter: "delete character",
    saveCharacter: "save",
    newCharacter: "new",
    sumToTen: "Sum to Ten",
    chooseStuff: "Choose your stuff",  
    combatWeapons: "Combat & Weapons",  
    vehicles: "Vehicles & Drones",  
    augmentations: "Augmentations",  
    otherStuff: "Other stuff",
    rangedWeapons: "Ranged Weapons",
    meleeWeapons: "Melee Weapons",
    grenades: "Grenades",
    protections: "Protections",
    ammunitions:  "Ammunitions",
    SINS: "SINs",
    lifestyle: "lifestyle",
    drugs: "drugs",
    stuffs: "stuffs",
  },
};
