document.addEventListener("DOMContentLoaded", function () {
  setLang("fr");
  showPriorities();
  loadData();
  setLanguage("fr");
  handleSIN();
  handleAttributes();
  handleSkills();
  updateKnowledgePoints() ;
  handleDropdownModal("knowledges");
  handleDropdownModal("languages");
  handleDropdownModal("qualities");
  handleDropdownModal("contacts");
  updateContactDisplay();
});

$(document).ready(function() {

  $("#collapseQualities").on("dragover", function(event) {
    event.preventDefault();
    console.log("dragover collapseQualities");
  });
  $("#collapseQualities").on("dragover", function (event) {
    event.preventDefault();
    $(this).addClass("toDrop");  // Change la couleur à jaune
    console.log("dragover event triggered");  // Ajouté pour le débogage
  });
  
  $("#collapseQualities").on("dragleave", function (event) {
    $(this).css("background-color", "");  // Réinitialise la couleur
    console.log("dragleave event triggered");  // Ajouté pour le débogage
  });

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

document.addEventListener("DOMContentLoaded", function() {
  // Sélectionnez tous les input de type checkbox
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Ajoutez un gestionnaire d'événements click à chaque checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
      // Si la checkbox est cochée pour la première fois
      if (this.checked) {
        // Sélectionnez le label qui suit la checkbox
        const label = this.nextElementSibling;
        if (label) {
          // Sélectionnez le span à l'intérieur du label
          const i = label.querySelector('i');
          // Masquez le span
          if (i) {
            i.style.display = 'none';
          }
        }
      }
    });
  });
});

function handleSIN() {
  // Écoutez les événements "input" sur les champs de texte
  console.log("handleSIN initialize");
  const inputs = {
    firstname: document.getElementById("firstname"),
    surname: document.getElementById("surname"),
    name: document.getElementById("name"),
  };
  const identity = document.getElementById("identity");

  Object.keys(inputs).forEach(key => {
    inputs[key].placeholder = capitalized(terms[key]);
    inputs[key].addEventListener("input", updateSINInfo);
    // Si characterData.SIN existe et contient une valeur pour cette clé, utilisez-la
    if (characterData.SIN && characterData.SIN[key]) {
      inputs[key].value = characterData.SIN[key];
    }
  });

  // Affichez les informations dès le début si elles existent
  if (characterData.SIN) {
    updateSINInfo();
  }
}

  function updateSINInfo() {
    console.log("updateSINInfo initialize");

    const inputs = {
      firstname: document.getElementById("firstname"),
      surname: document.getElementById("surname"),
      name: document.getElementById("name"),
    };
    // Utilisez les valeurs des inputs s'ils existent, sinon utilisez characterData.SIN
    const firstname = inputs.firstname.value || characterData.SIN?.firstname;
    const surname = inputs.surname.value || characterData.SIN?.surname;
    const name = inputs.name.value || characterData.SIN?.name;
    const metatype = capitalized(terms[characterData.metatype]);
    const special = capitalized(terms[characterData.special]);

    let identityParts = [];
    let identity = [];

    if (firstname) {
      identityParts.push(firstname);
      identity.push(firstname);
    }

    if (surname) {
      identityParts.push(" " + '"' + surname + '"');
      identity.push(" " + '"' + surname + '"');
    }

    if (name) {
      identityParts.push(" " + name);
      identity.push(" " + name);
    }

    if (metatype && identityParts.length > 0) {
      identityParts.push(", " + metatype);
    } else if (metatype) {
      identityParts.push(metatype);
    }

    if (special && identityParts.length > 0) {
      identityParts.push(", " + special);
    } else if (special) {
      identityParts.push(special);
    }

    let identitySIN = identityParts.join("");
    let identity4Foundry = identity.join("");

    if (identitySIN) {
      identity.innerHTML = `
        <h5>${terms.identity}${terms.colons}</h5>
        <p>${identitySIN}</p>
      `;
    } else {
      identity.innerHTML = "";
    }

    // Mettez à jour characterData.SIN directement
    characterData.SIN = {
      firstname: firstname,
      surname: surname,
      name: name,
      identity: identity4Foundry,
    };
    console.log(JSON.stringify(characterData.SIN));
    saveData();
  }

