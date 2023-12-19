document.addEventListener("DOMContentLoaded", function () {
  setLang("fr");
  showPriorities();
  loadData();
  setLanguage("fr");
  handleSIN();
  handleAttributes();
  handleSkills();
  updateKnowledgePoints();
  handleModals();
  updateDisplay();
  menuSectionGenerate();
});

const currentVersion = "0.1.5"; // Mettez à jour cette valeur chaque fois que vous modifiez le fichier

$(document).ready(function () {
  $("#collapseQualities").on("dragover", function (event) {
    event.preventDefault();
    console.log("dragover collapseQualities");
  });
  $("#collapseQualities").on("dragover", function (event) {
    event.preventDefault();
    $(this).addClass("toDrop"); // Change la couleur à jaune
    console.log("dragover event triggered"); // Ajouté pour le débogage
  });

  $("#collapseQualities").on("dragleave", function (event) {
    $(this).css("background-color", ""); // Réinitialise la couleur
    console.log("dragleave event triggered"); // Ajouté pour le débogage
  });
});

let pointsAttributesSpent = 0;

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

function allCapitalized(str) {
  if (typeof str === "string" && str !== undefined) {
    var result = str.toUpperCase();
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

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les input de type checkbox
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Ajoutez un gestionnaire d'événements click à chaque checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      // Si la checkbox est cochée pour la première fois
      if (this.checked) {
        // Sélectionnez le label qui suit la checkbox
        const label = this.nextElementSibling;
        if (label) {
          // Sélectionnez le span à l'intérieur du label
          const i = label.querySelector("i");
          // Masquez le span
          if (i) {
            i.style.display = "none";
          }
        }
      }
    });
  });
});

function handleSIN() {
  console.log("handleSIN initialize");

  const inputs = {
    firstname: document.getElementById("firstname"),
    surname: document.getElementById("surname"),
    name: document.getElementById("name"),
  };

  Object.keys(inputs).forEach((key) => {
    inputs[key].placeholder = capitalized(terms[key]);
    inputs[key].addEventListener("input", updateSINInfo);
    inputs[key].value = characterData.SIN?.[key] || "";
  });

  updateSINInfo();
}

function updateSINInfo() {
  console.log("updateSINInfo initialize");

  const inputs = {
    firstname: document.getElementById("firstname"),
    surname: document.getElementById("surname"),
    name: document.getElementById("name"),
  };

  const identityShow = document.getElementById("identity");
  const metatypeType = characterData.metatype
    ? capitalized(terms[characterData.metatype])
    : "";
  const specialType = characterData.special
    ? capitalized(terms[characterData.special])
    : "";
  console.log("special : ", specialType);

  let identityParts = [];
  let identityName = [];
  let identity = [];

  Object.keys(inputs).forEach((key, index) => {
    const value = inputs[key].value || characterData.SIN?.[key];
    if (value) {
      let formattedValue = value;
      if (key === "surname") {
        formattedValue = `"${value}"`; // Mettez le surnom entre guillemets
      }
      if (index !== 0) {
        formattedValue = " " + formattedValue; // Ajoutez un espace avant chaque partie sauf la première
      }
      identityParts.push(formattedValue);
      identityName.push(formattedValue);
      identity.push(value);
      characterData.SIN[key] = value;
    }
  });
  if (metatypeType) {
    identityParts.push(", " + metatypeType);
  }

  if (specialType) {
    identityParts.push(", " + specialType);
  }

  let identitySIN = identityParts.join("");
  let identityCatalog = identityName.join("");
  let identity4Foundry = identity.join("");

  identityShow.innerHTML = identitySIN
    ? `
    <h5>${terms.identity}${terms.colons}</h5>
    <p>${identitySIN}</p>
  `
    : "";

  characterData.SIN = {
    ...characterData.SIN,
    identityCatalog: identityCatalog,
    identitySIN: identitySIN,
    identity: identity4Foundry,
  };

  saveData();
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

  if ((priority === "E" && type === "special") || options === "new") {
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
    console.log("Special : ", characterData);
    saveData();
    if (button.id === "technomancer") {
      characterData.isTechno = true;
      characterData.isMagic = false;
    } else {
      characterData.isMagic = true;
      characterData.isTechno = false;
    }
    updateAttributesForSpecial(button.id, priority);
    menuSectionGenerate();
  }

  if (type === "metatype") {
    characterData.metatype = button.id;
    saveData();
    var check = getPriorityValue(
      characterData.prioritiesSelected["metatypes"],
      characterData.metatype
    );

    if (check) {
      characterData.points.Adjustment.base = check;
      console.log("Adjustement : ", characterData.points.Adjustment);
    } else {
      console.log("No check for metatype : ", characterData.metatype);
    }
    showAttributesToSpend();
    updateAttributesForMetatype(button.id);
  }
  handleSkills();
  updateValues("skills");
  handleAttributes();
  updateValues("attributes");
  showResults();
  saveData();
}

function getMetatypeGlobal(metatype) {
  switch (metatype) {
    case "dwarf":
    case "duende":
    case "gnome":
    case "hanuman":
    case "koborokuru":
    case "menehune":
      return "dwarf";
      break;
    case "elf":
    case "dalatiknon":
    case "dryad":
    case "nocturna":
    case "wakyambi":
    case "xapiri_thepe":
      return "elf";
      break;
    case "human":
    case "nartaki":
    case "valkyrie":
      return "human";
      break;
    case "ork":
    case "hogboblin":
    case "ogre":
    case "oni":
    case "satyr":
      return "ork";
      break;
    case "troll":
    case "cyclops":
    case "fomorian":
    case "giant":
    case "minotaur":
      return "troll";
      break;
    default:
      console.log("Metatype non identified: ", metatype);
  }
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
      "Allergie (fer, moyenne)",
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

function updateAttributesForSpecial(special, priority) {
  var attributesData = characterData.attributes;

  console.log(
    "updateAttributesForSpecial initialize : ",
    special,
    " / ",
    priority
  );

  switch (priority) {
    case "A":
      switch (special) {
        case "fullMagician":
        case "mysticAdept":
        case "adept":
          attributesData.magic.base = 4;
          break;
        case "aspectedMagicianSorcery":
        case "aspectedMagicianConjuring":
        case "aspectedMagicianEnchanting":
          attributesData.magic.base = 5;
          break;
        case "technomancer":
          attributesData.resonance.base = 4;
          break;
      }
      break;
    case "B":
      switch (special) {
        case "fullMagician":
        case "mysticAdept":
        case "adept":
          attributesData.magic.base = 3;
          break;
        case "aspectedMagicianSorcery":
        case "aspectedMagicianConjuring":
        case "aspectedMagicianEnchanting":
          attributesData.magic.base = 4;
          break;
        case "technomancer":
          attributesData.resonance.base = 3;
          break;
      }
      break;
    case "C":
      switch (special) {
        case "fullMagician":
        case "mysticAdept":
        case "adept":
          attributesData.magic.base = 2;
          break;
        case "aspectedMagicianSorcery":
        case "aspectedMagicianConjuring":
        case "aspectedMagicianEnchanting":
          attributesData.magic.base = 3;
          break;
        case "technomancer":
          attributesData.resonance.base = 2;
          break;
      }
      break;
    case "D":
      switch (special) {
        case "fullMagician":
        case "mysticAdept":
        case "adept":
          attributesData.magic.base = 1;
          break;
        case "aspectedMagicianSorcery":
        case "aspectedMagicianConjuring":
        case "aspectedMagicianEnchanting":
          attributesData.magic.base = 2;
          break;
        case "technomancer":
          attributesData.resonance.base = 1;
          break;
      }
      break;
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
  console.log("handleAttributes initialize");
  // Sélectionnez le tableau des attributes par son ID
  var attributeTable = document.getElementById("attributeTable");
  // Sélectionnez le corps du tableau
  var attributeTableBody = attributeTable.querySelector("tbody");

  // Générez le contenu HTML en utilisant le modèle et les données
  var attributeHTML = "";
  var attributesData = characterData.attributes;
  for (const attribute in attributesData) {
    // Si l'attribut doit être affiché, générez le HTML
    if (attribute === "magic" && !characterData.isMagic) {
      continue;
    }
    if (attribute === "resonance" && !characterData.isTechno) {
      continue;
    }

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
                    <button class="btn btn-outline-danger btn-xs" onclick="modifyValue('attributes','${attribute}', 'decrement','${
        characterData.selectAttributeType
      }')">-</button>
                    <button class="btn btn-outline-success btn-xs" onclick="modifyValue('attributes','${attribute}', 'increment','${
        characterData.selectAttributeType
      }')">+</button>
                </div>
            </td>
            <td id="${attribute}_actual"><span class="h4 rddNumber">${
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
    characterData.IDselectedCells.attributes
  );

  document.getElementById("attributesSpent").innerHTML =
    ' <table class="table table-sm table-responsive-sm table-hover table-striped"><thead class="table-light"> <tr> <th scope="col"></th> <th scope="col">' +
    capitalized(terms.attributes) +
    '</th> <th scope="col">' +
    capitalized(terms.adjustment) +
    '</th><th scope="col">' +
    capitalized(terms.karma) +
    '</th></tr> </thead><tbody class="table-group-divider"> <tr> <th scope="row">' +
    capitalized(terms.pointsToSpend) +
    '</th> <td id="attributesPrio_max" class="selectable selected" onclick="selectAttributeType(this, \'Prio\')"><span id="attributesPrioCount" class="h6 count">' +
    characterData.points.Prio.base +
    '</span></td> <td id="attributesAdjustment_max" class="selectable" onclick="selectAttributeType(this, \'Adjustment\')"><span id="attributesAdjustmentCount" class="h6 count">' +
    characterData.points.Adjustment.base +
    '</span></td><td id="attributesKarma_max" class="selectable" onclick="selectAttributeType(this, \'Karma\')"><span id="attributesKarmaCount" class="h6 count">' +
    (characterData.points.Karma.base - characterData.points.Karma.spent) +
    "</span></td></tr></tbody></table>";
}

function selectAttributeType(cell, type) {
  console.log("selectAttributeType initialize : ", cell, " / ", type);
  const classAttributePrio = document.getElementById(`attributesPrio_max`);
  const classAttributeAdjustment = document.getElementById(
    `attributesAdjustment_max`
  );
  const classAttributeKarma = document.getElementById(`attributesKarma_max`);
  const possibleElements = document.querySelectorAll(
    ".attributesAdjustmentPossible"
  );
  const impossibleElements = document.querySelectorAll(
    ".attributesAdjustmentImpossible"
  );

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
    if (classAttributeKarma.classList.contains("selected"))
      classAttributeKarma.classList.remove("selected");
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
    if (classAttributeKarma.classList.contains("selected"))
      classAttributeKarma.classList.remove("selected");
  }
  if (type === "Karma") {
    classAttributeKarma.classList.add("selected");
    possibleElements.forEach((element) => {
      element.style.display = "table-row"; // Afficher les éléments Possible
    });
    impossibleElements.forEach((element) => {
      element.style.display = "table-row"; // Cacher les éléments Impossible
    });
    if (classAttributePrio.classList.contains("selected"))
      classAttributePrio.classList.remove("selected");
    if (classAttributeAdjustment.classList.contains("selected"))
      classAttributeAdjustment.classList.remove("selected");
  }
  characterData.selectAttributeType = type;
  console.log(
    "characterData.selectAttributeType : ",
    characterData.selectAttributeType
  );
}

