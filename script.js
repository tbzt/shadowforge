document.addEventListener("DOMContentLoaded", function () {
  loadCookie();
  setLanguage("fr"); 
  handleSIN() 
  handleAttributes();
});


const translations = {
  "fr": {
    "firstname": "prénom",
    "name": "nom",
    "surname": "surnom",  
    "metatypes": "métatypes",
    "attributes": "attributs",
    "attributesTitle": "Attributs",
    "adjustement": "ajustement",
    "skills": "compétences",
    "skillsTitle": "Compétences",
    "magicOrResonance": "Magie ou Résonance",
    "resources": "ressources",
    "body": "constitution",
    "agility": "agilité",
    "reaction": "réaction",
    "strength": "force",
    "willpower": "volonté",
    "logic": "logique",
    "intuition": "intuition",
    "charisma": "charisme",
    "edge": "atout",
    "magic": "magie",
    "resonance": "résonance",
    "identity": "Identité",
    "priorityTable" : "Table des priorités",
    "metatypeChoice": "Choix du métatype",
    "specialAttributeChoice": "Choix de l'attribut spécial",
    "colons": " :",
    "firearms": "armes à feu",
    "exoticWeapons":  "armes exotiques",
    "astral":  "astral",
    "athletics":  "athlétisme",
    "biotech":  "biotech",
    "closeCombat":  "combat rapproché",
    "conjuring":  "invocation",
    "electronics":  "électronique",
    "stealthing":  "furtivité",
    "influence":  "influence",
    "enchanting":  "enchantement",
    "con":  "escroquerie",
    "engineering":  "ingénierie",
    "peception":  "perception",
    "pilot":  "pilotage",
    "cracking":  "piratage",
    "outdoors":  "plein air",
    "sorcery":  "sorcellerie",
    "tasking":  "technomancie",
    "fullMagician": "magicien pur",
    "mysticAdept": "adepte mystique",
    "adept": "adepte",
    "aspectedMagicien": "magicien spécialisé",
    "technomancer": "technomancien",
    "dwarf": "nain",
    "ork": "ork",
    "elf": "elfe",
    "human": "humain",
    "troll": "troll"
  },
  "en": {
    "firstname": "Firstname",
    "name": "Name",
    "surname": "Surname", 
    "metatypes": "Metatypes",
    "attributes": "attributes",
    "attributesTitle": "Attributes",
    "skills": "skills",
    "skillsTitle": "Skills",
    "magicOrResonance": "Magic or Resonance",
    "resources": "Resources",
    "body": "Body",
    "agility": "Agility",
    "reaction": "Reaction",
    "strength": "Strength",
    "willpower": "Willpower",
    "logic": "Logic",
    "intuition": "Intuition",
    "charisma": "Charisma",
    "edge": "Edge",
    "magic": "Magic",
    "resonance": "Resonance",
    "identity": "Identity",
    "priorityTable" : "Priority Table",
    "metatypeChoice": "Metatype Choice",
    "specialAttributeChoice": "Special Attribute Choice",
    "colons": ":"
  }
}

let terms = [];

// Fonction pour changer la langue
function setLanguage(language) {
  // Utilisez le tableau de traduction correspondant à la langue
  terms = translations[language];
  console.log(terms.metatypes);

  const source = document.getElementById("container").innerHTML;
  const template = Handlebars.compile(source);
  
  const html = template(terms);
  document.getElementById("container").innerHTML = html;

}

let isMagic = false;
let isTechno = false;

let prioritiesSelected = {
  metatypes: null,
  attributes: null,
  skills: null,
  magicOrResonance: null,
  resources: null,
};

let selectedMetatype = null;
let metatypeSelected = false;

let selectedSpecial = null;

let pointsAttributesSpent = 0;

let pointsSkillsDepenses = 0;

let SIN = [];

let actualPriority = null; // Ajout d'une variable pour suivre la priorité actuelle

// Ajout d'une variable pour suivre le bouton de métatype sélectionné
let selectedMetatypeButton = null;
let selectedSpecialButton = null;

// Variables globales pour suivre les cellules sélectionnées dans chaque catégorie
let selectedCells = {
  metatypes: null,
  attributes: null,
  skills: null,
  magicOrResonance: null,
  resources: null,
};

let IDselectedCells = {
  metatypes: null,
  attributes: null,
  skills: null,
  magicOrResonance: null,
  resources: null,
};

// Objet pour stocker les valeurs d'attributes de base et de max en fonction du métatype
const attributesData = {
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
};

// Objet pour stocker les valeurs des compétences
const skillsData = {
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
};

function capitalized(str) {
  if (typeof str === 'string') {
      var result = str.charAt(0).toUpperCase() + str.slice(1);
      return result;
  } else {
      console.error("La variable str n'est pas une chaîne de caractères.");
      return str; // ou gérer autrement
  }
}

