document.addEventListener("DOMContentLoaded", function () {
  setLang("fr");
  showPriorities();
  loadCookie();
  setLanguage("fr");
  handleSIN();
  handleAttributes();
});

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

let SIN = {};

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

function capitalized(str) {
  if (typeof str === "string" && str !== undefined) {
    var result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  } else {
    console.error(
      "La variable str (",
      str,
      ") n'est pas une chaîne de caractères."
    );
    return str;
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

    console.log(
      "firstname : ",
      firstname,
      " | surname : ",
      surname,
      " | name : ",
      name
    );

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
    SIN = {
      firstname: firstname,
      surname: surname,
      name: name,
    };
    characterData.SIN = SIN;
    console.log(JSON.stringify(SIN));
    saveInCookie();
  }
}

function useButton(cell) {
  if (cell.classList.contains("btn-outline-primary")) {
    cell.classList.add("btn-primary");
    cell.classList.remove("btn-outline-primary");
  } else {
    cell.classList.remove("btn-primary");
    cell.classList.add("btn-outline-primary");
  }
}

// Fonction pour obtenir les métatypes en fonction de la priorité
function getMetatypesForPriority(priority) {
  var priorities = {
    A: prio_A,
    B: prio_B,
    C: prio_C,
    D: prio_D,
    E: prio_E,
  };
  return priorities[priority] || [];
}

function generateButtons(titleElement, formElement, options, type, priority) {
  const title = document.getElementById(titleElement);
  const form = document.getElementById(formElement);

  if (priority === "E" && type === "special") {
    title.style.display = "none";
    form.innerHTML = "";
  } else {
    title.style.display = "block";

    const selectedButton = form.querySelector("button.selected");
    const sortedOptions = sort(options);

    form.innerHTML = "";

    sortedOptions.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = capitalized(option.terms);
      button.classList.add(`${type}-button`);
      button.classList.add("btn-outline-primary");
      button.classList.add("btn");
      button.setAttribute("id", option.data);

      if (button.getAttribute("type") === "submit") {
        button.setAttribute("type", "button");
      }

      form.appendChild(button);

      if (selectedButton && button.id === selectedButton.id) {
        button.classList.add("selected");
      }

      button.addEventListener("click", function (event) {
        event.preventDefault();
        handleButtonClick(button, form, type, priority);
        console.log(`Bouton de ${type} cliqué : ${button.textContent}`);
      });
    });
  }
}

