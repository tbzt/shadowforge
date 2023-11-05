document.addEventListener("DOMContentLoaded", function () {
  chargerSelectionDepuisCookie();
});

let prioritesSelectionnees = {
  metatypes: null,
  attributs: null,
  competences: null,
  magie_ou_resonnance: null,
  ressources: null,
};

let selectedMetatype = null;
let metatypeSelected = false;

let selectedSpecial = null;

let pointsAttributsDepenses = 0;

let SIN = [];

let prioriteActuelle = null; // Ajout d'une variable pour suivre la priorité actuelle

// Ajout d'une variable pour suivre le bouton de métatype sélectionné
let selectedMetatypeButton = null;
let selectedSpecialButton = null;

// Variables globales pour suivre les cellules sélectionnées dans chaque catégorie
let selectedCells = {
  metatypes: null,
  attributs: null,
  competences: null,
  magie_ou_resonnance: null,
  ressources: null,
};

let IDselectedCells = {
  metatypes: null,
  attributs: null,
  competences: null,
  magie_ou_resonnance: null,
  ressources: null,
};

// Objet pour stocker les valeurs d'attributs de base et de max en fonction du métatype
const attributsData = {
  constitution: {
    base: 1,
    value: 1,
    max: 6,
  },
  agilite: {
    base: 1,
    value: 1,
    max: 6,
  },
  reaction: {
    base: 1,
    value: 1,
    max: 6,
  },
  force: {
    base: 1,
    value: 1,
    max: 6,
  },
  volonte: {
    base: 1,
    value: 1,
    max: 6,
  },
  logique: {
    base: 1,
    value: 1,
    max: 6,
  },
  intuition: {
    base: 1,
    value: 1,
    max: 6,
  },
  charisme: {
    base: 1,
    value: 1,
    max: 6,
  },
  atout: {
    base: 1,
    value: 1,
    max: 6,
  },
  magie: {
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

// Écoutez les événements "input" sur les champs de texte
const prenomInput = document.getElementById("prenom");
const surnomInput = document.getElementById("surnom");
const nomInput = document.getElementById("nom");
const identity = document.getElementById("identity");

prenomInput.addEventListener("input", afficherInformationsPersonne);
surnomInput.addEventListener("input", afficherInformationsPersonne);
nomInput.addEventListener("input", afficherInformationsPersonne);

function afficherInformationsPersonne() {
  const prenom = prenomInput.value;
  const surnom = surnomInput.value;
  const nom = nomInput.value;

  if (!surnom && (prenom || nom)) {
    identity.innerHTML = `
            <h5>Identité :</h5>
            <p>${prenom || ""} ${surnom || ""} ${nom || ""}</p>
        `;
  } else if (surnom) {
    identity.innerHTML = `
            <h5>Identité :</h5>
            <p>${prenom || ""} ${'"' + surnom + '"' || ""} ${nom || ""}</p>
        `;
  } else {
    identity.innerHTML = "";
  }

  // Mettez à jour le tableau SIN avec une seule entrée
  SIN = [
    {
      prenom,
      surnom,
      nom,
    },
  ];
  console.log(JSON.stringify(SIN));
  sauvegarderSelectionDansCookie();
}

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

function selectPriorite(cell, categorie, priority) {
  console.log("selectPriorite : " + cell);

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
  prioritesSelectionnees[
    categorie
  ] = `${categories[categorie]} : ${cell.textContent} (${priority})`;
  prioriteActuelle = priority; // Mettre à jour la priorité actuelle

  // Mettre à jour le bouton de métatype sélectionné (si un bouton est déjà sélectionné)
  if (selectedMetatypeButton) {
    selectedMetatypeButton.classList.remove("selected");
    console.log(
      `Désélection du métatype : ${selectedMetatypeButton.textContent}`
    );
    selectedMetatypeButton = null;
  }

  updateAttributsDisplay();
  sauvegarderSelectionDansCookie();

  // Afficher les résultats
  afficherResultats();
  // Appeler la fonction pour générer les boutons en fonction de la priorité sélectionnée
  if (categorie === "metatypes") generateMetatypeButtons(prioriteActuelle); // Utiliser la priorité actuelle
  if (categorie === "magie_ou_resonnance")
    generateSpecialButtons(prioriteActuelle); // Utiliser la priorité actuelle
}

// Section : Initialisation des catégories
const categories = {
  metatypes: "Métatypes",
  attributs: "Attributs",
  competences: "Compétences",
  magie_ou_resonnance: "Magie ou Résonance",
  ressources: "Ressources",
};

// Fonction pour générer des boutons en ligne en fonction de la priorité sélectionnée
function generateMetatypeButtons(priorite) {
  console.log("generateMetatypeButtons:", priorite);

  const metatypeTitle = document.getElementById("metatypeTitle");
    metatypeTitle.style.display = "block"; 
 
  const metatypeForm = document.getElementById("metatypeButtons");

  // Récupérer l'option de métatype sélectionnée actuellement
  const selectedMetatype = metatypeForm.querySelector("button.selected");

  const metatypes = getMetatypesForPriority(priorite);

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
      updateAttributsForMetatype(button.textContent);
      afficherResultats();
      metatypeSelected = true;
      afficherAttributs();
      console.log(`Bouton de métatype cliqué : ${button.textContent}`);
    });
  });
}