function handleSIN() {
// Écoutez les événements "input" sur les champs de texte
console.log("handleSIN initialize");
const firstnameInput = document.getElementById("firstname");
const surnameInput = document.getElementById("surname");
const nameInput = document.getElementById("name");
const identity = document.getElementById("identity");

firstnameInput.placeholder = capitalized(terms.firstname);
surnameInput.placeholder = capitalized(terms.surname);
nameInput.placeholder = capitalized(terms.name);

firstnameInput.addEventListener("input", showSINInfo);
surnameInput.addEventListener("input", showSINInfo);
nameInput.addEventListener("input", showSINInfo);

function showSINInfo() {
  
console.log("showSINInfo initialize");
  const firstname = firstnameInput.value;
  const surname = surnameInput.value;
  const name = nameInput.value;

  console.log("firstname : ",firstname," | surname : ",surname," | name : ",name);

  if (!surname && (firstname || name)) {
    identity.innerHTML = `
            <h5>${terms.identity}${terms.colons}</h5>
            <p>${firstname || ""} ${surname || ""} ${name || ""}</p>
        `;
  } else if (surname) {
    identity.innerHTML = `
            <h5>${terms.identity}${terms.colons}</h5>
            <p>${firstname || ""} ${'"' + surname + '"' || ""} ${name || ""}</p>
        `;
  } else {
    identity.innerHTML = "";
  }

  // Mettez à jour le tableau SIN avec une seule entrée
  SIN = [
    {
      firstname,
      surname,
      name,
    },
  ];
  console.log(JSON.stringify(SIN));
  saveInCookie();
}
};


function useButton(cell) {
    if (cell.classList.contains("btn-outline-primary")) { 
        cell.classList.add("btn-primary");
        cell.classList.remove("btn-outline-primary");
    }
    else {
        cell.classList.remove("btn-primary");
        cell.classList.add("btn-outline-primary");
    }

}

function selectPriority(cell, categorie, priority) {
  console.log("selectPriority : " + cell);

  // Obtenir la cellule précédemment sélectionnée dans la même catégorie
  let previousSelectedCell = selectedCells[categorie];

  // Si une cellule était précédemment sélectionnée, la désélectionner
  if (previousSelectedCell) {
    if (previousSelectedCell.classList) {
      previousSelectedCell.classList.remove("selected");
    }
    console.log(
      `Désélection de ${categorie} : ${previousSelectedCell.textContent}`
    );
  }

  // Mettre à jour la sélection
  cell.classList.add("selected");
  console.log(`Sélection de ${categorie} : ${cell.textContent} (${priority})`);

  // Mettre à jour la cellule sélectionnée dans la catégorie globale
  selectedCells[categorie] = cell;

  // Mettre à jour la cellule sélectionnée dans la catégorie globale
  IDselectedCells[categorie] = cell.id;

  // Mettre à jour la priorité sélectionnée
  prioritiesSelected[
    categorie
  ] = `${capitalized(terms[categorie])} : ${cell.textContent} (${priority})`;
  actualPriority = priority; // Mettre à jour la priorité actuelle

  // Afficher les attributes si leur priorité est sélectionnée  
  if (categorie === "attributes") {     
    var attributeTitle = document.getElementById("attributeTitle");
    attributeTitle.style.display = "block"; // Afficher la section des attributes
  }

  
  // Afficher les attributes si leur priorité est sélectionnée  
  if (categorie === "skills") {  
    var skillTitle = document.getElementById("skillTitle");
    skillTitle.style.display = "block"; // Afficher la section des skills
    handleSkills();
  }

  // Mettre à jour le bouton de métatype sélectionné (si un bouton est déjà sélectionné)
  if (selectedMetatypeButton) {
    selectedMetatypeButton.classList.remove("selected");
    console.log(
      `Désélection du métatype : ${selectedMetatypeButton.textContent}`
    );
    selectedMetatypeButton = null;
  }

  updateAttributesDisplay();
  saveInCookie();

  // Afficher les résultats
  showResults();
  // Appeler la fonction pour générer les boutons en fonction de la priorité sélectionnée
  if (categorie === "metatypes") generateMetatypeButtons(actualPriority); // Utiliser la priorité actuelle
  if (categorie === "magicOrResonance")
    generateSpecialButtons(actualPriority); // Utiliser la priorité actuelle
}