function selectSkillsType(cell, type) {
  console.log("selectSkillsType initialize : ", cell, " / ", type);
  const classSkills = document.getElementById(`skills_max`);
  const classKarma = document.getElementById(`skills_karma_max`);

  if (type === "Skills") {
    classSkills.classList.add("selected");
    if (classKarma.classList.contains("selected"))
      classKarma.classList.remove("selected");
  }
  if (type === "Karma") {
    classKarma.classList.add("selected");
    if (classSkills.classList.contains("selected"))
      classSkills.classList.remove("selected");
  }
  characterData.selectSkillsType = type;
  console.log(
    "characterData.selectSkillsType : ",
    characterData.selectSkillsType
  );
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
  characterData.points.skills.base = getSkillsSpent(
    characterData.IDselectedCells["skills"]
  );

  // Sélectionner la table des compétences
  var skillsSpentTable = $("#skillsSpent"); // Utilisez jQuery ici

  // Mettre à jour le tableau des compétences dépensées
  skillsSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped">' +
      "<thead> <tr>" +
      '<th scope="col"></th>' + // Colonne vide pour aligner avec "points à dépenser"
      '<th scope="col">' +
      capitalized(terms.skills) +
      "</th>" +
      '<th scope="col">' +
      capitalized(terms.karma) +
      '</th></tr> </thead><tbody class="table-group-divider"> <tr> <th scope="row">' +
      capitalized(terms.pointsToSpend) +
      '</th><td id="skills_max" class="selectable selected" onclick="selectSkillsType(this, \'Skills\')"> <span id="skillsCount" class="h6 count">' +
      characterData.points.skills.base +
      "</span></td>" +
      '<td id="skills_karma_max" class="selectable" onclick="selectSkillsType(this, \'Karma\')"> <span id="skillsKarmaCount" class="h6 count">' +
      (characterData.points.Karma.base - characterData.points.Karma.spent) +
      "</span></td>" +
      "</tr>" +
      "</tbody>" +
      "</table>"
  );

  // Sélectionner le tableau des compétences par son ID
  var skillTable = $("#skillTable"); // Utilisez jQuery ici

  // Sélectionner le corps du tableau des compétences
  var skillTableBody = skillTable.find("tbody"); // Utilisez jQuery ici

  // Générer le contenu HTML en utilisant le modèle et les données
  var skillsHTML = "";

  for (const skill of skillsSort) {
    const skillsToIgnoreMap = {
      aspectMagicianSorcery: ["conjuring", "enchanting"],
      aspectedMagicianConjuring: ["sorcery", "enchanting"],
      aspectedMagicianEnchanting: ["conjuring", "sorcery"],
      adept: ["conjuring", "enchanting", "sorcery"],
    };

    // Vérifier si la compétence doit être affichée en fonction des attributs du personnage
    if (
      (skillsData[skill.data].linkedAttribute === "magic" &&
        characterData.isMagic === false) ||
      (skillsData[skill.data].linkedAttribute === "resonance" &&
        characterData.isTechno === false) ||
      (skillsToIgnoreMap[characterData.special] &&
        skillsToIgnoreMap[characterData.special].includes(skill.data))
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
      (specialization) =>
        !existingSpecializations.some(
          (existingSpecialization) =>
            existingSpecialization === specialization.data
        )
    );

    availableSpecializationsSorted.forEach((specialization) => {
      addOptions.push(
        `<li><a class="dropdown-item table-success" href="#" onclick="addSpecializationClick('${
          skill.data
        }', '${specialization.data}')">+ ${capitalized(
          specialization.terms
        )}</a></li>`
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
          `<li><a class="dropdown-item table-danger" href="#" onclick="removeSpecializationClick('${
            skill.data
          }', '${specialization}')">- ${capitalized(
            terms[specialization]
          )}</a></li>`
        );
      });
    }

    // Ajouter les options au menu déroulant
    DropdownOptions = addOptions.join(" ");
    var capitalizedId = capitalized(skill.terms);
    var rdd =
      skillsData[skill.data].value +
      attributesData[skillsData[skill.data].linkedAttribute].value;
    skillsData[skill.data].rdd = rdd;

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
                  }', 'decrement', '${
      characterData.selectSkillsType
    }')">-</button>
                  <button class="btn btn-outline-success btn-xs" onclick="modifyValue('skills', '${
                    skill.data
                  }', 'increment', '${
      characterData.selectSkillsType
    }')">+</button>
              </div>
          </td>
          <td id="${skill.data}_rdd">
            <div><span class="h6 rddNumber">${rdd}</span></div>
            <div><span class="h8">+ ${capitalized(
              terms[skillsData[skill.data].linkedAttribute]
            )}</span></div>
          </td>
          <td id="${skill.data}_specialization">
          <div><span class="h8">${existingSpecializations
            .map((specialization) => capitalized(terms[specialization]))
            .join(", ")}</span>
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
      <label for="${
        skill.data
      }SpecializationInput" class="col-sm-3 col-form-label">${capitalized(
      terms.newe
    )} ${terms.specialization}${terms.colons}</label>
      <div class="col-sm-9">
      <input type="text" class="form-control" id="${
        skill.data
      }SpecializationInput" required>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">${capitalized(
      terms.addTo
    )}</button>
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
    $(document).on(
      "submit",
      "#" + skill.data + "AddSpecializationForm",
      function (e) {
        e.preventDefault();

        // Récupérez la valeur saisie par l'utilisateur
        const newSpecialization = $(
          "#" + skill.data + "SpecializationInput"
        ).val();

        // Assurez-vous que la spécialisation n'est pas vide
        if (newSpecialization.trim() !== "") {
          // Ajoutez la nouvelle spécialisation à characterData.skills[skillData].specializations
          characterData.skills[skill.data].specializations.push(
            newSpecialization
          );
          if (selectSkillsType === "Karma") {
            characterData.points.Karma.spent =
              characterData.points.Karma.spent + 5;
            updatePoints("Karma");
          } else {
            characterData.points.skills.spent =
              characterData.points.skills.spent + 1;
            // Mettez à jour l'affichage avec la nouvelle spécialisation
            handleSkills();
          }
          updateSpecializationDisplay(skill.data);
        }

        // Effacez le champ de saisie
        $("#specializationInput").val("");
      }
    );
  }

  // Afficher le contenu généré dans le corps du tableau des compétences
  skillTableBody.html(skillsHTML);
  saveData();
}

// Fonction pour gérer le clic sur une spécialisation
function addSpecializationClick(skillData, specialization) {
  if (characterData.skills[skillData].specializations.length >= 2) {
    $("#skillsTooMuchSpecializations").text(
      `${capitalized(terms[skillData])}${terms.colons} ${
        terms.tooMuchSpecializations
      }`
    );
    return;
  }
  characterData.skills[skillData].specializations.push(specialization);

  if (selectSkillsType === "Karma") {
    characterData.points.Karma.spent = characterData.points.Karma.spent + 5;
    updatePoints("Karma");
  } else {
    characterData.points.skills.spent = characterData.points.skills.spent + 1;
    handleSkills();
  }
  updateSpecializationDisplay(skillData);
}

// Fonction pour gérer le clic sur une spécialisation
function removeSpecializationClick(skillData, specialization) {
  // Supprimez la spécialisation du tableau
  const index =
    characterData.skills[skillData].specializations.indexOf(specialization);
  if (index !== -1) {
    characterData.skills[skillData].specializations.splice(index, 1);
  }

  if (selectSkillsType === "Karma") {
    characterData.points.Karma.spent = characterData.points.Karma.spent - 5;
    updatePoints("Karma");
  } else {
    characterData.points.skills.spent = characterData.points.skills.spent - 1;

    handleSkills();
  }
  updateSpecializationDisplay(skillData);
  saveData();
}

function updateSpecializationDisplay(skillData) {
  const specializationSpan = $(`#${skillData}_specialization .h8`);

  const specializations = characterData.skills[skillData].specializations
    .map((term) => capitalized(terms[term]))
    .join(", ");

  specializationSpan.text(specializations);

  updatePoints("skills", skillData);
}

function updateKnowledgePoints() {
  characterData.points.knowledges.base = characterData.attributes.logic.value;

  var knowledgeSpentTable = $(`#knowledgeSpent`); // Utilisez jQuery ici

  var knowledgeCount = Math.max(
    0,
    characterData.points.knowledges.base - characterData.points.knowledges.spent
  );

  knowledgeSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped"><tbody> <tr> <th scope="row">' +
      capitalized(terms.pointsToSpend) +
      `</th> <td id="knowledge_max"> <span id="knowledgeCount" class="h6 count">${knowledgeCount}</span></td></tr></tbody></table>`
  );
}

function handleModals() {
  const types = [
    "knowledges",
    "languages",
    "qualities",
    "contacts",
    "rangedWeapons",
    "meleeWeapons",
    "grenades",
    "ammunitions",
    "augmentations",
    "vehicles",
    "drugs",
    "stuffs",
    "SINS",
    "lifestyle",
    "spells",
    "preparations",
    "spirits",
    "rituals",
    "foci",
    "adeptPowers",
    "metamagics",
    "complexForms",
    "sprites",
    "echoes",
  ];

  types.forEach((type) => handleDropdownModal(type));
}

