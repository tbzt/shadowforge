const source = document.getElementById("priority-template").innerHTML;
// Fonction pour afficher les données des priorités
function showPriorities() {
  // Compilez le modèle Handlebars
  var template = Handlebars.compile(source);

  // Sélectionnez l'élément du corps de la table des priorités
  var tableBody = document.querySelector("#priorityTable tbody");

  const metatype_A_11 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["A"]["11"])
  );
  const metatype_A_12 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["A"]["12"])
  );
  const metatype_A_13 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["A"]["13"])
  );
  const metatype_A_14 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["A"]["14"])
  );
  const metatype_B_9 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["B"]["9"])
  );
  const metatype_B_10 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["B"]["10"])
  );
  const metatype_B_11 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["B"]["11"])
  );
  const metatype_B_12 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["B"]["12"])
  );
  const metatype_C_4 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["C"]["4"])
  );
  const metatype_C_10 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["C"]["10"])
  );
  const metatype_C_9 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["C"]["9"])
  );
  const metatype_C_8 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["C"]["8"])
  );
  const metatype_D_2 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["D"]["2"])
  );
  const metatype_D_4 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["D"]["4"])
  );
  const metatype_D_5 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["D"]["5"])
  );
  const metatype_E_1 = sortTranslated(
    [].concat(tablePrioritiesMetatypes["E"]["1"])
  );

  // Injectez les données JSON des priorités dans le modèle Handlebars
  var priorities = {
    A: {
      sumToTen: "4",
      metatypes1:
        metatype_A_14.map((item) => capitalized(item.terms)).join(", ") +
        " (14)",
      metatypes2:
        metatype_A_13.map((item) => capitalized(item.terms)).join(", ") +
        " (13)",
      metatypes3:
        metatype_A_12.map((item) => capitalized(item.terms)).join(", ") +
        " (12)",
      metatypes4:
        metatype_A_11.map((item) => capitalized(item.terms)).join(", ") +
        " (12)",
      attributes: "24",
      skills: "32",
      magicOrResonance1:
        capitalized(terms.fullMagician) +
        " & " +
        capitalized(terms.mysticAdept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 4, 8 " +
        terms.formulas,
      magicOrResonance2:
        capitalized(terms.aspectedMagician) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 5, 10 " +
        terms.formulas,
      magicOrResonance3:
        capitalized(terms.adept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 4",
      magicOrResonance4:
        capitalized(terms.technomancer) +
        terms.colons +
        " " +
        capitalized(terms.resonance) +
        " 4, 8 " +
        terms.complexForms,
      resources: "450000",
    },
    B: {
      sumToTen: "3",
      metatypes1:
        metatype_B_12.map((item) => capitalized(item.terms)).join(", ") +
        " (12)",
      metatypes2:
        metatype_B_11.map((item) => capitalized(item.terms)).join(", ") +
        " (11)",
      metatypes3:
        metatype_B_10.map((item) => capitalized(item.terms)).join(", ") +
        " (10)",
      metatypes4:
        metatype_B_9.map((item) => capitalized(item.terms)).join(", ") + " (9)",
      attributes: "16",
      skills: "24",
      magicOrResonance1:
        capitalized(terms.fullMagician) +
        " & " +
        capitalized(terms.mysticAdept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 3, 6 " +
        terms.formulas,
      magicOrResonance2:
        capitalized(terms.aspectedMagician) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 4, 8 " +
        terms.formulas,
      magicOrResonance3:
        capitalized(terms.adept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 3",
      magicOrResonance4:
        capitalized(terms.technomancer) +
        terms.colons +
        " " +
        capitalized(terms.resonance) +
        " 3, 6 " +
        terms.complexForms,
      resources: "275000",
    },
    C: {
      sumToTen: "2",
      metatypes1:
        metatype_C_10.map((item) => capitalized(item.terms)).join(", ") +
        " (10)",
      metatypes2:
        metatype_C_9.map((item) => capitalized(item.terms)).join(", ") + " (9)",
      metatypes3:
        metatype_C_8.map((item) => capitalized(item.terms)).join(", ") + " (8)",
      metatypes4:
        metatype_C_4.map((item) => capitalized(item.terms)).join(", ") + " (4)",
      attributes: "12",
      skills: "20",
      magicOrResonance1:
        capitalized(terms.fullMagician) +
        " & " +
        capitalized(terms.mysticAdept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 2, 4 " +
        terms.formulas,
      magicOrResonance2:
        capitalized(terms.aspectedMagician) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 3, 6 " +
        terms.formulas,
      magicOrResonance3:
        capitalized(terms.adept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 2",
      magicOrResonance4:
        capitalized(terms.technomancer) +
        terms.colons +
        " " +
        capitalized(terms.resonance) +
        " 2, 4 " +
        terms.complexForms,
      resources: "150000",
    },
    D: {
      sumToTen: "1",
      metatypes1:
        metatype_D_5.map((item) => capitalized(item.terms)).join(", ") + " (5)",
      metatypes2:
        metatype_D_4.map((item) => capitalized(item.terms)).join(", ") + " (4)",
      metatypes3:
        metatype_D_2.map((item) => capitalized(item.terms)).join(", ") + " (2)",
      attributes: "8",
      skills: "16",
      magicOrResonance1:
        capitalized(terms.fullMagician) +
        " & " +
        capitalized(terms.mysticAdept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 1, 2 " +
        terms.formulas,
      magicOrResonance2:
        capitalized(terms.aspectedMagician) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 2, 4 " +
        terms.formulas,
      magicOrResonance3:
        capitalized(terms.adept) +
        terms.colons +
        " " +
        capitalized(terms.magic) +
        " 1",
      magicOrResonance4:
        capitalized(terms.technomancer) +
        terms.colons +
        " " +
        capitalized(terms.resonance) +
        " 1, 2 " +
        terms.complexForms,
      resources: "50000",
    },
    E: {
      sumToTen: "0",
      metatypes:
        metatype_E_1.map((item) => capitalized(item.terms)).join(", ") + " (1)",
      attributes: "2",
      skills: "10",
      magicOrResonance: capitalized(terms.mundane),
      resources: "8000",
    },
  };

  // Générez le contenu HTML en utilisant le modèle et les données
  var html = template(priorities);

  // Affichez le contenu généré dans le corps de la table des priorités
  tableBody.innerHTML = html;
}

function selectPriority(cell, categorie, priority) {
  // Obtenir la cellule précédemment sélectionnée dans la même catégorie
  let previousSelectedCell = characterData.selectedCells[categorie];

  // Si une cellule était précédemment sélectionnée, la désélectionner
  if (previousSelectedCell) {
    if (previousSelectedCell.classList) {
      previousSelectedCell.classList.remove("selected");
    }
  }

  // Mettre à jour la cellule sélectionnée dans la catégorie globale
  characterData.selectedCells[categorie] = cell;

  // Mettre à jour la cellule sélectionnée dans la catégorie globale
  characterData.IDselectedCells[categorie] = cell.id;

  
  // Mettre à jour la sélection
  characterData.selectedCells[categorie].classList.add("selected");

  // Mettre à jour la priorité sélectionnée
  characterData.prioritiesSelected[categorie] = `${priority}`;
  characterData.actualPriority = priority; // Mettre à jour la priorité actuelle

  // Afficher les attributes si leur priorité est sélectionnée
  if (categorie === "attributes") {
    var attributeTitle = document.getElementById("attributeTitle");
    attributeTitle.style.display = "block"; // Afficher la section des attributes
    showAttributesToSpend();
  }

  if (characterData.selectedCells["attributes"]) {
    handleAttributes();
    updateValues("attributes");
  }
  if (characterData.selectedCells["skills"]) {
    handleSkills();
    updateValues("skills");
  }
  if (categorie === "resources") {
    characterData.resources = parseFloat(cell.innerHTML);
    var moneyElement = document.querySelector('.money');
    if (moneyElement) {
    updateMoney(characterData.resources);
    }
  }
  saveData();
  countSumToTen();

  // Afficher les résultats
  showResults();
  // Appeler la fonction pour générer les boutons en fonction de la priorité sélectionnée

  if (categorie === "metatypes")
    generateButtons(
      "metatypeTitle",
      "metatypeButtons",
      getMetatypesForPriority(characterData.prioritiesSelected.metatypes),
      "metatype",
      characterData.prioritiesSelected.metatypes
    ); // Utiliser la priorité actuelle
  if (categorie === "magicOrResonance")
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
    ); // Utiliser la priorité actuelle
}
function countSumToTen() {
  var sumToTenCount = document.getElementById('sumToTenCount');
  var sumMetatype = getSumToTen(characterData.prioritiesSelected.metatypes);
  var sumAttributes = getSumToTen(characterData.prioritiesSelected.attributes);
  var sumSkills = getSumToTen(characterData.prioritiesSelected.skills);
  var sumMagicOrResonance = getSumToTen(characterData.prioritiesSelected.magicOrResonance);
  var sumResources = getSumToTen(characterData.prioritiesSelected.resources);
  sumToTenCount.innerText = 10 - sumMetatype - sumAttributes - sumSkills - sumMagicOrResonance - sumResources;
};

function getSumToTen(priority) {
  switch (priority) {
    case 'A':
      return 4;
    case 'B':
      return 3;
    case 'C':
      return 2;
    case 'D':
      return 1;
    case 'E':
      return 0;
    default:
      return 0;
}
};

const tablePrioritiesMetatypes = {
  A: {
    11: ["naga"],
    12: ["hanuman", "menehune", "pixie"],
    13: [
      "dwarf",
      "duende",
      "gnome",
      "koborokuru",
      "hobgobelin",
      "ogre",
      "satyr",
      "cyclops",
      "centaur",
      "merrow",
      "minotaur",
      "oni",
      "troll",
    ],
    14: ["fomorian", "giant", "sasquatch"],
  },
  B: {
    9: ["naga"],
    10: ["nocturna", "xapiri_thepe", "hanuman", "menehune", "pixie"],
    11: [
      "elf",
      "dalakitnon",
      "dryad",
      "valkyrie",
      "dwarf",
      "duende",
      "gnome",
      "koborokuru",
      "ork",
      "hobgobelin",
      "ogre",
      "oni",
      "satyr",
      "troll",
      "cyclops",
      "fomorian",
      "giant",
      "minotaur",
      "centaur",
      "sasquatch",
      "merrow",
    ],
    12: ["wakyambi"],
  },
  C: {
    4: ["naga"],
    8: ["nocturna", "xapiri_thepe"],
    9: [
      "elf",
      "dalakitnon",
      "dryad",
      "wakyambi",
      "human",
      "dwarf",
      "duende",
      "gnome",
      "hanuman",
      "koborokuru",
      "menehune",
      "ork",
      "hobgobelin",
      "ogre",
      "oni",
      "satyr",
      "troll",
      "cyclops",
      "fomorian",
      "giant",
      "minotaur",
      "centaur",
      "pixie",
      "sasquatch",
      "merrow",
    ],
    10: ["nartaki", "valkyrie"],
  },
  D: {
    2: ["naga"],
    4: [
      "elf",
      "dalakitnon",
      "dryad",
      "nocturna",
      "xapiri_thepe",
      "wakyambi",
      "human",
      "dwarf",
      "duende",
      "gnome",
      "hanuman",
      "koborokuru",
      "menehune",
      "ork",
      "hobgobelin",
      "ogre",
      "oni",
      "satyr",
      "troll",
      "cyclops",
      "fomorian",
      "giant",
      "minotaur",
      "centaur",
      "pixie",
      "sasquatch",
      "nartaki",
      "valkyrie",
    ],
    5: ["merrow"],
  },
  E: {
    1: [
      "elf",
      "dalakitnon",
      "dryad",
      "nocturna",
      "xapiri_thepe",
      "human",
      "dwarf",
      "duende",
      "gnome",
      "hanuman",
      "koborokuru",
      "minotaur",
      "hobgobelin",
      "ork",
      "ogre",
      "oni",
      "troll",
      "cyclops",
      "giant",
    ],
  },
};

const checkAdjustmentByMetatype = {};
const checkPriorities = ["A", "B", "C", "D", "E"];
const checkAdjustment = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Parcourez les priorités
for (const priority of checkPriorities) {
  // Parcourez les ajustements pour chaque priorité
  for (const adjustment of checkAdjustment) {
    // Vérifiez si le métatype pour la priorité et l'ajustement existe
    for (const metatype in tablePrioritiesMetatypes[priority][adjustment]) {
      if (
        tablePrioritiesMetatypes[priority] &&
        tablePrioritiesMetatypes[priority][adjustment] &&
        tablePrioritiesMetatypes[priority][adjustment][metatype]
      ) {
        // Créez un objet avec les clés nécessaires
        const keyMetatype =
          tablePrioritiesMetatypes[priority][adjustment][metatype];

        if (!checkAdjustmentByMetatype[keyMetatype]) {
          checkAdjustmentByMetatype[keyMetatype] = {
            priority: priority,
            adjustment: adjustment,
          };
        }
      }
    }
  }
}

const prio_A = [].concat(...Object.values(tablePrioritiesMetatypes["A"]));
const prio_B = [].concat(...Object.values(tablePrioritiesMetatypes["B"]));
const prio_C = [].concat(...Object.values(tablePrioritiesMetatypes["C"]));
const prio_D = [].concat(...Object.values(tablePrioritiesMetatypes["D"]));
const prio_E = [].concat(...Object.values(tablePrioritiesMetatypes["E"]));

function getPriorityValue(priority, metatype) {
  switch (priority) {
    case 'A':
      return Object.keys(tablePrioritiesMetatypes.A).find(key => tablePrioritiesMetatypes.A[key].includes(metatype));
    case 'B':
      return Object.keys(tablePrioritiesMetatypes.B).find(key => tablePrioritiesMetatypes.B[key].includes(metatype));
    case 'C':
      return Object.keys(tablePrioritiesMetatypes.C).find(key => tablePrioritiesMetatypes.C[key].includes(metatype));
    case 'D':
      return Object.keys(tablePrioritiesMetatypes.D).find(key => tablePrioritiesMetatypes.D[key].includes(metatype));
    case 'E':
      return Object.keys(tablePrioritiesMetatypes.E).find(key => tablePrioritiesMetatypes.E[key].includes(metatype));
    default:
      return null;
  }
}