function useButton(cell) {
  console.log("useButton initialize: ", cell.classList);
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
    const sortedOptions = sortTranslated(options);

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

  if (!wasSelected || characterData.metatype) {
    // Désélectionner tous les boutons

    allButtons.forEach((btn) => btn.classList.remove("selected"));
    // Sélectionner uniquement le bouton actuel
    button.classList.add("selected");
  }

  if (type === "special") {
    characterData.special = button.id;
    if (button.id === "technomancer") {
      characterData.isTechno = true;
      characterData.isMagic = false;
    } else {
      characterData.isMagic = true;
      characterData.isTechno = false;
    }
  }

  if (type === "metatype") {
    characterData.metatype = button.id;
    metatypeSelected = true;
    var check = checkAdjustmentByMetatype[characterData.metatype];

    if (check && check.adjustment) {
      characterData.points.Adjustment.base = check.adjustment;
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
  saveData();
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
  
  saveData();
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

    var adjustmentPossible = "";
    if (
      attributesData[attribute].max > 6 ||
      attribute === "edge" ||
      attribute === "magic" ||
      attribute === "resonance"
    ) {
      adjustmentPossible = "attributesAdjustmentPossible";
    } else {
      adjustmentPossible = "attributesAdjustmentImpossible";
    }

    if (attributesData[attribute].base > 0) {
      attributeHTML += `
        <tr class="${adjustmentPossible}">
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
  
  saveData();
}

// Fonction pour afficher le namebre de points d'attributes à dépenser
function showAttributesToSpend() {
  characterData.points.Prio.base = getAttributesDepensePrio(
    IDselectedCells.attributes
  );

  var check = checkAdjustmentByMetatype[characterData.metatype];

  if (check && check.adjustment) {
    characterData.points.Adjustment.base = check.adjustment;
  } else {
    console.log("Aucun ajustement trouvé pour le métatype sélectionné.");
  }

  document.getElementById("attributesSpent").innerHTML =
    ' <table class="table table-sm table-responsive-sm table-hover table-striped"><thead class="table-light"> <tr> <th scope="col"></th> <th scope="col">' +
    capitalized(terms.attributes) +
    '</th> <th scope="col">' +
    capitalized(terms.adjustment) +
    '</th></tr> </thead><tbody class="table-group-divider"> <tr> <th scope="row">' +
    capitalized(terms.pointsToSpend) +
    '</th> <td id="attributesPrio_max" class="selectable selected" onclick="selectAttributeType(this, \'Prio\')"><span id="attributesPrioCount" class="h6 count">' +
    characterData.points.Prio.base +
    '</span></td> <td id="attributesAdjustment_max" class="selectable" onclick="selectAttributeType(this, \'Adjustment\')"><span id="attributesAdjustmentCount" class="h6 count">' +
    characterData.points.Adjustment.base +
    "</span></td> </tr></tbody></table>";
}

function selectAttributeType(cell, type) {
  const classAttributePrio = document.getElementById(`attributesPrio_max`);
  const classAttributeAdjustment = document.getElementById(`attributesAdjustment_max`);
  const possibleElements = document.querySelectorAll(".attributesAdjustmentPossible");
  const impossibleElements = document.querySelectorAll(".attributesAdjustmentImpossible");

  if (type === "Prio") {
    classAttributePrio.classList.add("selected");
    possibleElements.forEach((element) => {
      element.style.display = "table-row"; // Afficher les éléments Possible
    });
    impossibleElements.forEach((element) => {
      element.style.display = "table-row"; // Cacher les éléments Impossible
    });
    if (classAttributeAdjustment.classList.contains("selected"))
      classAttributeAdjustment.classList.remove("selected");
  }
  if (type === "Adjustment") {
    classAttributeAdjustment.classList.add("selected");
    possibleElements.forEach((element) => {
      element.style.display = "table-row"; // Afficher les éléments Possible
    });
    impossibleElements.forEach((element) => {
      element.style.display = "none"; // Cacher les éléments Impossible
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

function sortTranslated(array) {
  if (!Array.isArray(array)) {
    console.log("il faut passer l'array ", array, "en Object.keys()");
  }
  arraySorted = [];
  for (const key of array) {
    if (terms[key] === undefined) {
      console.log("arraySorted key undefined : data : ", key, "/ ", terms[key]);
      arraySorted.push({
        data: key,
        terms: key,
      });
    } else {      
    //console.log("arraySorted : data : ", key, "/ ", terms[key]);
    arraySorted.push({
      data: key,
      terms: terms[key],
    });
    }
  }
  // Triez le tableau en fonction des noms traduits
  arraySorted.sort((a, b) => a.terms.localeCompare(b.terms));
  return arraySorted;
}


function sortKeys(array) {
  if (!Array.isArray(array)) {
    console.log("il faut passer l'array ", array, "en Object.keys()");
  }
  // Triez le tableau en fonction des noms traduits
  array.sort((a, b) => a.key.localeCompare(b.key));
  return array;
}

function handleSkills() {
  // Récupérer les données des attributs et des compétences du personnage
  var attributesData = characterData.attributes;
  var skillsData = characterData.skills;

  // Trier les compétences
  var skillsSort = sortTranslated(Object.keys(skillsData));

  // Obtenez le nombre d'attributs dépensés en fonction du type (Prio ou Adjustment)
  characterData.points.skills.base = getSkillsSpent(IDselectedCells.skills);

  // Sélectionner la table des compétences
  var skillsSpentTable = $("#skillsSpent"); // Utilisez jQuery ici

  // Mettre à jour le tableau des compétences dépensées
  skillsSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped"><tbody> <tr> <th scope="row">' +
    capitalized(terms.pointsToSpend) +
      '</th> <td id="skills_max"> <span id="skillsCount" class="h6 count">' +
      characterData.points.skills.base +
      "</span></td></tr></tbody></table>"
  );

  // Sélectionner le tableau des compétences par son ID
  var skillTable = $("#skillTable"); // Utilisez jQuery ici

  // Sélectionner le corps du tableau des compétences
  var skillTableBody = skillTable.find("tbody"); // Utilisez jQuery ici

  // Générer le contenu HTML en utilisant le modèle et les données
  var skillsHTML = "";

  for (const skill of skillsSort) {
    // Vérifier si la compétence doit être affichée en fonction des attributs du personnage
    if (
      (skillsData[skill.data].linkedAttribute === "magic" &&
        characterData.isMagic === false) ||
      (skillsData[skill.data].linkedAttribute === "resonance" &&
        characterData.isTechno === false)
    ) {
      continue; // Ignorer cette itération
    }

    // Si l'attribut doit être affiché, générer le HTML
    const proposedSpecializations =
      characterData.skills[skill.data].proposedSpecializations;
    const existingSpecializations =
      characterData.skills[skill.data].specializations;

    // Construire le tableau d'options
    var addOptions = [];

    proposedSpecializationsSorted = sortTranslated(proposedSpecializations);

    existingSpecializationsSorted = sortTranslated(existingSpecializations);

    const availableSpecializationsSorted = proposedSpecializationsSorted.filter(
      specialization => !existingSpecializations.some(existingSpecialization => existingSpecialization === specialization.data)
    );

    availableSpecializationsSorted.forEach((specialization) => {
      addOptions.push(
        `<li><a class="dropdown-item table-success" href="#" onclick="addSpecializationClick('${skill.data}', '${specialization.data}')">+ ${capitalized(specialization.terms)}</a></li>`
      );
    });

    // Ajouter l'option "Autre"
    addOptions.push(
      `<li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="#"  data-bs-toggle="modal" data-bs-target="#new${
        skill.data
      }Modal"">${capitalized(terms.newe)}</a></li>`
    );

    if (existingSpecializations) {
      addOptions.push(`<li><hr class="dropdown-divider"></li>`);
      existingSpecializations.forEach((specialization) => {
        addOptions.push(
          `<li><a class="dropdown-item table-danger" href="#" onclick="removeSpecializationClick('${skill.data}', '${specialization}')">- ${capitalized(terms[specialization])}</a></li>`
        );
      });
    }

    // Ajouter les options au menu déroulant
    DropdownOptions = addOptions.join(" ");
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
                  <button class="btn btn-outline-danger btn-xs" onclick="modifyValue('skills', '${
                    skill.data
                  }', 'decrement')">-</button>
                  <button class="btn btn-outline-success btn-xs" onclick="modifyValue('skills', '${
                    skill.data
                  }', 'increment')">+</button>
              </div>
          </td>
          <td id="${skill.data}_rdd">
            <div><span class="h6 rddNumber">${rdd}</span></div>
            <div><span class="h8">+ ${capitalized(
              terms[skillsData[skill.data].linkedAttribute]
            )}</span></div>
          </td>
          <td id="${skill.data}_specialization">
          <div><span class="h8">${existingSpecializations.map(specialization => capitalized(terms[specialization])).join(", ")}</span>
            </div>
            <div class="dropdown">
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-xs dropdown-toggle" data-bs-toggle="dropdown" data-bs-placement="top" type="button">+</button>
                <ul class="dropdown-menu" id="${skill.data}Dropdown-menu">
                  ${DropdownOptions}
                </ul>
              </div>
              <!-- Modal -->
<div class="modal fade" id="new${
      skill.data
    }Modal" tabindex="-1" aria-labelledby="${
      skill.data
    }ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${skill.data}ModalLabel">
        ${capitalized(terms[skill.data])}</h1>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
  <form id="${skill.data}AddSpecializationForm">
  <div class="form-group row align-items-center mb-2">
      <label for="${skill.data}SpecializationInput" class="col-sm-3 col-form-label">${capitalized(terms.newe)} ${terms.specialization}${terms.colons}</label>
      <div class="col-sm-9">
      <input type="text" class="form-control" id="${skill.data}SpecializationInput" required>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">${capitalized(terms.addTo)}</button>
  </form>
</div>
      </div>
    </div>
  </div>
</div>
            </div>
          </td>
      </tr>
    `;

    // Ajoutez ceci dans votre fonction handleSkills ou où vous créez vos événements
    $(document).on("submit", "#" + skill.data + "AddSpecializationForm", function (e) {
      e.preventDefault();

      // Récupérez la valeur saisie par l'utilisateur
      const newSpecialization = $("#" + skill.data + "SpecializationInput").val();

      // Assurez-vous que la spécialisation n'est pas vide
      if (newSpecialization.trim() !== "") {
        // Ajoutez la nouvelle spécialisation à characterData.skills[skillData].specializations
        characterData.skills[skill.data].specializations.push(
          newSpecialization
        );
        characterData.points.skills.spent = characterData.points.skills.spent + 1 ;
        updateSpecializationDisplay(skill.data);

        // Mettez à jour l'affichage avec la nouvelle spécialisation
        handleSkills();
      }

      // Effacez le champ de saisie
      $("#specializationInput").val("");
    });
  }

  // Afficher le contenu généré dans le corps du tableau des compétences
  skillTableBody.html(skillsHTML);  
  saveData();
}

// Fonction pour gérer le clic sur une spécialisation
function addSpecializationClick(skillData, specialization) {
  if (characterData.skills[skillData].specializations.length >= 2) {
    $('#skillsTooMuchSpecializations').text(`${capitalized(terms[skillData])}${terms.colons} ${terms.tooMuchSpecializations}`);
    return;
  }
  characterData.skills[skillData].specializations.push(specialization);
  characterData.points.skills.spent = characterData.points.skills.spent + 1 ;
  handleSkills();
  updateSpecializationDisplay(skillData);
}

// Fonction pour gérer le clic sur une spécialisation
function removeSpecializationClick(skillData, specialization) {
    // Supprimez la spécialisation du tableau
    const index = characterData.skills[skillData].specializations.indexOf(specialization);
    if (index !== -1) {
      characterData.skills[skillData].specializations.splice(index, 1);
    }
  characterData.points.skills.spent = characterData.points.skills.spent - 1 ;
  handleSkills();
  updateSpecializationDisplay(skillData);  
  saveData();
}

function updateSpecializationDisplay(skillData) {
  const specializationSpan = $(`#${skillData}_specialization .h8`);
  
  const specializations = characterData.skills[skillData].specializations.map(term => capitalized(terms[term])).join(", ");
  
  console.log(skillData, " : ", specializations);
  
  specializationSpan.text(specializations);
  
  updatePoints("skills", skillData);
}

function updateKnowledgePoints() {
  characterData.points.knowledges.base = characterData.attributes.logic.value;

  var knowledgeSpentTable = $(`#knowledgeSpent`); // Utilisez jQuery ici

  var knowledgeCount = Math.max(0, characterData.points.knowledges.base - characterData.points.knowledges.spent);
  
  console.log("updateKnowledgePoints : knowledgeCount ", knowledgeCount, " characterData.points.knowledges.base : ", characterData.points.knowledges.base, " characterData.points.knowledges.base.spent : ", characterData.points.knowledges.spent, " max ", Math.max(0, characterData.points.knowledges.base - characterData.points.knowledges.spent))

  knowledgeSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped"><tbody> <tr> <th scope="row">' +
    capitalized(terms.pointsToSpend) +
      `</th> <td id="knowledge_max"> <span id="knowledgeCount" class="h6 count">${knowledgeCount}</span></td></tr></tbody></table>`
  );
}