function modalConstruct(type, newType, method) {
  var specificType = "";

  const weaponDamageType = ["physical", "stun"];
  weaponDamageType.sort((a, b) => terms[a].localeCompare(terms[b]));

  const weaponDamageTypeOptions = weaponDamageType
    .map(
      (type) => `<option value="${type}">${capitalized(terms[type])}</option>`
    )
    .join("\n");

  const weaponSpecialDamageType = [
    "acid",
    "cold",
    "electricity",
    "fire",
    "sound",
    "toxin",
    "water",
  ];
  weaponSpecialDamageType.sort((a, b) => terms[a].localeCompare(terms[b]));

  const weaponSpecialDamageTypeOptions = weaponSpecialDamageType
    .map(
      (type) => `<option value="${type}">${capitalized(terms[type])}</option>`
    )
    .join("\n");

  const legality = ["forbidden", "legal", "restricted"];
  legality.sort((a, b) => terms[a].localeCompare(terms[b]));

  const legalityOptions = legality
    .map(
      (type) => `<option value="${type}">${capitalized(terms[type])}</option>`
    )
    .join("\n");

  var idForm = `${method}${capitalized(type)}Form`;

  switch (type) {
    case "languages":
      specificType = `
    <div class="form-group row align-items-center mb-2 mt-3">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel0" autocomplete="off" value="0" checked>
        <label class="btn btn-outline-primary" for="chooseLevel0">${capitalized(
          terms.knowledge
        )}</label>

        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel1" autocomplete="off" value="1">
        <label class="btn btn-outline-primary" for="chooseLevel1">${capitalized(
          terms.specialist
        )}</label>

        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel2" autocomplete="off" value="2">
        <label class="btn btn-outline-primary" for="chooseLevel2">${capitalized(
          terms.expert
        )}</label>

        <input type="radio" class="btn-check" name="chooseLevelOptions" id="chooseLevel3" autocomplete="off" value="3">
        <label class="btn btn-outline-primary" for="chooseLevel3">${capitalized(
          terms.native
        )}</label>
      </div>
    </div>`;
      break;
    case "qualities":
      specificType = `
      <div class="form-group row align-items-center mb-2">
          <label for="qualitiesDescription" class="col-sm-3 col-form-label" style="white-space: nowrap;">${capitalized(
            terms.description
          )}${terms.colons}</label>
          <div class="col-sm-9">
          <textarea class="form-control flex-grow-1" id="qualitiesDescription" rows="4"></textarea>
          </div>
        </div>
        <div class="form-group row align-items-center mb-2">
          <label for="qualityType" class="col-sm-3 col-form-label">${capitalized(
            terms.type
          )}${terms.colons}</label>
          <div class="col-sm-9 d-flex align-items-center">
            <input type="radio" class="btn-check" name="choosequalitiesType" id="chooseQualityTypePositive" value="positive" checked>
            <label class="btn btn-outline-primary" for="chooseQualityTypePositive">${capitalized(
              terms.positive
            )}</label>
  
            <input type="radio" class="btn-check" name="choosequalitiesType" id="chooseQualityTypeNegative" value="negative">
            <label class="btn btn-outline-primary" for="chooseQualityTypeNegative">${capitalized(
              terms.negative
            )}</label>
          </div>
        </div>
        <div class="form-group row align-items-center mb-2">
          <label for="qualitiesKarmaCost" class="col-sm-3 col-form-label" style="white-space: nowrap;">${capitalized(
            terms.karmaCost
          )}${terms.colons}</label>
          <div class="col-sm-3">
          <input type="number" class="form-control" id="qualitiesKarmaCost" aria-label="Karma cost for the quality" style="width: 3em;">
          </div>
        </div>`;
      break;
    case "contacts":
      specificType = `
      <div class="form-group row align-items-center mb-2">
          <label for="contactsType" class="col-sm-3 col-form-label">${capitalized(
            terms.type
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <textarea class="form-control" id="contactsType" rows="4"></textarea>
          </div>
      </div>
      <div class="form-group row align-items-center mb-4">
          <label for="contactsDescription" class="col-sm-3 col-form-label">${capitalized(
            terms.description
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <textarea class="form-control" id="contactsDescription" rows="4"></textarea>
          </div>
      </div>
      <div class="form-group row align-items-center mb-2">  
          <label for="contactsConnection" class="col-sm-3 col-form-label">${capitalized(
            terms.connection
          )}${terms.colons}</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" id="contactsConnection" aria-label="Connections" value=0>
          </div>
          <label for="contactsLoyalty" class="col-sm-3 col-form-label">${capitalized(
            terms.loyalty
          )}${terms.colons}</label>
          <div class="col-sm-3">
            <input type="number" class="form-control" id="contactsLoyalty" aria-label="Loyalties" value=0>
          </div>
      </div>`;
      break;
    case "rangedWeapons":
      const weaponTypes = [
        "assaultCannon",
        "crossbowHeavy",
        "crossbowLight",
        "crossbowMedium",
        "bow",
        "launcher",
        "machineGunHeavy",
        "machineGunLight",
        "machineGunMedium",
        "pistolMachine",
        "pistolHeavy",
        "pistolHoldOut",
        "pistolLight",
        "rifle",
        "shotgun",
        "rangedSpecial",
        "submachineGun",
        "taser",
      ];
      weaponTypes.sort((a, b) => terms[a].localeCompare(terms[b]));

      const weaponTypesOptions = weaponTypes
        .map(
          (type) =>
            `<option value="${type}">${capitalized(terms[type])}</option>`
        )
        .join("\n");

      const weaponSkills = [
        "exoticWeapon",
        "firearms",
        "athletics",
        "closeCombat",
      ];
      weaponSkills.sort((a, b) => terms[a].localeCompare(terms[b]));

      const weaponSkillOptions = weaponSkills
        .map(
          (type) =>
            `<option value="${type}">${capitalized(terms[type])}</option>`
        )
        .join("\n");

      const weaponloadingMechanism = [
        "belt",
        "cylinder",
        "breakAction",
        "muzzle",
        "clip",
        "internalMag",
        "missile",
        "drum",
      ];
      weaponloadingMechanism.sort((a, b) => terms[a].localeCompare(terms[b]));

      const weaponloadingMechanismOptions = weaponloadingMechanism
        .map(
          (type) =>
            `<option value="${type}">${capitalized(terms[type])}</option>`
        )
        .join("\n");

      const weaponfiringModes = [
        "singleShot",
        "semiAutomatic",
        "burstFire",
        "fullAutomatic",
      ];
      weaponfiringModes.sort((a, b) => terms[a].localeCompare(terms[b]));

      const weaponfiringModesOptions = weaponfiringModes
        .map(
          (type) => `
        <div class="form-check d-flex justify-content-start">
          <input class="form-check-input me-2" type="checkbox" value="${type}" id="${type}">
          <label class="form-check-label" for="${type}">
            ${capitalized(terms[type])}
          </label>
        </div>
      `
        )
        .join("\n");

      specificType = `
        <div class="form-group row align-items-center mb-2">
          <label for="rangedWeaponsType" class="col-sm-3 col-form-label SR6_Flex2">${capitalized(
            terms.type
          )}${terms.colons}</label>
          <div class="col-sm-9 SR6_Select">
            <select class="form-control" id="rangedWeaponsType">
              <option value="">${capitalized(terms.select)}</option>
              ${weaponTypesOptions}
            </select>
          </div>
        </div>
        <div class="form-group row align-items-center mb-2">
          <label for="rangedWeaponsSkill" class="col-sm-3 col-form-label">${capitalized(
            terms.skill
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <select class="form-control SR6-Select" id="rangedWeaponsSkill">
              <option value="">${capitalized(terms.select)}</option>
              ${weaponSkillOptions}
            </select>
          </div>
        </div>
        <div class="form-group row align-items-center mb-2">  
            <label for="rangedWeaponsBaseConcealability" class="col-sm-3 col-form-label">${capitalized(
              terms.baseConcealability
            )}${terms.colons}</label>
            <div class="col-sm-2">
              <input type="number" class="form-control" id="rangedWeaponsBaseConcealability" aria-label="baseConcealability" value=0>
            </div>
        </div>
        <div class="SR6_headline mb-2">${allCapitalized(terms.damages)}</div>
        <div class="form-group row align-items-center mb-2">  
            <label for="rangedWeaponsDamageValue" class="col-sm-3 col-form-label">${capitalized(
              terms.damageValue
            )}${terms.colons}</label>
            <div class="col-sm-2">
              <input type="number" class="form-control" id="rangedWeaponsDamageValue" aria-label="damageValue" value=0>
            </div>
            <label for="rangedWeaponsDamageType" class="col-sm-3 col-form-label">${capitalized(
              terms.damageType
            )}${terms.colons}</label>
            <div class="col-sm-4">
            <select class="form-control" id="rangedWeaponsDamageType">
              <option value="">${capitalized(terms.select)}</option>
              ${weaponDamageTypeOptions}
            </select>
            </div>
        </div>
        <div class="form-group row align-items-center mb-2">
          <label for="rangedWeaponsSpecialDamageType" class="col-sm-3 col-form-label">${capitalized(
            terms.specialDamageType
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <select class="form-control" id="rangedWeaponsSpecialDamageType">
              <option value="">${capitalized(terms.select)}</option>
              ${weaponSpecialDamageTypeOptions}
            </select>
          </div>
        </div>        
        <div class="SR6_headline mb-2">${allCapitalized(
          terms.attackRating
        )}</div>
        <div class="form-group row align-items-center">  
            <label for="rangedWeaponsAttackRating" class="col-sm-3 col-form-label">${capitalized(
              terms.attackRating
            )}${terms.colons}</label>
            
            <div class="col-sm-9">
            <div class="row">
            <label for="rangedWeaponsAttackRatingCloseAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.closeAR
            )}</label>
            <label for="rangedWeaponsAttackRatingNearAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.nearAR
            )}</label>
            <label for="rangedWeaponsAttackRatingMediumAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.mediumAR
            )}</label>
            <label for="rangedWeaponsAttackRatingFarAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.farAR
            )}</label>
            <label for="rangedWeaponsAttackRatingExtremeAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.extremeAR
            )}</label>
            </div>
            </div>
        </div>
        <div class="form-group row align-items-center mb-2">  
            <div class="col-sm-3"></div>
            <div class="col-sm-9">
            <div class="row smaller">
            
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="rangedWeaponsAttackRating" 
              id="rangedWeaponsAttackRatingCloseAR" aria-label="rangedWeaponsAttackRating" value=0>
            </div>
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="rangedWeaponsAttackRating"  
              id="rangedWeaponsAttackRatingNearAR" aria-label="rangedWeaponsAttackRating" value=0>
            </div>
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="rangedWeaponsAttackRating"  
              id="rangedWeaponsAttackRatingMediumAR" aria-label="rangedWeaponsAttackRating" value=0>
            </div>
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="rangedWeaponsAttackRating"  
              id="rangedWeaponsAttackRatingFarAR" aria-label="rangedWeaponsAttackRating" value=0>
            </div>    
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="rangedWeaponsAttackRating"  
              id="rangedWeaponsAttackRatingExtremeAR" aria-label="rangedWeaponsAttackRating" value=0>
            </div>

            </div>
            </div>
        </div>
        <div class="SR6_headline mb-2">${allCapitalized(
          terms.firingModes
        )}</div>
        <div class="form-group row align-items-center mb-2">
          <label for="rangedWeaponsFiringMods" class="col-sm-3 col-form-label">${capitalized(
            terms.firingModes
          )}${terms.colons}</label>
          <div class="col-sm-9" id="rangedWeaponsFiringMods">
              ${weaponfiringModesOptions}
          </div>
        </div>
        <div class="form-group row align-items-center mb-2">  
            <label for="rangedWeaponsAmmunitionMax" class="col-sm-3 col-form-label">${capitalized(
              terms.ammunitionMax
            )}${terms.colons}</label>
            <div class="col-sm-2">
              <input type="number" class="form-control" id="rangedWeaponsAmmunitionMax" aria-label="ammunitionMax" value=0>
            </div>
            <label for="rangedWeaponsLoadingMechanism" class="col-sm-3 col-form-label">${capitalized(
              terms.loadingMechanism
            )}${terms.colons}</label>
            <div class="col-sm-4">
            <select class="form-control" id="rangedWeaponsLoadingMechanism">
              <option value="">${capitalized(terms.select)}</option>
              ${weaponloadingMechanismOptions}
            </select>
            </div>
        </div>
        <div class="SR6_headline mb-2">${allCapitalized(
          terms.priceAndAvailability
        )}</div>
        <div class="form-group row align-items-center mb-2">  
            <label for="rangedWeaponsPrice" class="col-sm-3 col-form-label">${capitalized(
              terms.price
            )}${terms.colons}</label>
            <div class="col-sm-3">
              <input type="number" class="form-control" id="rangedWeaponsPrice" aria-label="price" value=0>
            </div>
            <label for="rangedWeaponsLegality" class="col-sm-2 col-form-label ">${capitalized(
              terms.legality
            )}${terms.colons}</label>
            <div class="col-sm-4">
            <select class="form-control" id="rangedWeaponsLegality">
              <option value="">${capitalized(terms.select)}</option>
              ${legalityOptions}
            </select>
            </div>
        </div>
        <div class="form-group row align-items-center mb-2">  
            <label for="rangedWeaponsAvailability" class="col-sm-3 col-form-label">${capitalized(
              terms.availability
            )}${terms.colons}</label>
            <div class="col-sm-3">
              <input type="number" class="form-control" id="rangedWeaponsAvailability" aria-label="price" value=0>
            </div>
      </div>
      <div class="form-group row align-items-center mb-4">
          <label for="rangedWeaponsDescription" class="col-sm-3 col-form-label">${capitalized(
            terms.description
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <textarea class="form-control" id="rangedWeaponsDescription" rows="4"></textarea>
          </div>
      </div>`;
      break;
    case "meleeWeapons":
      const meleeWeaponTypes = ["blade", "club", "meleeSpecial", "unarmed"];
      meleeWeaponTypes.sort((a, b) => terms[a].localeCompare(terms[b]));

      const meleeWeaponTypesOptions = meleeWeaponTypes
        .map(
          (type) =>
            `<option value="${type}">${capitalized(terms[type])}</option>`
        )
        .join("\n");

      const meleeWeaponSkills = ["exoticWeapon", "athletics", "closeCombat"];
      meleeWeaponSkills.sort((a, b) => terms[a].localeCompare(terms[b]));

      const meleeWeaponSkillsOptions = meleeWeaponSkills
        .map(
          (type) =>
            `<option value="${type}">${capitalized(terms[type])}</option>`
        )
        .join("\n");

      specificType = `
        <div class="form-group row align-items-center mb-2">
          <label for="meleeWeaponsType" class="col-sm-3 col-form-label SR6_Flex2">${capitalized(
            terms.type
          )}${terms.colons}</label>
          <div class="col-sm-9 SR6_Select">
            <select class="form-control" id="meleeWeaponsType">
              <option value="">${capitalized(terms.select)}</option>
              ${meleeWeaponTypesOptions}
            </select>
          </div>
        </div>
        <div class="form-group row align-items-center mb-2">
          <label for="meleeWeaponsSkill" class="col-sm-3 col-form-label">${capitalized(
            terms.skill
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <select class="form-control SR6-Select" id="meleeWeaponsSkill">
              <option value="">${capitalized(terms.select)}</option>
              ${meleeWeaponSkillsOptions}
            </select>
          </div>
        </div>
        <div class="form-group row align-items-center mb-2">  
            <label for="meleeWeaponsBaseConcealability" class="col-sm-3 col-form-label">${capitalized(
              terms.baseConcealability
            )}${terms.colons}</label>
            <div class="col-sm-2">
              <input type="number" class="form-control" id="meleeWeaponsBaseConcealability" aria-label="baseConcealability" value=0>
            </div>
        </div>
        <div class="SR6_headline mb-2">${allCapitalized(terms.damages)}</div>
        <div class="form-group row align-items-center mb-2">  
            <label for="meleeWeaponsDamageValue" class="col-sm-3 col-form-label">${capitalized(
              terms.damageValue
            )}${terms.colons}</label>
            <div class="col-sm-2">
              <input type="number" class="form-control" id="meleeWeaponsDamageValue" aria-label="damageValue" value=0>
            </div>
            <label for="meleeWeaponsDamageType" class="col-sm-3 col-form-label">${capitalized(
              terms.damageType
            )}${terms.colons}</label>
            <div class="col-sm-4">
            <select class="form-control" id="meleeWeaponsDamageType">
              <option value="">${capitalized(terms.select)}</option>
              ${weaponDamageTypeOptions}
            </select>
            </div>
        </div>
        <div class="form-group row align-items-center mb-2">
          <label for="meleeWeaponsSpecialDamageType" class="col-sm-3 col-form-label">${capitalized(
            terms.specialDamageType
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <select class="form-control" id="meleeWeaponsSpecialDamageType">
              <option value="">${capitalized(terms.select)}</option>
              ${weaponSpecialDamageTypeOptions}
            </select>
          </div>
        </div>        
        <div class="SR6_headline mb-2">${allCapitalized(
          terms.attackRating
        )}</div>
        <div class="form-group row align-items-center">  
            <label for="meleeWeaponsAttackRating" class="col-sm-3 col-form-label">${capitalized(
              terms.attackRating
            )}${terms.colons}</label>
            
            <div class="col-sm-9">
            <div class="row">
            <label for="meleeWeaponsAttackRatingCloseAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.closeAR
            )}</label>
            <label for="meleeWeaponsAttackRatingNearAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.nearAR
            )}</label>
            <label for="meleeWeaponsAttackRatingMediumAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.mediumAR
            )}</label>
            <label for="meleeWeaponsAttackRatingFarAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.farAR
            )}</label>
            <label for="meleeWeaponsAttackRatingExtremeAR" class="col-sm-2 col-form-label mx-1 px-1">${capitalized(
              terms.extremeAR
            )}</label>
            </div>
            </div>
        </div>
        <div class="form-group row align-items-center mb-2">  
            <div class="col-sm-3"></div>
            <div class="col-sm-9">
            <div class="row smaller">
            
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="meleeWeaponsAttackRating" 
              id="meleeWeaponsAttackRatingCloseAR" aria-label="meleeWeaponsAttackRating" value=0>
            </div>
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="meleeWeaponsAttackRating"  
              id="meleeWeaponsAttackRatingNearAR" aria-label="meleeWeaponsAttackRating" value=0>
            </div>
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="meleeWeaponsAttackRating"  
              id="meleeWeaponsAttackRatingMediumAR" aria-label="meleeWeaponsAttackRating" value=0>
            </div>
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="meleeWeaponsAttackRating"  
              id="meleeWeaponsAttackRatingFarAR" aria-label="meleeWeaponsAttackRating" value=0>
            </div>    
            <div class="col-sm-2 mx-1 px-1">
              <input type="number" class="form-control" name="meleeWeaponsAttackRating"  
              id="meleeWeaponsAttackRatingExtremeAR" aria-label="meleeWeaponsAttackRating" value=0>
            </div>

            </div>
            </div>
        </div>
        <div class="SR6_headline mb-2">${allCapitalized(
          terms.priceAndAvailability
        )}</div>
        <div class="form-group row align-items-center mb-2">  
            <label for="meleeWeaponsPrice" class="col-sm-3 col-form-label">${capitalized(
              terms.price
            )}${terms.colons}</label>
            <div class="col-sm-3">
              <input type="number" class="form-control" id="meleeWeaponsPrice" aria-label="price" value=0>
            </div>
            <label for="meleeWeaponsLegality" class="col-sm-2 col-form-label ">${capitalized(
              terms.legality
            )}${terms.colons}</label>
            <div class="col-sm-4">
            <select class="form-control" id="meleeWeaponsLegality">
              <option value="">${capitalized(terms.select)}</option>
              ${legalityOptions}
            </select>
            </div>
        </div>
        <div class="form-group row align-items-center mb-2">  
            <label for="meleeWeaponsAvailability" class="col-sm-3 col-form-label">${capitalized(
              terms.availability
            )}${terms.colons}</label>
            <div class="col-sm-3">
              <input type="number" class="form-control" id="meleeWeaponsAvailability" aria-label="price" value=0>
            </div>
      </div>
      <div class="form-group row align-items-center mb-4">
          <label for="meleeWeaponsDescription" class="col-sm-3 col-form-label">${capitalized(
            terms.description
          )}${terms.colons}</label>
          <div class="col-sm-9">
            <textarea class="form-control" id="meleeWeaponsDescription" rows="4"></textarea>
          </div>
      </div>`;
      break;
    case "ammunitions":
      break;
    case "augmentations":
      break;
    case "vehicles":
      break;
    case "drugs":
      break;
    case "SINS":
      break;
    case "lifestyle":
      break;
    case "spells":
      break;
    case "preparations":
      break;
    case "spirits":
      break;
    case "rituals":
      break;
    case "foci":
      break;
    case "adeptPowers":
      break;
    case "metamagics":
      break;
    case "complexForms":
      break;
    case "echoes":
      break;
    default:
      break;
  }

  var modal = `<!-- Modal -->
  <div class="modal fade" id="new${capitalized(
    type
  )}Modal" tabindex="-1" aria-labelledby="${type}ModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="${type}ModalLabel">${capitalized(
    newType
  )} ${terms[type.slice(0, -1)]}</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <form id="${idForm}">
            
        <div class="SR6_headline mb-2">${allCapitalized(
          terms.informations
        )}</div>              
        <div class="form-group row align-items-center mb-2">
                <label for="${type}Input" class="col-sm-3 col-form-label">${capitalized(
    terms.name
  )}${terms.colons}</label>
                <div class="col-sm-9">
                <input type="text" class="form-control" id="${type}Input" required>
                </div>
              </div>
              ${specificType}
              <br>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">${capitalized(
                terms.addTo
              )}</button>
            </form>

          </div>
        </div>
      </div>
    </div>`;

  return modal;
}