// Fonction pour générer des boutons en ligne en fonction de la priorité sélectionnée
function generateMetatypeButtons(priority) {
  console.log("generateMetatypeButtons:", priority);

  const metatypeTitle = document.getElementById("metatypeTitle");
    metatypeTitle.style.display = "block"; 
 
  const metatypeForm = document.getElementById("metatypeButtons");

  // Récupérer l'option de métatype sélectionnée actuellement
  const selectedMetatype = metatypeForm.querySelector("button.selected");

  const metatypes = getMetatypesForPriority(priority);

  // Créez des boutons en ligne pour chaque métatype
  metatypeForm.innerHTML = ""; // Supprimez les options de métatype existantes

  metatypes.forEach((metatype) => {
    const button = document.createElement("button");
    button.textContent = metatype;
    button.classList.add("metatype-button");
    button.classList.add("btn-outline-primary");
    button.classList.add("btn");
    button.setAttribute("id", metatype);

    // Vérifiez si le type du bouton est "submit" et changez-le en "button" si nécessaire
    if (button.getAttribute("type") === "submit") {
      button.setAttribute("type", "button");
    }

    metatypeForm.appendChild(button);

    // Si le métatype correspond à l'option précédemment sélectionnée, rétablissez la sélection
    if (
      selectedMetatype &&
      button.textContent === selectedMetatype.textContent
    ) {
      button.classList.add("selected");
      console.log(`Sélection du métatype : ${selectedMetatype.textContent}`);
    }

    // Ajoutez un gestionnaire d'événements pour surveiller les sélections
    button.addEventListener("click", function (event) {
      event.preventDefault();
      handleMetatypeButtonClick(button, metatypeForm);
      updateAttributesForMetatype(button.textContent);
      showResults();
      metatypeSelected = true;
      console.log(`Bouton de métatype cliqué : ${button.textContent}`);
    });
  });
}

// Fonction pour obtenir les métatypes en fonction de la priorité
function getMetatypesForPriority(priority) {
  if (priority === "A") return ["dwarf", "ork", "troll"];
  if (priority === "B") return ["dwarf", "elf", "ork", "troll"];
  if (priority === "C" || priority === "D" || priority === "E")
    return ["dwarf", "elf", "human", "ork", "troll"];
  return [];
}

// Fonction pour gérer la sélection des boutons de métatype
function handleMetatypeButtonClick(button, metatypeForm) {
  const wasSelected = button.classList.contains("selected");
  const allButtons = metatypeForm.querySelectorAll(".metatype-button");

  if (!wasSelected) {
    // Désélectionner tous les boutons
    allButtons.forEach((btn) => btn.classList.remove("selected"));
    // Sélectionner uniquement le bouton actuel
    button.classList.add("selected");
    console.log(`Bouton de métatype sélectionné : ${button.textContent}`);
  }
  selectedMetatype = button.textContent;
  saveInCookie();
}

// Fonction pour générer des boutons en ligne en fonction de la priorité sélectionnée
function generateSpecialButtons(priority) {
  console.log("generateSpecialButtons:", priority);

  const specialTitle = document.getElementById("specialTitle");
  const specialForm = document.getElementById("specialButtons");

  if (priority === "E") {
    
    specialTitle.style.display = "none"; 
    specialForm.innerHTML = "";
  } else {
    specialTitle.style.display = "block"; 
    // Récupérer l'option de métatype sélectionnée actuellement
    const selectedSpecial = specialForm.querySelector("button.selected");

    const specials = [
      "adept",
      "mysticAdept",
      "fullMagician",
      "aspectedMagicien",
      "technomancer",
    ];

    specialSorted = sort(specials);

    // Créez des boutons en ligne pour chaque métatype
    specialForm.innerHTML = ""; // Supprimez les options de métatype existantes

    specialSorted.forEach((special) => {
      const button = document.createElement("button");
      button.textContent = capitalized(special.terms);
      button.classList.add("special-button");
      button.classList.add("btn-outline-primary");
      button.classList.add("btn");
      button.setAttribute("id", special.data);

      // Vérifiez si le type du bouton est "submit" et changez-le en "button" si nécessaire
      if (button.getAttribute("type") === "submit") {
        button.setAttribute("type", "button");
      }

      specialForm.appendChild(button);

      // Si le métatype correspond à l'option précédemment sélectionnée, rétablissez la sélection
      if (
        selectedSpecial &&
        button.textContent === selectedSpecial.textContent
      ) {
        button.classList.add("selected");
        console.log(`Sélection du spécial : ${selectedSpecial.textContent}`);
        if (selectedSpecial.textContent === "technomancer") {
          isTechno = true;
        } else {
          isMagic = true;
        }
      }

      // Ajoutez un gestionnaire d'événements pour surveiller les sélections
      button.addEventListener("click", function (event) {
        event.preventDefault();
        handleSpecialButtonClick(button, specialForm);
        updateAttributesForSpecial(button.textContent, priority);
        showResults();
        specialSelected = true;
        console.log(`Bouton de métatype cliqué : ${button.textContent}`);
      });
    });
  }
}

// Fonction pour gérer la sélection des boutons de métatype
function handleSpecialButtonClick(button, specialForm) {
  const wasSelected = button.classList.contains("selected");
  const allButtons = specialForm.querySelectorAll(".special-button");

  if (!wasSelected) {
    // Désélectionner tous les boutons
    allButtons.forEach((btn) => btn.classList.remove("selected"));
    // Sélectionner uniquement le bouton actuel
    button.classList.add("selected");
  }
  selectedSpecial = button.textContent;
  saveInCookie();
}

// Fonction pour ajouter les traits automatiques en fonction du métatype
function handleMetatypeQualities(metatype) {
  if (metatype === "dwarf")
    return ["Résistance aux toxines", "Vision thermographique"];
  if (metatype === "elf") return ["Vision nocturne"];
  if (metatype === "ork") return ["Vision nocturne", "Robuste 1"];
  if (metatype === "troll")
    return ["Dépôts dermiques", "Vision thermographique", "Robuste 2"];
  return [];
}