function handleDropdownModal(type) {
  console.log(`Initiate handle${capitalized(type)}()`);

  var items = characterData[type];

  var newType = terms.new;
  

  if (type === "knowledges" || type === "specializations" || type === "languages") {
    newType = terms.newe;
  };
  
  console.log("items : ", items)

  // Construire le tableau d'options
  var addOptions = [];

  if (type === "waiting" && catalogData.qualities) {
    var catalogQualitiesSorted = [] ;
    catalogQualitiesSorted = sortKeys(catalogData.qualities);
    catalogQualitiesSorted.forEach((quality) => {
      addOptions.push(
        `<li><a class="dropdown-item table-success" href="#" onclick="addQualitiesClick('${quality.key}', '${quality.description}', '${quality.type}', '${parseInt(quality.karmaCost)}')">+ ${quality.key}</a></li>`
      );
    });
  }

  // Ajouter l'option "Autre"
  addOptions.push(
    `<li><a class="dropdown-item" href="#"  data-bs-toggle="modal" data-bs-target="#new${capitalized(type)}Modal">${capitalized(newType)}</a></li>`
  );

  // Ajouter l'option "Catalogue"
  if (type === "waiting" && catalogData.qualities) {
    addOptions.push(
      `<li><a class="dropdown-item" href="#" onclick="openCatalogModal()">Catalogue</a></li>`
    );
  }

  if (items) {
    addOptions.push(`<li><hr class="dropdown-divider"></li>`);
    items.forEach((item) => {
      addOptions.push(
        `<li><a class="dropdown-item table-danger" href="#" onclick="removeModalClick('${type}','${item.key}','${item.key}')">- ${capitalized(item.key)}</a></li>`
      );
    });
  }

  var specificType = "";

  if (type === "languages") {
    specificType = `
    <div class="form-group row align-items-center mb-2 mt-3">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel0" autocomplete="off" value="0" checked>
        <label class="btn btn-outline-primary" for="chooseLevel0">${capitalized(terms.knowledge)}</label>

        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel1" autocomplete="off" value="1">
        <label class="btn btn-outline-primary" for="chooseLevel1">${capitalized(terms.specialist)}</label>

        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel2" autocomplete="off" value="2">
        <label class="btn btn-outline-primary" for="chooseLevel2">${capitalized(terms.expert)}</label>

        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel3" autocomplete="off" value="3">
        <label class="btn btn-outline-primary" for="chooseLevel3">${capitalized(terms.native)}</label>
      </div>
    </div>`
  }

  if (type === "qualities") {
    specificType = `
    <div class="form-group row align-items-center mb-2">
        <label for="qualityDescription" class="col-sm-3 col-form-label" style="white-space: nowrap;">${capitalized(terms.description)}${terms.colons}</label>
        <div class="col-sm-9">
        <textarea class="form-control flex-grow-1" id="qualityDescription" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group row align-items-center mb-2">
        <label for="qualityType" class="col-sm-3 col-form-label">${capitalized(terms.type)}${terms.colons}</label>
        <div class="col-sm-9 d-flex align-items-center">
          <input type="radio" class="btn-check" name="chooseQualityType" id="chooseQualityTypePositive" value="positive" checked>
          <label class="btn btn-outline-primary" for="chooseQualityTypePositive">${capitalized(terms.positive)}</label>

          <input type="radio" class="btn-check" name="chooseQualityType" id="chooseQualityTypeNegative" value="negative">
          <label class="btn btn-outline-primary" for="chooseQualityTypeNegative">${capitalized(terms.negative)}</label>
        </div>
      </div>
      <div class="form-group row align-items-center mb-2">
        <label for="qualityKarmaCost" class="col-sm-3 col-form-label" style="white-space: nowrap;">${capitalized(terms.karmaCost)}${terms.colons}</label>
        <div class="col-sm-3">
        <input type="number" class="form-control" id="qualityKarmaCost" aria-label="Karma cost for the quality" style="width: 3em;">
        </div>
      </div>`
  }

  if (type === "contacts") {
    specificType = `
    <div class="form-group row align-items-center mb-2">
        <label for="contactType" class="col-sm-3 col-form-label">${capitalized(terms.type)}${terms.colons}</label>
        <div class="col-sm-9">
          <textarea class="form-control" id="contactType" rows="1"></textarea>
        </div>
    </div>
    <div class="form-group row align-items-center mb-4">
        <label for="contactDescription" class="col-sm-3 col-form-label">${capitalized(terms.description)}${terms.colons}</label>
        <div class="col-sm-9">
          <textarea class="form-control" id="contactDescription" rows="3"></textarea>
        </div>
    </div>
    <div class="form-group row align-items-center mb-2">  
        <label for="contactConnection" class="col-sm-3 col-form-label">${capitalized(terms.connection)}${terms.colons}</label>
        <div class="col-sm-3">
          <input type="number" class="form-control" id="contactConnection" aria-label="Connections" value=0>
        </div>
        <label for="contactLoyalty" class="col-sm-3 col-form-label">${capitalized(terms.loyalty)}${terms.colons}</label>
        <div class="col-sm-3">
          <input type="number" class="form-control" id="contactLoyalty" aria-label="Loyalties" value=0>
        </div>
    </div>`
  }

  // Ajouter les options au menu déroulant
  var DropdownOptions = addOptions.join(" ");
  
  // Mettre à jour le contenu HTML avec les nouveaux termes
  document.getElementById(`${type}Header`).innerHTML = `
    ${capitalized(terms[type])}<div class="dropdown">
      <div class="btn-group">
        <button class="btn btn-outline-primary btn-xs dropdown-toggle" data-bs-toggle="dropdown" placement="right" type="button">+</button>
        <ul class="dropdown-menu" id="${type}Dropdown-menu">
          ${DropdownOptions}
        </ul>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="new${capitalized(type)}Modal" tabindex="-1" aria-labelledby="${type}ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="${type}ModalLabel">${capitalized(newType)} ${terms[type].slice(0, -1)}</h1>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>
                <form id="add${capitalized(type)}Form">
                  
    <div class="form-group row align-items-center mb-2">
                    <label for="${type}Input" class="col-sm-3 col-form-label">${capitalized(terms.name)}${terms.colons}</label>
                    <div class="col-sm-9">
                    <input type="text" class="form-control" id="${type}Input" required>
                    </div>
                  </div>
                  ${specificType}
                  <br>
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">${capitalized(terms.addTo)}</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>`;
  

  // Ajoutez ceci dans votre fonction handleSkills ou où vous créez vos événements
  $(document).on("submit", `#add${capitalized(type)}Form`, function (e) {
    e.preventDefault();

    var newItem = {};

    if (type === "qualities") {
    var qualityDescription = $("#qualityDescription").val();

    var qualityType = $("input[name='chooseQualityType']:checked").val();

    var qualityKarmaCost = parseInt($("#qualityKarmaCost").val());
    
    var key = $(`#${type}Input`).val();
    
    newItem = {key: key, description: qualityDescription, type: qualityType, karmaCost: qualityKarmaCost};

    } else  if (type === "contacts") {

      
      var contactType = $("#contactType").val();

      var contactDescription = $("#contactDescription").val();
  
      var contactConnection = parseInt($("#contactConnection").val());
  
      var contactLoyalty = parseInt($("#contactLoyalty").val());

      characterData.points.contacts.spent = characterData.points.contacts.spent + contactConnection + contactLoyalty;
      
      var key = $(`#${type}Input`).val();
      
      newItem = {key: key, type: contactType, description: contactDescription, connection: contactConnection, loyalty: contactLoyalty};
  
      } else {
      var levelItem = 0;
      if (type === "languages") levelItem = parseInt($("input[name='chooseLevelOptions']:checked").val()) || 0;
      // Récupérez la valeur saisie par l'utilisateur
      newItem = {key:$(`#${type}Input`).val(), level: levelItem};
    }

    // Assurez-vous que la spécialisation n'est pas vide
    if (newItem.key.trim() !== "") {
      // Ajoutez la nouvelle spécialisation à characterData.skills[skillData].specializations
      
      console.log("newItem : ", newItem, " type : ", type, " items : ", items);
      items.push(newItem);   
      updateQualitiesDisplay();
      updateQualitiesKarma();
      if (type !== "qualities") {
        characterData.points.knowledges.spent = characterData.points.knowledges.spent + 1;
      updateKnowledgePoints();
      }
      handleDropdownModal(type);
      updateKnowledgeDisplay();
      updateContactDisplay();
    }

    // Effacez le champ de saisie
    $(`#${type}Input`).val("");
  });
}