function handleDropdownModal(type) {
  try {
    var items = characterData[type];
    var newType = terms.new;

    if (
      type === "knowledges" ||
      type === "specializations" ||
      type === "languages" ||
      type === "rangedWeapons" ||
      type === "meleeWeapons"
    ) {
      newType = terms.newe;
    }

    // Construire le tableau d'options
    var addOptions = [];

    if (characterData.SIN.name === "Michel" && catalogData.qualities) {
      var catalogQualitiesSorted = [];
      catalogQualitiesSorted = sortKeys(catalogData.qualities);
      catalogQualitiesSorted.forEach((quality) => {
        addOptions.push(
          `<li><a class="dropdown-item table-success" href="#" onclick="addQualitiesClick('${
            quality.key
          }', '${quality.description}', '${quality.type}', '${parseInt(
            quality.karmaCost
          )}')">+ ${quality.key}</a></li>`
        );
      });
    }

    // Ajouter l'option "Autre"
    addOptions.push(
      `<li><a class="dropdown-item" href="#"  data-bs-toggle="modal" data-bs-target="#new${capitalized(
        type
      )}Modal">${capitalized(newType)}</a></li>`
    );

    // Ajouter l'option "Catalogue"
    if (characterData.SIN.name === "Platinium" && catalogData.qualities) {
      addOptions.push(
        `<li><a class="dropdown-item" href="#" onclick="openCatalogModal()">Catalogue</a></li>`
      );
    }

    if (items) {
      addOptions.push(`<li><hr class="dropdown-divider"></li>`);
      items.forEach((item) => {
        addOptions.push(
          `<li><a class="dropdown-item table-danger" href="#" onclick="removeModalClick('${type}','${
            item.key
          }','${item.key}')">- ${capitalized(item.key)}</a></li>`
        );
      });
    }

    // Construire la modale
    var modal = modalConstruct(type, newType, "add");

    // Ajouter les options au menu déroulant
    var DropdownOptions = addOptions.join(" ");

    // Définir le bouton en fonction du type et de la présence du catalogue
    var button;
    if (characterData.SIN.name === "Platinium" && catalogData.qualities) {
      button = `
      <div class="btn-group">
        <button class="btn btn-outline-primary btn-xs dropdown-toggle" data-bs-toggle="dropdown" placement="right" type="button">+</button>
        <ul class="dropdown-menu" id="${type}Dropdown-menu">
          ${DropdownOptions}
        </ul>
      </div>
    `;
    } else {
      button = `
      <button class="btn btn-outline-primary btn-xs" type="button" data-bs-toggle="modal" data-bs-target="#new${capitalized(
        type
      )}Modal"><i class="bi bi-plus-circle"></i></button>
    `;
    }

    document.getElementById(`${type}Handler`).innerHTML = `
      <div>
        ${button}
        ${modal}
      </div>
  `;

    $(document).on("submit", `#add${capitalized(type)}Form`, function (e) {
      e.preventDefault();

      console.log("type : ", type, " / ", $(`#${type}Input`));

      var newItem = {};

      if (type === "qualities") {
        var qualityDescription = $("#qualitiesDescription").val();

        var qualityType = $("input[name='choosequalitiesType']:checked").val();

        var qualityKarmaCost = parseInt($("#qualitiesKarmaCost").val());

        var key = $(`#${type}Input`).val();

        newItem = {
          key: key,
          description: qualityDescription,
          type: qualityType,
          karmaCost: qualityKarmaCost,
        };
      }

      if (type === "contacts") {
        var contactType = $("#contactsType").val();

        var contactDescription = $("#contactsDescription").val();

        var contactConnection = parseInt($("#contactsConnection").val());

        var contactLoyalty = parseInt($("#contactsLoyalty").val());

        characterData.points.contacts.spent =
          characterData.points.contacts.spent +
          contactConnection +
          contactLoyalty;

        var key = $(`#${type}Input`).val();

        newItem = {
          key: key,
          type: contactType,
          description: contactDescription,
          connection: contactConnection,
          loyalty: contactLoyalty,
        };
      }

      function getValue(id, type, isNumber = false, isCheckbox = false) {
        let val = $(`#${type}${id}`).val();
        if (isNumber) {
          return parseInt(val);
        }
        if (isCheckbox) {
          console.log("ID : ", id, "val : ", val, " / ", $(`#${type}${id}`));
          return $(`#${type}${id}`).prop("checked");
        }
        console.log("ID : ", id, "val : ", val, " / ", $(`#${type}${id}`));
        return val;
      }

      if (type === "rangedWeapons") {
        var weaponType = getValue("Type", type);
        var skill = getValue("Skill", type);
        var baseConcealability = getValue("BaseConcealability", type, true);
        var damageValue = getValue("DamageValue", type, true);
        var damageType = getValue("DamageType", type);
        var specialDamageType = getValue("SpecialDamageType", type);
        var closeAR = getValue("AttackRatingCloseAR", type, true);
        var nearAR = getValue("AttackRatingNearAR", type, true);
        var mediumAR = getValue("AttackRatingMediumAR", type, true);
        var farAR = getValue("AttackRatingFarAR", type, true);
        var extremeAR = getValue("AttackRatingExtremeAR", type, true);
        var singleShot = $(`#singleShot`).prop("checked");
        var semiAutomatic = $(`#semiAutomatic`).prop("checked");
        var burstFire = $(`#burstFire`).prop("checked");
        var fullAutomatic = $(`#fullAutomatic`).prop("checked");
        var ammunitionMax = getValue("AmmunitionMax", type, true);
        var loadingMechanism = getValue("LoadingMechanism", type);
        var price = getValue("Price", type);
        var legality = getValue("Legality", type);
        var availability = getValue("Availability", type);
        var description = getValue("Description", type);
        var key = $(`#${type}Input`).val();

        newItem = {
          key: key,
          type: weaponType,
          skill: skill,
          baseConcealability: baseConcealability,
          damage: {
            value: damageValue,
            type: damageType,
            special: specialDamageType,
          },
          AR: {
            closeAR: closeAR,
            nearAR: nearAR,
            mediumAR: mediumAR,
            farAR: farAR,
            extremeAR: extremeAR,
          },
          firingModes: {
            singleShot: singleShot,
            semiAutomatic: semiAutomatic,
            burstFire: burstFire,
            fullAutomatic: fullAutomatic,
          },
          ammunitionMax: ammunitionMax,
          loadingMechanism: loadingMechanism,
          price: price,
          legality: legality,
          availability: availability,
          description: description,
        };

        console.log("newItem : ", newItem);
      }

      if (type === "meleeWeapons") {
        var weaponType = getValue("Type", type);
        var skill = getValue("Skill", type);
        var baseConcealability = getValue("BaseConcealability", type, true);
        var damageValue = getValue("DamageValue", type, true);
        var damageType = getValue("DamageType", type);
        var specialDamageType = getValue("SpecialDamageType", type);
        var closeAR = getValue("AttackRatingCloseAR", type, true);
        var nearAR = getValue("AttackRatingNearAR", type, true);
        var mediumAR = getValue("AttackRatingMediumAR", type, true);
        var farAR = getValue("AttackRatingFarAR", type, true);
        var extremeAR = getValue("AttackRatingExtremeAR", type, true);
        var price = getValue("Price", type);
        var legality = getValue("Legality", type);
        var availability = getValue("Availability", type);
        var description = getValue("Description", type);
        var key = $(`#${type}Input`).val();

        newItem = {
          key: key,
          type: weaponType,
          skill: skill,
          baseConcealability: baseConcealability,
          damage: {
            value: damageValue,
            type: damageType,
            special: specialDamageType,
          },
          AR: {
            closeAR: closeAR,
            nearAR: nearAR,
            mediumAR: mediumAR,
            farAR: farAR,
            extremeAR: extremeAR,
          },
          price: price,
          legality: legality,
          availability: availability,
          description: description,
        };

        console.log("newItem : ", newItem);
      }

      if (type === "knowledges" || type === "languages") {
        var levelItem = 0;
        if (type === "languages")
          levelItem =
            parseInt($("input[name='chooseLevelOptions']:checked").val()) || 0;
        // Récupérez la valeur saisie par l'utilisateur
        newItem = { key: $(`#${type}Input`).val(), level: levelItem };
      }

      if (newItem.key.trim() !== "") {
        if (type === "qualities") {
          characterData.qualities.push(newItem);
          updateQualitiesDisplay();
          updateQualitiesKarma();
        }
        if (type === "contacts") {
          characterData.contacts.push(newItem);
          updateContactDisplay();
        }
        if (type === "rangedWeapons") {
          characterData.rangedWeapons.push(newItem);
          updateRangedWeaponsDisplay();
        }
        if (type === "meleeWeapons") {
          characterData.meleeWeapons.push(newItem);
          updateMeleeWeaponsDisplay();
        }
        if (type === "knowledges" || type === "languages") {
          characterData[type].push(newItem);
          updateKnowledgeDisplay();
          characterData.points.knowledges.spent =
            characterData.points.knowledges.spent + 1;
          updateKnowledgePoints();
        }
        handleDropdownModal(type);
        saveData();
      }

      // Effacez le champ de saisie
      $(`#${type}Input`).val("");
    });
  } catch (error) {
    console.error(
      `Une erreur est survenue lors du traitement des données de type "${type}" :`,
      error
    );
  }
}