function addClassesCookie() {
  for (var cat in IDselectedCells) {
    let cell = document.getElementById(IDselectedCells[cat]);
    if (cell) {
      cell.classList.add("selected");
    }
  }
  let metatypeButton = document.getElementById(selectedMetatype);
  if (metatypeButton) metatypeButton.classList.add("selected");
}

function removeClassesCookie() {
  for (var cat in IDselectedCells) {
    let cell = document.getElementById(IDselectedCells[cat]);
    if (cell) {
      cell.classList.remove("selected");
    }
  }
}

function addSINCookie() {
  const identity = document.getElementById("identity");

  if (SIN.length > 0) {
    const firstname = SIN[0].firstname || "";
    const surname = SIN[0].surname || "";
    const name = SIN[0].name || "";

    if (!surname && (firstname || name)) {
      identity.innerHTML = `
                <h5>{{identity}} :</h5>
                <p>${firstname || ""} ${surname || ""} ${name || ""}</p>
            `;
    } else if (surname) {
      identity.innerHTML = `
                <h5>{{identity}} :</h5>
                <p>${firstname || ""} ${'"' + surname + '"' || ""} ${name || ""}</p>
            `;
    } else {
      identity.innerHTML = "";
    }
  }
}

// Fonction pour mettre à jour les valeurs d'attributes en fonction du métatype
function updateAttributesForMetatype(metatype) {
  if (metatype === "dwarf") {
    attributesData.body.max = 7;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 5;
    attributesData.strength.max = 8;
    attributesData.willpower.max = 7;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "elf") {
    attributesData.body.max = 6;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 8;
    attributesData.edge.max = 6;
  } else if (metatype === "ork") {
    attributesData.body.max = 8;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 8;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 5;
    attributesData.edge.max = 6;
  } else if (metatype === "troll") {
    attributesData.body.max = 9;
    attributesData.agility.max = 5;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 9;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 5;
    attributesData.edge.max = 6;
  } else if (metatype === "human") {
    attributesData.body.max = 6;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 7;
  }

  updateAttributesDisplay();
}

// Fonction pour mettre à jour les valeurs d'attributes en fonction du métatype
function updateAttributesForSpecial(special, priority) {
  if (priority === "A") {
    if (
      special === "fullMagician" ||
      special === "mysticAdept" ||
      special === "adept"
    ) {
      attributesData.magic.base = 4;
    } else if (special === "aspectedMagicien") {
      attributesData.magic.base = 5;
    } else if (special === "technomancer") {
      attributesData.resonance.base = 4;
    }
  }
  if (priority === "B") {
    if (special === "fullMagician") {
      if (
        special === "fullMagician" ||
        special === "mysticAdept" ||
        special === "adept"
      ) {
        attributesData.magic.base = 3;
      } else if (special === "aspectedMagicien") {
        attributesData.magic.base = 4;
      } else if (special === "technomancer") {
        attributesData.resonance.base = 3;
      }
    }
  }
  if (priority === "C") {
    if (
      special === "fullMagician" ||
      special === "mysticAdept" ||
      special === "adept"
    ) {
      attributesData.magic.base = 2;
    } else if (special === "aspectedMagicien") {
      attributesData.magic.base = 3;
    } else if (special === "technomancer") {
      attributesData.resonance.base = 2;
    }
  }
  if (priority === "D") {
    if (
      special === "fullMagician" ||
      special === "mysticAdept" ||
      special === "adept"
    ) {
      attributesData.magic.base = 1;
    } else if (special === "aspectedMagicien") {
      attributesData.magic.base = 2;
    } else if (special === "technomancer") {
      attributesData.resonance.base = 1;
    }
  }
  if (special === "technomancer") {
    attributesData.magic.base = 0;
  }
  else {
    attributesData.resonance.base = 0;
  }
  if (priority === "E") {
    attributesData.magic.base = 0;
    attributesData.resonance.base = 0;

  }
  handleAttributes();
  updateAttributesDisplay();
}

function handleAttributes() {
  // Sélectionnez le tableau des attributes par son ID
  var attributeTable = document.getElementById("attributeTable");
  // Sélectionnez le corps du tableau
  var attributeTableBody = attributeTable.querySelector("tbody");

  // Générez le contenu HTML en utilisant le modèle et les données
  var attributeHTML = "";
  for (const attribute in attributesData) {
 
    // Si l'attribut doit être affiché, générez le HTML
    if (attributesData[attribute].base > 0) {
      var capitalizedId =
      terms[attribute].charAt(0).toUpperCase() + terms[attribute].slice(1);
      attributeHTML += `
        <tr>
            <th scope="row">${capitalizedId}</th>
            <td>
                <div id="${attribute}_base"><span>${attributesData[attribute].base}</span></div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <button class="btn btn-outline-danger btn-xs" onclick="decrementAttribute('${attribute}', 1)">-</button>
                    <button class="btn btn-outline-success btn-xs" onclick="incrementAttribute('${attribute}', 1)">+</button>
                </div>
            </td>
            <td id="${attribute}_actual"><span class="h6">${attributesData[attribute].value}</span></td>
            <td id="${attribute}_max"><span class="h6"></span></td>
        </tr>
      `;
    }
  };

  // Affichez le contenu généré dans le corps du tableau des attributes
  attributeTableBody.innerHTML = attributeHTML;
}

