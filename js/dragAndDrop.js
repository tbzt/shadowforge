$(document).ready(function () {
  const selectors = [
    "#collapseQualities",
    "#collapseRangedWeapons",
    "#collapseSpells",
  ];

  selectors.forEach((selector) => {
    $(selector).on("dragover", function (event) {
      event.preventDefault();
      $(this).addClass("toDrop"); // Change la couleur à jaune
      console.log("dragover event triggered"); // Ajouté pour le débogage
    });

    $(selector).on("dragleave", function (event) {
      $(this).css("background-color", ""); // Réinitialise la couleur
      console.log("dragleave event triggered"); // Ajouté pour le débogage
    });
  });
});

function createTable(type) {
  if (type === "qualities") {
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
                <td class="book-column">${capitalized(
                  terms[quality.book]
                )} (p. ${quality.page})</td>
              </tr>`;
        catalogQualitiesTableBody.append(rowHTML);

        if (!books.includes(quality.book)) {
          books.push(quality.book);
        }
      });
    }
  }

  if (type === "rangedWeapons") {
    var catalogRangedWeaponsTableBody = $("#catalogRangedWeaponsTable tbody");
    catalogRangedWeaponsTableBody.empty();

    var books = [];

    if (catalogData.rangedWeapons) {
      catalogData.rangedWeapons.forEach((weapon, index) => {
        var rowHTML = `
            <tr id="catalogRangedWeapon-${index}" draggable="true">
              <td class="name-column">${weapon.key}</td>
              <td class="description-column">${weapon.description}</td>
              <td class="type-column">${capitalized(terms[weapon.type])}</td>
              <td class="price-column">${parseInt(weapon.price)}</td>
              <td class="book-column">${capitalized(terms[weapon.book])} (p. ${
          weapon.page
        })</td>
            </tr>`;
        catalogRangedWeaponsTableBody.append(rowHTML);

        if (!books.includes(weapon.book)) {
          books.push(weapon.book);
        }

        console.log("weapon books : ", books);
      });
    }
  }

  if (type === "spells") {
    var catalogSpellsTableBody = $("#catalogSpellsTable tbody");
    catalogSpellsTableBody.empty();

    var books = [];

    if (catalogData.spells) {
      catalogData.spells.forEach((spell, index) => {
        var rowHTML = `
          <tr id="catalogSpell-${index}" draggable="true">
            <td class="name-column">${spell.key}</td>
            <td class="description-column">${spell.description}</td>
            <td class="category-column">${capitalized(
              terms[spell.category]
            )}</td>
            <td class="drainValue-column">${parseInt(spell.drainValue)}</td>
            <td class="book-column">${capitalized(terms[spell.book])} (p. ${
          spell.page
        })</td>
          </tr>`;
        catalogSpellsTableBody.append(rowHTML);

        if (!books.includes(spell.book)) {
          books.push(spell.book);
        }

        console.log("spell books : ", books);
      });
    }
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
  console.log("Drag started before: ", event);
  dragged = event.target;
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log("Drag started after: ", event);
  event.stopPropagation(); // Ajoutez cette ligne
}

function handleDragOver(event, elementId) {
  if (event.currentTarget.id === elementId) {
    console.log("Drag OK");
    event.preventDefault();
  }
}

function handleDrop(event, type) {
  console.log("Drop 1: ", event, type, event.originalEvent);
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var ID = data.split("-").pop();

  console.log("Drop 2: ", data, " ID ", ID);

  if (type === "qualities") {
    var newItem = {
      key: catalogData.qualities[ID].key,
      description: catalogData.qualities[ID].description,
      gameEffects: catalogData.qualities[ID].gameEffects,
      source: {
        book: catalogData.qualities[ID].book,
        page: catalogData.qualities[ID].page,
      },
      type: catalogData.qualities[ID].type,
      karmaCost: catalogData.qualities[ID].karmaCost,
    };
    characterData.qualities.push(newItem);
    updateQualitiesDisplay();
    handleDropdownModal("qualities");
    updateQualitiesKarma();
    $("#collapseQualities").removeClass("toDrop");
  }
  if (type === "rangedWeapons") {
    console.log("Drop rangedWeapons ...", catalogData.rangedWeapons[ID]);
    var newItem = {
      key: catalogData.rangedWeapons[ID].key,
      type: catalogData.rangedWeapons[ID].type,
      skill: catalogData.rangedWeapons[ID].skill,
      baseConcealability: catalogData.rangedWeapons[ID].baseConcealability,
      damage: {
        value: catalogData.rangedWeapons[ID].damageValue,
        type: catalogData.rangedWeapons[ID].damageType,
        special: catalogData.rangedWeapons[ID].specialDamageType,
      },
      AR: {
        closeAR: catalogData.rangedWeapons[ID].closeAR || 0,
        nearAR: catalogData.rangedWeapons[ID].nearAR || 0,
        mediumAR: catalogData.rangedWeapons[ID].mediumAR || 0,
        farAR: catalogData.rangedWeapons[ID].farAR || 0,
        extremeAR: catalogData.rangedWeapons[ID].extremeAR || 0,
      },
      firingModes: {
        singleShot: catalogData.rangedWeapons[ID].singleShot,
        semiAutomatic: catalogData.rangedWeapons[ID].semiAutomatic,
        burstFire: catalogData.rangedWeapons[ID].burstFire,
        fullAutomatic: catalogData.rangedWeapons[ID].fullAutomatic,
      },
      ammunitionMax: catalogData.rangedWeapons[ID].ammunitionMax,
      loadingMechanism: catalogData.rangedWeapons[ID].loadingMechanism,
      price: catalogData.rangedWeapons[ID].price || 0,
      legality: catalogData.rangedWeapons[ID].legality,
      availability: catalogData.rangedWeapons[ID].availability || 0,
      description: catalogData.rangedWeapons[ID].description,
      gameEffects: catalogData.rangedWeapons[ID].gameEffects,
      source: {
        book: catalogData.rangedWeapons[ID].book,
        page: catalogData.rangedWeapons[ID].page,
      },
    };
    characterData.rangedWeapons.push(newItem);
    updateWeaponsDisplay(type);
    handleDropdownModal("rangedWeapons");
    $("#collapseRangedWeapons").removeClass("toDrop");
  }
  if (type === "spells") {
    console.log("Drop spells ...", catalogData.spells[ID]);
    var newItem = {
      key: catalogData.spells[ID].key,
      type: catalogData.spells[ID].type,
      range: catalogData.spells[ID].range,
      duration: catalogData.spells[ID].duration,
      drainValue: catalogData.spells[ID].drainValue,
      category: catalogData.spells[ID].category,
      categorySub: catalogData.spells[ID].categorySub,
      price: catalogData.spells[ID].price || 0,
      legality: catalogData.spells[ID].legality,
      availability: catalogData.spells[ID].availability || 0,
      description: catalogData.spells[ID].description,
      gameEffects: catalogData.spells[ID].gameEffects,
      source: {
        book: catalogData.spells[ID].book,
        page: catalogData.spells[ID].page,
      },
    };
    characterData.spells.push(newItem);
    updateSpellsDisplay();
    handleDropdownModal("spells");
    $("#collapseSpells").removeClass("toDrop");
  }
  var draggedElement = $("#" + data);
  draggedElement.hide();
  console.log("Drop handled.");

  saveData();
}

document.addEventListener("dragend", function (event) {
  $("#collapseQualities").removeClass("toDrop");
  $("#collapseRangedWeapons").removeClass("toDrop");
  $("#collapseSpells").removeClass("toDrop");
});

function openCatalogModal(type) {
  console.log("Opening catalog panel...");

  if (type === "qualities") {
    // Générer le panneau
    var panelHTML = `
      <div id="catalogPanel${type}" class="catalogPanel">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="catalogModalLabel">${capitalized(
                terms[type + "Catalog"]
              )}</h1>
              <button type="button" class="btn-close" onclick="closeCatalogPanel('${type}')" aria-label="Close"></button>
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
    <label for="karmaCostMinFilter">${capitalized(terms.karma)}${
      terms.colons
    }</label>
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

    createTable(type);

    $("#nameFilter").on("input", filterTable);
    $("#typeFilter").on("input", filterTable);
    $("#karmaCostMinFilter").on("input", filterTable);
    $("#karmaCostMaxFilter").on("input", filterTable);
    $("#bookFilter").on("input", filterTable);

    // Changez la couleur de l'élément "collapseQualities" lors du début du glisser-déposer
    $("#collapseQualities").addClass("toDrop");
    openCatalogPanel(type);
    let dragged = null;
    $(".container-fluid").on("dragstart", function (e) {
      console.log("dragstart on container-fluid before : ", e);
      e.originalEvent.dataTransfer.setData("text", e.target.id);
      console.log("dragstart on container-fluid after : ", e);
    });
    document.addEventListener("dragstart", handleDragStart);
    $(".container-fluid").on("dragover", handleDragOver);
    $("#collapseQualities").on("drop", handleDrop);
    console.log("Catalog panel opened.");
  }

  if (type === "rangedWeapons") {
    // Générer le panneau
    var panelHTML = `
      <div id="catalogPanel${type}" class="catalogPanel">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="catalogModalLabel">${capitalized(
                terms[type + "Catalog"]
              )}</h1>
              <button type="button" class="btn-close" onclick="closeCatalogPanel('${type}')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="filters">
    <input type="text" id="nameFilter" placeholder="${capitalized(
      terms.filterName
    )}">
    <select id="typeFilter">
      <option value="">${capitalized(terms.all)}</option>
      <option value="${capitalized(terms.assaultCannon)}">${capitalized(
      terms.assaultCannon
    )}</option>
      <option value="${capitalized(terms.launcher)}">${capitalized(
      terms.launcher
    )}</option>
    <option value="${capitalized(terms.machineGunHeavy)}">${capitalized(
      terms.machineGunHeavy
    )}</option>
  <option value="${capitalized(terms.machineGunLight)}">${capitalized(
      terms.machineGunLight
    )}</option>
  <option value="${capitalized(terms.machineGunMedium)}">${capitalized(
      terms.machineGunMedium
    )}</option>
  <option value="${capitalized(terms.pistolMachine)}">${capitalized(
      terms.pistolMachine
    )}</option>
  <option value="${capitalized(terms.pistolHeavy)}">${capitalized(
      terms.pistolHeavy
    )}</option>
  <option value="${capitalized(terms.pistolHoldOut)}">${capitalized(
      terms.pistolHoldOut
    )}</option>
  <option value="${capitalized(terms.pistolLight)}">${capitalized(
      terms.pistolLight
    )}</option>
  <option value="${capitalized(terms.rifle)}">${capitalized(
      terms.rifle
    )}</option>
  <option value="${capitalized(terms.shotgun)}">${capitalized(
      terms.shotgun
    )}</option>
  <option value="${capitalized(terms.rangedSpecial)}">${capitalized(
      terms.rangedSpecial
    )}</option>
  <option value="${capitalized(terms.submachineGun)}">${capitalized(
      terms.submachineGun
    )}</option>
  <option value="${capitalized(terms.taser)}">${capitalized(
      terms.taser
    )}</option>
    </select>
    <label for="price">${capitalized(terms.price)}${terms.colons}</label>
    <input type="number" id="priceMinFilter" min="0" max="99999" step="100" value="0"> - 
    <input type="number" id="priceMaxFilter" min="0" max="99999" step="100" value="99999">       
    <select id="bookFilter">
    <!-- Les options seront ajoutées ici par createTable -->
  </select>
    </div>
              <table id="catalogRangedWeaponsTable" class="table table-sm table-responsive-sm table-hover table-striped">
                <thead class="table-light">
                  <tr>
                    <th scope="col" class="name-column h6">${capitalized(
                      terms.rangedWeapons
                    )}</th>
                    <th scope="col" class="description-column">${capitalized(
                      terms.descriptions
                    )}</th>
                    <th scope="col" class="type-column">${capitalized(
                      terms.types
                    )}</th>
                    <th scope="col" class="price-column">${capitalized(
                      terms.price
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

    createTable(type);

    $("#nameFilter").on("input", filterTable);
    $("#typeFilter").on("input", filterTable);
    $("#priceMinFilter").on("input", filterTable);
    $("#priceMaxFilter").on("input", filterTable);
    $("#bookFilter").on("input", filterTable);

    // Changez la couleur de l'élément "collapseQualities" lors du début du glisser-déposer
    $("#collapseRangedWeapons").addClass("toDrop");
    openCatalogPanel(type);
    let dragged = null;
    document.addEventListener("dragstart", handleDragStart);
    $(".container-fluid").on("dragstart", function (e) {
      console.log("dragstart on container-fluid before : ", e);
      e.originalEvent.dataTransfer.setData("text", "anything");
      console.log("dragstart on container-fluid after : ", e);
    });
    $(".container-fluid").on("dragover", handleDragOver);
    $("#collapseRangedWeapons").on("drop", handleDrop);
    console.log("Catalog panel opened.");
  }

  if (type === "spells") {
    // Générer le panneau
    var panelHTML = `
      <div id="catalogPanel${type}" class="catalogPanelRight">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="catalogModalLabel">${capitalized(
                terms[type + "Catalog"]
              )}</h1>
              <button type="button" class="btn-close" onclick="closeCatalogPanel('${type}')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="filters">
    <input type="text" id="nameFilter" placeholder="${capitalized(
      terms.filterName
    )}">
    <select id="typeFilter">
      <option value="">${capitalized(terms.all)}</option>
      <option value="${capitalized(terms.combat)}">${capitalized(
      terms.combat
    )}</option>
      <option value="${capitalized(terms.detection)}">${capitalized(
      terms.detection
    )}</option>
    <option value="${capitalized(terms.health)}">${capitalized(
      terms.health
    )}</option>
  <option value="${capitalized(terms.illusion)}">${capitalized(
      terms.illusion
    )}</option>
  <option value="${capitalized(terms.manipulation)}">${capitalized(
      terms.manipulation
    )}</option>
    </select>
    <label for="drainValue">${capitalized(terms.drainValue)}${
      terms.colons
    }</label>
    <input type="number" id="drainValueMinFilter" min="0" max="20" step="1" value="0"> - 
    <input type="number" id="drainValueMaxFilter" min="0" max="20" step="1" value="20">       
    <select id="bookFilter">
    <!-- Les options seront ajoutées ici par createTable -->
  </select>
    </div>
              <table id="catalogSpellsTable" class="table table-sm table-responsive-sm table-hover table-striped">
                <thead class="table-light">
                  <tr>
                    <th scope="col" class="name-column h6">${capitalized(
                      terms.spells
                    )}</th>
                    <th scope="col" class="description-column">${capitalized(
                      terms.descriptions
                    )}</th>
                    <th scope="col" class="category-column">${capitalized(
                      terms.category
                    )}</th>
                    <th scope="col" class="drainValue-column">${capitalized(
                      terms.drainValue
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

    createTable(type);

    $("#nameFilter").on("input", filterTable);
    $("#typeFilter").on("input", filterTable);
    $("#drainValueMinFilter").on("input", filterTable);
    $("#drainValueMaxFilter").on("input", filterTable);
    $("#bookFilter").on("input", filterTable);

    // Changez la couleur de l'élément "collapseQualities" lors du début du glisser-déposer
    $("#collapseSpells").addClass("toDrop");
    openCatalogPanel(type);
    let dragged = null;
    document.addEventListener("dragstart", handleDragStart);
    $(".container-fluid").on("dragstart", function (e) {
      console.log("dragstart on container-fluid before : ", e);
      e.originalEvent.dataTransfer.setData("text", "anything");
      console.log("dragstart on container-fluid after : ", e);
    });
    $(".container-fluid").on("dragover", handleDragOver);
    $("#collapseSpells").on("drop", handleDrop);
    console.log("Catalog panel opened.");
  }
}

