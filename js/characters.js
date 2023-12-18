function createNewCharacter() {
  // Créez un nouveau personnage
  // (par exemple, réinitialisez les champs de saisie, définissez de nouvelles variables globales, etc.)
}

function saveCharacterData(characterData) {
  // Récupérez le tableau de personnages du localStorage
  var characters = JSON.parse(localStorage.getItem("characters")) || [];

  // Recherchez le personnage existant avec le même SIN.identity
  var existingCharacterIndex = characters.findIndex(function (character) {
    return (
      character.SIN &&
      character.SIN.identityCatalog === characterData.SIN.identityCatalog
    );
  });

  if (existingCharacterIndex !== -1) {
    // Si le personnage existe déjà, remplacez ses données
    characters[existingCharacterIndex] = characterData;
  } else {
    // Sinon, ajoutez un id unique au personnage et ajoutez-le au tableau
    characterData.id =
      characters.length > 0 ? characters[characters.length - 1].id + 1 : 1;
    characters.push(characterData);
  }

  // Sauvegardez le tableau mis à jour dans le localStorage
  localStorage.setItem("characters", JSON.stringify(characters));

  updateCharacterList();
}

function saveCharacterDataLongTerm(characterData) {
  // Récupérez le tableau de personnages du localStorage
  var characters = JSON.parse(localStorage.getItem("characters")) || [];

  // Recherchez le personnage existant avec le même SIN.identity
  var existingCharacterIndex = characters.findIndex(function (character) {
    return (
      character.SIN &&
      character.SIN.identityCatalog === characterData.SIN.identityCatalog
    );
  });

  if (existingCharacterIndex !== -1) {
    // Si le personnage existe déjà, remplacez ses données
    characters[existingCharacterIndex] = characterData;
  }

  // Sauvegardez le tableau mis à jour dans le localStorage
  localStorage.setItem("characters", JSON.stringify(characters));

  updateCharacterList();
}

function loadCharacter(characterId) {
  // Récupérez le tableau de personnages du localStorage
  var characters = JSON.parse(localStorage.getItem("characters")) || [];

  // Trouvez le personnage avec le nom correspondant
  var character = characters.find(function (character) {
    return character.id === characterId;
  });

  // Si le personnage existe, chargez ses données
  if (character) {
    loadDataCharacter(character);
  }
}
function deleteCharacter(characterId) {
  // Trouvez le personnage avec le nom correspondant
  var characters = JSON.parse(localStorage.getItem("characters")) || [];
  var character = characters.find(function (character) {
    return character.id === characterId;
  });

  const userConfirmed = confirm(
    terms.deletionConfirmation +
      terms.colons +
      "\n" +
      terms.resetCharacter +
      " " +
      character.SIN.identityCatalog +
      " ?"
  );

  if (userConfirmed) {
    // Récupérez le tableau de personnages du localStorage
    var characters = JSON.parse(localStorage.getItem("characters")) || [];

    // Supprimez le personnage avec l'id correspondant
    characters = characters.filter(function (character) {
      return character.id !== characterId;
    });

    // Sauvegardez le tableau mis à jour dans le localStorage
    localStorage.setItem("characters", JSON.stringify(characters));
    updateCharacterList();
  }
}

function deleteAllCharacters() {
  // Effacez le tableau de personnages dans le localStorage
  localStorage.removeItem("characters");
  updateCharacterList();
}

function updateCharacterList() {
  // Récupérez le tableau de personnages du localStorage
  var characters = JSON.parse(localStorage.getItem("characters")) || [];

  // Récupérez le tableau de personnages du localStorage
  var characters = JSON.parse(localStorage.getItem("characters")) || [];

  // Récupérez le modèle de personnage et la liste de personnages
  var characterTemplate = document.getElementById("characterTemplate");
  var characterList = document.getElementById("characterList");

  // Videz la liste de personnages
  characterList.innerHTML = "";

  // Pour chaque personnage, créez une carte et ajoutez-la à la liste de personnages
  characters.forEach(function (character) {
    var characterCard = document.importNode(characterTemplate.content, true);

    // Mettez à jour le titre et le texte de la carte
    characterCard.querySelector(".card-title").textContent =
      character.SIN.identityCatalog;

    // Ajoutez des gestionnaires d'événements pour les boutons de chargement, d'exportation et de suppression
    characterCard
      .querySelector(".load-button")
      .addEventListener("click", function () {
        loadCharacter(character.id);
      });
    characterCard
      .querySelector(".export-button")
      .addEventListener("click", function () {
        downloadFoundryData(character);
      });
    characterCard
      .querySelector(".delete-button")
      .addEventListener("click", function () {
        deleteCharacter(character.id);
      });
    characterCard
      .querySelector(".PDF-button")
      .addEventListener("click", function () {
        generatePDF(character);
      });

    // Ajoutez la carte à la liste de personnages
    characterList.appendChild(characterCard);
  });

  // Activez les infobulles Bootstrap
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    var tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

    // Cachez le tooltip après 3 secondes
    tooltipTriggerEl.addEventListener("shown.bs.tooltip", () => {
      setTimeout(() => {
        tooltip.hide();
      }, 3000); // Changez cette valeur pour ajuster la durée d'affichage du tooltip
    });

    return tooltip;
  });
}

function loadFromJSON(event) {
  let file = event.target.files[0];
  if (file) {
    // Créez un objet FileReader
    var reader = new FileReader();

    // Définir le gestionnaire d'événements onload
    reader.onload = function () {
      // Récupérez le contenu du fichier
      var JSONData = JSON.parse(reader.result);

      console.log("loadFromJSON JSONData : ", JSONData);

      console.log(
        "loadFromJSON metatype : ",
        JSONData.system.biography.metatypeVariant,
        " / ",
        translations.en[JSONData.system.biography.metatypeVariant.toLowerCase()]
      );

      var characterData = {
        ...characterDataBackup,
        SIN: {
          firtname: JSONData.system.biography.realName,
          identityCatalog: JSONData.name,
          surname: JSONData.system.biography.alias,
          metatype: JSONData.system.biography.metatype,
          metatypeVariant:
            translations.en[
              JSONData.system.biography.metatypeVariant.toLowerCase()
            ],
        },
        resources: JSONData.system.nuyen.actual.total,
      };

      for (let attributesKey in JSONData.system.attributes) {
        if (attributesKey !== "essence") {
          console.log(
            attributesKey,
            " ",
            JSONData.system.attributes[attributesKey].augmented.base
          );
          characterData.attributes[attributesKey].added =
            JSONData.system.attributes[attributesKey].augmented.base - 1;
        }
      }

      for (let skillsKey in JSONData.system.skills) {
        characterData.skills[skillsKey].added =
          JSONData.system.skills[skillsKey].rank.base;
        characterData.skills[skillsKey].rdd =
          JSONData.system.skills[skillsKey].test.total;
      }

      console.log("loadFromJSON characterData : ", characterData);

      // Chargez les données du personnage
      loadDataCharacter(characterData);
    };

    // Lisez le fichier en tant que texte
    reader.readAsText(file);
  }
}