// Fonction pour obtenir les métatypes en fonction de la priorité
function getMetatypesForPriority(priorite) {
  if (priorite === "A") return ["Nain", "Ork", "Troll"];
  if (priorite === "B") return ["Nain", "Elfe", "Ork", "Troll"];
  if (priorite === "C" || priorite === "D" || priorite === "E")
    return ["Nain", "Elfe", "Humain", "Ork", "Troll"];
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
  sauvegarderSelectionDansCookie();
}

// Fonction pour générer des boutons en ligne en fonction de la priorité sélectionnée
function generateSpecialButtons(priorite) {
  console.log("generateSpecialButtons:", priorite);

  const specialTitle = document.getElementById("specialTitle");
  const specialForm = document.getElementById("specialButtons");

  if (priorite === "E") {
    
    specialTitle.style.display = "none"; 
    specialForm.innerHTML = "";
  } else {
    specialTitle.style.display = "block"; 
    // Récupérer l'option de métatype sélectionnée actuellement
    const selectedSpecial = specialForm.querySelector("button.selected");

    const specials = [
      "Adepte",
      "Adepte mystique",
      "Magicien pur",
      "Magicien spécialisé",
      "Technomancien",
    ];

    // Créez des boutons en ligne pour chaque métatype
    specialForm.innerHTML = ""; // Supprimez les options de métatype existantes

    specials.forEach((special) => {
      const button = document.createElement("button");
      button.textContent = special;
      button.classList.add("special-button");
      button.classList.add("btn-outline-primary");
      button.classList.add("btn");
      button.setAttribute("id", special);

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
      }

      // Ajoutez un gestionnaire d'événements pour surveiller les sélections
      button.addEventListener("click", function (event) {
        event.preventDefault();
        handleSpecialButtonClick(button, specialForm);
        updateAttributsForSpecial(button.textContent, priorite);
        afficherResultats();
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
    console.log(`Bouton de spécial sélectionné : ${button.textContent}`);
  }
  selectedSpecial = button.textContent;
  sauvegarderSelectionDansCookie();
}

// Définissez une fonction pour afficher ou masquer les attributs en fonction de la sélection de métatype.
function afficherAttributs() {
  var attributsSection = document.getElementById("attributs");

  console.log("afficherAttributs:", metatypeSelected);

  if (metatypeSelected) {
    attributsSection.style.display = "block"; // Afficher la section des attributs
  } else {
    attributsSection.style.display = "none"; // Masquer la section des attributs
  }
}

// Appelez la fonction pour afficher les attributs au chargement de la page (ou en réponse à un événement de sélection).
window.onload = function () {
  afficherAttributs();
};

// Fonction pour ajouter les traits automatiques en fonction du métatype
function handleMetatypeQualities(metatype) {
  if (metatype === "Nain")
    return ["Résistance aux toxines", "Vision thermographique"];
  if (metatype === "Elfe") return ["Vision nocturne"];
  if (metatype === "Ork") return ["Vision nocturne", "Robuste 1"];
  if (metatype === "Troll")
    return ["Dépôts dermiques", "Vision thermographique", "Robuste 2"];
  return [];
}

function ajouterClassePostCookie() {
  for (var cat in IDselectedCells) {
    let cell = document.getElementById(IDselectedCells[cat]);
    if (cell) {
      cell.classList.add("selected");
    }
  }
  let metatypeButton = document.getElementById(selectedMetatype);
  if (metatypeButton) metatypeButton.classList.add("selected");
}

function supprimerClassePostCookie() {
  for (var cat in IDselectedCells) {
    let cell = document.getElementById(IDselectedCells[cat]);
    if (cell) {
      cell.classList.remove("selected");
    }
  }
}

function ajouterSINPostCookie() {
  const identity = document.getElementById("identity");

  if (SIN.length > 0) {
    const prenom = SIN[0].prenom || "";
    const surnom = SIN[0].surnom || "";
    const nom = SIN[0].nom || "";

    if (!surnom && (prenom || nom)) {
      identity.innerHTML = `
                <h5>Identité :</h5>
                <p>${prenom || ""} ${surnom || ""} ${nom || ""}</p>
            `;
    } else if (surnom) {
      identity.innerHTML = `
                <h5>Identité :</h5>
                <p>${prenom || ""} ${'"' + surnom + '"' || ""} ${nom || ""}</p>
            `;
    } else {
      identity.innerHTML = "";
    }
  }
}

// Fonction pour mettre à jour les valeurs d'attributs en fonction du métatype
function updateAttributsForMetatype(metatype) {
  if (metatype === "Nain") {
    attributsData.constitution.max = 7;
    attributsData.agilite.max = 6;
    attributsData.reaction.max = 5;
    attributsData.force.max = 8;
    attributsData.volonte.max = 7;
    attributsData.logique.max = 6;
    attributsData.intuition.max = 6;
    attributsData.charisme.max = 6;
    attributsData.atout.max = 6;
  } else if (metatype === "Elfe") {
    attributsData.constitution.max = 6;
    attributsData.agilite.max = 7;
    attributsData.reaction.max = 6;
    attributsData.force.max = 6;
    attributsData.volonte.max = 6;
    attributsData.logique.max = 6;
    attributsData.intuition.max = 6;
    attributsData.charisme.max = 8;
    attributsData.atout.max = 6;
  } else if (metatype === "Ork") {
    attributsData.constitution.max = 8;
    attributsData.agilite.max = 6;
    attributsData.reaction.max = 6;
    attributsData.force.max = 8;
    attributsData.volonte.max = 6;
    attributsData.logique.max = 6;
    attributsData.intuition.max = 6;
    attributsData.charisme.max = 5;
    attributsData.atout.max = 6;
  } else if (metatype === "Troll") {
    attributsData.constitution.max = 9;
    attributsData.agilite.max = 5;
    attributsData.reaction.max = 6;
    attributsData.force.max = 9;
    attributsData.volonte.max = 6;
    attributsData.logique.max = 6;
    attributsData.intuition.max = 6;
    attributsData.charisme.max = 5;
    attributsData.atout.max = 6;
  } else if (metatype === "Humain") {
    attributsData.constitution.max = 6;
    attributsData.agilite.max = 6;
    attributsData.reaction.max = 6;
    attributsData.force.max = 6;
    attributsData.volonte.max = 6;
    attributsData.logique.max = 6;
    attributsData.intuition.max = 6;
    attributsData.charisme.max = 6;
    attributsData.atout.max = 7;
  }

  updateAttributsDisplay();
}

// Fonction pour mettre à jour les valeurs d'attributs en fonction du métatype
function updateAttributsForSpecial(special, priorite) {
  if (priorite === "A") {
    if (
      special === "Magicien pur" ||
      special === "Adepte mystique" ||
      special === "Adepte"
    ) {
      attributsData.magie.base = 4;
    } else if (special === "Magicien spécialisé") {
      attributsData.magie.base = 5;
    } else if (special === "Technomancien") {
      attributsData.resonance.base = 4;
    }
  }
  if (priorite === "B") {
    if (special === "Magicien pur") {
      if (
        special === "Magicien pur" ||
        special === "Adepte mystique" ||
        special === "Adepte"
      ) {
        attributsData.magie.base = 3;
      } else if (special === "Magicien spécialisé") {
        attributsData.magie.base = 4;
      } else if (special === "Technomancien") {
        attributsData.resonance.base = 3;
      }
    }
  }
  if (priorite === "C") {
    if (
      special === "Magicien pur" ||
      special === "Adepte mystique" ||
      special === "Adepte"
    ) {
      attributsData.magie.base = 2;
    } else if (special === "Magicien spécialisé") {
      attributsData.magie.base = 3;
    } else if (special === "Technomancien") {
      attributsData.resonance.base = 2;
    }
  }
  if (priorite === "D") {
    if (
      special === "Magicien pur" ||
      special === "Adepte mystique" ||
      special === "Adepte"
    ) {
      attributsData.magie.base = 1;
    } else if (special === "Magicien spécialisé") {
      attributsData.magie.base = 2;
    } else if (special === "Technomancien") {
      attributsData.resonance.base = 1;
    }
  }

  updateAttributsDisplay();
}

function handleAttributs() {
  // Sélectionnez le tableau des attributs par son ID
  var attributTable = document.getElementById("attributTable");
  // Sélectionnez le corps du tableau
  var attributTableBody = attributTable.querySelector("tbody");

  // Données JSON pour les attributs
  var attributs = [
    {
      id: "constitution",
      value: attributsData.constitution.base,
    },
    {
      id: "agilite",
      value: attributsData.agilite.base,
    },
    {
      id: "reaction",
      value: attributsData.reaction.base,
    },
    {
      id: "force",
      value: attributsData.force.base,
    },
    {
      id: "volonte",
      value: attributsData.volonte.base,
    },
    {
      id: "logique",
      value: attributsData.logique.base,
    },
    {
      id: "intuition",
      value: attributsData.intuition.base,
    },
    {
      id: "charisme",
      value: attributsData.charisme.base,
    },
    {
      id: "atout",
      value: attributsData.atout.base,
    },
    {
      id: "magie",
      value: attributsData.magie.base,
    },
    {
      id: "resonance",
      value: attributsData.resonance.base,
    },
  ];

  // Générez le contenu HTML en utilisant le modèle et les données
  var attributHTML = "";
  attributs.forEach(function (attribut) {
    var capitalizedId =
      attribut.id.charAt(0).toUpperCase() + attribut.id.slice(1);
    attributHTML += `
            <tr>
                <th scope="row">${capitalizedId}</th>
                <td>
                    <div id="${attribut.id}_base"><span>${attribut.value}</span></div>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <button class="btn btn-outline-danger btn-xs" onclick="decrementAttribut('${attribut.id}', 1)">-</button>
                        <button class="btn btn-outline-success btn-xs" onclick="incrementAttribut('${attribut.id}', 1)">+</button>
                    </div>
                </td>
                <td id="${attribut.id}_actuel"><span class="h6">${attribut.value}</span></td>
                <td id="${attribut.id}_max"><span class="h6"></span></td>
            </tr>
        `;
  });

  // Affichez le contenu généré dans le corps du tableau des attributs
  attributTableBody.innerHTML = attributHTML;
}

// Fonction pour mettre à jour les éléments HTML en fonction des données d'attributs
function updateAttributsDisplay() {
  for (const attribut in attributsData) {
    let attribut_base = document
      .getElementById(attribut + "_base")
      .querySelector("span");
    let attribut_actuel = document
      .getElementById(attribut + "_actuel")
      .querySelector("span");
    let attribut_max = document
      .getElementById(attribut + "_max")
      .querySelector("span");
    if (attributsData[attribut].base > attributsData[attribut].value)
      attributsData[attribut].value = attributsData[attribut].base;
    attribut_base.textContent = attributsData[attribut].base;
    attribut_max.textContent = attributsData[attribut].max;
    attribut_actuel.textContent = attributsData[attribut].value;
  }
}

// Déclarer la variable pour stocker le type d'attribut sélectionné
let selectedAttributType = "Prio";

// Déclarer la variable depenseAttributs en tant que variable globale
let depenseAttributs;

// Fonction pour afficher le nombre de points d'attributs à dépenser
function showDepenseAttribut() {
  console.log(
    "showDepenseAttribut - selectedAttributType 1 :",
    selectedAttributType
  );

  let nbAttributsDepensePrio = getAttributsDepensePrio(
    IDselectedCells.attributs
  );
  let nbAttributsDepenseAjustement = getAttributsDepenseAjuste(
    IDselectedCells.metatypes
  );

  depenseAttributs = document.getElementById("attributs_depenses"); // Mettre à jour la variable globale depenseAttributs
  console.log("showDepenseAttribut - depenseAttributs 2 :", depenseAttributs);

  depenseAttributs.innerHTML =
    ' <table class="table"><thead> <tr> <th scope="col"></th> <th scope="col">Attributs</th> <th scope="col">Ajustement</th></tr> </thead><tbody> <tr> <th scope="row">Points à dépenser</th> <td id="CellAttributsDepensePrio" class="selectable selected" onclick="selectAttributType(this, \'Prio\')"><span id="nbAttributsDepensePrio">' +
    nbAttributsDepensePrio +
    '</span></td> <td id="CellAttributsDepenseAjustement" class="selectable" onclick="selectAttributType(this, \'Ajustement\')"><span id="nbAttributsDepenseAjustement">' +
    nbAttributsDepenseAjustement +
    "</span></td> </tr></tbody></table>";
}

// Fonction pour sélectionner le type d'attribut
function selectAttributType(cell, type) {
  console.log("selectAttributType : " + type);
  const classAttributPrio = document.getElementById(`CellAttributsDepensePrio`);
  const classAttributAjustement = document.getElementById(
    `CellAttributsDepenseAjustement`
  );
  if (type === "Prio") {
    classAttributPrio.classList.add("selected");
    if (classAttributAjustement.classList.contains("selected"))
      classAttributAjustement.classList.remove("selected");
  }
  if (type === "Ajustement") {
    classAttributAjustement.classList.add("selected");
    if (classAttributPrio.classList.contains("selected"))
      classAttributPrio.classList.remove("selected");
  }
  selectedAttributType = type;
}

// Fonction pour incrémenter une valeur attribut
function incrementAttribut(attribut, increment) {
  attributsData[attribut].value += increment;
  const cell = document.getElementById(attribut + "_actuel");
  const span = cell.querySelector("span");
  span.textContent = attributsData[attribut].value;

  //checher la source

  // Mettre à jour le nombre de points d'attributs dépensés
  updateAttributsPoints("increment", increment, selectedAttributType, attribut);
}

// Fonction pour décrémenter une valeur attribut
function decrementAttribut(attribut, decrement) {
  var currentValue = attributsData[attribut].value;
  attributsData[attribut].value -= decrement;
  const cell = document.getElementById(attribut + "_actuel");
  const span = cell.querySelector("span");
  if (currentValue >= decrement) {
    span.textContent = attributsData[attribut].value;

    // Mettre à jour le nombre de points d'attributs dépensés
    updateAttributsPoints(
      "decrement",
      decrement,
      selectedAttributType,
      attribut
    );
  }
}

let pointsAttributsDepensesPrio = 0; // Initialisation de la réserve Prio
let pointsAttributsDepensesAjustement = 0; // Initialisation de la réserve Ajustement

function updateAttributsPoints(type, valeur, selectedAttributType, attribut) {
  // Obtenez le nombre d'attributs dépensés en fonction du type (Prio ou Ajustement)
  let nbAttributsDepense = 0;
  if (selectedAttributType === "Prio") {
    nbAttributsDepense = getAttributsDepensePrio(IDselectedCells.attributs);
  } else if (selectedAttributType === "Ajustement") {
    nbAttributsDepense = getAttributsDepenseAjuste(IDselectedCells.metatypes);
  }

  if (type === "increment") {
    // Vérifiez si l'incrémentation dépasse le maximum d'attributs
    if (selectedAttributType === "Prio") {
      pointsAttributsDepensesPrio -= valeur;
    } else if (selectedAttributType === "Ajustement") {
      pointsAttributsDepensesAjustement -= valeur;
    }
  } else if (type === "decrement") {
    if (selectedAttributType === "Prio") {
      pointsAttributsDepensesPrio += valeur;
    } else if (selectedAttributType === "Ajustement") {
      pointsAttributsDepensesAjustement += valeur;
    }
  }

  // Mettez à jour le span avec le nombre de points d'attributs dépensés en fonction du type
  const depenseAttributs = document.getElementById(
    `nbAttributsDepense${selectedAttributType}`
  );

  // Mettez à jour le texte avec la nouvelle valeur
  if (selectedAttributType === "Prio") {
    depenseAttributs.textContent =
      nbAttributsDepense + pointsAttributsDepensesPrio;
  } else if (selectedAttributType === "Ajustement") {
    depenseAttributs.textContent =
      nbAttributsDepense + pointsAttributsDepensesAjustement;
  }

  // Vérifiez si la valeur dépensée est supérieure au maximum et ajoutez la classe "btn btn-outline-danger"
  console.log(`${attribut}_max`);
  const maxAttribut = document.getElementById(`${attribut}_max`);
  if (attributsData[attribut].value > attributsData[attribut].max) {
    maxAttribut.classList.add("maximum");
  } else {
    maxAttribut.classList.remove("maximum");
  }

  var cellDepensePrio = document.getElementById(`CellAttributsDepensePrio`);
  var cellDepenseAjustement = document.getElementById(
    `CellAttributsDepenseAjustement`
  );

  console.log(
    "nbAttributsDepense Prio : ",
    nbAttributsDepense,
    "pointsAttributsDepensesPrio : ",
    pointsAttributsDepensesPrio,
    "Calcul : ",
    nbAttributsDepense + pointsAttributsDepensesPrio
  );

  if (nbAttributsDepense + pointsAttributsDepensesPrio < 0) {
    console.log("Trop de dépense en prio : ", cellDepensePrio);
    cellDepensePrio.classList.add("maximum");
  } else {
    cellDepensePrio.classList.remove("maximum");
  }

  if (nbAttributsDepense + pointsAttributsDepensesAjustement < 0) {
    console.log("Trop de dépense en ajustement : ", cellDepenseAjustement);
    cellDepenseAjustement.classList.add("maximum");
  } else {
    cellDepenseAjustement.classList.remove("maximum");
  }
}

function getAttributsDepensePrio(priorite) {
  if (priorite === "attributs_A") return 24;
  else if (priorite === "attributs_B") return 16;
  else if (priorite === "attributs_C") return 12;
  else if (priorite === "attributs_D") return 8;
  else if (priorite === "attributs_E") return 2;
  else
    console.log(
      "function getAttributsDepensePrio(priorite) ne contient pas la bonne propriété en paramètre : " +
        priorite
    );
}

function getAttributsDepenseAjuste(priorite) {
  if (priorite === "metatypes_A") return 13;
  else if (priorite === "metatypes_B") return 11;
  else if (priorite === "metatypes_C") return 9;
  else if (priorite === "metatypes_D") return 4;
  else if (priorite === "metatypes_E") return 1;
  else
    console.log(
      "function getAttributsDepenseAjuste(priorite) ne contient pas la bonne propriété en paramètre : " +
        priorite
    );
}

// Fonction pour afficher les résultats
function afficherResultats() {
  const resultat = document.getElementById("resultat");
  resultat.innerHTML = "<h5>Priorités sélectionnées :</h5>";

  for (const categorie in prioritesSelectionnees) {
    const priorite = prioritesSelectionnees[categorie];
    if (priorite) {
      resultat.innerHTML += `<p>${priorite}</p>`;
    }
  }

  if (prioritesSelectionnees["attributs"]) {
    showDepenseAttribut();
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

  // Affichez la colonne des ressources avec séparation des unités et le symbole ¥
  const ressourcesValue = prioritesSelectionnees["ressources"];
  if (ressourcesValue) {
    const ressources = parseInt(ressourcesValue.split(" ")[1]); // Extrait la valeur numérique
    if (!isNaN(ressources)) {
      resultat.innerHTML += "<h5>Ressources :</h5>";
      const formattedRessources = ressources.toLocaleString("fr-FR", {
        style: "currency",
        currency: "JPY",
      });
      resultat.innerHTML += `<p>${formattedRessources}</p>`;
    }
  }
}

// Fonction pour sauvegarder la sélection dans un cookie
function sauvegarderSelectionDansCookie() {
  const dataToSave = JSON.stringify({
    selectedCells,
    IDselectedCells,
    prioritesSelectionnees,
    prioriteActuelle,
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
function chargerSelectionDepuisCookie() {
  const cookieData = document.cookie
    .split("; ")
    .find((row) => row.startsWith("selectionData="));

  if (cookieData) {
    const dataToLoad = cookieData.split("=")[1];
    const loadedData = JSON.parse(dataToLoad);

    if (loadedData) {
      selectedCells = loadedData.selectedCells;
      IDselectedCells = loadedData.IDselectedCells;
      prioritesSelectionnees = loadedData.prioritesSelectionnees;
      prioriteActuelle = loadedData.prioriteActuelle;
      selectedMetatype = loadedData.selectedMetatype;
      SIN = loadedData.SIN;
      generateMetatypeButtons(prioriteActuelle);
      handleMetatypeQualities(selectedMetatype);
      afficherResultats();
      ajouterClassePostCookie();
      ajouterSINPostCookie();
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
    supprimerClassePostCookie();
    prioritesSelectionnees = {
      metatypes: null,
      attributs: null,
      competences: null,
      magie_ou_resonnance: null,
      ressources: null,
    };
    selectedMetatype = null;
    prioriteActuelle = null;
    selectedCells = {
      metatypes: null,
      attributs: null,
      competences: null,
      magie_ou_resonnance: null,
      ressources: null,
    };
    IDselectedCells = {
      metatypes: null,
      attributs: null,
      competences: null,
      magie_ou_resonnance: null,
      ressources: null,
    };
    SIN = [];
    resultat.innerHTML = "";
    identity.innerHTML = "";
    prenomInput.value = "";
    surnomInput.value = "";
    nomInput.value = "";
    metatypeTitle.innerHTML = "";
    metatypeForm.innerHTML = "";
    specialTitle.innerHTML = "";
    specialForm.innerHTML = "";
  }
});