// Fonction pour mettre à jour les éléments HTML en fonction des données d'attributes
function updateAttributesDisplay() {
  for (const attribute in attributesData) {
    if (attributesData[attribute].base > 0) {
    let attribute_base = document
      .getElementById(attribute + "_base")
      .querySelector("span");
    let attribute_actual = document
      .getElementById(attribute + "_actual")
      .querySelector("span");
    let attribute_max = document
      .getElementById(attribute + "_max")
      .querySelector("span");
    if (attributesData[attribute].base !== attributesData[attribute].value) {
      attributesData[attribute].value = attributesData[attribute].base;
      pointsAttributesSpentPrio = 0;
      pointsAttributesSpentAdjustement = 0;
      selectedAttributeType = "Prio";
    }
    attribute_base.textContent = attributesData[attribute].base;
    
    attribute_max.textContent = attributesData[attribute].max;
    attribute_actual.textContent = attributesData[attribute].value;
    
  }
}
}

// Déclarer la variable pour stocker le type d'attribute sélectionné
let selectedAttributeType = "Prio";

// Déclarer la variable depenseAttributes en tant que variable globale
let depenseAttributes;

// Fonction pour afficher le namebre de points d'attributes à dépenser
function showDepenseAttribute() {

  let attributesSpentNumberPrio = getAttributesDepensePrio(
    IDselectedCells.attributes
  );
  let attributesSpentNumberAdjustement = getAttributesDepenseAjuste(
    IDselectedCells.metatypes
  );
  console.log("showDepenseAttribute : ",attributesSpentNumberAdjustement)

  depenseAttributes = document.getElementById("attributesSpent"); // Mettre à jour la variable globale depenseAttributes

  depenseAttributes.innerHTML =
    ' <table class="table"><thead> <tr> <th scope="col"></th> <th scope="col">'+ capitalized(terms.attributes) +'</th> <th scope="col">'+ capitalized(terms.adjustement) +'</th></tr> </thead><tbody> <tr> <th scope="row">Points à dépenser</th> <td id="CellAttributesDepensePrio" class="selectable selected" onclick="selectAttributeType(this, \'Prio\')"><span id="attributesSpentNumberPrio">' +
    attributesSpentNumberPrio +
    '</span></td> <td id="CellAttributesDepenseAdjustement" class="selectable" onclick="selectAttributeType(this, \'Adjustement\')"><span id="attributesSpentNumberAdjustement">' +
    attributesSpentNumberAdjustement +
    "</span></td> </tr></tbody></table>";
}

// Fonction pour sélectionner le type d'attribute
function selectAttributeType(cell, type) {
  console.log("selectAttributeType : " + type);
  const classAttributePrio = document.getElementById(`CellAttributesDepensePrio`);
  const classAttributeAdjustement = document.getElementById(
    `CellAttributesDepenseAdjustement`
  );
  if (type === "Prio") {
    classAttributePrio.classList.add("selected");
    if (classAttributeAdjustement.classList.contains("selected"))
      classAttributeAdjustement.classList.remove("selected");
  }
  if (type === "Adjustement") {
    classAttributeAdjustement.classList.add("selected");
    if (classAttributePrio.classList.contains("selected"))
      classAttributePrio.classList.remove("selected");
  }
  selectedAttributeType = type;
}

// Fonction pour incrémenter une valeur attribute
function incrementAttribute(attribute, increment) {
  attributesData[attribute].value += increment;
  const cell = document.getElementById(attribute + "_actual");
  const span = cell.querySelector("span");
  span.textContent = attributesData[attribute].value;

  //checher la source

  // Mettre à jour le namebre de points d'attributes dépensés
  updateAttributesPoints("increment", increment, selectedAttributeType, attribute);
}

// Fonction pour décrémenter une valeur attribute
function decrementAttribute(attribute, decrement) {
  var currentValue = attributesData[attribute].value;
  attributesData[attribute].value -= decrement;
  const cell = document.getElementById(attribute + "_actual");
  const span = cell.querySelector("span");
  if (currentValue >= decrement) {
    span.textContent = attributesData[attribute].value;

    // Mettre à jour le namebre de points d'attributes dépensés
    updateAttributesPoints(
      "decrement",
      decrement,
      selectedAttributeType,
      attribute
    );
  }
}

let pointsAttributesSpentPrio = 0; // Initialisation de la réserve Prio
let pointsAttributesSpentAdjustement = 0; // Initialisation de la réserve Adjustement