function openCatalogPanel(type) {
  document.getElementById("catalogPanel" + type).classList.add("open");
}

function closeCatalogPanel(type) {
  console.log(
    "Closing catalog panel...",
    document.getElementById("catalogPanel" + type)
  );
  document.getElementById("catalogPanel" + type).classList.remove("open");
}

function filterTable() {
  var nameFilter = $("#nameFilter").val().toLowerCase();
  var typeFilter = $("#typeFilter").val();
  var bookFilters = $("#bookFilter").val().toLowerCase() || [];

  if ($("#catalogQualitiesTable tbody tr")) {
    var karmaCostMinFilter = $("#karmaCostMinFilter").val();
    var karmaCostMaxFilter = $("#karmaCostMaxFilter").val();

    $("#catalogQualitiesTable tbody tr").each(function () {
      var name = $(this).find(".name-column").text().toLowerCase();
      var type = $(this).find(".type-column").text();
      var karmaCost = parseInt($(this).find(".karmaCost-column").text(), 10);
      var book = $(this)
        .find(".book-column")
        .text()
        .split(" ")[0]
        .toLowerCase();

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

  if ($("#catalogRangedWeaponsTable tbody tr")) {
    var priceMinFilter = $("#priceMinFilter").val();
    var priceMaxFilter = $("#priceMaxFilter").val();

    $("#catalogRangedWeaponsTable tbody tr").each(function () {
      var name = $(this).find(".name-column").text().toLowerCase();
      var type = $(this).find(".type-column").text();
      var price = parseInt($(this).find(".price-column").text(), 10);
      var book = $(this)
        .find(".book-column")
        .text()
        .split(" ")[0]
        .toLowerCase();

      if (
        name.includes(nameFilter) &&
        (!typeFilter || type === typeFilter) &&
        (!priceMinFilter || price >= priceMinFilter) &&
        (!priceMaxFilter || price <= priceMaxFilter) &&
        (bookFilters.length === 0 || bookFilters.includes(book))
      ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  if ($("#catalogSpellsTable tbody tr")) {
    var drainValueMinFilter = $("#drainValueMinFilter").val();
    var drainValueMaxFilter = $("#drainValueMaxFilter").val();

    $("#catalogSpellsTable tbody tr").each(function () {
      var name = $(this).find(".name-column").text().toLowerCase();
      var category = $(this).find(".category-column").text();
      var drainValue = parseInt($(this).find(".drainValue-column").text(), 10);
      var book = $(this)
        .find(".book-column")
        .text()
        .split(" ")[0]
        .toLowerCase();

      if (
        name.includes(nameFilter) &&
        (!typeFilter || category === typeFilter) &&
        (!drainValueMinFilter || drainValue >= drainValueMinFilter) &&
        (!drainValueMaxFilter || drainValue <= drainValueMaxFilter) &&
        (bookFilters.length === 0 || bookFilters.includes(book))
      ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}