function removeModalClick(type, item) {

  const index = characterData[type].findIndex(entry =>
      entry.key === item
  );


  if (index !== -1) {
      characterData[type].splice(index, 1);
  } else {
      console.log("Array contents: ", characterData[type]);
  }

  handleDropdownModal(type);
  updateKnowledgeDisplay();
  updateQualitiesDisplay();
  updateQualitiesKarma();
  updateContactDisplay();

  if (type !== "qualities") {
    characterData.points.knowledges.spent = characterData.points.knowledges.spent - 1;
  updateKnowledgePoints();
  }
  
  saveData();
}

  function updateKnowledgeDisplay() {
  
    var knowledgeTable = $("#knowledgeTable"); // Utilisez jQuery ici
    var knowledgeTableBody = knowledgeTable.find("tbody");
  
    // Effacer le contenu actuel de la ligne du tableau
    knowledgeTableBody.empty();
  
    // Trouver le nombre maximal d'éléments dans les deux tableaux
      var languages = [] ;
      languages = sortKeys(characterData.languages);
      var knowledges = [];
      knowledges = sortKeys(characterData.knowledges);

    var maxItems = Math.max(characterData.knowledges.length, characterData.languages.length);

    var levels = ["", "specialist", "expert", "native"];
  
    // Ajouter chaque connaissance et chaque langue au tableau
    for (let i = 0; i < maxItems; i++) {
      const knowledgeItem = i < knowledges.length ? knowledges[i] : null;
      const languageItem = i < languages.length ? languages[i] : null;
    
      const showLevel = languageItem && languageItem.level > 0 ? " (" + terms[levels[languageItem.level]] + ")" : "";
    
      const knowledgeCell = knowledgeItem ? `<td class="knowledge-column">${capitalized(knowledgeItem.key)}</td>` : '<td class="knowledge-column"></td>';
      const languageCell = languageItem ? `<td class="language-column starred" onclick="starredLanguage(this, '${i}')">${capitalized(languageItem.key)}${showLevel}</td>` : '<td class="language-column"></td>';
    
      const rowHTML = `<tr>${knowledgeCell}${languageCell}</tr>`;
      knowledgeTableBody.append(rowHTML);
    }
    
  saveData();
  }

  function updateContactDisplay() {
  
    var contactsTable = $("#contactsTable"); // Utilisez jQuery ici
    var contactsTableBody = contactsTable.find("tbody");
  
    // Effacer le contenu actuel de la ligne du tableau
    contactsTableBody.empty();
  
    if (characterData.contacts) {
      var contacts = [] ;
      contacts = sortKeys(characterData.contacts);
    }

  characterData.points.contacts.base = characterData.attributes.charisma.value * 6;

  // Sélectionner la table
  var contactsSpentTable = $("#contactsSpent");

  // Mettre à jour le tableau
  contactsSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped"><tbody> <tr> <th scope="row">' +
    capitalized(terms.pointsToSpend) +
      '</th> <td id="contacts_max"> <span id="contactsCount" class="h6 count">' +
      Math.max(0, characterData.points.contacts.base - characterData.points.contacts.spent) +
      "</span></td></tr></tbody></table>"
  );

  
    // Ajouter chaque contact au tableau
    for (let i = 0; i < contacts.length; i++) {
      const contactItem = i < contacts.length ? contacts[i] : null;

      let max = "", maxLoyalty = "", maxConnection = "";
      if (contactItem.loyalty > characterData.attributes.charisma.value || contactItem.connection > characterData.attributes.charisma.value) {
        var maximumAlert = `<tr><td colspan="2" class="maximum">${terms.tooMuchConnectionLoyalty}  ${contactItem.key}</td></tr>`;
        contactsSpentTable.append(maximumAlert);
      } 

      if (contactItem.loyalty > characterData.attributes.charisma.value) {
        maxLoyalty = "maximum";
      } else {  
        maxLoyalty = "";
      }

      if (contactItem.connection > characterData.attributes.charisma.value) {
        maxConnection = "maximum";
      } else {  
        maxConnection = "";
      }

      const keyCell = contactItem ? `<td class="name-column h6">${capitalized(contactItem.key)}</td>` : '<td class="name-column h6"></td>';
      const typeCell = contactItem ? `<td class="type-column">${contactItem.type}</td>` : '<td class="type-column"></td>';
      const descriptionCell = contactItem ? `<td class="description-column">${contactItem.description}</td>` : '<td class="description-column"></td>';
      const connectionCell = contactItem ? `<td class="connection-column ${maxConnection}"><div>${Math.min(characterData.attributes.charisma.value, contactItem.connection)}</div>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button class="btn btn-outline-danger btn-xs" onclick="modifyContact('connection', '${
            i
          }', 'decrement')">-</button>
          <button class="btn btn-outline-success btn-xs" onclick="modifyContact('connection', '${
            i
          }', 'increment')">+</button>
      </div></td>` : '<td class="connection-column"></td>';
      const loyaltyCell = contactItem ? `<td class="loyalty-column ${maxLoyalty}"><div>${Math.min(characterData.attributes.charisma.value, contactItem.loyalty)}</div>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button class="btn btn-outline-danger btn-xs" onclick="modifyContact('loyalty', '${
            i
          }', 'decrement')">-</button>
          <button class="btn btn-outline-success btn-xs" onclick="modifyContact('loyalty', '${
            i
          }', 'increment')">+</button>
      </div></td>` : '<td class="loyalty-column"></td>';

      const rowHTML = `<tr>${keyCell}${descriptionCell}${connectionCell}${loyaltyCell}</tr>`;
      contactsTableBody.append(rowHTML);
    }
    
  saveData();
  }

  // Fonction pour gérer le clic sur une spécialisation