function handleItemClick(type, indexItem) {
  var item = characterData[type][indexItem];

  var newType = terms.new;

  if (
    type === "knowledges" ||
    type === "specializations" ||
    type === "languages" ||
    type === "rangesWeapons"
  ) {
    newType = terms.newe;
  }

  // Générer la modale
  var modal = modalConstruct(type, newType, "modify");

  // Insérer la modale dans le DOM
  var modalContainer = document.getElementById(
    "modalContainer" + type + indexItem
  );
  console.log("modalContainer : ", modalContainer);
  modalContainer.innerHTML = `
  <div>
    ${modal}
  </div>
`;

  // Injecter les données de item dans la modale
  var name = modalContainer.querySelector("#" + type + "Input");

  if (name) {
    name.value = item.key;
  }

  if (type === "contacts" || type === "qualities") {
    const fields = [
      "Type",
      "Description",
      "Loyalty",
      "Connection",
      "KarmaCost",
    ];

    fields.forEach((field) => {
      var element = modalContainer.querySelector(`#${type}${field}`);
      if (element && item[field.charAt(0).toLowerCase() + field.slice(1)]) {
        element.value = item[field.charAt(0).toLowerCase() + field.slice(1)];
      }
    });

    if (type === "qualities") {
      var radioButtons = modalContainer.querySelectorAll(
        'input[name="choosequalitiesType"]'
      );
      for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
      }

      var qualityType = item.type;
      var radioButtonToCheck;
      if (qualityType === "positive") {
        radioButtonToCheck = modalContainer.querySelector(
          "#chooseQualityTypePositive"
        );
      } else if (qualityType === "negative") {
        radioButtonToCheck = modalContainer.querySelector(
          "#chooseQualityTypeNegative"
        );
      }

      if (radioButtonToCheck) {
        radioButtonToCheck.checked = true;
      }
    }
  }

  if (type === "rangedWeapons") {
    console.log("rangedWeapons : ", type);

    const fields = [
      "Type",
      "Skill",
      "BaseConcealability",
      "AmmunitionMax",
      "loadingMechanism",
      "Legality",
      "Availability",
      "Price",
      "Description",
    ];

    fields.forEach((field) => {
      var element = modalContainer.querySelector(`#${type}${field}`);
      if (element && item[field.charAt(0).toLowerCase() + field.slice(1)]) {
        element.value = item[field.charAt(0).toLowerCase() + field.slice(1)];
      }
    });

    modalContainer.querySelector(`#rangedWeaponsDamageValue`).value =
      characterData[type][indexItem].damage.value;
    modalContainer.querySelector(`#rangedWeaponsDamageType`).value =
      characterData[type][indexItem].damage.type;
    modalContainer.querySelector(`#rangedWeaponsSpecialDamageType`).value =
      characterData[type][indexItem].damage.special;
    modalContainer.querySelector(`#rangedWeaponsAttackRatingCloseAR`).value =
      characterData[type][indexItem].AR.closeAR;
    modalContainer.querySelector(`#rangedWeaponsAttackRatingNearAR`).value =
      characterData[type][indexItem].AR.nearAR;
    modalContainer.querySelector(`#rangedWeaponsAttackRatingMediumAR`).value =
      characterData[type][indexItem].AR.mediumAR;
    modalContainer.querySelector(`#rangedWeaponsAttackRatingFarAR`).value =
      characterData[type][indexItem].AR.farAR;
    modalContainer.querySelector(`#rangedWeaponsAttackRatingExtremeAR`).value =
      characterData[type][indexItem].AR.extremeAR;

    modalContainer.querySelector(`#singleShot`).checked =
      characterData[type][indexItem].firingModes.singleShot;
    modalContainer.querySelector(`#semiAutomatic`).checked =
      characterData[type][indexItem].firingModes.semiAutomatic;
    modalContainer.querySelector(`#burstFire`).checked =
      characterData[type][indexItem].firingModes.burstFire;
    modalContainer.querySelector(`#fullAutomatic`).checked =
      characterData[type][indexItem].firingModes.fullAutomatic;
  }

  if (type === "meleeWeapons") {
    console.log("meleeWeapons : ", type);

    const fields = [
      "Type",
      "Skill",
      "BaseConcealability",
      "Legality",
      "Availability",
      "Price",
      "Description",
    ];

    fields.forEach((field) => {
      var element = modalContainer.querySelector(`#${type}${field}`);
      if (element && item[field.charAt(0).toLowerCase() + field.slice(1)]) {
        element.value = item[field.charAt(0).toLowerCase() + field.slice(1)];
      }
    });

    modalContainer.querySelector(`#meleeWeaponsDamageValue`).value =
      characterData[type][indexItem].damage.value;
    modalContainer.querySelector(`#meleeWeaponsDamageType`).value =
      characterData[type][indexItem].damage.type;
    modalContainer.querySelector(`#meleeWeaponsSpecialDamageType`).value =
      characterData[type][indexItem].damage.special;
    modalContainer.querySelector(`#meleeWeaponsAttackRatingCloseAR`).value =
      characterData[type][indexItem].AR.closeAR;
    modalContainer.querySelector(`#meleeWeaponsAttackRatingNearAR`).value =
      characterData[type][indexItem].AR.nearAR;
    modalContainer.querySelector(`#meleeWeaponsAttackRatingMediumAR`).value =
      characterData[type][indexItem].AR.mediumAR;
    modalContainer.querySelector(`#meleeWeaponsAttackRatingFarAR`).value =
      characterData[type][indexItem].AR.farAR;
    modalContainer.querySelector(`#meleeWeaponsAttackRatingExtremeAR`).value =
      characterData[type][indexItem].AR.extremeAR;
  }

  if (type === "languages") {
    var levelItem = item.level;

    var radioButtons = modalContainer.querySelectorAll(
      'input[name="chooseLevelOptions"]'
    );
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }

    var radioButton = modalContainer.querySelector(`#chooseLevel${levelItem}`);

    if (radioButton) {
      console.log("radioButton : ", radioButton);
      radioButton.checked = true;
    }
  }

  // Afficher la modale
  var modalElement = modalContainer.querySelector(".modal");
  var bsModal = new bootstrap.Modal(modalElement);
  bsModal.show();

  $(modalContainer).ready(function () {
    // Sélectionnez tous les boutons radio
    var radioButtons = modalContainer.querySelectorAll('input[type="radio"]');

    // Parcourez tous les boutons radio
    radioButtons.forEach(function (radioButton) {
      console.log("radioButton : ", radioButton.value);
      // Vérifiez si le bouton radio est coché
      if (radioButton.checked) {
        console.log("Le bouton radio est coché : ", radioButton.value);
      }

      // Ajoutez un écouteur d'événement click

      radioButton.addEventListener("click", function () {
        console.log("Le bouton radio a été cliqué : ", radioButton);
      });

      // Vérifiez si le bouton radio est coché
      if (radioButton.checked) {
        console.log("Le bouton radio est coché");
      }
    });

    $(modalContainer).on(
      "submit",
      `#modify${capitalized(type)}Form`,
      function (e) {
        e.preventDefault();

        console.log(type);

        const inputElement = modalContainer.querySelector(`#${type}Input`);
        console.log(inputElement);

        if (inputElement) {
          characterData[type][indexItem].key = inputElement.value;
        } else {
          console.error(`Element with ID #${type}Input not found`);
        }

        if (type === "contacts") {
          const fields = ["Type", "Description", "Connection", "Loyalty"];

          fields.forEach((field) => {
            const element = modalContainer.querySelector(`#${type}${field}`);
            if (element) {
              characterData[type][indexItem][field.toLowerCase()] =
                field === "Connection" || field === "Loyalty"
                  ? parseInt(element.value)
                  : element.value;
            }
          });

          updateContactDisplay();
        }

        if (type === "qualities") {
          const fields = ["Description", "KarmaCost"];

          fields.forEach((field) => {
            const element = modalContainer.querySelector(`#${type}${field}`);
            if (element) {
              characterData[type][indexItem][
                field.charAt(0).toLowerCase() + field.slice(1)
              ] = element.value;
            }
          });

          characterData[type][indexItem].type = modalContainer.querySelector(
            "input[name='choosequalitiesType']:checked"
          ).value;

          console.log(
            "value : ",
            modalContainer.querySelector(
              "input[name='choosequalitiesType']:checked"
            ).value
          );

          console.log(
            "characterData[type][index].key : ",
            characterData[type][indexItem].key,
            " characterData[type][indexItem].type : ",
            characterData[type][indexItem].type
          );

          updateQualitiesDisplay();
          updateQualitiesKarma();
        }

        if (type === "rangedWeapons") {
          console.log("rangedWeapons : ", type);

          const fields = [
            "Type",
            "Skill",
            "BaseConcealability",
            "AmmunitionMax",
            "loadingMechanism",
            "Legality",
            "Availability",
            "Price",
            "Description",
          ];

          fields.forEach((field) => {
            const element = modalContainer.querySelector(`#${type}${field}`);
            if (element) {
              characterData[type][indexItem][
                field.charAt(0).toLowerCase() + field.slice(1)
              ] = element.value;
            }
          });

          modalContainer.querySelector(`#rangedWeaponsDamageValue`).value =
            characterData[type][indexItem].damage.value;
          modalContainer.querySelector(`#rangedWeaponsDamageType`).value =
            characterData[type][indexItem].damage.type;
          modalContainer.querySelector(
            `#rangedWeaponsSpecialDamageType`
          ).value = characterData[type][indexItem].damage.special;
          modalContainer.querySelector(
            `#rangedWeaponsAttackRatingCloseAR`
          ).value = characterData[type][indexItem].AR.closeAR;
          modalContainer.querySelector(
            `#rangedWeaponsAttackRatingNearAR`
          ).value = characterData[type][indexItem].AR.nearAR;
          modalContainer.querySelector(
            `#rangedWeaponsAttackRatingMediumAR`
          ).value = characterData[type][indexItem].AR.mediumAR;
          modalContainer.querySelector(
            `#rangedWeaponsAttackRatingFarAR`
          ).value = characterData[type][indexItem].AR.farAR;
          modalContainer.querySelector(
            `#rangedWeaponsAttackRatingExtremeAR`
          ).value = characterData[type][indexItem].AR.extremeAR;

          modalContainer.querySelector(`#singleShot`).checked =
            characterData[type][indexItem].firingModes.singleShot;
          modalContainer.querySelector(`#semiAutomatic`).checked =
            characterData[type][indexItem].firingModes.semiAutomatic;
          modalContainer.querySelector(`#burstFire`).checked =
            characterData[type][indexItem].firingModes.burstFire;
          modalContainer.querySelector(`#fullAutomatic`).checked =
            characterData[type][indexItem].firingModes.fullAutomatic;

          updateRangedWeaponsDisplay();
        }

        if (type === "meleeWeapons") {
          console.log("meleeWeapons : ", type);

          const fields = [
            "Type",
            "Skill",
            "BaseConcealability",
            "Legality",
            "Availability",
            "Price",
            "Description",
          ];

          fields.forEach((field) => {
            const element = modalContainer.querySelector(`#${type}${field}`);
            if (element) {
              characterData[type][indexItem][
                field.charAt(0).toLowerCase() + field.slice(1)
              ] = element.value;
            }
          });

          modalContainer.querySelector(`#meleeWeaponsDamageValue`).value =
            characterData[type][indexItem].damage.value;
          modalContainer.querySelector(`#meleeWeaponsDamageType`).value =
            characterData[type][indexItem].damage.type;
          modalContainer.querySelector(`#meleeWeaponsSpecialDamageType`).value =
            characterData[type][indexItem].damage.special;
          modalContainer.querySelector(
            `#meleeWeaponsAttackRatingCloseAR`
          ).value = characterData[type][indexItem].AR.closeAR;
          modalContainer.querySelector(
            `#meleeWeaponsAttackRatingNearAR`
          ).value = characterData[type][indexItem].AR.nearAR;
          modalContainer.querySelector(
            `#meleeWeaponsAttackRatingMediumAR`
          ).value = characterData[type][indexItem].AR.mediumAR;
          modalContainer.querySelector(`#meleeWeaponsAttackRatingFarAR`).value =
            characterData[type][indexItem].AR.farAR;
          modalContainer.querySelector(
            `#meleeWeaponsAttackRatingExtremeAR`
          ).value = characterData[type][indexItem].AR.extremeAR;

          updateMeleeWeaponsDisplay();
        }

        if (type === "languages" || type === "knowledges") {
          if (item.level) {
            var itemLevel = characterData[type][indexItem].level;
            characterData[type][indexItem].level =
              parseInt($("input[name='chooseLevelOptions']:checked").val()) ||
              itemLevel;
          }
          updateKnowledgeDisplay();
        }

        console.log(
          "characterData[type][index] : ",
          characterData[type][indexItem]
        );
        handleDropdownModal(type);
        saveData();
        // Fermer la modale
        bsModal.hide();
      }
    );
  });
}

