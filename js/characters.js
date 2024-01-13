function createNewCharacter() {
  // Créez un nouveau personnage
  // (par exemple, réinitialisez les champs de saisie, définissez de nouvelles variables globales, etc.)
}

function saveCharacterData(characterData) {
  // Récupérez le tableau de personnages du localStorage
  var characters = JSON.parse(localStorage.getItem("characters")) || [];

  // Recherchez le personnage existant avec le même SIN.name
  var existingCharacterIndex = characters.findIndex(function (character) {
    return character.SIN && character.SIN.name === characterData.SIN.name;
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

  // Recherchez le personnage existant avec le même SIN.name
  var existingCharacterIndex = characters.findIndex(function (character) {
    return character.SIN && character.SIN.name === characterData.SIN.name;
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
      character.SIN.name +
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
    characterCard.querySelector(".card-title").textContent = character.SIN.name;

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
          name: JSONData.name,
          realName: JSONData.system.biography.realName,
          alias: JSONData.system.biography.alias,
          ethnicalGroup: JSONData.system.biography.ethnicalGroup,
          skin: JSONData.system.biography.skin,
          gender: JSONData.system.biography.gender,
          nationality: JSONData.system.biography.nationality,
          birthPlace: JSONData.system.biography.birthPlace,
          age: JSONData.system.biography.age,
          familialStatus: JSONData.system.biography.familialStatus,
          dependants: JSONData.system.biography.dependants,
          weight: JSONData.system.biography.weight,
          height: JSONData.system.biography.height,
          hair: JSONData.system.biography.hair,
          eyes: JSONData.system.biography.eyes,
          description: JSONData.system.biography.description,
          background: JSONData.system.biography.background,
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

      // DERIVED ATTRIBUTES

      characterData.derivedAttributes.essence = 
        JSONData.system.attributes.essence.natural.base;
        characterData.derivedAttributes.initiative.rank = JSONData.system.initiatives.physical.rank.total;
        characterData.derivedAttributes.initiative.dice = JSONData.system.initiatives.physical.dice.total;
        characterData.derivedAttributes.matrixInitiative.rank = JSONData.system.initiatives.matrix.rank.total;
        characterData.derivedAttributes.matrixInitiative.dice = JSONData.system.initiatives.matrix.dice.total;
        characterData.derivedAttributes.astralInitiative.rank = JSONData.system.initiatives.astral.rank.total;
        characterData.derivedAttributes.astralInitiative.dice = JSONData.system.initiatives.astral.dice.total;
        characterData.derivedAttributes.judgeIntentions = JSONData.system.derivedAttributes.judgeIntentions.total;
        characterData.derivedAttributes.memory = JSONData.system.derivedAttributes.memory.total;
        characterData.derivedAttributes.composure = JSONData.system.derivedAttributes.composure.total;
        characterData.derivedAttributes.liftAndCarry = JSONData.system.weights.lift.load.total;
        characterData.derivedAttributes.movements.walk = JSONData.system.movements.walk.distance.total;
        characterData.derivedAttributes.movements.sprint = JSONData.system.movements.sprint.distance.total;        
        characterData.derivedAttributes.movements.extra = JSONData.system.movements.sprint.extra.total;

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
        device: [],
        drug: [],
        sin: [],
        lifestyle: [],
        contact: [],
        spell: [],
        ritual: [],
        focus: [],
        poweradept: [],
        metamagic: [],
        complexform: [],
        quality: [],
        spirit: [],
        echo: [],
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
        var item = itemsByType.quality[quality];
        var q = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          type: item.system.type,
          karmaCost: item.system.karmaCost.base,
        };
        console.log("Import new quality: ", a);
        characterData.qualities.push(q);
      }

      //CONTACTS

      for (let contact in itemsByType.contact) {
        var item = itemsByType.contact[contact];
        var c = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          connection: item.system.connection,
          loyalty: item.system.loyalty,
          type: item.system.type,
        };
        console.log("Import new contact: ", a);
        characterData.contacts.push(c);
      }

      //WEAPONS

      for (let weapon in itemsByType.weapon) {
        var item = itemsByType.weapon[weapon];
        if (item.system.type === "rangedWeapon") {
          var rangedWeapon = {
            key: item.name,
            description: item.system.info.description,
            gameEffects: item.system.info.gameEffects,
            source: {
              book: item.system.info.source,
              page: item.system.info.page,
            },
            skill: item.system.test.linkedSkill,
            baseConcealability: item.system.concealability.base,
            price: item.system.goods.price.base,
            availability: item.system.goods.availability.base,
            legality: item.system.goods.legality,
            type: item.system.typeSub,
            AR: {
              closeAR: item.system.attackRating.range.close.base,
              nearAR: item.system.attackRating.range.near.base,
              mediumAR: item.system.attackRating.range.medium.base,
              farAR: item.system.attackRating.range.far.base,
              extremeAR: item.system.attackRating.range.extreme.base,
            },
            damage: {
              value: item.system.damage.value.base,
              type: item.system.damage.type,
            },
            ammunitionMax: item.system.ammo.max,
            loadingMechanism: item.system.ammo.loadingMechanism,
            firingModes: {
              singleShot: item.system.firingMode.singleShot.available,
              semiAutomatic: item.system.firingMode.semiAutomatic.available,
              burstFire: item.system.firingMode.burstFire.available,
              fullAutomatic: item.system.firingMode.fullyAutomatic.available,
            },
          };
          console.log("Import new ranged Weapon: ", a);
          characterData.rangedWeapons.push(rangedWeapon);
        }
        if (item.system.type === "meleeWeapon") {
          var meleeWeapon = {
            key: item.name,
            description: item.system.info.description,
            gameEffects: item.system.info.gameEffects,
            source: {
              book: item.system.info.source,
              page: item.system.info.page,
            },
            skill: item.system.test.linkedSkill,
            baseConcealability: item.system.concealability.base,
            price: item.system.goods.price.base,
            availability: item.system.goods.availability.base,
            legality: item.system.goods.legality,
            type: item.system.typeSub,
            AR: {
              closeAR: item.system.attackRating.range.close.base,
              nearAR: item.system.attackRating.range.near.base,
              mediumAR: item.system.attackRating.range.medium.base,
              farAR: item.system.attackRating.range.far.base,
              extremeAR: item.system.attackRating.range.extreme.base,
            },
            damage: {
              value: item.system.damage.value.base,
              type: item.system.damage.type,
            },
          };
          console.log("Import new melee Weapon: ", a);
          characterData.meleeWeapons.push(meleeWeapon);
        }
        if (item.system.type === "grenade") {
          var grenade = {
            key: item.name,
            description: item.system.info.description,
            gameEffects: item.system.info.gameEffects,
            source: {
              book: item.system.info.source,
              page: item.system.info.page,
            },
            skill: item.system.test.linkedSkill,
            baseConcealability: item.system.concealability.base,
            price: item.system.goods.price.base,
            availability: item.system.goods.availability.base,
            legality: item.system.goods.legality,
            type: item.system.typeSub,
            AR: {
              closeAR: item.system.attackRating.range.close.base,
              nearAR: item.system.attackRating.range.near.base,
              mediumAR: item.system.attackRating.range.medium.base,
              farAR: item.system.attackRating.range.far.base,
              extremeAR: item.system.attackRating.range.extreme.base,
            },
            damage: {
              value: item.system.damage.value.base,
              type: item.system.damage.type,
            },
          };
          console.log("Import new grenade: ", a);
          characterData.grenades.push(grenade);
        }
      }

      //AMMUNITIONS

      for (let ammo in itemsByType.ammunition) {
        var item = itemsByType.ammunition[ammo];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          type: item.system.type,
          weaponType: item.system.class,
        };
        console.log("Import new ammunition: ", a);
        characterData.ammunitions.push(a);
      }

      //PROTECTIONS

      for (let protection in itemsByType.armor) {
        var item = itemsByType.armor[protection];
        var a = {
          key: item.name,
          description: item.system.info.description.replace(/<p>|<\/p>/g, ""),
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          defenseRating: item.system.defenseRating.base,
          socialRating: item.system.socialRating.base,
          capacity: item.system.capacity.provided.base,
        };
        console.log("Import new protection: ", a);
        characterData.protections.push(a);
      }

      //AUGMENTATIONS

      for (let augmentation in itemsByType.augmentation) {
        var item = itemsByType.augmentation[augmentation];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          type: item.system.type,
          category: item.system.typeSub,
          grade: item.system.grade,
          essenceCost: item.system.essenceCost.base,
          capacity: item.system.capacity.provided.base,
        };
        console.log("Import new augmentation: ", a);
        characterData.augmentations.push(a);
      }

      //VEHICLES

      for (let vehicle in itemsByType.vehicle) {
        var item = itemsByType.vehicle[vehicle];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          type: item.system.type,
          category: item.system.typeSub,
          typeSub: item.system.category,
          pilotSpecialization: item.system.pilotSkill,
          riggingInterface: item.system.modifications.riggerInterface,
          attributes: {
            handling: item.system.attributes.handling.base,
            handlingOffRoad: item.system.attributes.handlingOffRoad.base,
            acceleration: item.system.attributes.acceleration.base,
            speedInterval: item.system.attributes.speedInterval.base,
            topSpeed: item.system.attributes.topSpeed.base,
            armor: item.system.attributes.armor.base,
            body: item.system.attributes.body.base,
            pilot: item.system.attributes.pilot.base,
            sensor: item.system.attributes.sensor.base,
            seat: item.system.attributes.seat.base,
          },
        };
        console.log("Import new vehicle: ", a);
        characterData.vehicles.push(a);
      }

      //DEVICES

      for (let device in itemsByType.device) {
        var item = itemsByType.device[device];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          type: item.system.type,
          rating: item.system.matrix.deviceRating,
          slots: item.system.programs.base,
          attributes: {
            attack: item.system.matrix.attributes.attack.base,
            dataProcessing: item.system.matrix.attributes.dataProcessing.base,
            firewall: item.system.matrix.attributes.firewall.base,
            sleaze: item.system.matrix.attributes.sleaze.base,
          },
        };
        console.log("Import new device: ", a);
        characterData.devices.push(a);
      }

      //DRUGS

      for (let drug in itemsByType.drug) {
        var item = itemsByType.drug[drug];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          power: item.system.power.base,
          duration: {
            value: item.system.duration.base,
            period: item.system.duration.period,
          },
          speed: {
            value: item.system.speed.base,
            period: item.system.speed.period,
          },
          vectors: {
            contact: item.system.vector.contact,
            ingestion: item.system.vector.ingestion,
            inhalation: item.system.vector.inhalation,
            injection: item.system.vector.injection,
          },
        };
        console.log("Import new drug: ", a);
        characterData.drugs.push(a);
      }

      //STUFFS

      for (let stuff in itemsByType.gear) {
        var item = itemsByType.gear[stuff];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          rating: item.system.rating.base,
        };
        console.log("Import new drug: ", a);
        characterData.stuffs.push(a);
      }

      //SINS

      for (let sin in itemsByType.sin) {
        var item = itemsByType.sin[sin];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          rating: item.system.rating.base,
          nationality: item.system.nationality,
          licences: item.system.accessories.map((accessory) => ({
            key: accessory.name,
            rating: accessory.rating,
            price: accessory.price,
          })),
        };
        console.log("Import new SIN: ", a);
        characterData.SINS.push(a);
      }

      //LIFESTYLES

      for (let lifestyle in itemsByType.lifestyle) {
        var item = itemsByType.lifestyle[lifestyle];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          type: item.system.type,
          linkedIdentity: item.system.linkedIdentity,
        };
        console.log("Import new lifestyle: ", a);
        characterData.lifestyles.push(a);
      }

      //SPELLS

      for (let spell in itemsByType.spell) {
        var item = itemsByType.spell[spell];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          type: itemsByType.spell[spell].system.type,
          category: itemsByType.spell[spell].system.category,
          categorySub: itemsByType.spell[spell].system.categorySub,
          range: itemsByType.spell[spell].system.range,
          duration: itemsByType.spell[spell].system.duration,
          drainValue: itemsByType.spell[spell].system.drain.base,
        };
        console.log("Import new spell: ", a);
        characterData.spells.push(a);
      }

      //RITUALS

      for (let ritual in itemsByType.ritual) {
        var item = itemsByType.ritual[ritual];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          minion: item.system.minion,
          anchored: item.system.anchored,
          materialLink: item.system.materialLink,
          spotter: item.system.spotter,
          duration: {
            value: item.system.duration.value,
            type: item.system.duration.period,
          },
        };
        console.log("Import new ritual: ", a);
        characterData.rituals.push(a);
      }

      //FOCUS

      for (let focus in itemsByType.focus) {
        var item = itemsByType.focus[focus];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          price: item.system.goods.price.base,
          availability: item.system.goods.availability.base,
          legality: item.system.goods.legality,
          type: item.system.type,
          force: item.system.rating.base,
        };
        console.log("Import new focus: ", a);
        characterData.foci.push(a);
      }

      //ADEPT POWERS

      for (let adeptpower in itemsByType.adeptpower) {
        var item = itemsByType.adeptpower[adeptpower];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          activation: item.system.action,
          rating: item.system.rating.base,
          powerPointsCost: item.system.powerPoint.base,
        };
        console.log("Import new adept power: ", a);
        characterData.adeptPowers.push(a);
      }

      //METAMAGICS

      for (let metamagic in itemsByType.metamagic) {
        var item = itemsByType.metamagic[metamagic];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          rating: item.system.rating.base,
        };
        console.log("Import new metamagic: ", a);
        characterData.metamagics.push(a);
      }

      //SPIRITS

      for (let spirit in itemsByType.spirit) {
        var item = itemsByType.spirit[spirit];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          type: item.system.type,
          force: item.system.force,
          isBounded: item.system.isBounded,
          service: {
            current: item.system.service.current,
            max: item.system.service.max,
          },
        };
        console.log("Import new spirit: ", a);
        characterData.spirits.push(a);
      }

      //COMPLEX FORMS

      for (let complexform in itemsByType.complexform) {
        var item = itemsByType.complexform[complexform];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          duration: item.system.duration,
          fadeValue: item.system.drain.base,
          skill: item.system.test.linkedSkill,
        };
        console.log("Import new complex form: ", a);
        characterData.complexForms.push(a);
      }

      //ECHOES

      for (let echo in itemsByType.echo) {
        var item = itemsByType.echo[echo];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          rating: item.system.rating.base,
        };
        console.log("Import new echo: ", a);
        characterData.echoes.push(a);
      }

      //SPRITES

      for (let sprite in itemsByType.sprite) {
        var item = itemsByType.sprite[sprite];
        var a = {
          key: item.name,
          description: item.system.info.description,
          gameEffects: item.system.info.gameEffects,
          source: {
            book: item.system.info.source,
            page: item.system.info.page,
          },
          type: item.system.type,
          level: item.system.level,
          isRegistered: item.system.isRegistered,
          task: {
            current: item.system.task.current,
            max: item.system.task.max,
          },
        };
        console.log("Import new sprite: ", a);
        characterData.sprites.push(a);
      }

      console.log("loadFromJSON characterData: ", characterData);

      // Chargez les données du personnage
      saveCharacterData(characterData);
    };

    // Lisez le fichier en tant que texte
    reader.readAsText(file);
  }
}