function addQualitiesClick(key, description, type, karmaCost) {

  
  var quality = {key: key, description: description, type: type, karmaCost: parseInt(karmaCost)};

  characterData.qualities.push(quality);
  handleDropdownModal("qualities");
  updateQualitiesDisplay();
  updateQualitiesKarma();  
  saveData();
}

  function updateQualitiesDisplay() {

  
    var qualitiesTableBody = $("#qualitiesTable tbody");

    // Effacez le contenu actuel du corps du tableau
    qualitiesTableBody.empty();
  
    // Vérifiez si characterData.qualities existe
    if (characterData.qualities) {
      // Parcourez chaque qualité dans characterData.qualities
      var qualities = [];
      qualities = sortKeys(characterData.qualities);

      qualities.forEach(function (quality) {

        // Générez une nouvelle ligne pour chaque qualité
        var row = `
          <tr>
            <td class="name-column">${quality.key}</td>
            <td class="description-column">${quality.description}</td>
            <td class="type-column">${capitalized(terms[quality.type])}</td>
            <td class="karmaCost-column">${parseInt(quality.karmaCost)}</td>
          </tr>
        `;
  
        // Ajoutez la ligne au corps du tableau
        qualitiesTableBody.append(row);
      });
    }
    
  saveData();
  }

  function createTable() {
      var catalogQualitiesTableBody = $("#catalogQualitiesTable tbody");
      catalogQualitiesTableBody.empty();
    
      var books = [];
    
      if (catalogData.qualities) {
        catalogData.qualities.forEach((quality, index) => {
          var rowHTML = `
            <tr id="catalogQuality-${index}" draggable="true">
              <td class="name-column">${quality.key}</td>
              <td class="description-column">${quality.description}</td>
              <td class="type-column">${capitalized(terms[quality.type])}</td>
              <td class="karmaCost-column">${parseInt(quality.karmaCost)}</td>
              <td class="book-column">${capitalized(terms[quality.book])} (p. ${quality.page})</td>
            </tr>`;
          catalogQualitiesTableBody.append(rowHTML);
          
          if (!books.includes(quality.book)) {
            books.push(quality.book);
          }
        });
      }
    
      var bookFilter = $("#bookFilter");
      bookFilter.empty();
      bookFilter.append(`<option value="">${capitalized(terms.all)}</option>`);
      books.forEach((book) => {
        bookFilter.append(`<option value="${capitalized(terms[book])}">${capitalized(terms[book])}</option>`);
      });
  }
  
  function handleDragStart(event) {
    console.log("Drag started...", event);
    dragged = event.target;
    event.dataTransfer.setData("text/plain", event.target.id);
    event.stopPropagation(); // Ajoutez cette ligne
  }
  
  function handleDragOver(event) {
    // Autorisez le dépôt uniquement si l'événement se produit dans "collapseQualities"
    
    console.log("Drag over... not collapseQualities ", event.target.id);
    if (event.currentTarget.id === "collapseQualities") {
      console.log("Drag over... collapseQualities ", event.target.id);
      event.preventDefault();
    }
  }
  
  function handleDrop(event) {
    console.log("Drop...", event);
        event.preventDefault();
    var data = event.originalEvent.dataTransfer.getData("text");
    var ID = data.split('-').pop();
    characterData.qualities.push(catalogData.qualities[ID]);
    updateQualitiesDisplay();
    handleDropdownModal("qualities");
    updateQualitiesKarma();
    var draggedElement = $("#" + data);
    draggedElement.hide();
    console.log("Drop handled.");
    // Réinitialisez la couleur de l'élément "collapseQualities" après le dépôt
  $("#collapseQualities").removeClass("toDrop");
  
  saveData();
  }
  

  // Ajoutez un gestionnaire d'événements "dragend" pour réinitialiser la couleur de l'élément "collapseQualities" si le glisser-déposer est annulé