function updateAttributesPoints(type, valeur, selectedAttributeType, attribute) {
  // Obtenez le namebre d'attributes dépensés en fonction du type (Prio ou Adjustement)
  let attributesSpentNumber = 0;
  if (selectedAttributeType === "Prio") {
    attributesSpentNumber = getAttributesDepensePrio(IDselectedCells.attributes);
  } else if (selectedAttributeType === "Adjustement") {
    attributesSpentNumber = getAttributesDepenseAjuste(IDselectedCells.metatypes);
  }

  if (type === "increment") {
    // Vérifiez si l'incrémentation dépasse le maximum d'attributes
    if (selectedAttributeType === "Prio") {
      pointsAttributesSpentPrio -= valeur;
    } else if (selectedAttributeType === "Adjustement") {
      pointsAttributesSpentAdjustement -= valeur;
    }
  } else if (type === "decrement") {
    if (selectedAttributeType === "Prio") {
      pointsAttributesSpentPrio += valeur;
    } else if (selectedAttributeType === "Adjustement") {
      pointsAttributesSpentAdjustement += valeur;
    }
  }

  // Mettez à jour le span avec le namebre de points d'attributes dépensés en fonction du type
  const depenseAttributes = document.getElementById(
    `attributesSpentNumber${selectedAttributeType}`
  );

  // Mettez à jour le texte avec la nouvelle valeur
  if (selectedAttributeType === "Prio") {
    depenseAttributes.textContent =
      Math.max(0,attributesSpentNumber + pointsAttributesSpentPrio);
  } else if (selectedAttributeType === "Adjustement") {
    depenseAttributes.textContent =
    Math.max(0,attributesSpentNumber + pointsAttributesSpentAdjustement);
  }

  // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
  const maxAttribute = document.getElementById(`${attribute}_max`);
  if (attributesData[attribute].value > attributesData[attribute].max) {
    maxAttribute.classList.add("maximum");
  } else {
    maxAttribute.classList.remove("maximum");
  }

  var cellDepensePrio = document.getElementById(`CellAttributesDepensePrio`);
  var cellDepenseAdjustement = document.getElementById(
    `CellAttributesDepenseAdjustement`
  );

  if (attributesSpentNumber + pointsAttributesSpentPrio < 0) {
    cellDepensePrio.classList.add("maximum");
  } else {
    cellDepensePrio.classList.remove("maximum");
  }

  if (attributesSpentNumber + pointsAttributesSpentAdjustement < 0) {
    cellDepenseAdjustement.classList.add("maximum");
  } else {
    cellDepenseAdjustement.classList.remove("maximum");
  }
  updateSkills();
}

function getAttributesDepensePrio(priority) {
  if (priority === "attributes_A") return 24;
  else if (priority === "attributes_B") return 16;
  else if (priority === "attributes_C") return 12;
  else if (priority === "attributes_D") return 8;
  else if (priority === "attributes_E") return 2;
}

function getAttributesDepenseAjuste(priority) {
  console.log("getAttributesDepenseAjuste : ",priority)
  if (priority === "metatypes_A") return 13;
  else if (priority === "metatypes_B") return 11;
  else if (priority === "metatypes_C") return 9;
  else if (priority === "metatypes_D") return 4;
  else if (priority === "metatypes_E") return 1;
  else return "La case Métatypes n'a pas été sélectionnée."
}

function getSkillsSpent(priority) {
  if (priority === "skills_A") return 32;
  else if (priority === "skills_B") return 24;
  else if (priority === "skills_C") return 20;
  else if (priority === "skills_D") return 16;
  else if (priority === "skills_E") return 10;
}

let skillsSort = [];
let skillsSpentNumber = 0;

function sort(array) {
  
  console.log("sort(array): ",array);
  if (!Array.isArray(array)) {
    console.log("il faut passer l'array ", array, "en Object.keys()");
  }
  arraySorted = [];
  for (const key of array) {
    console.log("data : ",array, "terms : ", terms[key]);
    arraySorted.push({
      data: key,
      terms: terms[key],
    });
  }
  // Triez le tableau en fonction des noms traduits
  arraySorted.sort((a, b) => a.terms.localeCompare(b.terms));
  return arraySorted;
}