// Fonction pour gérer la sélection des boutons de métatype
function handleButtonClick(button, form, type, priority) {
  const wasSelected = button.classList.contains("selected");
  const allButtons = form.querySelectorAll(`.${type}-button`);

  console.log(
    "handleButtonClick wasSelected : ",
    wasSelected,
    " button ",
    button,
    " type : ",
    type,
    " form : ",
    form,
    " priority : ",
    priority,
    " characterData.metatype : ",
    characterData.metatype
  );

 if (!wasSelected || characterData.metatype) {
    // Désélectionner tous les boutons

    allButtons.forEach((btn) => btn.classList.remove("selected"));
    // Sélectionner uniquement le bouton actuel
    button.classList.add("selected");
  }

  if (type === "special") {
    if (button.id === "technomancer") {
      characterData.isTechno = true;
      characterData.isMagic = false;
      characterData.magicChoice = "";
    } else {
      characterData.isMagic = true;
      characterData.isTechno = false;
      characterData.magicChoice = button.id;
    }
  }
  if (type === "metatype") {
    characterData.metatype = button.id;
    metatypeSelected = true;
    var check = checkAdjustementByMetatype[characterData.metatype];
    
    if (check && check.adjustement) {
      characterData.points.Adjustement.base = check.adjustement;
      console.log("handleButtonClick : checkAdjustementByMetatype[characterData.metatype]", checkAdjustementByMetatype[characterData.metatype], " check ", check, " adjustement ", check.adjustement);
    } else {
      console.log("Aucun ajustement trouvé pour le métatype sélectionné.");
    }

    showAttributesToSpend();
    
  }

  updateAttributesForSpecial(button.id, priority);
  updateAttributesForMetatype(button.id);
  handleSkills();
  updateValues("skills");
  updateValues("attributes");
  showResults();
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
  if (metatype === "dalakitnon")
    return ["Allergie (épices, Moyenne)", "Vision nocturne"];
  if (metatype === "dryad") return ["Éclat", "Symbiose", "Vision nocturne"];
  if (metatype === "nocturna")
    return [
      "Allergie (lumière du soleil, moyenne)",
      "Nocturne",
      "Ouïe fine",
      "Pilosité étrange (pelage coloré)",
      "Vision nocturne",
    ];
  if (metatype === "wakyambi")
    return ["Célérité", " Membres allongés", " Vision nocturne"];
  if (metatype === "xapiri_thepe")
    return [
      "Allergie (polluants, moyenne)",
      " Bioluminescence (spectre UV)",
      "Photométabolisme",
      "Vision nocturne",
    ];
  if (metatype === "nartaki")
    return ["Bras de Shiva (1 ou 2)", "Pigmentation extraordinaire"];
  if (metatype === "valkyrie") return ["Ailes fonctionnelles (Type 2)"];
  if (metatype === "duende")
    return [
      "Allergie (lumière du soleil, extrême)",
      "Pilosité étrange",
      "Vision nocturne",
      "Vision thermographique",
    ];
  if (metatype === "gnome")
    return [
      "Néoténie",
      "Résistance à la magie",
      "Résistance aux toxines",
      "Vision thermographique",
    ];
  if (metatype === "hanuman")
    return [
      ": Pattes de singe",
      "Pilosité étrange (Corps)",
      "Queue préhensile",
      "Résistance aux toxines",
    ];
  if (metatype === "koborokuru")
    return [
      "Célérité",
      "Pilosité étrange",
      "Résistance aux toxines",
      "Vision thermographique",
    ];
  if (metatype === "menehune")
    return [
      "Doigts palmés",
      "Résistance aux toxines",
      "Vision sous‑marine",
      "Vision thermographique",
    ];
  if (metatype === "hobgobelin")
    return ["Crocs", "Regard dément", "Vision nocturne"];
  if (metatype === "ogre") return ["Boyaux d’acier", "Vision nocturne"];
  if (metatype === "oni")
    return ["Pigmentation extraordinaire", "Vision nocturne"];
  if (metatype === "satyr") return ["Jambes de satyre", "Vision nocturne"];
  if (metatype === "cyclops")
    return ["Œil cyclopéen, Robuste 2, Vision thermographique"];
  if (metatype === "fomorian")
    return ["Résistance à la magie", "Robuste 2", "Vision thermographique"];
  if (metatype === "giant")
    return ["Écorce", "Robuste 2", "Vision thermographique"];
  if (metatype === "minotaur")
    return ["Cornes perforantes", "Robuste 2", "Vision thermographique"];
  if (metatype === "centaur")
    return [
      "Arme naturelle (Coup de pied : VD 3E, 7+FOR/—/—/—/—)",
      "Déplacement : 10/20/+4",
      "Manaception",
      "Recherche",
      "Vision nocturne",
      "Vision thermographique",
    ];
  if (metatype === "naga")
    return [
      "Animal à sang froid",
      "Arme naturelle (Morsure : VD 3P, 8+FOR/—/—/—/—)",
      "Armure 4",
      "Déplacement : 5/15/+1 (à terre)",
      "3/12/+2 (nage)",
      "Garde",
      "Nature duale",
      "Robuste 2",
      "Venin",
    ];
  if (metatype === "pixie")
    return [
      " Allergie (fer, moyenne)",
      "Déplacement : 2/5/+1 (marche), 10/40/+2 (vol)",
      "Disparition",
      "Dissimulation (soi)",
      "Perception astrale",
    ];
  if (metatype === "sasquatch")
    return [
      "Arme naturelle (Griffes : VD 3P, 7+FOR/—/—/—/—)",
      "Déplacement : 10/15/+1",
      "Imitation",
      "Nature duale",
    ];
  if (metatype === "merrow")
    return [
      "Biosonar",
      "Déplacement : 1/3/+0,5 (à terre), 10/25/+2 (nage)",
      "Nature duale",
      "Robuste 2",
      "Vision nocturne",
      "Vision sous‑marine",
    ];
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
                <p>${firstname || ""} ${'"' + surname + '"' || ""} ${
        name || ""
      }</p>
            `;
    } else {
      identity.innerHTML = "";
    }
  }
}

// Fonction pour mettre à jour les valeurs d'attributes en fonction du métatype
function updateAttributesForSpecial(special, priority) {
  var attributesData = characterData.attributes;
  if (priority === "A") {
    if (
      special === "fullMagician" ||
      special === "mysticAdept" ||
      special === "adept"
    ) {
      attributesData.magic.base = 4;
    } else if (special === "aspectedMagician") {
      attributesData.magic.base = 5;
    } else if (special === "technomancer") {
      attributesData.resonance.base = 4;
    }
  }
  if (priority === "B") {
    if (
      special === "fullMagician" ||
      special === "mysticAdept" ||
      special === "adept"
    ) {
      attributesData.magic.base = 3;
    } else if (special === "aspectedMagician") {
      attributesData.magic.base = 4;
    } else if (special === "technomancer") {
      attributesData.resonance.base = 3;
    }
  }
  if (priority === "C") {
    if (
      special === "fullMagician" ||
      special === "mysticAdept" ||
      special === "adept"
    ) {
      attributesData.magic.base = 2;
    } else if (special === "aspectedMagician") {
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
    } else if (special === "aspectedMagician") {
      attributesData.magic.base = 2;
    } else if (special === "technomancer") {
      attributesData.resonance.base = 1;
    }
  }
  if (special === "technomancer") {
    attributesData.magic.base = 0;
  } else {
    attributesData.resonance.base = 0;
  }
  if (priority === "E") {
    attributesData.magic.base = 0;
    attributesData.resonance.base = 0;
  }
  handleAttributes();
  updateValues("attributes");
  handleSkills();
  updateValues("skills");
}

function handleAttributes() {
  // Sélectionnez le tableau des attributes par son ID
  var attributeTable = document.getElementById("attributeTable");
  // Sélectionnez le corps du tableau
  var attributeTableBody = attributeTable.querySelector("tbody");

  // Générez le contenu HTML en utilisant le modèle et les données
  var attributeHTML = "";
  var attributesData = characterData.attributes;
  for (const attribute in attributesData) {
    // Si l'attribut doit être affiché, générez le HTML
    
  var adjustementPossible = "";
  if (attributesData[attribute].max > 6 || attribute === "edge" || attribute === "magic" || attribute === "resonance") {
    adjustementPossible = "attributesAdjustementPossible";
  } else {    
    adjustementPossible = "attributesAdjustementImpossible";
  }

    if (attributesData[attribute].base > 0) {
      attributeHTML += `
        <tr class="${adjustementPossible}">
            <th scope="row">${capitalized(terms[attribute])}</th>
            <td>
                <div id="${attribute}_base"><span>${
        attributesData[attribute].added
      }</span></div>
                <dupdateAttriv class="btn-group btn-group-toggle" data-toggle="buttons">
                    <button class="btn btn-outline-danger btn-xs" onclick="modifyValue('attributes','${attribute}', 'decrement')">-</button>
                    <button class="btn btn-outline-success btn-xs" onclick="modifyValue('attributes','${attribute}', 'increment')">+</button>
                </div>
            </td>
            <td id="${attribute}_actual"><span class="h6">${
        attributesData[attribute].value
      }</span></td>
            <td id="${attribute}_max"><span class="h6"></span></td>
        </tr>
      `;
    }
  }

  // Affichez le contenu généré dans le corps du tableau des attributes
  attributeTableBody.innerHTML = attributeHTML;
}

// Fonction pour afficher le namebre de points d'attributes à dépenser
function showAttributesToSpend() {
  characterData.points.Prio.base = getAttributesDepensePrio(
    IDselectedCells.attributes
  );
  
  var check = checkAdjustementByMetatype[characterData.metatype];
    
  if (check && check.adjustement) {
    characterData.points.Adjustement.base = check.adjustement;
    console.log("handleButtonClick : checkAdjustementByMetatype[characterData.metatype]", checkAdjustementByMetatype[characterData.metatype], " check ", check, " adjustement ", check.adjustement);
  } else {
    console.log("Aucun ajustement trouvé pour le métatype sélectionné.");
  }
  console.log("showAttributesToSpend : characterData.points.Prio.base ",characterData.points.Prio.base, " characterData.points.Adjustement.base ", characterData.points.Adjustement.base);

  document.getElementById("attributesSpent").innerHTML =
    ' <table class="table"><thead> <tr> <th scope="col"></th> <th scope="col">' +
    capitalized(terms.attributes) +
    '</th> <th scope="col">' +
    capitalized(terms.adjustement) +
    '</th></tr> </thead><tbody> <tr> <th scope="row">' +
    terms.pointsToSpend +
    '</th> <td id="attributesPrio_max" class="selectable selected" onclick="selectAttributeType(this, \'Prio\')"><span id="attributesPrioCount">' +
    characterData.points.Prio.base +
    '</span></td> <td id="attributesAdjustement_max" class="selectable" onclick="selectAttributeType(this, \'Adjustement\')"><span id="attributesAdjustementCount">' +
    characterData.points.Adjustement.base +
    "</span></td> </tr></tbody></table>";
}

// Fonction pour sélectionner le type d'attribute
function selectAttributeType(cell, type) {
  const classAttributePrio = document.getElementById(`attributesPrio_max`);
  const classAttributeAdjustement = document.getElementById(
    `attributesAdjustement_max`
  );
  const possibleElements = document.querySelectorAll('.attributesAdjustementPossible');
  const impossibleElements = document.querySelectorAll('.attributesAdjustementImpossible');

  if (type === "Prio") {
    classAttributePrio.classList.add("selected");    
    possibleElements.forEach(element => {
      if (element.classList.contains('table-success')) {
        element.classList.remove('table-success');
      } else {
        element.classList.add('table-success');
      }
    });
    impossibleElements.forEach(element => {
      if (element.classList.contains('table-danger')) {
        element.classList.remove('table-danger');
      } else {
        element.classList.add('table-danger');
      }
    });
    if (classAttributeAdjustement.classList.contains("selected"))
      classAttributeAdjustement.classList.remove("selected");
  }
  if (type === "Adjustement") {
    classAttributeAdjustement.classList.add("selected");
    possibleElements.forEach(element => {
      if (element.classList.contains('table-success')) {
        element.classList.remove('table-success');
      } else {
        element.classList.add('table-success');
      }
    });
    impossibleElements.forEach(element => {
      if (element.classList.contains('table-danger')) {
        element.classList.remove('table-danger');
      } else {
        element.classList.add('table-danger');
      }
    });
    if (classAttributePrio.classList.contains("selected"))
      classAttributePrio.classList.remove("selected");
  }
  characterData.selectAttributeType = type;
}

function getAttributesDepensePrio(priority) {
  if (priority === "attributes_A") return 24;
  else if (priority === "attributes_B") return 16;
  else if (priority === "attributes_C") return 12;
  else if (priority === "attributes_D") return 8;
  else if (priority === "attributes_E") return 2;
}

function getSkillsSpent(priority) {
  if (priority === "skills_A") return 32;
  else if (priority === "skills_B") return 24;
  else if (priority === "skills_C") return 20;
  else if (priority === "skills_D") return 16;
  else if (priority === "skills_E") return 10;
}

let skillsSort = [];

function sort(array) {
  if (!Array.isArray(array)) {
    console.log("il faut passer l'array ", array, "en Object.keys()");
  }
  arraySorted = [];
  for (const key of array) {
    //console.log("arraySorted : data : ", key, "/ ", terms[key]);
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
  var attributesData = characterData.attributes;
  var skillsData = characterData.skills;

  var skillsSort = sort(Object.keys(skillsData));

  // Obtenez le namebre d'attributes dépensés en fonction du type (Prio ou Adjustement)
  characterData.points.skills.base = getSkillsSpent(IDselectedCells.skills);

  var skillsSpentTable = document.getElementById("skillsSpent"); // Mettre à jour la variable globale

  skillsSpentTable.innerHTML =
    '<table class="table"><tbody> <tr> <th scope="row">' +
    terms.pointsToSpend +
    '</th> <td id="skills_max"> <span id="skillsCount">' +
    characterData.points.skills.base +
    "</span></td></tr></tbody></table>";

  // Sélectionnez le tableau des attributes par son ID
  var skillTable = document.getElementById("skillTable");
  // Sélectionnez le corps du tableau
  var skillTableBody = skillTable.querySelector("tbody");

  // Générez le contenu HTML en utilisant le modèle et les données
  var skillsHTML = "";

  for (const skill of skillsSort) {

    if (
      (skillsData[skill.data].linkedAttribute === "magic" &&
        characterData.isMagic === false) ||
      (skillsData[skill.data].linkedAttribute === "resonance" &&
        characterData.isTechno === false)
    ) {
    } else {
      // Si l'attribut doit être affiché, générez le HTML
      var capitalizedId = capitalized(skill.terms);
      var rdd =
        skillsData[skill.data].value +
        attributesData[skillsData[skill.data].linkedAttribute].value;
      skillsHTML += `
      <tr>
          <th scope="row">${capitalizedId}</th>
          <td id="${skill.data}_max">
              <div id="${skill.data}_actual"><span>${
        skillsData[skill.data].value
      }</span></div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <button class="btn btn-outline-danger btn-xs" onclick="modifyValue('skills','${
                    skill.data
                  }', 'decrement')">-</button>
                  <button class="btn btn-outline-success btn-xs" onclick="modifyValue('skills','${
                    skill.data
                  }', 'increment')">+</button>
              </div>
          </td>
          <td id="${
            skill.data
          }_rdd"><div><span class="h6">${rdd}</span></div><div><span class="h8">+ ${capitalized(
        terms[skillsData[skill.data].linkedAttribute]
      )}</span></div></td>
          <td id="${skill.data}_specialization"><span class="h6"></span></td>
      </tr>
    `;
    }
  }

  // Affichez le contenu généré dans le corps du tableau des attributes
  skillTableBody.innerHTML = skillsHTML;
}

function modifyValue(type, element, modificator) {

  var selectCount = type;

  if (type === "attributes") {
    var selectCount = characterData.selectAttributeType;
  }
  var numberSpent = characterData.points[selectCount].spent;

  var added = characterData[type][element].added;
  if (modificator === "increment") {
    characterData[type][element].added = added + 1;
    characterData.points[selectCount].spent = numberSpent + 1;
  } else {
    characterData[type][element].added = Math.max(0, added - 1);
    characterData.points[selectCount].spent = Math.max(0, numberSpent - 1);
  }
  updateValues(type);
  updatePoints(type, element, modificator);
}

function updateValues(type) {
  var sorted = sort(Object.keys(characterData[type]));

  for (const s of sorted) {
    if (
      (characterData[type][s.data].linkedAttribute === "magic" &&
        characterData.isMagic === false) ||
      (characterData[type][s.data].linkedAttribute === "resonance" &&
        characterData.isTechno === false) ||
      (type === "attributes" && characterData[type][s.data].base < 1)
    ) {
    } else {
      characterData[type][s.data].value =
        characterData[type][s.data].base + characterData[type][s.data].added;
      const cell = document.getElementById(s.data + "_actual");
      const span = cell.querySelector("span");
      span.textContent = characterData[type][s.data].value;
      if (type === "attributes") {
        document
          .getElementById(s.data + "_base")
          .querySelector("span").textContent =
          characterData[type][s.data].added;
        document
          .getElementById(s.data + "_max")
          .querySelector("span").textContent = characterData[type][s.data].max;
        if (selectedCells["skills"]) {
          handleSkills();
          updateValues("skills");
        }
      }
      if (type === "skills") {
        var rdd =
          characterData[type][s.data].value +
          characterData.attributes[characterData[type][s.data].linkedAttribute]
            .value;
        if (characterData[type][s.data].value === 0) {
          rdd = Math.max(
            0,
            characterData.attributes[
              characterData[type][s.data].linkedAttribute
            ].value - 2
          );
        }
        const cellRdd = document
          .getElementById(s.data + "_rdd")
          .querySelector("span");
        cellRdd.textContent = rdd;
      }
    }
  }
}

function updatePoints(type, element, modificator) {

  var selectCount = type;
  var namePoint = type;

  if (type === "attributes") {
    var selectCount = characterData.selectAttributeType;
    var namePoint = type + selectCount;
  }

  var numberBase = characterData.points[selectCount].base;
  var numberSpent = characterData.points[selectCount].spent;

  document.getElementById(`${namePoint}Count`).textContent = Math.max(
    0,
    numberBase - numberSpent
  );

  // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
  if (type === "skills") {
    if (characterData.skills[element].value > 7) {
      document.getElementById(`${element}_max`).classList.add("maximum");
    } else {
      document.getElementById(`${element}_max`).classList.remove("maximum");
    }
  }

  if (type === "attributes") {
    // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
    const maxAttribute = document.getElementById(`${element}_max`);
    if (
      characterData.attributes[element].value >
      characterData.attributes[element].max
    ) {
      maxAttribute.classList.add("maximum");
    } else {
      maxAttribute.classList.remove("maximum");
    }
  }

  // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
  if (numberBase - numberSpent < 0) {
    document.getElementById(`${namePoint}_max`).classList.add("maximum");
  } else {
    document.getElementById(`${namePoint}_max`).classList.remove("maximum");
  }
}

// Fonction pour afficher les résultats
function showResults() {
  const btn = document.getElementById("btn");
  const collapses = document.getElementById("collapses");
  btn.innerHTML =
    '<input type="checkbox" class="btn-check" id="showPrioritiesBtn" autocomplete="off" data-bs-toggle="collapse" data-bs-target="#showPriorities" aria-expanded="false" aria-controls="showPriorities" /> <label class="btn btn-outline-success" for="showPrioritiesBtn" id="showPrioritiesTitle" >' +
    capitalized(terms.priorityTable) +
    "</label>";

  collapses.innerHTML =
    '<div class="collapse" id="showPriorities"> <div class="card card-body"> <div id="showPrioritiesDiv"></div></div> </div>';

  for (const categorie in prioritiesSelected) {
    const priority = prioritiesSelected[categorie];
    if (priority) {
      document.getElementById(
        "showPrioritiesDiv"
      ).innerHTML += `<p>${capitalized(terms[categorie])}${
        terms.colons
      } ${priority}</p>`;
    }
  }

  const metatypeForm = document.getElementById("metatypeButtons");
  const selectedMeta =
    metatypeForm.querySelector("button.selected") || selectedMetatype;
  if (selectedMeta) {
    const selectedMetatypeValue = selectedMeta.textContent || selectedMetatype;
    btn.innerHTML +=
      '<input type="checkbox" class="btn-check" id="showMetatypeBtn" autocomplete="off" data-bs-toggle="collapse" data-bs-target="#showMetatype" aria-expanded="false" aria-controls="showMetatype" /> <label class="btn btn-outline-success" for="showMetatypeBtn" id="showMetatypeTitle" >' +
      capitalized(terms.metatypes) +
      capitalized(terms.colons) +
      " " +
      selectedMetatypeValue +
      "</label>";

    collapses.innerHTML +=
      '<div class="collapse" id="showMetatype"><div class="card card-body"> <div id="showMetatypeDiv"></div></div></div>';

    const metatypeQualities = handleMetatypeQualities(selectedMeta.id);
    if (metatypeQualities.length > 0)
      document.getElementById("showMetatypeDiv").innerHTML +=
        "<h5>Traits innés :</h5>" + metatypeQualities.join(", ");
  }

  const specialForm = document.getElementById("specialButtons");
  const selectedSpe =
    specialForm.querySelector("button.selected") || selectedSpecial;
  if (selectedSpe) {
    const selectedSpecialValue = selectedSpe.textContent || selectedSpecial;
    btn.innerHTML +=
      '<input type="checkbox" class="btn-check" id="showSpecialBtn" autocomplete="off" data-bs-toggle="collapse" data-bs-target="#showSpecial" aria-expanded="false" aria-controls="showSpecial" /> <label class="btn btn-outline-success" for="showSpecialBtn" id="showSpecialTitle" >' +
      capitalized(terms.magicOrResonance) +
      capitalized(terms.colons) +
      " " +
      selectedSpecialValue +
      "</label>";
  }

  // Affichez la colonne des resources avec séparation des unités et le symbole ¥
  const resourcesValue = prioritiesSelected["resources"];
  if (resourcesValue) {
    const resources = parseInt(resourcesValue.split(" ")[1]); // Extrait la valeur numérique
    if (!isNaN(resources)) {
      const formattedRessources = resources.toLocaleString("fr-FR", {
        style: "currency",
        currency: "JPY",
      });
      btn.innerHTML +=
        '<input type="checkbox" class="btn-check" id="showResourcesBtn" autocomplete="off" data-bs-toggle="collapse" data-bs-target="#showResources" aria-expanded="false" aria-controls="showResources" /> <label class="btn btn-outline-success" for="showResourcesBtn" id="showResourcesTitle" >' +
        capitalized(terms.resources) +
        capitalized(terms.colons) +
        " " +
        formattedRessources +
        "</label>";
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
    characterData,
  });

  //console.log("dataToSave : " + dataToSave);

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
      characterData = loadedData.characterData;
      generateButtons(
        "metatypeTitle",
        "metatypeButtons",
        getMetatypesForPriority(actualPriority),
        "metatype",
        actualPriority
      );
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