document.addEventListener("dragend", function(event) {
  $("#collapseQualities").removeClass("toDrop");
});
  
function openCatalogModal() {
  console.log("Opening catalog panel...");

  // Générer le panneau
  var panelHTML = `
    <div id="catalogPanel">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="catalogModalLabel">${capitalized(terms.qualitiesCatalog)}</h1>
            <button type="button" class="btn-close btn-close-white" onclick="closeCatalogPanel()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="filters">
  <input type="text" id="nameFilter" placeholder="${capitalized(terms.filterName)}">
  <select id="typeFilter">
    <option value="">${capitalized(terms.all)}</option>
    <option value="${capitalized(terms.negative)}">${capitalized(terms.negative)}</option>
    <option value="${capitalized(terms.positive)}">${capitalized(terms.positive)}</option>
  </select>
  <label for="karmaCostMinFilter">Karma:</label>
  <input type="number" id="karmaCostMinFilter" min="0" max="25" step="1" value="0"> - 
  <input type="number" id="karmaCostMaxFilter" min="0" max="25" step="1" value="25">       
  <select id="bookFilter">
  <!-- Les options seront ajoutées ici par createTable -->
</select>
  </div>
            <table id="catalogQualitiesTable" class="table table-sm table-responsive-sm table-hover table-striped">
              <thead class="table-light">
                <tr>
                  <th scope="col" class="name-column h6">${capitalized(terms.qualities)}</th>
                  <th scope="col" class="description-column">${capitalized(terms.descriptions)}</th>
                  <th scope="col" class="type-column">${capitalized(terms.types)}</th>
                  <th scope="col" class="karmaCost-column">${capitalized(terms.karmaCosts)}</th>
                  <th scope="col" class="book-column">${capitalized(terms.source)}</th>
                </tr>
              </thead>
              <tbody class="table-group-divider"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;

  // Ajouter le panneau au corps du document
  $("body").append(panelHTML);

  createTable();
  
  $("#nameFilter").on("input", filterTable);
  $("#typeFilter").on("input", filterTable);
  $("#karmaCostMinFilter").on("input", filterTable);
  $("#karmaCostMaxFilter").on("input", filterTable);
  $("#bookFilter").on("input", filterTable);

  
  // Changez la couleur de l'élément "collapseQualities" lors du début du glisser-déposer
  $("#collapseQualities").addClass("toDrop");
  openCatalogPanel();
  let dragged = null;
  document.addEventListener("dragstart", handleDragStart);
  $(".container-fluid").on("dragstart", function (e) {
    e.originalEvent.dataTransfer.setData("text", "anything");
  });
  $(".container-fluid").on("dragover", handleDragOver);
  $("#collapseQualities").on("drop", handleDrop);
  console.log("Catalog panel opened.");
}

function openCatalogPanel() {
  document.getElementById("catalogPanel").classList.add("open");
}

function closeCatalogPanel() {
  document.getElementById("catalogPanel").classList.remove("open");
}

function filterTable() {
  
  var nameFilter = $("#nameFilter").val().toLowerCase();
  var typeFilter = $("#typeFilter").val();
  var karmaCostMinFilter = $("#karmaCostMinFilter").val();
  var karmaCostMaxFilter = $("#karmaCostMaxFilter").val();
  var bookFilters = $("#bookFilter").val().toLowerCase() || [];

  $("#catalogQualitiesTable tbody tr").each(function() {
    var name = $(this).find(".name-column").text().toLowerCase();
    var type = $(this).find(".type-column").text();
    var karmaCost = parseInt($(this).find(".karmaCost-column").text(), 10);
    var book = $(this).find(".book-column").text().split(' ')[0].toLowerCase();

    console.log("filter table : ", book, " this ", $(this).find(".book-column").text().toLowerCase(), " bookFilters ", bookFilters, " includes ", bookFilters.includes(book));

    if (name.includes(nameFilter) && (!typeFilter || type === typeFilter) && (!karmaCostMinFilter || karmaCost >= karmaCostMinFilter) && (!karmaCostMaxFilter || karmaCost <= karmaCostMaxFilter) && (bookFilters.length === 0 || bookFilters.includes(book))) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

function starredLanguage(cell, i) {
  var key = characterData.languages[i].key ;
  var level = characterData.languages[i].level ;

  if (level === 3) {
    characterData.languages[i].level = 0
  } else  {
    characterData.languages[i].level = level + 1;
  }

  updateKnowledgeDisplay();
  saveData();
}

function updateQualitiesKarma() {

  var karmaCount = 0 ;

  for (let i = 0; i < characterData.qualities.length; i++) {
  if (characterData.qualities[i].type === "positive") karmaCount = karmaCount - parseInt(characterData.qualities[i].karmaCost) ;  
  if (characterData.qualities[i].type === "negative") karmaCount = karmaCount + parseInt(characterData.qualities[i].karmaCost) ;
  }
    
  characterData.points.karma = karmaCount;

  var qualitiesSpentTable = $(`#qualitiesSpent`); // Utilisez jQuery ici
  
  var maximumQualities = "";
  if (characterData.qualities.length > 6) {
    maximumQualities = `<tr><td colspan="2" class="maximum">${terms.maximumQualities}</td></tr>`;
  }

  var karma0 = "";
  if (karmaCount < 0) karma0 = "class='maximum'"

  qualitiesSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped"><tbody> <tr> <th scope="row">' +
      capitalized(terms.karma) +
      `</th> <td id="qualitiesKarma" ${karma0}> <span id="qualitiesCount" class="h6 count">${characterData.points.karma}</span></td></tr>${maximumQualities}</tbody></table>`
  );
}