function removeModalClick(type, indexItem) {
  var item = characterData[type][indexItem];

  if (indexItem !== -1) {
    characterData[type].splice(indexItem, 1);
  } else {
    console.log("Array contents: ", characterData[type]);
  }

  handleDropdownModal(type);
  if (type === "qualities") {
    updateQualitiesDisplay();
    updateQualitiesKarma();
  }
  if (type === "contacts") {
    updateContactDisplay();
  }
  if (type === "rangedWeapons") {
    updateRangedWeaponsDisplay();
  }
  if (type === "meleeWeapons") {
    updateMeleeWeaponsDisplay();
  }
  if (type === "knowledges" || type === "languages") {
    updateKnowledgeDisplay();
    characterData.points.knowledges.spent =
      characterData.points.knowledges.spent - 1;
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
  var languages = [];
  languages = sortKeys(characterData.languages);
  var knowledges = [];
  knowledges = sortKeys(characterData.knowledges);

  var maxItems = Math.max(
    characterData.knowledges.length,
    characterData.languages.length
  );

  var levels = ["", "specialist", "expert", "native"];

  // Ajouter chaque connaissance et chaque langue au tableau
  for (let i = 0; i < maxItems; i++) {
    const knowledgeItem = i < knowledges.length ? knowledges[i] : null;
    const languageItem = i < languages.length ? languages[i] : null;

    const showLevel =
      languageItem && languageItem.level > 0
        ? " (" + terms[levels[languageItem.level]] + ")"
        : "";

    const knowledgeCell = knowledgeItem
      ? `<td class="knowledge-column">${capitalized(knowledgeItem.key)} 
        <span style="float: right;">
          <i class="bi bi-pencil-fill" onclick="handleItemClick('knowledges','${characterData.knowledges.indexOf(
            knowledgeItem
          )}')"></i>
          <i class="bi bi-eraser-fill" onclick="removeModalClick('knowledges','${characterData.knowledges.indexOf(
            knowledgeItem
          )}')"></i>
        </span>
        <div id="modalContainerknowledges${i}"></div></td>`
      : '<td class="knowledge-column"></td>';

    const languageCell = languageItem
      ? `<td class="language-column">${capitalized(
          languageItem.key
        )}${showLevel} 
        <span style="float: right;">
          <i class="bi bi-pencil-fill" onclick="handleItemClick('languages','${characterData.languages.indexOf(
            languageItem
          )}')"></i>
          <i class="bi bi-eraser-fill" onclick="removeModalClick('languages','${characterData.languages.indexOf(
            languageItem
          )}')"></i>
        </span>
        <div id="modalContainerlanguages${i}"></div></td>`
      : '<td class="language-column"></td>';
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
    var contacts = [];
    contacts = sortKeys(characterData.contacts);
  }

  characterData.points.contacts.base =
    characterData.attributes.charisma.value * 6;

  // Sélectionner la table
  var contactsSpentTable = $("#contactsSpent");

  // Mettre à jour le tableau
  contactsSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped"><tbody> <tr> <th scope="row">' +
      capitalized(terms.pointsToSpend) +
      '</th> <td id="contacts_max"> <span id="contactsCount" class="h6 count">' +
      Math.max(
        0,
        characterData.points.contacts.base - characterData.points.contacts.spent
      ) +
      "</span></td></tr></tbody></table>"
  );

  // Ajouter chaque contact au tableau
  for (let i = 0; i < contacts.length; i++) {
    const contactItem = i < contacts.length ? contacts[i] : null;

    let max = "",
      maxLoyalty = "",
      maxConnection = "";
    if (
      contactItem.loyalty > characterData.attributes.charisma.value ||
      contactItem.connection > characterData.attributes.charisma.value
    ) {
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

    const keyCell = contactItem
      ? `<td class="name-column h6">${capitalized(contactItem.key)}</td>`
      : '<td class="name-column h6"></td>';
    const typeCell = contactItem
      ? `<td class="type-column">${contactItem.type}</td>`
      : '<td class="type-column"></td>';
    const descriptionCell = contactItem
      ? `<td class="description-column">${contactItem.description}</td>`
      : '<td class="description-column"></td>';
    const connectionCell = contactItem
      ? `<td class="connection-column ${maxConnection}"><div>${Math.min(
          characterData.attributes.charisma.value,
          contactItem.connection
        )}</div>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button class="btn btn-outline-danger btn-xs" onclick="modifyContact('connection', '${i}', 'decrement')">-</button>
          <button class="btn btn-outline-success btn-xs" onclick="modifyContact('connection', '${i}', 'increment')">+</button>
      </div></td>`
      : '<td class="connection-column"></td>';
    const loyaltyCell = contactItem
      ? `<td class="loyalty-column ${maxLoyalty}"><div>${Math.min(
          characterData.attributes.charisma.value,
          contactItem.loyalty
        )}</div>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button class="btn btn-outline-danger btn-xs" onclick="modifyContact('loyalty', '${i}', 'decrement')">-</button>
          <button class="btn btn-outline-success btn-xs" onclick="modifyContact('loyalty', '${i}', 'increment')">+</button>
      </div></td>`
      : '<td class="loyalty-column"></td>';
    const handlerCell = contactItem
      ? `
  <td class="handler-column">
    <i class="bi bi-pencil-fill" onclick="handleItemClick('contacts','${characterData.contacts.indexOf(
      contactItem
    )}')"></i>
    <i class="bi bi-eraser-fill" onclick="removeModalClick('contacts','${characterData.contacts.indexOf(
      contactItem
    )}')"></i>
    <div id="modalContainercontacts${i}"></div>
  </td>
`
      : '<td class="handler-column"></td>';

    const rowHTML = `<tr>${keyCell}${typeCell}${descriptionCell}${connectionCell}${loyaltyCell}${handlerCell}</tr>`;
    contactsTableBody.append(rowHTML);
  }

  saveData();
}

// Fonction pour gérer le clic sur une spécialisation
function addQualitiesClick(key, description, type, karmaCost) {
  var quality = {
    key: key,
    description: description,
    type: type,
    karmaCost: parseInt(karmaCost),
  };

  characterData.qualities.push(quality);
  handleDropdownModal("qualities");
  updateQualitiesDisplay();
  updateQualitiesKarma();
  saveData();
}

function updateDisplay() {
  updateQualitiesDisplay();
  updateQualitiesKarma();
  updateContactDisplay();
  updateRangedWeaponsDisplay();
  updateMeleeWeaponsDisplay();
}

function updateRangedWeaponsDisplay() {
  var rangedWeaponsTableBody = $("#rangedWeaponsTable tbody");

  // Effacez le contenu actuel du corps du tableau
  rangedWeaponsTableBody.empty();

  // Vérifiez si characterData.qualities existe
  if (characterData.rangedWeapons) {
    // Parcourez chaque qualité dans characterData.qualities
    var rangedWeapons = [];
    rangedWeapons = sortKeys(characterData.rangedWeapons);

    rangedWeapons.forEach(function (weapon) {
      // Générez une nouvelle ligne pour chaque qualité
      var row = `
      <tr>
          <td class="name-column">${weapon.key}</td>
          <td class="type-column">${capitalized(terms[weapon.type])}</td>
          <td class="damageValue-column">${weapon.damage.value}${
        terms[weapon.damage.type + "_short"]
      }</td>
          <td class="attackRating-column">${parseInt(
            weapon.AR.closeAR
          )}/${parseInt(weapon.AR.nearAR)}/${parseInt(
        weapon.AR.mediumAR
      )}/${parseInt(weapon.AR.farAR)}/${parseInt(weapon.AR.extremeAR)}</td>
          <td class="price-column">${parseInt(weapon.price)}</td>
      <td class="handler-column">
      <i class="bi bi-pencil-fill" onclick="handleItemClick('rangedWeapons','${characterData.rangedWeapons.indexOf(
        weapon
      )}')"></i>
      <i class="bi bi-eraser-fill" onclick="removeModalClick('rangedWeapons','${characterData.rangedWeapons.indexOf(
        weapon
      )}')"></i>
      <div id="modalContainerrangedWeapons${characterData.rangedWeapons.indexOf(
        weapon
      )}"></div>
      </td>
      </tr>
      `;

      // Ajoutez la ligne au corps du tableau
      rangedWeaponsTableBody.append(row);
    });
  }

  saveData();
}

function updateMeleeWeaponsDisplay() {
  var meleeWeaponsTableBody = $("#meleeWeaponsTable tbody");

  // Effacez le contenu actuel du corps du tableau
  meleeWeaponsTableBody.empty();

  // Vérifiez si characterData.qualities existe
  if (characterData.meleeWeapons) {
    // Parcourez chaque qualité dans characterData.qualities
    var meleeWeapons = [];
    meleeWeapons = sortKeys(characterData.meleeWeapons);

    meleeWeapons.forEach(function (weapon) {
      // Générez une nouvelle ligne pour chaque qualité
      var row = `
      <tr>
          <td class="name-column">${weapon.key}</td>
          <td class="type-column">${capitalized(terms[weapon.type])}</td>
          <td class="damageValue-column">${weapon.damage.value}${
        terms[weapon.damage.type + "_short"]
      }</td>
          <td class="attackRating-column">${parseInt(
            weapon.AR.closeAR
          )}/${parseInt(weapon.AR.nearAR)}/${parseInt(
        weapon.AR.mediumAR
      )}/${parseInt(weapon.AR.farAR)}/${parseInt(weapon.AR.extremeAR)}</td>
          <td class="price-column">${parseInt(weapon.price)}</td>
      <td class="handler-column">
      <i class="bi bi-pencil-fill" onclick="handleItemClick('meleeWeapons','${characterData.meleeWeapons.indexOf(
        weapon
      )}')"></i>
      <i class="bi bi-eraser-fill" onclick="removeModalClick('meleeWeapons','${characterData.meleeWeapons.indexOf(
        weapon
      )}')"></i>
      <div id="modalContainermeleeWeapons${characterData.meleeWeapons.indexOf(
        weapon
      )}"></div>
      </td>
      </tr>
      `;

      // Ajoutez la ligne au corps du tableau
      meleeWeaponsTableBody.append(row);
    });
  }

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
          <tr class="${quality.type === "positive" ? "positive" : ""}">
            <td class="name-column">${quality.key}</td>
            <td class="description-column">${quality.description}</td>
            <td class="type-column">${capitalized(terms[quality.type])}</td>
            <td class="karmaCost-column">${parseInt(quality.karmaCost)}</td>
      <td class="handler-column">
        <i class="bi bi-pencil-fill" onclick="handleItemClick('qualities','${characterData.qualities.indexOf(
          quality
        )}')"></i>
        <i class="bi bi-eraser-fill" onclick="removeModalClick('qualities','${characterData.qualities.indexOf(
          quality
        )}')"></i>
        <div id="modalContainerqualities${characterData.qualities.indexOf(
          quality
        )}"></div>
        </td>
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
              <td class="book-column">${capitalized(terms[quality.book])} (p. ${
        quality.page
      })</td>
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
    bookFilter.append(
      `<option value="${capitalized(terms[book])}">${capitalized(
        terms[book]
      )}</option>`
    );
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
  var ID = data.split("-").pop();
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
document.addEventListener("dragend", function (event) {
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
            <h1 class="modal-title fs-5" id="catalogModalLabel">${capitalized(
              terms.qualitiesCatalog
            )}</h1>
            <button type="button" class="btn-close btn-close-white" onclick="closeCatalogPanel()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="filters">
  <input type="text" id="nameFilter" placeholder="${capitalized(
    terms.filterName
  )}">
  <select id="typeFilter">
    <option value="">${capitalized(terms.all)}</option>
    <option value="${capitalized(terms.negative)}">${capitalized(
    terms.negative
  )}</option>
    <option value="${capitalized(terms.positive)}">${capitalized(
    terms.positive
  )}</option>
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
                  <th scope="col" class="name-column h6">${capitalized(
                    terms.qualities
                  )}</th>
                  <th scope="col" class="description-column">${capitalized(
                    terms.descriptions
                  )}</th>
                  <th scope="col" class="type-column">${capitalized(
                    terms.types
                  )}</th>
                  <th scope="col" class="karmaCost-column">${capitalized(
                    terms.karmaCosts
                  )}</th>
                  <th scope="col" class="book-column">${capitalized(
                    terms.source
                  )}</th>
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

  $("#catalogQualitiesTable tbody tr").each(function () {
    var name = $(this).find(".name-column").text().toLowerCase();
    var type = $(this).find(".type-column").text();
    var karmaCost = parseInt($(this).find(".karmaCost-column").text(), 10);
    var book = $(this).find(".book-column").text().split(" ")[0].toLowerCase();

    console.log(
      "filter table : ",
      book,
      " this ",
      $(this).find(".book-column").text().toLowerCase(),
      " bookFilters ",
      bookFilters,
      " includes ",
      bookFilters.includes(book)
    );

    if (
      name.includes(nameFilter) &&
      (!typeFilter || type === typeFilter) &&
      (!karmaCostMinFilter || karmaCost >= karmaCostMinFilter) &&
      (!karmaCostMaxFilter || karmaCost <= karmaCostMaxFilter) &&
      (bookFilters.length === 0 || bookFilters.includes(book))
    ) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

function starredLanguage(cell, i) {
  var key = characterData.languages[i].key;
  var level = characterData.languages[i].level;

  if (level === 3) {
    characterData.languages[i].level = 0;
  } else {
    characterData.languages[i].level = level + 1;
  }

  updateKnowledgeDisplay();
  saveData();
}

function updateQualitiesKarma() {
  var karmaCount = 0;
  var karmaInit = characterData.points.Karma.base;

  for (let i = 0; i < characterData.qualities.length; i++) {
    if (characterData.qualities[i].type === "positive")
      karmaCount = karmaCount + parseInt(characterData.qualities[i].karmaCost);
    if (characterData.qualities[i].type === "negative")
      karmaCount = karmaCount - parseInt(characterData.qualities[i].karmaCost);
  }

  characterData.points.Karma.spent = +karmaCount;

  var qualitiesSpentTable = $(`#qualitiesSpent`); // Utilisez jQuery ici

  var maximumQualities = "";
  if (characterData.qualities.length > 6) {
    maximumQualities = `<tr><td colspan="2" class="maximum">${terms.maximumQualities}</td></tr>`;
  }

  var karma0 = "";
  if (characterData.points.Karma.base - characterData.points.Karma.spent < 0)
    karma0 = "class='maximum'";

  qualitiesSpentTable.html(
    '<table class="table table-sm table-responsive-sm table-hover table-striped"><tbody> <tr> <th scope="row">' +
      capitalized(terms.karma) +
      `</th> <td id="qualitiesKarma" ${karma0}> <span id="qualitiesCount" class="h6 count">${
        characterData.points.Karma.base - characterData.points.Karma.spent
      }</span></td></tr>${maximumQualities}</tbody></table>`
  );
}

function modifyContact(type, contact, modificator) {
  console.log(
    "modifyContact : ",
    type,
    " contact ",
    JSON.stringify(contact),
    " modificator ",
    modificator
  );

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

function modifyValue(type, element, modificator, typeKarma) {
  var selectCount = type;

  if (type === "attributes") {
    var selectCount = characterData.selectAttributeType;
  }

  var numberSpent = characterData.points[selectCount].spent;

  var rank = characterData[type][element].added + 1;
  var increment = 1;

  if (
    (type === "attributes" && characterData.selectAttributeType === "Karma") ||
    (type === "skills" && characterData.selectSkillsType === "Karma")
  ) {
    selectCount = "Karma";
    numberSpent = characterData.points.Karma.spent;
    increment = rank * 5;
  }

  console.log(
    "modifyValue : ",
    type,
    " characterData.selectAttributeType ",
    characterData.selectAttributeType,
    " characterData.selectSkillsType ",
    characterData.selectSkillsType,
    " typeKarma ",
    typeKarma,
    " selectCount ",
    selectCount
  );

  var added = characterData[type][element].added;
  if (modificator === "increment") {
    characterData[type][element].added = added + 1;
    characterData.points[selectCount].spent = numberSpent + increment;
  } else {
    characterData[type][element].added = Math.max(0, added - 1);
    characterData.points[selectCount].spent = Math.max(
      0,
      numberSpent - increment
    );
  }
  updateValues(type);
  updatePoints(type, element, modificator);
  if (type === "skills" && characterData.selectSkillsType === "Karma")
    updatePoints("Karma", element, modificator);
  saveData();
  console.log(
    "Karma : ",
    characterData.points.Karma.base - characterData.points.Karma.spent
  );
}

function updateValues(type) {
  var sorted = sortTranslated(Object.keys(characterData[type]));

  for (const s of sorted) {
    const skillsToIgnoreMap = {
      aspectMagicianSorcery: ["conjuring", "enchanting"],
      aspectedMagicianConjuring: ["sorcery", "enchanting"],
      aspectedMagicianEnchanting: ["conjuring", "sorcery"],
      adept: ["conjuring", "enchanting", "sorcery"],
    };

    if (
      (characterData[type][s.data].linkedAttribute === "magic" &&
        characterData.isMagic === false) ||
      (characterData[type][s.data].linkedAttribute === "resonance" &&
        characterData.isTechno === false) ||
      (type === "attributes" && characterData[type][s.data].base < 1) ||
      (skillsToIgnoreMap[characterData.special] &&
        skillsToIgnoreMap[characterData.special].includes(s.data))
    ) {
    } else {
      characterData[type][s.data].value =
        characterData[type][s.data].base + characterData[type][s.data].added;
      try {
        const cell = document.getElementById(s.data + "_actual");
        const span = cell.querySelector("span");
        span.textContent = characterData[type][s.data].value;
      } catch (error) {
        console.error(
          `Une erreur est survenue lors de la mise à jour de la valeur de "${s.data}" :`,
          error
        );
      }
      if (type === "attributes") {
        document
          .getElementById(s.data + "_base")
          .querySelector("span").textContent =
          characterData[type][s.data].added;
        document
          .getElementById(s.data + "_max")
          .querySelector("span").textContent = characterData[type][s.data].max;
        if (characterData.selectedCells["skills"]) {
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

  if (type === "Karma") namePoint = "skillsKarma";

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
        document
          .getElementById(`${maxElement}_max`)
          .classList.remove("maximum");
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

// Liste des éléments de menu
// Structure de données pour les sections et les éléments de menu
function menuSectionGenerate() {
  var sectionsStuffs = [
    {
      label: "combatWeapons",
      target: "collapseCombatWeapons",
      items: [
        {
          id: "buttonRangedWeapons",
          target: "collapseRangedWeapons",
          label: "rangedWeapons",
        },
        {
          id: "buttonMeleeWeapons",
          target: "collapseMeleeWeapons",
          label: "meleeWeapons",
        },
        { id: "buttonGrenades", target: "collapseGrenades", label: "grenades" },
        {
          id: "buttonProtections",
          target: "collapseProtections",
          label: "protections",
        },
        {
          id: "buttonAmmunitions",
          target: "collapseAmmunitions",
          label: "ammunitions",
        },
      ],
    },
    {
      label: "augmentations",
      target: "collapseAugmentations",
      items: [
        {
          id: "buttonAugmentations",
          target: "collapseAugmentations",
          label: "augmentations",
        },
      ],
    },
    {
      label: "vehicles",
      target: "collapseVehicles",
      items: [
        { id: "buttonVehicles", target: "collapseVehicles", label: "vehicles" },
      ],
    },
    {
      label: "otherStuff",
      target: "collapseOtherStuff",
      items: [
        { id: "buttonDrugs", target: "collapseDrugs", label: "drugs" },
        {
          id: "buttonLifestyle",
          target: "collapseLifestyle",
          label: "lifestyle",
        },
        { id: "buttonSINS", target: "collapseSINS", label: "SINS" },
        { id: "buttonStuffs", target: "collapseStuffs", label: "stuffs" },
      ],
    },
  ];

  if (characterData.isMagic) {
    var magicSection = {
      label: "magicalStuff",
      target: "collapseMagicalStuff",
      items: [],
    };

    switch (characterData.special) {
      case "adept":
        magicSection.items = [
          { id: "buttonFoci", target: "collapseFoci", label: "foci" },
          {
            id: "buttonAdeptPowers",
            target: "collapseAdeptePowers",
            label: "adeptPowers",
          },
          {
            id: "buttonMetamagics",
            target: "collapseMetamagics",
            label: "metamagics",
          },
        ];
        break;
      case "mysticAdept":
        magicSection.items = [
          { id: "buttonSpells", target: "collapseSpells", label: "spells" },
          {
            id: "buttonPreparations",
            target: "collapsePreparations",
            label: "preparations",
          },
          { id: "buttonSpirits", target: "collapseSpirits", label: "spirits" },
          { id: "buttonRituals", target: "collapseRituals", label: "rituals" },
          { id: "buttonFoci", target: "collapseFoci", label: "foci" },
          {
            id: "buttonAdeptPowers",
            target: "collapseAdeptePowers",
            label: "adeptPowers",
          },
          {
            id: "buttonMetamagics",
            target: "collapseMetamagics",
            label: "metamagics",
          },
        ];
        break;
      case "fullMagician":
        magicSection.items = [
          { id: "buttonSpells", target: "collapseSpells", label: "spells" },
          {
            id: "buttonPreparations",
            target: "collapsePreparations",
            label: "preparations",
          },
          { id: "buttonSpirits", target: "collapseSpirits", label: "spirits" },
          { id: "buttonRituals", target: "collapseRituals", label: "rituals" },
          { id: "buttonFoci", target: "collapseFoci", label: "foci" },
          {
            id: "buttonMetamagics",
            target: "collapseMetamagics",
            label: "metamagics",
          },
        ];
        break;
      case "aspectedMagicianSorcery":
        magicSection.items = [
          { id: "buttonSpells", target: "collapseSpells", label: "spells" },
          { id: "buttonRituals", target: "collapseRituals", label: "rituals" },
          { id: "buttonFoci", target: "collapseFoci", label: "foci" },
          {
            id: "buttonMetamagics",
            target: "collapseMetamagics",
            label: "metamagics",
          },
        ];
        break;
      case "aspectedMagicianConjuring":
        magicSection.items = [
          { id: "buttonSpirits", target: "collapseSpirits", label: "spirits" },
          { id: "buttonFoci", target: "collapseFoci", label: "foci" },
          {
            id: "buttonMetamagics",
            target: "collapseMetamagics",
            label: "metamagics",
          },
        ];
        break;
      case "aspectedMagicianEnchanting":
        magicSection.items = [
          {
            id: "buttonPreparations",
            target: "collapsePreparations",
            label: "preparations",
          },
          { id: "buttonFoci", target: "collapseFoci", label: "foci" },
          {
            id: "buttonMetamagics",
            target: "collapseMetamagics",
            label: "metamagics",
          },
        ];
        break;
      default:
    }
    sectionsStuffs.push(magicSection);
  }

  if (characterData.isTechno) {
    var technoSection = {
      label: "technoStuff",
      target: "collapseTechnoStuff",
      items: [
        {
          id: "buttonComplexForms",
          target: "collapseComplexForms",
          label: "complexForms",
        },
        { id: "buttonSprites", target: "collapseSprites", label: "sprites" },
        { id: "buttonEchoes", target: "collapseEchoes", label: "echoes" },
      ],
    };
    sectionsStuffs.push(technoSection);
  }

  // Vérifier que tous les labels existent dans l'objet terms
  sectionsStuffs.forEach((section) => {
    if (!terms[section.label]) {
      console.error("Label non trouvé :", section.label);
    }
    section.items.forEach((item) => {
      if (!terms[item.label]) {
        console.error("Label non trouvé :", item.label);
      }
    });
  });

  // Trier les items de chaque section par label
  sectionsStuffs.forEach((section) => {
    section.items.sort((a, b) => terms[a.label].localeCompare(terms[b.label]));
  });

  // Trier les sections par label
  //sectionsStuffs.sort((a, b) => terms[a.label].localeCompare(terms[b.label]));

  // Générer le HTML pour chaque section
  var sectionsHtml = sectionsStuffs.map(generateSectionHtml).join("");

  // Insérer le HTML dans le offcanvas-body
  document.querySelector(".offcanvas-body").innerHTML = sectionsHtml;
}

// Fonction pour générer le HTML pour un élément de menu
function generateMenuItemHtml(item, sectionTarget) {
  var targets = ["#" + item.target, "#" + sectionTarget].join(" ");
  return (
    '<li><a class="dropdown-item" href="#' +
    item.target +
    '" id="' +
    item.id +
    '" data-bs-toggle="collapse" data-bs-target="' +
    targets +
    '" aria-expanded="false" aria-controls="' +
    targets +
    '">' +
    capitalized(terms[item.label]) +
    "</a></li>"
  );
}

// Fonction pour générer le HTML pour une section
function generateSectionHtml(section) {
  if (section.items.length === 1) {
    return (
      '<div class="dropdown mt-3">' +
      '<button class="btn btn-outline-primary" type="button" id="' +
      section.items[0].id +
      '" data-bs-toggle="collapse" data-bs-target="#' +
      section.items[0].target +
      '" aria-expanded="false" aria-controls="' +
      section.items[0].target +
      '">' +
      capitalized(terms[section.items[0].label]) +
      "</button>" +
      "</div>"
    );
  }
  var itemsHtml = section.items
    .map((item) => generateMenuItemHtml(item, section.target))
    .join("");
  return (
    '<div class="dropdown mt-3">' +
    '<button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">' +
    capitalized(terms[section.label]) +
    "</button>" +
    '<ul class="dropdown-menu">' +
    itemsHtml +
    "</ul>" +
    "</div>"
  );
}

$(document).ready(function () {
  // Initialiser les compteurs pour chaque collapse de label
  var counters = {};
  $(".dropdown-item").each(function () {
    var targets = $(this).data("bs-target");
    if (targets) {
      targets = targets.split(" ");
      var labelTarget = targets[1];
      counters[labelTarget] = 0;
    }
  });

  $(".dropdown-item").on("click", function () {
    var targets = $(this).data("bs-target");
    if (targets) {
      targets = targets.split(" ");
      var itemTarget = targets[0];
      var labelTarget = targets[1];

      // Supprimer les gestionnaires d'événements précédents
      $(itemTarget).off("shown.bs.collapse");
      $(itemTarget).off("hidden.bs.collapse");

      $(itemTarget).on("shown.bs.collapse", function () {
        counters[labelTarget]++;
        if (counters[labelTarget] > 0) {
          $(labelTarget).collapse("show");
        }
      });

      $(itemTarget).on("hidden.bs.collapse", function () {
        counters[labelTarget]--;
        if (counters[labelTarget] === 0) {
          $(labelTarget).collapse("hide");
        }
      });

      // Trigger the collapse
      $(itemTarget).collapse("toggle");
    }
  });
});

// Fonction pour afficher les résultats
function showResults() {
  if (characterData.metatype || characterData.special) {
    updateSINInfo();
  }

  if (characterData.metatype) {
    console.log("characterData.metatype : ", characterData.metatype);
    characterData.SIN.metatype = getMetatypeGlobal(characterData.metatype);
    characterData.SIN.metatypeVariant = characterData.metatype;
  }

  // Affichez la colonne des resources avec séparation des unités et le symbole ¥
  const resourcesValue = characterData.prioritiesSelected["resources"];
  if (resourcesValue) {
    console.log("resourcesValue : ", resourcesValue);
    const resources = parseInt(characterData.resources); // Extrait la valeur numérique
    console.log("resources : ", resources);
    if (!isNaN(resources)) {
      const formattedRessources = resources.toLocaleString("fr-FR");
      let moneyCount = document.querySelector(".moneyCount");
      if (!moneyCount) {
        moneyCount = document.createElement("div");
        moneyCount.className = "h4 moneyCount";
        const icon = document.createElement("i");
        icon.className = "bi bi-piggy-bank";
        moneyCount.appendChild(icon);
        const moneyElement = document.createElement("span");
        moneyElement.className = "money";
        moneyElement.textContent = formattedRessources;
        moneyCount.appendChild(moneyElement);
        const symbol = document.createTextNode(" ¥");
        moneyCount.appendChild(symbol);
        document.getElementById("resourcesShow").appendChild(moneyCount);
      } else {
        const moneyElement = moneyCount.querySelector(".money");
        if (moneyElement) {
          moneyElement.textContent = formattedRessources;
        }
      }
    }
  }
}

function updateMoney(newMoneyValue) {
  let moneyCount = document.querySelector(".moneyCount");
  let moneyElement = moneyCount.querySelector(".money");
  const oldText = moneyElement.textContent.replace(/\D/g, ""); // remove non-digit characters
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
      moneyElement.textContent =
        moneyElement.textContent.substring(0, i) +
        currentNumber +
        moneyElement.textContent.substring(i + 1);
    }, 100);
  }
}

// Fonction pour sauvegarder la sélection dans un cookie
// Pour sauvegarder les données
function saveData() {
  var selectionData = { version: currentVersion, characterData };
  localStorage.setItem("selectionData", JSON.stringify(selectionData));
  var characters = JSON.parse(localStorage.getItem("characters")) || [];
  if (characters.length > 0) {
    localStorage.setItem("characters", JSON.stringify(characters));
    saveCharacterDataLongTerm(characterData);
  }

  //console.log("dataToSave : " + dataToSave);
}

// Pour charger les données
function loadData() {
  var storedData = localStorage.getItem("selectionData");
  if (storedData) {
    //console.log("storedData : ", storedData);

    var loadedData = JSON.parse(storedData);

    if (loadedData.version !== currentVersion) {
      showVersionMismatchModal(loadedData); // Affiche la modal
      return; // Arrête l'exécution de la fonction
    }

    continueLoadData(loadedData);
    var characters = JSON.parse(localStorage.getItem("characters")) || [];
    if (characters.length > 0) {
      updateCharacterList();
    }
  }
}

function continueLoadData(loadedData) {
  // Le reste de votre code ici

  if (loadedData) {
    characterData = loadedData.characterData;
    handleCharacterData(characterData);
  }
}

function loadDataCharacter(character) {
  // Le reste de votre code ici

  //console.log("loadDataCharacter : ", character);
  if (character) {
    characterData = character;

    console.log("characterData.special load Character : ", characterData);

    handleCharacterData(characterData);
  }
}

function hideIfShown(elementId) {
  var element = document.getElementById(elementId);
  if (element.classList.contains("show")) {
    var bsCollapse = new bootstrap.Collapse(element);
    bsCollapse.hide();
  }
}

function newCharacterData() {
  characterData = characterDataBackup;
  generateButtons("metatypeTitle", "metatypeButtons", "new");
  generateButtons("specialTitle", "specialButtons", "new");
  hideIfShown("collapseMetatypes");
  hideIfShown("collapseSpecials");

  handleCharacterData(characterData);
}

function handleCharacterData(characterData) {
  console.log("characterData.special 1 : ", characterData);

  // Vérifiez si les propriétés existent avant d'y accéder
  if (
    characterData.prioritiesSelected &&
    characterData.prioritiesSelected.metatypes
  ) {
    generateButtons(
      "metatypeTitle",
      "metatypeButtons",
      getMetatypesForPriority(characterData.prioritiesSelected.metatypes),
      "metatype",
      characterData.prioritiesSelected.metatypes
    );
    handleMetatypeQualities(characterData.metatypeVariant);
  }
  if (
    characterData.prioritiesSelected &&
    characterData.prioritiesSelected.magicOrResonance
  ) {
    generateButtons(
      "specialTitle",
      "specialButtons",
      [
        "adept",
        "mysticAdept",
        "fullMagician",
        "aspectedMagicianSorcery",
        "aspectedMagicianConjuring",
        "aspectedMagicianEnchanting",
        "technomancer",
      ],
      "special",
      characterData.prioritiesSelected.magicOrResonance
    );
  }

  const metatypeButtons = document.querySelectorAll("#metatypeForm button");
  const specialButtons = document.querySelectorAll("#specialForm button");

  console.log("characterData.special 2 : ", characterData);
  if (characterData.special) {
    updateButtonSelection(specialButtons, characterData.special);
    updateAttributesForSpecial(
      characterData.special,
      characterData.prioritiesSelected["magicOrResonance"]
    );
  }
  if (characterData.metatype) {
    updateButtonSelection(metatypeButtons, characterData.metatype);
  }

  showPriorities();
  const buttons = document.querySelectorAll("button");

  if (
    typeof characterData.IDselectedCells === "object" &&
    characterData.IDselectedCells !== null
  ) {
    const cells = document.querySelectorAll("td");

    cells.forEach((cell) => {
      const cellId = cell.id;

      // Vérifiez si l'ID de la cellule est une valeur dans IDselectedCells
      if (Object.values(characterData.IDselectedCells).includes(cellId)) {
        cell.classList.add("selected");
      }
    });
  }

  handleSIN();
  updateSINInfo();
  showResults();
  showAttributesToSpend();
  handleSkills();
  handleAttributes();

  updateAttributesForMetatype(characterData.metatype);
  updateValues("skills");
  updateValues("attributes");
  updateKnowledgeDisplay();
  updateKnowledgePoints();
  updateQualitiesDisplay();
  updateQualitiesKarma();
  if (
    characterData.knowledges &&
    characterData.languages &&
    characterData.qualities &&
    characterData.contacts
  ) {
    handleModals();
  } else {
    console.log(
      "Certaines données sont manquantes dans characterData :",
      characterData
    );
  }
  updatePoints("contacts");
  updateDisplay();
}

function updateButtonSelection(buttons, selectedValue) {
  buttons.forEach(function (button) {
    button.classList.remove("selected");
    if (button.getAttribute("id") === selectedValue) {
      button.classList.add("selected");
    }
  });
}

function showVersionMismatchModal(loadedData) {
  const modalHTML = `
    <div class="modal fade" id="versionMismatchModal" tabindex="-1" aria-labelledby="versionMismatchModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="margin-top: 20%;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="versionMismatchModalLabel"><i class="bi bi-info-circle-fill"></i> ${terms.mismatchVersionTitle}${terms.colons} ${loadedData.version} <i class="bi bi-arrow-right-short"></i> ${currentVersion}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            ${terms.mismatchVersion}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn btn-primary" id="continueButton">Continuer</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  var myModal = new bootstrap.Modal(
    document.getElementById("versionMismatchModal"),
    {}
  );
  myModal.show();

  document
    .getElementById("continueButton")
    .addEventListener("click", function () {
      myModal.hide();
      var storedData = localStorage.getItem("selectionData");
      if (storedData) {
        var loadedData = JSON.parse(storedData);
        continueLoadData(loadedData);
      }
    });
}
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez le bouton "reset" par son ID
  const resetButton = document.getElementById("resetButton");

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton "reset"
  resetButton.addEventListener("click", function () {
    console.log("Resetting the selection...");
    // Demandez une confirmation à l'utilisateur
    const userConfirmed = confirm(
      terms.deletionConfirmation + terms.colons + "\n" + terms.reset
    );

    if (userConfirmed) {
      // Effacez les données de localStorage
      localStorage.removeItem("selectionData");

      // Réinitialisez les valeurs
      characters = {};
      deleteAllCharacters();
      metatypeTitle.innerHTML = "";
      metatypeForm.innerHTML = "";
      specialTitle.innerHTML = "";
      specialForm.innerHTML = "";
      characterData = characterDataBackup;

      // Réinitialisez les boutons et les cellules
      const buttons = document.querySelectorAll(".btn");
      buttons.forEach((button) => {
        if (button.classList.contains("btn-primary")) {
          button.classList.remove("btn-primary");
        }
      });

      const cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => {
        if (cell.classList.contains("selected")) {
          cell.classList.remove("selected");
        }
      });

      // Rechargez la page
      window.location.reload();
    }
  });

  const exportButton = document.querySelector("#exportButton");
  exportButton.addEventListener("click", downloadFoundryData);

  const exportPDFButton = document.querySelector("#exportPDFButton");
  exportPDFButton.addEventListener("click", generatePDF);
});

function downloadFoundryData() {
  console.log("downloadFoundryData()");

  assignData(); // Appelez assignData ici

  const dataStr = JSON.stringify(foundryData, null, 2); // Convertit foundryData en JSON avec une indentation de 2 espaces
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFileDefaultName = foundryData.name + "_foundrySR6.json";

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
}

function assignData() {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0 en JavaScript
  let year = today.getFullYear();

  let dateToday = `${day}/${month}/${year}`;

  if (characterData.SIN.identity) {
    foundryData.name = characterData.SIN.identityCatalog;
    foundryData.system.biography.metatype = characterData.SIN.metatype;
    foundryData.system.biography.metatypeVariant = capitalized(
      terms[characterData.SIN.metatypeVariant]
    );
    foundryData.system.biography.alias = characterData.SIN.surname;
    foundryData.system.biography.realName =
      characterData.SIN.firstname + " " + characterData.SIN.name;
  }

  if (characterData.resources) {
    var nuyen = {
      name: "Nouveau gain",
      type: "nuyen",
      system: {
        type: "gain",
        amount: characterData.resources,
        date: dateToday,
      },
    };
    foundryData.items.push(nuyen);
  }

  if (characterData.isMagic) {
    foundryData.system.magic.type = characterData.special;
  }

  if (characterData.isTechno) {
    var persona = {
      name: terms.livingPersona,
      type: "device",
      system: {
        type: "livingPersona",
      },
    };
    foundryData.items.push(persona);
  }

  // attributes
  for (let attribute in characterData.attributes) {
    if (characterData.attributes.hasOwnProperty(attribute)) {
      foundryData.system.attributes[attribute].natural.base =
        characterData.attributes[attribute].value;
      foundryData.system.attributes[attribute].natural.max.base =
        characterData.attributes[attribute].max;
    }
  }

  // skills
  for (let skill in characterData.skills) {
    if (characterData.skills.hasOwnProperty(skill)) {
      foundryData.system.skills[skill].rank.base =
        characterData.skills[skill].value;
      if (characterData.skills[skill].specializations) {
        foundryData.system.skills[skill].specialization.first =
          characterData.skills[skill].specializations[0];
        if (characterData.skills[skill].specializations.length > 1) {
          foundryData.system.skills[skill].specialization.second =
            characterData.skills[skill].specializations[1];
          foundryData.system.skills[skill].specialization.secondIsShown = true;
        }
      }
    }
  }

  if (characterData.qualities) {
    for (let quality in characterData.qualities) {
      if (characterData.qualities.hasOwnProperty(quality)) {
        var q = {
          name: characterData.qualities[quality].key,
          type: "quality",
          system: {
            info: {
              description: characterData.qualities[quality].description,
            },
            karmaCost: characterData.qualities[quality].karmaCost,
            type: characterData.qualities[quality].type,
            isActive: true,
          },
        };
        foundryData.items.push(q);
      }
    }
  }

  if (characterData.knowledges) {
    for (let knowledge in characterData.knowledges) {
      var k = {
        name: characterData.knowledges[knowledge].key,
        type: "knowledge",
      };
      foundryData.items.push(k);
    }
  }

  if (characterData.languages) {
    for (let language in characterData.languages) {
      if (characterData.languages.hasOwnProperty(language)) {
        var l = {
          name: characterData.languages[language].key,
          type: "language",
          system: {
            isExpert:
              characterData.languages[language].level === 2 ? true : false,
            isNative:
              characterData.languages[language].level === 3 ? true : false,
            isSpecialist:
              characterData.languages[language].level === 1 ? true : false,
          },
        };
        foundryData.items.push(l);
      }
    }
  }

  if (characterData.contacts) {
    for (let contact in characterData.contacts) {
      if (characterData.contacts.hasOwnProperty(contact)) {
        var c = {
          name: characterData.contacts[contact].key,
          type: "contact",
          system: {
            info: {
              description: characterData.contacts[contact].description,
            },
            type: characterData.contacts[contact].type,
            connection: characterData.contacts[contact].connection,
            loyalty: characterData.contacts[contact].loyalty,
          },
        };
        foundryData.items.push(c);
      }
    }
  }

  if (characterData.rangedWeapons) {
    for (let weapon in characterData.rangedWeapons) {
      if (characterData.rangedWeapons.hasOwnProperty(weapon)) {
        console.log(
          "characterData.rangedWeapons[weapon].firingMode.singleShot : ",
          characterData.rangedWeapons[weapon]
        );
        var w = {
          name: characterData.rangedWeapons[weapon].key,
          type: "weapon",
          system: {
            info: {
              description: characterData.rangedWeapons[weapon].description,
            },
            conceablity: {
              base: characterData.rangedWeapons[weapon].baseConcealability,
            },
            goods: {
              price: {
                base: characterData.rangedWeapons[weapon].price,
              },
              availability: {
                base: characterData.rangedWeapons[weapon].availability,
              },
            },
            legality: characterData.rangedWeapons[weapon].legality,
            type: "rangedWeapon",
            typeSub: characterData.rangedWeapons[weapon].type,
            attackRating: {
              range: {
                close: {
                  base: characterData.rangedWeapons[weapon].AR.closeAR,
                },
                near: {
                  base: characterData.rangedWeapons[weapon].AR.nearAR,
                },
                medium: {
                  base: characterData.rangedWeapons[weapon].AR.mediumAR,
                },
                far: {
                  base: characterData.rangedWeapons[weapon].AR.farAR,
                },
                extreme: {
                  base: characterData.rangedWeapons[weapon].AR.extremeAR,
                },
              },
            },
            damage: {
              value: {
                base: characterData.rangedWeapons[weapon].damage.value,
              },
              type: characterData.rangedWeapons[weapon].damage.type,
            },
            ammo: {
              max: characterData.rangedWeapons[weapon].ammunitionMax,
              current: characterData.rangedWeapons[weapon].ammunitionMax,
              loadingMechanism:
                characterData.rangedWeapons[weapon].loadingMechanism,
            },
            firingMode: {
              singleShot: {
                available:
                  characterData.rangedWeapons[weapon].firingModes.singleShot,
              },
              semiAutomatic: {
                available:
                  characterData.rangedWeapons[weapon].firingModes.semiAutomatic,
              },
              burstFire: {
                available:
                  characterData.rangedWeapons[weapon].firingModes.burstFire,
              },
              fullyAutomatic: {
                available:
                  characterData.rangedWeapons[weapon].firingModes.fullAutomatic,
              },
            },
            test: {
              linkedSkill: characterData.rangedWeapons[weapon].skill,
              linkedSpecialization:
                weaponsToSpecializations[
                  characterData.rangedWeapons[weapon].type
                ],
            },
          },
        };
        foundryData.items.push(w);
      }
    }
  }

  if (characterData.meleeWeapons) {
    for (let weapon in characterData.meleeWeapons) {
      if (characterData.Weapons.hasOwnProperty(weapon)) {
        var item = characterData.meleeWeapons[weapon];

        var w = {
          name: item.key,
          type: "weapon",
          system: {
            info: {
              description: item.description,
            },
            conceablity: {
              base: item.baseConcealability,
            },
            goods: {
              price: {
                base: item.price,
              },
              availability: {
                base: item.availability,
              },
            },
            legality: item.legality,
            type: "meleeWeapon",
            typeSub: item.type,
            attackRating: {
              range: {
                close: {
                  base: item.AR.closeAR,
                },
                near: {
                  base: item.AR.nearAR,
                },
                medium: {
                  base: item.AR.mediumAR,
                },
                far: {
                  base: item.AR.farAR,
                },
                extreme: {
                  base: item.AR.extremeAR,
                },
              },
            },
            damage: {
              value: {
                base: item.damage.value,
              },
              type: item.damage.type,
            },
            test: {
              linkedSkill: item.skill,
              linkedSpecialization: weaponsToSpecializations[item.type],
            },
          },
        };
        foundryData.items.push(w);
      }
    }
  }
}