function handleSkills() {

  var skillsSort = sort(Object.keys(skillsData));

  // Obtenez le namebre d'attributes dépensés en fonction du type (Prio ou Adjustement)
  skillsSpentNumber = getSkillsSpent(IDselectedCells.skills);

  var skillsSpentTable = document.getElementById("skillsSpent"); // Mettre à jour la variable globale 

  skillsSpentTable.innerHTML =
  '<table class="table"><tbody> <tr> <th scope="row">Points à dépenser</th> <td id="skillsSpentMax"> <span id="skillsSpentCell">' +
    skillsSpentNumber +
    '</span></td></tr></tbody></table>';

  // Sélectionnez le tableau des attributes par son ID
  var skillTable = document.getElementById("skillTable");
  // Sélectionnez le corps du tableau
  var skillTableBody = skillTable.querySelector("tbody");

  // Générez le contenu HTML en utilisant le modèle et les données
  var skillsHTML = "";  

  console.log("handleSkills: ",skillsSort);
  for (const skill of skillsSort) {
    

    if (skillsData[skill.data].linkedAttribute === "magic" && isMagic === false || skillsData[skill.data].linkedAttribute === "resonance" && isTechno === false) {

    } else {      

      console.log("handleSkills: passe ",skill.terms);

    // Si l'attribut doit être affiché, générez le HTML
    var capitalizedId = capitalized(skill.terms);
    var rdd = skillsData[skill.data].value + attributesData[skillsData[skill.data].linkedAttribute].value;
    skillsHTML += `
      <tr>
          <th scope="row">${capitalizedId}</th>
          <td id="${skill.data}_max">
              <div id="${skill.data}_actual"><span>${skillsData[skill.data].value}</span></div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <button class="btn btn-outline-danger btn-xs" onclick="decrementSkill('${skill.data}', 1)">-</button>
                  <button class="btn btn-outline-success btn-xs" onclick="incrementSkill('${skill.data}', 1)">+</button>
              </div>
          </td>
          <td id="${skill.data}_rdd"><div><span class="h6">${rdd}</span></div><div><span class="h8">+ ${capitalized(terms[skillsData[skill.data].linkedAttribute])}</span></div></td>
          <td id="${skill.data}_specialization"><span class="h6"></span></td>
      </tr>
    `;

    console.log(`
      <tr>
          <th scope="row">${capitalizedId}</th>
          <td id="${skill.data}_max">
              <div id="${skill.data}_actual"><span>${skillsData[skill.data].value}</span></div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <button class="btn btn-outline-danger btn-xs" onclick="decrementSkill('${skill.data}', 1)">-</button>
                  <button class="btn btn-outline-success btn-xs" onclick="incrementSkill('${skill.data}', 1)">+</button>
              </div>
          </td>
          <td id="${skill.data}_rdd"><div><span class="h6">${rdd}</span></div><div><span class="h8">+ ${capitalized(terms[skillsData[skill.data].linkedAttribute])}</span></div></td>
          <td id="${skill.data}_specialization"><span class="h6"></span></td>
      </tr>
    `);

    }
  };

  // Affichez le contenu généré dans le corps du tableau des attributes
  skillTableBody.innerHTML = skillsHTML;
}

function updateSkills() {
  var skillsSort = sort(Object.keys(skillsData));
  console.log("updateSkills() : ", skillsSort);
  for (const skill of skillsSort) { // Utilisation de for...of pour itérer sur les clés

    if (skillsData[skill.data].linkedAttribute === "magic" && isMagic === false || skillsData[skill.data].linkedAttribute === "resonance" && isTechno === false) {

    } else {   
    
    console.log("updateSkills() : ", skill.data + "_actual"," element : ", document.getElementById(skill.data + "_actual"), document.getElementById(skill.data + "_actual").querySelector("span"));
    const cell = document.getElementById(skill.data + "_actual");
    const span = cell.querySelector("span");
    span.textContent = skillsData[skill.data].value;
    var rdd = skillsData[skill.data].value + attributesData[skillsData[skill.data].linkedAttribute].value;
    if (skillsData[skill.data].value === 0) {
      rdd = Math.max(0, attributesData[skillsData[skill.data].linkedAttribute].value - 2)
    }
    const cellRdd = document.getElementById(skill.data + "_rdd").querySelector("span");
    console.log("updateSkills() : ", skill.data + "_rdd"," element : ", cellRdd)
    cellRdd.textContent = rdd;
  }
}
}

// Fonction pour incrémenter une valeur de compétence
function incrementSkill(skill, increment) {
  skillsData[skill].value += increment;
  updateSkills();
  updateSkillsPoints("increment", increment, skill);
}

// Fonction pour décrémenter une valeur compétence
function decrementSkill(skill, decrement) {
  skillsData[skill].value -= decrement;
  updateSkills();
  updateSkillsPoints("decrement", decrement, skill);
}

let pointsSkillsSpent = 0; // Initialisation de la réserve de points de compétences

function updateSkillsPoints(type, valeur, skill) {

  
  console.log("BEFORE updateSkillsPoints : ",type, " & pointsSkillsSpent : ", pointsSkillsSpent, " & valeur : ", valeur)
  if (type === "increment") {
    pointsSkillsSpent -= valeur;
  } else if (type === "decrement") {
    pointsSkillsSpent += valeur;
    }
    
  console.log("AFTER updateSkillsPoints : ",type, " & pointsSkillsSpent : ", pointsSkillsSpent, " & valeur : ", valeur)


    document.getElementById("skillsSpentCell").textContent =
    Math.max(0, skillsSpentNumber + pointsSkillsSpent);

  // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
  if (skillsData[skill].value > 7) {
    document.getElementById(`${skill}_max`).classList.add("maximum");
  } else {
    document.getElementById(`${skill}_max`).classList.remove("maximum");
  }
  // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
  if (skillsSpentNumber + pointsSkillsSpent < 0) {
    document.getElementById("skillsSpentMax").classList.add("maximum");
  } else {
    document.getElementById("skillsSpentMax").classList.remove("maximum");
  }
}