function modifyContact(type, contact, modificator) {

  console.log("modifyContact : ", type, " contact ", JSON.stringify(contact), " modificator ", modificator);

  var contactSpent = characterData.points.contacts.spent;

  var base = characterData.contacts[contact][type];
  if (modificator === "increment") {
    characterData.contacts[contact][type] = base + 1;
    characterData.points.contacts.spent = contactSpent + 1;
  } else {
    characterData.contacts[contact][type] = Math.max(0, base - 1);
    characterData.points.contacts.spent = Math.max(0, contactSpent - 1);
  }
  updateContactDisplay();
  updatePoints("contacts");
  saveData();
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
  saveData();
}

function updateValues(type) {
  var sorted = sortTranslated(Object.keys(characterData[type]));

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
        updateKnowledgePoints();        
        updateContactDisplay();
      }
      if (type === "skills") {
        var rdd =
          characterData[type][s.data].value +
          characterData.attributes[characterData[type][s.data].linkedAttribute]
            .value;
        if (characterData[type][s.data].value === 0) {
          if (characterData[type][s.data].untrained) {            
          rdd = Math.max(
            0,
            characterData.attributes[
              characterData[type][s.data].linkedAttribute
            ].value - 1
          );
          } else {
            rdd = 0;
          }
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
    var max = 7;
    var maxElement = characterData.alreadyMaxSkill;
    if (maxElement) max = 6;

    if (characterData.skills[element].value >= max) {
      if (maxElement)
        document.getElementById(`${maxElement}_max`).classList.add("maximum");
      document.getElementById(`${element}_max`).classList.add("maximum");
    } else {
      if (maxElement)
        document
          .getElementById(`${maxElement}_max`)
          .classList.remove("maximum");

      document.getElementById(`${element}_max`).classList.remove("maximum");
    }

    if (
      characterData[type][element].value >= 6 &&
      characterData.alreadyMaxSkill === ""
    ) {
      characterData.alreadyMaxSkill = element;
    } else if (characterData.alreadyMaxSkill === element) {
      characterData.alreadyMaxSkill = "";
    }
  }

  if (type === "attributes") {
    // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
    const maxAttribute = document.getElementById(`${element}_max`);
    var max = characterData.attributes[element].max;
    var maxElement = characterData.alreadyMaxAttribute;
    if (maxElement) max = characterData.attributes[element].max - 1;
    
    if (characterData.attributes[element].value > max) {
      
      if (maxElement) {
        document
          .getElementById(`${maxElement}_actual`)
          .classList.add("maximum");
      document.getElementById(`${maxElement}_max`).classList.add("maximum");    

      }
      maxAttribute.classList.add("maximum");
    } else {
      if (maxElement) {
        document
          .getElementById(`${maxElement}_actual`)
          .classList.remove("maximum");          
          document.getElementById(`${maxElement}_max`).classList.remove("maximum");  
      } 
      maxAttribute.classList.remove("maximum");
    }

    if (
      characterData[type][element].value >= characterData[type][element].max &&
      characterData.alreadyMaxAttribute === ""
    ) {
      characterData.alreadyMaxAttribute = element;
    } else if (characterData.alreadyMaxAttribute === element) {
      characterData.alreadyMaxAttribute = "";
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

  if (characterData.metatype || characterData.special) {
    updateSINInfo();
  }

// Affichez la colonne des resources avec séparation des unités et le symbole ¥
const resourcesValue = prioritiesSelected["resources"];
if (resourcesValue) {
  console.log("resourcesValue : ", resourcesValue);
  const resources = parseInt(characterData.resources); // Extrait la valeur numérique
  console.log("resources : ", resources);
  if (!isNaN(resources)) {
    const formattedRessources = resources.toLocaleString("fr-FR");
    let moneyCount = document.querySelector('.moneyCount');
    if (!moneyCount) {
      moneyCount = document.createElement('div');
      moneyCount.className = 'h4 moneyCount';
      const icon = document.createElement('i');
      icon.className = 'bi bi-piggy-bank';
      moneyCount.appendChild(icon);
      const moneyElement = document.createElement('span');
      moneyElement.className = 'money';
      moneyElement.textContent = formattedRessources;
      moneyCount.appendChild(moneyElement);
      const symbol = document.createTextNode(' ¥');
      moneyCount.appendChild(symbol);
      document.getElementById("resourcesShow").appendChild(moneyCount);
    } else {
      const moneyElement = moneyCount.querySelector('.money');
      if (moneyElement) {
        moneyElement.textContent = formattedRessources;
      }
    }
  }
}
}

function updateMoney(newMoneyValue) {
  let moneyCount = document.querySelector('.moneyCount');
  let moneyElement = moneyCount.querySelector('.money');
  const oldText = moneyElement.textContent.replace(/\D/g, ''); // remove non-digit characters
  const newText = newMoneyValue.toString();

  for (let i = 0; i < newText.length; i++) {
    let currentNumber = parseInt(oldText[i]) || 0;
    const targetNumber = parseInt(newText[i]);

    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber++;
      } else if (currentNumber > targetNumber) {
        currentNumber--;
      } else {
        clearInterval(interval);
        return;
      }
      moneyElement.textContent = moneyElement.textContent.substring(0, i) + currentNumber + moneyElement.textContent.substring(i + 1);
    }, 100);
  }
}


