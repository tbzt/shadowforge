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

function findKey(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    } else if (typeof obj[key] === "object") {
      let result = findKey(obj[key], value);
      if (result) {
        return result;
      }
    }
  }
  return null;
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
        JSONData.system.biography.metatypeVariant.toLowerCase(),
        " / ",
        findKey(terms, JSONData.system.biography.metatypeVariant.toLowerCase())
      );

      var characterData = {
        ...characterDataBackup,
        SIN: {
          firstname: JSONData.system.biography.realName,
          identityCatalog: JSONData.name,
          surname: JSONData.system.biography.alias,
          metatype: JSONData.system.biography.metatype,
          metatypeVariant: findKey(
            terms,
            JSONData.system.biography.metatypeVariant.toLowerCase()
          ),
        },
        metatype: findKey(
          terms,
          JSONData.system.biography.metatypeVariant.toLowerCase()
        ),
        resources: JSONData.system.nuyen.actual.total,
      };

      console.log(
        "loadFromJSON characterData.metatype : ",
        characterData.metatype
      );

      //ATTRIBUTES

      for (let attributesKey in JSONData.system.attributes) {
        if (attributesKey !== "essence") {
          console.log(
            attributesKey,
            " ",
            JSONData.system.attributes[attributesKey].natural.base
          );
          characterData.attributes[attributesKey].added =
            JSONData.system.attributes[attributesKey].natural.base - 1;
        }
      }

      if (JSONData.system.attributes.magic.natural.base > 0) {
        characterData.isMagic = true;
        characterData.special = JSONData.system.magic.type;
      }

      if (JSONData.system.attributes.resonance.natural.base > 0) {
        characterData.isTechno = true;
        characterData.special = "technomancer";
      }

      //SKILLS

      for (let skillsKey in JSONData.system.skills) {
        characterData.skills[skillsKey].added =
          JSONData.system.skills[skillsKey].rank.base;
        characterData.skills[skillsKey].rdd =
          JSONData.system.skills[skillsKey].test.total;
      }

      //ITEMS
      var itemsByType = {
        augmentation: [],
        gear: [],
        weapon: [],
        ammunition: [],
        armor: [],
        vehicle: [],
        ammunition: [],
        drug: [],
        sin: [],
        lifestyle: [],
        contact: [],
        spell: [],
        ritual: [],
        focus: [],
        complexForm: [],
        quality: [],
        spirit: [],
        sprite: [],
      };

      for (let item in JSONData.items) {
        let itemType = JSONData.items[item].type;
        if (itemsByType.hasOwnProperty(itemType)) {
          itemsByType[itemType].push(JSONData.items[item]);
        }
      }

      //QUALITIES

      for (let quality in itemsByType.quality) {
        var q = {
          key: itemsByType.quality[quality].name,
          description: itemsByType.quality[quality].system.info.description,
          type: itemsByType.quality[quality].system.type,
          karmaCost: itemsByType.quality[quality].system.karmaCost.base,
        };
        characterData.qualities.push(q);
      }

      //CONTACTS

      for (let contact in itemsByType.contact) {
        var c = {
          key: itemsByType.contact[contact].name,
          description: itemsByType.contact[contact].system.info.description,
          connection: itemsByType.contact[contact].system.connection,
          loyalty: itemsByType.contact[contact].system.loyalty,
          type: itemsByType.contact[contact].system.type,
        };
        characterData.contacts.push(c);
      }

      //WEAPONS

      for (let weapon in itemsByType.weapon) {
        console.log(itemsByType.weapon[weapon]);
        if (itemsByType.weapon[weapon].system.type === "rangedWeapon") {
          console.log(itemsByType.weapon[weapon]);
          var rangedWeapon = {
            key: itemsByType.weapon[weapon].name,
            description: itemsByType.weapon[weapon].system.info.description,
            skill: itemsByType.weapon[weapon].system.test.linkedSkill,
            baseConcealability:
              itemsByType.weapon[weapon].system.concealability.base,
            price: itemsByType.weapon[weapon].system.goods.price.base,
            availability:
              itemsByType.weapon[weapon].system.goods.availability.base,
            legality: itemsByType.weapon[weapon].system.legality,
            type: itemsByType.weapon[weapon].system.typeSub,
            AR: {
              closeAR:
                itemsByType.weapon[weapon].system.attackRating.range.close.base,
              nearAR:
                itemsByType.weapon[weapon].system.attackRating.range.near.base,
              mediumAR:
                itemsByType.weapon[weapon].system.attackRating.range.medium
                  .base,
              farAR:
                itemsByType.weapon[weapon].system.attackRating.range.far.base,
              extremeAR:
                itemsByType.weapon[weapon].system.attackRating.range.extreme
                  .base,
            },
            damage: {
              value: itemsByType.weapon[weapon].system.damage.value.base,
              type: itemsByType.weapon[weapon].system.damage.type,
            },
            ammunitionMax: itemsByType.weapon[weapon].system.ammo.max,
            loadingMechanism:
              itemsByType.weapon[weapon].system.ammo.loadingMechanism,
            firingModes: {
              singleShot:
                itemsByType.weapon[weapon].system.firingMode.singleShot
                  .available,
              semiAutomatic:
                itemsByType.weapon[weapon].system.firingMode.semiAutomatic
                  .available,
              burstFire:
                itemsByType.weapon[weapon].system.firingMode.burstFire
                  .available,
              fullAutomatic:
                itemsByType.weapon[weapon].system.firingMode.fullyAutomatic
                  .available,
            },
          };

          characterData.rangedWeapons.push(rangedWeapon);
        }
        if (itemsByType.weapon[weapon].system.type === "meleeWeapon") {
          console.log(itemsByType.weapon[weapon]);
          var meleeWeapon = {
            key: itemsByType.weapon[weapon].name,
            description: itemsByType.weapon[weapon].system.info.description,
            skill: itemsByType.weapon[weapon].system.test.linkedSkill,
            baseConcealability:
              itemsByType.weapon[weapon].system.concealability.base,
            price: itemsByType.weapon[weapon].system.goods.price.base,
            availability:
              itemsByType.weapon[weapon].system.goods.availability.base,
            legality: itemsByType.weapon[weapon].system.legality,
            type: itemsByType.weapon[weapon].system.typeSub,
            AR: {
              closeAR:
                itemsByType.weapon[weapon].system.attackRating.range.close.base,
              nearAR:
                itemsByType.weapon[weapon].system.attackRating.range.near.base,
              mediumAR:
                itemsByType.weapon[weapon].system.attackRating.range.medium
                  .base,
              farAR:
                itemsByType.weapon[weapon].system.attackRating.range.far.base,
              extremeAR:
                itemsByType.weapon[weapon].system.attackRating.range.extreme
                  .base,
            },
            damage: {
              value: itemsByType.weapon[weapon].system.damage.value.base,
              type: itemsByType.weapon[weapon].system.damage.type,
            },
          };
          characterData.meleeWeapons.push(meleeWeapon);
        }
        if (itemsByType.weapon[weapon].system.type === "grenade") {
          console.log(itemsByType.weapon[weapon]);
          var grenade = {
            key: itemsByType.weapon[weapon].name,
            description: itemsByType.weapon[weapon].system.info.description,
            skill: itemsByType.weapon[weapon].system.test.linkedSkill,
            baseConcealability:
              itemsByType.weapon[weapon].system.concealability.base,
            price: itemsByType.weapon[weapon].system.goods.price.base,
            availability:
              itemsByType.weapon[weapon].system.goods.availability.base,
            legality: itemsByType.weapon[weapon].system.legality,
            type: itemsByType.weapon[weapon].system.typeSub,
            AR: {
              closeAR:
                itemsByType.weapon[weapon].system.attackRating.range.close.base,
              nearAR:
                itemsByType.weapon[weapon].system.attackRating.range.near.base,
              mediumAR:
                itemsByType.weapon[weapon].system.attackRating.range.medium
                  .base,
              farAR:
                itemsByType.weapon[weapon].system.attackRating.range.far.base,
              extremeAR:
                itemsByType.weapon[weapon].system.attackRating.range.extreme
                  .base,
            },
            damage: {
              value: itemsByType.weapon[weapon].system.damage.value.base,
              type: itemsByType.weapon[weapon].system.damage.type,
            },
          };
          characterData.grenades.push(grenade);
        }
      }

      //AMMUNITIONS

      for (let ammo in itemsByType.ammunition) {
        var a = {
          key: itemsByType.ammunition[ammo].name,
          description: itemsByType.ammunition[ammo].system.info.description,
          price: itemsByType.ammunition[ammo].system.goods.price.base,
          availability:
            itemsByType.ammunition[ammo].system.goods.availability.base,
          legality: itemsByType.ammunition[ammo].system.legality,
          type: itemsByType.ammunition[ammo].system.type,
          weaponType: itemsByType.ammunition[ammo].system.class,
        };
        characterData.ammunitions.push(a);
      }

      //PROTECTIONS

      for (let protection in itemsByType.armor) {
        var a = {
          key: itemsByType.armor[protection].name,
          description: itemsByType.armor[protection].system.info.description,
          price: itemsByType.armor[protection].system.goods.price.base,
          availability:
            itemsByType.armor[protection].system.goods.availability.base,
          legality: itemsByType.armor[protection].system.legality,
          defenseRating:
            itemsByType.armor[protection].system.defenseRating.base,
          socialRating: itemsByType.armor[protection].system.socialRating.base,
          capacity: itemsByType.armor[protection].system.capacity.provided.base,
        };
        characterData.protections.push(a);
      }

      //AUGMENTATIONS

      for (let augmentation in itemsByType.augmentation) {
        var a = {
          key: itemsByType.augmentation[augmentation].name,
          description:
            itemsByType.augmentation[augmentation].system.info.description,
          price: itemsByType.augmentation[augmentation].system.goods.price.base,
          availability:
            itemsByType.augmentation[augmentation].system.goods.availability
              .base,
          legality: itemsByType.augmentation[augmentation].system.legality,
          type: itemsByType.augmentation[augmentation].system.type,
          category: itemsByType.augmentation[augmentation].system.typeSub,
          grade: itemsByType.augmentation[augmentation].system.grade,
          essenceCost:
            itemsByType.augmentation[augmentation].system.essenceCost.base,
          capacity:
            itemsByType.augmentation[augmentation].system.capacity.provided
              .base,
        };
        characterData.augmentations.push(a);
      }

      //VEHICLES

      for (let vehicle in itemsByType.vehicle) {
        var a = {
          key: itemsByType.vehicle[vehicle].name,
          description: itemsByType.vehicle[vehicle].system.info.description,
          price: itemsByType.vehicle[vehicle].system.goods.price.base,
          availability:
            itemsByType.vehicle[vehicle].system.goods.availability.base,
          legality: itemsByType.vehicle[vehicle].system.legality,
          type: itemsByType.vehicle[vehicle].system.type,
          category: itemsByType.vehicle[vehicle].system.typeSub,
          typeSub: itemsByType.vehicle[vehicle].system.category,
          pilotSpecialization: itemsByType.vehicle[vehicle].system.pilotSkill,
          riggingInterface:
            itemsByType.vehicle[vehicle].system.modifications.riggerInterface,
          attributes: {
            handling:
              itemsByType.vehicle[vehicle].system.attributes.handling.base,
            handlingOffRoad:
              itemsByType.vehicle[vehicle].system.attributes.handlingOffRoad
                .base,
            acceleration:
              itemsByType.vehicle[vehicle].system.attributes.acceleration.base,
            speedInterval:
              itemsByType.vehicle[vehicle].system.attributes.speedInterval.base,
            topSpeed:
              itemsByType.vehicle[vehicle].system.attributes.topSpeed.base,
            armor: itemsByType.vehicle[vehicle].system.attributes.armor.base,
            body: itemsByType.vehicle[vehicle].system.attributes.body.base,
            pilot: itemsByType.vehicle[vehicle].system.attributes.pilot.base,
            sensor: itemsByType.vehicle[vehicle].system.attributes.sensor.base,
            seat: itemsByType.vehicle[vehicle].system.attributes.seat.base,
          },
        };
        characterData.vehicles.push(a);
      }

      //DRUGS

      for (let drug in itemsByType.drug) {
        var a = {
          key: itemsByType.drug[drug].name,
          description: itemsByType.drug[drug].system.info.description,
          price: itemsByType.drug[drug].system.goods.price.base,
          availability: itemsByType.drug[drug].system.goods.availability.base,
          legality: itemsByType.drug[drug].system.legality,
          power: itemsByType.drug[drug].system.power.base,
          duration: {
            value: itemsByType.drug[drug].system.duration.base,
            period: itemsByType.drug[drug].system.duration.period,
          },
          speed: {
            value: itemsByType.drug[drug].system.speed.base,
            period: itemsByType.drug[drug].system.speed.period,
          },
          vectors: {
            contact: itemsByType.drug[drug].system.vector.contact,
            ingestion: itemsByType.drug[drug].system.vector.ingestion,
            inhalation: itemsByType.drug[drug].system.vector.inhalation,
            injection: itemsByType.drug[drug].system.vector.injection,
          },
        };
        characterData.drugs.push(a);
      }

      //STUFFS

      for (let stuff in itemsByType.gear) {
        var a = {
          key: itemsByType.gear[stuff].name,
          description: itemsByType.gear[stuff].system.info.description,
          price: itemsByType.gear[stuff].system.goods.price.base,
          availability: itemsByType.gear[stuff].system.goods.availability.base,
          legality: itemsByType.gear[stuff].system.legality,
          rating: itemsByType.gear[stuff].system.rating,
        };
        characterData.stuffs.push(a);
      }

      //SINS

      for (let sin in itemsByType.sin) {
        var a = {
          key: itemsByType.sin[sin].name,
          description: itemsByType.sin[sin].system.info.description,
          price: itemsByType.sin[sin].system.goods.price.base,
          availability: itemsByType.sin[sin].system.goods.availability.base,
          legality: itemsByType.sin[sin].system.legality,
          rating: itemsByType.sin[sin].system.rating,
          nationality: itemsByType.sin[sin].system.nationality,
          licences: itemsByType.sin[sin].system.accessories,
        };
        characterData.SINS.push(a);
      }

      //LIFESTYLES

      for (let lifestyle in itemsByType.lifestyle) {
        var a = {
          key: itemsByType.lifestyle[lifestyle].name,
          description: itemsByType.lifestyle[lifestyle].system.info.description,
          price: itemsByType.lifestyle[lifestyle].system.goods.price.base,
          availability:
            itemsByType.lifestyle[lifestyle].system.goods.availability.base,
          legality: itemsByType.lifestyle[lifestyle].system.legality,
          type: itemsByType.lifestyle[lifestyle].system.type,
          linkedIdentity:
            itemsByType.lifestyle[lifestyle].system.linkedIdentity,
        };
        characterData.lifestyles.push(a);
      }

      //SPELLS

      for (let spell in itemsByType.spell) {
        var a = {
          key: itemsByType.spell[spell].name,
          description: itemsByType.spell[spell].system.info.description,
          price: itemsByType.spell[spell].system.goods.price.base,
          availability: itemsByType.spell[spell].system.goods.availability.base,
          legality: itemsByType.spell[spell].system.legality,
          type: itemsByType.spell[spell].system.type,
          category: itemsByType.spell[spell].system.category,
          categorySub: itemsByType.spell[spell].system.categorySub,
          range: itemsByType.spell[spell].system.range,
          duration: itemsByType.spell[spell].system.duration,
          drainValue: itemsByType.spell[spell].system.drain.base,
        };
        characterData.spells.push(a);
      }

      //RITUALS

      for (let ritual in itemsByType.ritual) {
        var a = {
          key: itemsByType.ritual[ritual].name,
          description: itemsByType.ritual[ritual].system.info.description,
          minion: itemsByType.ritual[ritual].system.minion,
          anchored: itemsByType.ritual[ritual].system.anchored,
          materialLink: itemsByType.ritual[ritual].system.materialLink,
          spotter: itemsByType.ritual[ritual].system.spotter,
          duration: {
            value: itemsByType.ritual[ritual].system.duration.value,
            type: itemsByType.ritual[ritual].system.duration.period,
          },
        };
        characterData.rituals.push(a);
      }

      //FOCUS

      for (let focus in itemsByType.focus) {
        var a = {
          key: itemsByType.focus[focus].name,
          description: itemsByType.focus[focus].system.info.description,
          price: itemsByType.focus[focus].system.goods.price.base,
          availability: itemsByType.focus[focus].system.goods.availability.base,
          legality: itemsByType.focus[focus].system.legality,
          type: itemsByType.focus[focus].system.type,
          force: itemsByType.focus[focus].system.rating,
        };
        console.log("new focus : ", a)
        characterData.foci.push(a);
      }

      console.log("loadFromJSON characterData : ", characterData);

      // Chargez les données du personnage
      saveCharacterData(characterData);
    };

    // Lisez le fichier en tant que texte
    reader.readAsText(file);
  }
}