// Fonction pour afficher les résultats
function showResults() {
  const resultat = document.getElementById("resultat");
  resultat.innerHTML = "<h5>Priorités sélectionnées :</h5>";

  for (const categorie in prioritiesSelected) {
    const priority = prioritiesSelected[categorie];
    if (priority) {
      resultat.innerHTML += `<p>${priority}</p>`;
    }
  }

  if (prioritiesSelected["attributes"]) {
    showDepenseAttribute();
  }
  const metatypeForm = document.getElementById("metatypeButtons");
  const selectedMeta =
    metatypeForm.querySelector("button.selected") || selectedMetatype;
  if (selectedMeta) {
    const selectedMetatypeValue = selectedMeta.textContent || selectedMetatype;
    resultat.innerHTML +=
      "<h5>Métatype sélectionné :</h5>" + selectedMetatypeValue;
    const metatypeQualities = handleMetatypeQualities(selectedMetatypeValue);
    if (metatypeQualities.length > 0)
      resultat.innerHTML +=
        "<h5>Traits innés :</h5>" + metatypeQualities.join(", ");
  }

  const specialForm = document.getElementById("specialButtons");
  const selectedSpe =
    specialForm.querySelector("button.selected") || selectedSpecial;
  if (selectedSpe) {
    const selectedSpecialValue = selectedSpe.textContent || selectedSpecial;
    resultat.innerHTML += "<h5>" + selectedSpecialValue + "</h5>";
  }

  // Affichez la colonne des resources avec séparation des unités et le symbole ¥
  const resourcesValue = prioritiesSelected["resources"];
  if (resourcesValue) {
    const resources = parseInt(resourcesValue.split(" ")[1]); // Extrait la valeur numérique
    if (!isNaN(resources)) {
      resultat.innerHTML += "<h5>Ressources :</h5>";
      const formattedRessources = resources.toLocaleString("fr-FR", {
        style: "currency",
        currency: "JPY",
      });
      resultat.innerHTML += `<p>${formattedRessources}</p>`;
    }
  }
}

// Fonction pour sauvegarder la sélection dans un cookie
function saveInCookie() {
  const dataToSave = JSON.stringify({
    selectedCells,
    IDselectedCells,
    prioritiesSelected,
    actualPriority,
    selectedMetatype,
    SIN,
  });

  console.log("dataToSave : " + dataToSave);

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1); // 1 jour d'expiration

  const cookieOptions = `expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `selectionData=${dataToSave}; ${cookieOptions}`;
  console.log("Sélection sauvegardée dans un cookie.");
}

// Fonction pour charger la sélection depuis un cookie
function loadCookie() {
  const cookieData = document.cookie
    .split("; ")
    .find((row) => row.startsWith("selectionData="));

  if (cookieData) {
    const dataToLoad = cookieData.split("=")[1];
    const loadedData = JSON.parse(dataToLoad);

    if (loadedData) {
      selectedCells = loadedData.selectedCells;
      IDselectedCells = loadedData.IDselectedCells;
      prioritiesSelected = loadedData.prioritiesSelected;
      actualPriority = loadedData.actualPriority;
      selectedMetatype = loadedData.selectedMetatype;
      SIN = loadedData.SIN;
      generateMetatypeButtons(actualPriority);
      handleMetatypeQualities(selectedMetatype);
      showResults();
      addClassesCookie();
      addSINCookie();
    }
  }
}

// Sélectionnez le bouton "reset" par son ID
const resetButton = document.getElementById("resetButton");

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton "reset"
resetButton.addEventListener("click", function () {
  // Demandez une confirmation à l'utilisateur
  const userConfirmed = confirm(
    "Êtes-vous sûr de vouloir réinitialiser la sélection ?"
  );

  if (userConfirmed) {
    // Effacez le cookie en définissant une date d'expiration passée
    const pastExpirationDate = new Date(0);
    document.cookie =
      "selectionData=; expires=" +
      pastExpirationDate.toUTCString() +
      "; path=/";

    // Réinitialisez les valeurs
    removeClassesCookie();
    prioritiesSelected = {
      metatypes: null,
      attributes: null,
      skills: null,
      magicOrResonance: null,
      resources: null,
    };
    selectedMetatype = null;
    actualPriority = null;
    selectedCells = {
      metatypes: null,
      attributes: null,
      skills: null,
      magicOrResonance: null,
      resources: null,
    };
    IDselectedCells = {
      metatypes: null,
      attributes: null,
      skills: null,
      magicOrResonance: null,
      resources: null,
    };
    SIN = [];
    resultat.innerHTML = "";
    identity.innerHTML = "";
    firstnameInput.value = "";
    surnameInput.value = "";
    nameInput.value = "";
    metatypeTitle.innerHTML = "";
    metatypeForm.innerHTML = "";
    specialTitle.innerHTML = "";
    specialForm.innerHTML = "";
  }
});