// Fonction pour sauvegarder la sélection dans un cookie
// Pour sauvegarder les données
function saveData() {
  var selectionData = { selectedCells, IDselectedCells, prioritiesSelected, actualPriority, selectedMetatype, SIN, characterData };
  localStorage.setItem('selectionData', JSON.stringify(selectionData));
  
  //console.log("dataToSave : " + dataToSave);

};


// Pour charger les données
function loadData() {
  var storedData = localStorage.getItem('selectionData');
  if (storedData) {
      var loadedData = JSON.parse(storedData);
      console.log("loadedData : " + JSON.stringify(loadedData));
      console.log("loadedData.characterData : " + JSON.stringify(loadedData.characterData));

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
      generateButtons(
        "specialTitle",
        "specialButtons",["adept", "mysticAdept", "fullMagician", "aspectedMagician", "technomancer"], "special", actualPriority
      );
      showResults();
      handleSkills();
      handleAttributes();
      updateValues("skills");
      updateValues("attributes");
      updateKnowledgeDisplay();
      updateQualitiesDisplay();
      updateQualitiesKarma();
      handleDropdownModal("knowledges");
      handleDropdownModal("languages");
      handleDropdownModal("qualities");
      handleDropdownModal("contacts");
      showPriorities();
      const buttons = document.querySelectorAll('button');

      buttons.forEach(button => {
        // Supposons que l'ID du bouton est stocké dans button.id
        const buttonId = button.id;
    
        // Vérifiez si l'ID du bouton correspond à metatype ou special dans characterData
        if (characterData.metatype === buttonId || characterData.special === buttonId) {
          // Ajoutez la classe "selected" au bouton
          button.classList.add('selected');
        }
      });

      if (typeof IDselectedCells === 'object' && IDselectedCells !== null) {
        console.log('IDselectedCells:', IDselectedCells); // Affichez la valeur de IDselectedCells

        const cells = document.querySelectorAll('td');

        cells.forEach(cell => {
          const cellId = cell.id;

          // Vérifiez si l'ID de la cellule est une valeur dans IDselectedCells
          if (Object.values(IDselectedCells).includes(cellId)) {
            cell.classList.add('selected');
          }
        });
      }

    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Sélectionnez le bouton "reset" par son ID
  const resetButton = document.getElementById("resetButton");

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton "reset"
  resetButton.addEventListener("click", function () {
    console.log("Resetting the selection...");
    // Demandez une confirmation à l'utilisateur
    const userConfirmed = confirm(
      "Êtes-vous sûr de vouloir réinitialiser la sélection ?"
    );

    if (userConfirmed) {
      // Effacez les données de localStorage
      localStorage.removeItem('selectionData');

      // Réinitialisez les valeurs
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
      metatypeTitle.innerHTML = "";
      metatypeForm.innerHTML = "";
      specialTitle.innerHTML = "";
      specialForm.innerHTML = "";
      characterData = characterDataBackup;

      // Réinitialisez les boutons et les cellules
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => {
        if (button.classList.contains('btn-primary')) {
          button.classList.remove('btn-primary');
        }
      });

      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        if (cell.classList.contains('selected')) {
          cell.classList.remove('selected');
        }
      });

      // Rechargez la page
      window.location.reload();
    }
});


// Supposons que exportButton est votre bouton d'exportation
const exportButton = document.querySelector('#exportButton');
exportButton.addEventListener('click', downloadFoundryData);

});

function downloadFoundryData() {
  console.log("downloadFoundryData()");

  assignData(); // Appelez assignData ici

  const dataStr = JSON.stringify(foundryData, null, 2); // Convertit foundryData en JSON avec une indentation de 2 espaces
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

  const exportFileDefaultName = foundryData.name + '_foundrySR6.json';

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}


function assignData() {

  if (characterData.SIN.identity) {
    foundryData.name = characterData.SIN.identity;
  }
  // attributes
  for (let attribute in characterData.attributes) {
    if (characterData.attributes.hasOwnProperty(attribute)) {
      foundryData.system.attributes[attribute].natural.base = characterData.attributes[attribute].value;
      foundryData.system.attributes[attribute].natural.max.base = characterData.attributes[attribute].max;
    }
  }

  // skills
  for (let skill in characterData.skills) {
    if (characterData.skills.hasOwnProperty(skill)) {
      console.log("skill : ", skill, " value : ", characterData.skills[skill].value);
      foundryData.system.skills[skill].rank.base = characterData.skills[skill].value;
      if (characterData.skills[skill].specializations) {
        foundryData.system.skills[skill].specialization.first = characterData.skills[skill].specializations[0];
        if(characterData.skills[skill].specializations.length > 1) {
          foundryData.system.skills[skill].specialization.second = characterData.skills[skill].specializations[1];          
          foundryData.system.skills[skill].specialization.secondIsShown = true;
        }
      }
    }
  }

  if (characterData.qualities) {
    for (let quality in characterData.qualities) {
      if (characterData.qualities.hasOwnProperty(quality)) {
        console.log("quality : ", quality);
        var q = {
          "name": characterData.qualities[quality].key,
          "type": "quality",
          "system": {
            "info": {              
            "description": characterData.qualities[quality].description,
            },                  
          "karmaCost": characterData.qualities[quality].karmaCost,          
          "type": characterData.qualities[quality].type,
          "isActive": true, 
          },    
        }
        foundryData.items.push(q);
      }
    }
  }

  if (characterData.knowledges) {
    for (let knowledge in characterData.knowledges) {
        console.log("knowledge : ", knowledge);
        var k = {
          "name": characterData.knowledges[knowledge].key,  
          "type": "knowledge",
        }
        foundryData.items.push(k);
    }
  }

  if (characterData.languages) {
    for (let language in characterData.languages) {
      if (characterData.languages.hasOwnProperty(language)) {
        console.log("language : ", language);
        var l = {
          "name": characterData.languages[language].key,
          "type": "language",
          "system": {
        "isExpert": characterData.languages[language].level === 2 ? true : false,
        "isNative": characterData.languages[language].level === 3 ? true : false,
        "isSpecialist": characterData.languages[language].level === 1 ? true : false,
          },    
        }
        foundryData.items.push(l);
      }
    }
  }

  if (characterData.contacts) {
    for (let contact in characterData.contacts) {
      if (characterData.contacts.hasOwnProperty(contact)) {
        console.log("contact : ", contact);
        var c = {
          "name": characterData.contacts[contact].key,
          "type": "contact",
          "system": {
            "info": {              
            "description": characterData.contacts[contact].description,
            },  
            "type": characterData.contacts[contact].type,   
            "connection": characterData.contacts[contact].connection,
            "loyalty": characterData.contacts[contact].loyalty, 
        }
      }
        foundryData.items.push(c);
      }
    }
  }

}
