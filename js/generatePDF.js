const { jsPDF } = window.jspdf;

function generatePDF(character) {
  let doc = new jsPDF();

  // Set Font
  const robotoRegular = robotoRegularFontBase64;
  const robotoItalic = robotoItalicFontBase64;
  const robotoBold = robotoBoldFontBase64;

  doc.addFileToVFS("Roboto-Regular.ttf", robotoRegular);
  doc.addFileToVFS("Roboto-Italic.ttf", robotoItalic);
  doc.addFileToVFS("Roboto-Bold.ttf", robotoBold);

  doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  doc.addFont("Roboto-Italic.ttf", "Roboto", "italic");
  doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");

  doc.setFont("Roboto");
  console.log(doc.getFontList());

  // Set Title
  doc.setFontSize(15);
  doc.setFont("Roboto", "bold");
  doc.setTextColor(242, 5, 135);
  doc.text("SHADOWRUN 6", 105, 10, null, null, "center");

  // PERSONAL DATA
  doc.setFontSize(12);
  doc.text(`${capitalized(terms.personalData)}`, 10, 20);

  // Font size for personal data
  doc.setFont("Roboto", "normal");
  doc.setTextColor(0, 0, 0);
  let fontSize = 8;
  doc.setFontSize(fontSize);

  // Name
  doc.text(
    `${capitalized(terms.name)}/${capitalized(terms.alias)}${terms.colons} ${
      character.SIN.name
    }${character.SIN.alias ? " AKA " + character.SIN.alias : ""}`,
    15,
    25
  );

  // Metatype
  let textMetatype = `${capitalized(terms.metatype)}${
    terms.colons
  } ${capitalized(terms[characterData.SIN.metatype])}${
    characterData.SIN.metatypeVariant
      ? " (" + capitalized(terms[characterData.SIN.metatypeVariant]) + ")"
      : ""
  }`;

  doc.text(textMetatype, 15, 30);
  let textMetatypeWidth =
    (doc.getStringUnitWidth(textMetatype) * fontSize) /
    doc.internal.scaleFactor;
  let endMetatype = 15 + textMetatypeWidth;

  // Nuyen
  let textNuyen = `${capitalized(terms.resources)}${terms.colons} ${
    characterData.resources
  } ¥`;

  doc.text(textNuyen, endMetatype + 2, 30);

  // Age
  let textAge = `${capitalized(terms.age)}${terms.colons} ${
    characterData.SIN.age ? characterData.SIN.age : ""
  }`;
  doc.text(textAge, 15, 35);

  // Calculer la position X où se termine le texte
  let textAgeWidth =
    (doc.getStringUnitWidth(textAge) * fontSize) / doc.internal.scaleFactor;
  let endAge = 15 + textAgeWidth;

  // Gender
  let textGender = `${capitalized(terms.gender)}${terms.colons} ${
    characterData.SIN.gender ? characterData.SIN.gender : ""
  }`;
  doc.text(textGender, endAge + 2, 35);

  // Calculer la position X où se termine le texte
  let textGenderWidth =
    (doc.getStringUnitWidth(textGender) * fontSize) / doc.internal.scaleFactor;
  let endGender = endAge + textGenderWidth + 2;

  // Height
  let textHeight = `${capitalized(terms.height)}${terms.colons} ${
    characterData.SIN.height ? characterData.SIN.height : ""
  }`;
  doc.text(textHeight, endGender + 2, 35);

  // Calculer la position X où se termine le texte
  let textHeightWidth =
    (doc.getStringUnitWidth(textHeight) * fontSize) / doc.internal.scaleFactor;
  let endHeight = endGender + textHeightWidth + 2;

  // Weight
  let textWeight = `${capitalized(terms.weight)}${terms.colons} ${
    characterData.SIN.weight ? characterData.SIN.weight : ""
  }`;
  doc.text(textWeight, endHeight + 2, 35);

  // Calculer la position X où se termine le texte
  let textWeightWidth =
    (doc.getStringUnitWidth(textWeight) * fontSize) / doc.internal.scaleFactor;
  let endWeight = endHeight + textWeightWidth + 2;

  let x = -10;
  let y = 15;
  let width = 100;
  let height = 22;
  let radius = 3; // Rayon des coins arrondis

  // Définir la couleur de la bordure
  doc.setDrawColor(242, 5, 135);

  // Dessiner un rectangle avec des coins arrondis
  doc.roundedRect(x, y, width, height, radius, radius);

  // ATTRIBUTES
  doc.setFontSize(12);
  doc.setFont("Roboto", "bold");
  doc.setTextColor(242, 5, 135);
  doc.text(`${capitalized(terms.attributes)}`, 10, 45);

  doc.setFont("Roboto", "normal");
  doc.setTextColor(0, 0, 0);
  fontSize = 8;
  doc.setFontSize(8);

  let attributeKeys = Object.keys(character.attributes).filter((key) => {
    if (
      key === "magic" &&
      (!character.isMagic || character.attributes[key].value <= 1)
    ) {
      return false;
    }
    if (
      key === "resonance" &&
      (!character.isTechno || character.attributes[key].value <= 1)
    ) {
      return false;
    }
    return character.attributes[key].value > 0;
  });
  let attributeTerms = attributeKeys.map((key) =>
    capitalized(terms[key + "_short"])
  );
  console.log(attributeTerms);
  let attributeValues = attributeKeys.map(
    (key) => character.attributes[key].value
  );

  let attributes = attributeKeys.map((key) => [
    [capitalized(terms[key])],
    [character.attributes[key].value],
  ]);

  let attributeDerivedKeys = Object.keys(character.derivedAttributes).filter(
    (key) => {
      return character.derivedAttributes[key];
    }
  );

  console.log("attributeDerivedKeys :", attributeDerivedKeys);

  let attributesDerived = attributeDerivedKeys.map((key) => {
    let attribute;
    if (
      key === "initiative" ||
      key === "astralInitiative" ||
      key === "matrixInitiative"
    ) {
      attribute =
        character.derivedAttributes[key].rank +
        " + " +
        character.derivedAttributes[key].dice +
        "D6";
    } else if (key === "movements") {
      attribute =
        character.derivedAttributes[key].walk +
        " / " +
        character.derivedAttributes[key].sprint +
        " + " +
        character.derivedAttributes[key].extra;
    } else {
      attribute = character.derivedAttributes[key];
    }

    return [[capitalized(terms[key])], [attribute]];
  });
  console.log("attributesDerived :", attributesDerived);

  var attributesStart = 10;

  doc.autoTable({
    body: attributesDerived,
    startX: attributesStart,
    startY: 48,
    margin: { horizontal: 45 },
    styles: {
      cellWidth: "wrap",
      fontSize: 8,
      cellPadding: { top: 1, right: 0, bottom: 1, left: 0 },
    },
    columnStyles: {
      0: { cellWidth: 30, halign: "right" },
      1: { cellWidth: 20, halign: "center" },
    },
    didParseCell: function (data) {
      // Appliquer une couleur de fond blanche à toutes les cellules
      data.cell.styles.fillColor = [255, 255, 255];
    },
    didDrawCell: function (data) {
      // Dessiner une bordure inférieure pour chaque cellule
      if (data.section === "body") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height
        );
      }
    },
  });

  doc.autoTable({
    body: attributes,
    startX: attributesStart,
    startY: 48,
    styles: {
      cellWidth: "wrap",
      fontSize: 8,
      cellPadding: { top: 1, right: 0, bottom: 1, left: 0 },
      fillColor: [255, 255, 255],
    },
    columnStyles: {
      0: { cellWidth: 20, halign: "right" },
      1: { cellWidth: 10, halign: "center" },
    },
    didParseCell: function (data) {
      // Appliquer une couleur de fond blanche à toutes les cellules
      data.cell.styles.fillColor = [255, 255, 255];
    },
    didDrawCell: function (data) {
      // Dessiner une bordure inférieure pour chaque cellule
      if (data.section === "body") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height
        );
      }
    },
  });

  var endAttributeX = doc.autoTable.previous.finalX;
  var endAttributeY = doc.autoTable.previous.finalY;

  let xAttributes = -10;
  let yAttributes = 40;
  let widthAttributes = 107;
  let heightAttributes = doc.autoTable.previous.finalY - 38;
  let radiusAttributes = 3;

  // Définir la couleur de la bordure
  doc.setDrawColor(242, 5, 135);

  // Dessiner un rectangle avec des coins arrondis
  doc.roundedRect(
    xAttributes,
    yAttributes,
    widthAttributes,
    heightAttributes,
    radiusAttributes,
    radiusAttributes
  );

  // SKILLS
  doc.setFontSize(12);
  doc.setFont("Roboto", "bold");
  doc.setTextColor(242, 5, 135);
  doc.text(`${capitalized(terms.skills)}`, 105, 30);

  doc.setFont("Roboto", "normal");
  doc.setTextColor(0, 0, 0);
  fontSize = 8;
  doc.setFontSize(8);

  // KNOWLEDGES + LANGUAGES
  let levels = {
    0: terms.knowledge,
    1: terms.specialist,
    2: terms.expert,
    3: terms.native,
  };
  let knowledgesKeys = character.knowledges.map((knowledge) => [knowledge.key]);
  let languagesKeys = character.languages.map((language) => [
    language.key + " (" + levels[language.level] + ")",
  ]);

  let knowledgesAndLanguages = knowledgesKeys.concat(languagesKeys).sort();

  doc.autoTable({
    body: knowledgesAndLanguages,
    startX: attributesStart - 15,
    startY: 32,
    styles: { cellWidth: "wrap", fontSize: 8 },
    margin: { horizontal: 165 },
    columnStyles: { 0: { cellWidth: 40 } },
    didParseCell: function (data) {
      // Appliquer une couleur de fond blanche à toutes les cellules
      data.cell.styles.fillColor = [255, 255, 255];
    },
    didDrawCell: function (data) {
      // Dessiner une bordure inférieure pour chaque cellule
      if (data.section === "body") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height
        );
      }
    },
  });

  function generateSkillTerm(key) {
    let term = `${capitalized(terms[key])} [${character.skills[key].value}]`;
    character.skills[key].specializations.forEach((specialization, index) => {
      term +=
        index === 0
          ? ` (${capitalized(terms[specialization])}`
          : ` / ${capitalized(terms[specialization])}`;
    });
    if (character.skills[key].specializations.length > 0) term += ")";
    return term;
  }

  let skillsKeys = Object.keys(character.skills).filter((key) => {
    if (key === "exoticWeapons") {
      return character.skills.exoticWeapons.specializations.length > 0;
    }
    if (
      character.skills[key].untrained === false &&
      character.skills[key].value === 0
    ) {
      return false;
    }
    return character.skills[key].rdd > 0;
  });

  let skillsTerms = skillsKeys.map(generateSkillTerm);
  let sortSkillsTerms = skillsTerms.sort((a, b) => a.localeCompare(b, "fr"));

  let skillsValues = skillsKeys.map((key) => character.skills[key].rdd);

  let skillsBody = sortSkillsTerms.map((term, i) => [term, skillsValues[i]]);

  doc.autoTable({
    body: skillsBody,
    startX: attributesStart - 15,
    startY: 32,
    margin: { horizontal: 110 },
    styles: { cellWidth: "wrap", fontSize: 8 },
    columnStyles: {
      0: { cellWidth: 40 },
      1: { cellWidth: 10, halign: "center" },
    },
    didParseCell: function (data) {
      // Appliquer une couleur de fond blanche à toutes les cellules
      data.cell.styles.fillColor = [255, 255, 255];
    },
    didDrawCell: function (data) {
      // Dessiner une bordure inférieure pour chaque cellule
      if (data.section === "body") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height
        );
      }
    },
  });

  skillsEnd = doc.autoTable.previous.finalY;

  var endSkillsX = doc.autoTable.previous.finalX;
  var endSkillsY = doc.autoTable.previous.finalY;

  let xSkills = 100;
  let ySkills = 25;
  let widthSkills = 130;
  let heightSkills = endSkillsY - 20;
  let radiusSkills = 3; // Rayon des coins arrondis

  // Définir la couleur de la bordure
  doc.setDrawColor(242, 5, 135);

  // Dessiner un rectangle avec des coins arrondis
  doc.roundedRect(
    xSkills,
    ySkills,
    widthSkills,
    heightSkills,
    radiusSkills,
    radiusSkills
  );

  // QUALITIES
  if (character.qualities.length > 0) {
    doc.setFontSize(12);
    doc.setFont("Roboto", "bold");
    doc.setTextColor(242, 5, 135);
    doc.text(`${capitalized(terms.qualities)}`, 105, endSkillsY + 14);

    doc.setFont("Roboto", "normal");
    doc.setTextColor(0, 0, 0);
    fontSize = 8;
    doc.setFontSize(8);

    console.log(character.qualities);
    let qualities = character.qualities.map((quality) => ({
      name: quality.key,
      description: quality.description,
    }));

    let qualitiesSort = qualities.sort((a, b) =>
      a.name.localeCompare(b.name, "fr")
    );

    let startQualitiesX = doc.autoTable.previous.finalX;
    let startQualitiesY = doc.autoTable.previous.finalY;

    doc.autoTable({
      body: qualitiesSort,
      columns: [
        { header: capitalized(terms.name), dataKey: "name" },
        { header: capitalized(terms.description), dataKey: "description" },
      ],
      startX: attributesStart,
      startY: startQualitiesY + 16,
      margin: { horizontal: 110 },
      styles: { cellWidth: "wrap", fontSize: 8 },
      columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 60, fontSize: 6 } },
      didParseCell: function (data) {
        // Appliquer une couleur de fond blanche à toutes les cellules
        data.cell.styles.fillColor = [255, 255, 255];
        if (data.section === "head") {
          data.cell.styles.textColor = [169, 169, 169];
          data.cell.styles.fontSize = 6;
          data.cell.styles.minCellHeight = 7;
        }
      },
      didDrawCell: function (data) {
        // Dessiner une bordure inférieure pour chaque cellule
        if (data.section === "body") {
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
      },
    });

    var endQualitiesX = doc.autoTable.previous.finalX;
    var endQualitiesY = doc.autoTable.previous.finalY;

    let xQualities = 100;
    let yQualities = endSkillsY + 8;
    let widthQualities = 130;
    let heightQualities = endQualitiesY - startQualitiesY - 3;
    let radiusQualities = 3; // Rayon des coins arrondis

    // Définir la couleur de la bordure
    doc.setDrawColor(242, 5, 135);

    // Dessiner un rectangle avec des coins arrondis
    doc.roundedRect(
      xQualities,
      yQualities,
      widthQualities,
      heightQualities,
      radiusQualities,
      radiusQualities
    );
  }

  // SINS
  if (character.SINS.length > 0) {
    console.log(character.SINS);

    let startSinsX = doc.autoTable.previous.finalX;
    let startSinsY = doc.autoTable.previous.finalY;

    doc.setFontSize(12);
    doc.setFont("Roboto", "bold");
    doc.setTextColor(242, 5, 135);
    doc.text(`${capitalized(terms.SINS)}`, 105, startSinsY + 14);

    doc.setFont("Roboto", "normal");
    doc.setTextColor(0, 0, 0);
    fontSize = 8;
    doc.setFontSize(8);

    let sins = character.SINS.map((sin) => ({
      name:
        sin.key +
        (sin.nationality ? " (" + sin.nationality + ", " : " (") +
        sin.rating +
        ")",
      licences: sin.licences
        .map((licence) => licence.key + " (" + licence.rating + ")")
        .join(", "),
    }));

    let sinsSort = sins.sort((a, b) => a.name.localeCompare(b.name, "fr"));

    doc.autoTable({
      body: sinsSort,
      columns: [
        { header: capitalized(terms.name), dataKey: "name" },
        { header: capitalized(terms.licences), dataKey: "licences" },
      ],
      startX: attributesStart,
      startY: startSinsY + 16,
      margin: { horizontal: 110 },
      styles: { cellWidth: "wrap", fontSize: 8 },
      columnStyles: { 0: { cellWidth: 50 }, 1: { cellWidth: 45, fontSize: 6 } },
      didParseCell: function (data) {
        // Appliquer une couleur de fond blanche à toutes les cellules
        data.cell.styles.fillColor = [255, 255, 255];
        if (data.section === "head") {
          data.cell.styles.textColor = [169, 169, 169];
          data.cell.styles.fontSize = 6;
          data.cell.styles.minCellHeight = 7;
        }
      },
      didDrawCell: function (data) {
        // Dessiner une bordure inférieure pour chaque cellule
        if (data.section === "body") {
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
      },
    });

    var endSINSX = doc.autoTable.previous.finalX;
    var endSINSY = doc.autoTable.previous.finalY;

    let xSINS = 100;
    let ySINS = startSinsY + 8;
    let widthSINS = 130;
    let heightSINS = endSINSY - startSinsY - 3;
    let radiusSINS = 3; // Rayon des coins arrondis

    // Définir la couleur de la bordure
    doc.setDrawColor(242, 5, 135);

    // Dessiner un rectangle avec des coins arrondis
    doc.roundedRect(
      xSINS,
      ySINS,
      widthSINS,
      heightSINS,
      radiusSINS,
      radiusSINS
    );
  }

  // LIFESTYLES
  if (character.lifestyles.length > 0) {
    console.log(character.lifestyles);

    let startLifestylesX = doc.autoTable.previous.finalX;
    let startLifestylesY = doc.autoTable.previous.finalY;

    doc.setFontSize(12);
    doc.setFont("Roboto", "bold");
    doc.setTextColor(242, 5, 135);
    doc.text(`${capitalized(terms.lifestyles)}`, 105, startLifestylesY + 14);

    doc.setFont("Roboto", "normal");
    doc.setTextColor(0, 0, 0);
    fontSize = 8;
    doc.setFontSize(8);
    console.log("character.lifestyles:", character.lifestyles);

    let lifestyles = character.lifestyles.map((lifestyle) => ({
      name:
        lifestyle.key +
        " (" +
        terms[lifestyle.type] +
        ")" +
        terms.colons +
        " " +
        lifestyle.description,
      linkedIdentity: lifestyle.linkedIdentity,
    }));

    console.log("lifestyles:", lifestyles);

    let lifestylesSort = lifestyles.sort((a, b) =>
      a.linkedIdentity.localeCompare(b.linkedIdentity, "fr")
    );

    doc.autoTable({
      body: lifestylesSort,
      columns: [
        { header: capitalized(terms.name), dataKey: "name" },
        {
          header: capitalized(terms.linkedIdentity),
          dataKey: "linkedIdentity",
        },
      ],
      startX: attributesStart,
      startY: startLifestylesY + 16,
      margin: { horizontal: 110 },
      styles: { cellWidth: "wrap", fontSize: 8 },
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 35 },
      },
      didParseCell: function (data) {
        // Appliquer une couleur de fond blanche à toutes les cellules
        data.cell.styles.fillColor = [255, 255, 255];
        if (data.section === "head") {
          data.cell.styles.textColor = [169, 169, 169];
          data.cell.styles.fontSize = 6;
          data.cell.styles.minCellHeight = 7;
        }
      },
      didDrawCell: function (data) {
        // Dessiner une bordure inférieure pour chaque cellule
        if (data.section === "body") {
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
      },
    });

    var endLifestylesX = doc.autoTable.previous.finalX;
    var endLifestylesY = doc.autoTable.previous.finalY;

    let xLifestyle = 100;
    let yLifestyle = startLifestylesY + 8;
    let widthLifestyle = 130;
    let heightLifestyle = endLifestylesY - startLifestylesY - 3;
    let radiusLifestyle = 3; // Rayon des coins arrondis

    // Définir la couleur de la bordure
    doc.setDrawColor(242, 5, 135);

    // Dessiner un rectangle avec des coins arrondis
    doc.roundedRect(
      xLifestyle,
      yLifestyle,
      widthLifestyle,
      heightLifestyle,
      radiusLifestyle,
      radiusLifestyle
    );
  }

  // CONTACTS
  if (character.contacts.length > 0) {
    console.log(character.contacts);

    let startContactsX = doc.autoTable.previous.finalX;
    let startContactsY = doc.autoTable.previous.finalY;

    doc.setFontSize(12);
    doc.setFont("Roboto", "bold");
    doc.setTextColor(242, 5, 135);
    doc.text(`${capitalized(terms.contacts)}`, 105, startContactsY + 14);

    doc.setFont("Roboto", "normal");
    doc.setTextColor(0, 0, 0);
    fontSize = 8;
    doc.setFontSize(8);

    let contacts = character.contacts.map((contact) => ({
      name: contact.key + " (" + contact.type + ")",
      loyalty: contact.loyalty,
      connection: contact.connection,
    }));

    let contactsSort = contacts.sort((a, b) =>
      a.name.localeCompare(b.name, "fr")
    );

    console.log(contactsSort);

    doc.autoTable({
      body: contactsSort,
      columns: [
        { header: capitalized(terms.name), dataKey: "name" },
        { header: capitalized(terms.loyalty), dataKey: "loyalty" },
        { header: capitalized(terms.connection), dataKey: "connection" },
      ],
      columnStyles: {
        name: { cellWidth: 60 },
        loyalty: { cellWidth: 15 },
        connection: { cellWidth: 15 },
      },
      startX: attributesStart,
      startY: startContactsY + 16,
      margin: { horizontal: 110 },
      styles: { cellWidth: "wrap", fontSize: 8 },
      didParseCell: function (data) {
        data.cell.styles.fillColor = [255, 255, 255];
        if (data.section === "head") {
          data.cell.styles.textColor = [169, 169, 169];
          data.cell.styles.fontSize = 6;
          data.cell.styles.minCellHeight = 7;
        }
      },
      didDrawCell: function (data) {
        // Dessiner une bordure inférieure pour chaque cellule
        if (data.section === "body") {
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
      },
      rowStyles: {
        0: { height: 4 },
      },
    });

    var endContactsX = doc.autoTable.previous.finalX;
    var endContactsY = doc.autoTable.previous.finalY;

    let xContacts = 100;
    let yContacts = startContactsY + 8;
    let widthContacts = 130;
    let heightContacts = endContactsY - startContactsY - 3;
    let radiusContacts = 3; // Rayon des coins arrondis

    // Définir la couleur de la bordure
    doc.setDrawColor(242, 5, 135);

    // Dessiner un rectangle avec des coins arrondis
    doc.roundedRect(
      xContacts,
      yContacts,
      widthContacts,
      heightContacts,
      radiusContacts,
      radiusContacts
    );
  }

  // PROTECTION
  if (character.protections.length > 0) {
    console.log(character.protections);

    let startProtectionsX = endAttributeX;
    let startProtectionsY = endAttributeY;

    console.log(startProtectionsX, startProtectionsY);

    doc.setFontSize(12);
    doc.setFont("Roboto", "bold");
    doc.setTextColor(242, 5, 135);
    doc.text(`${capitalized(terms.protections)}`, 10, startProtectionsY + 14);

    doc.setFont("Roboto", "normal");
    doc.setTextColor(0, 0, 0);
    fontSize = 8;
    doc.setFontSize(8);

    let protections = character.protections.map((protection) => ({
      name: protection.key,
      description: protection.description,
      defenseRating: protection.defenseRating,
      socialRating: protection.socialRating,
    }));

    let protectionsSort = protections.sort((a, b) =>
      a.name.localeCompare(b.name, "fr")
    );

    console.log(protectionsSort);

    doc.autoTable({
      body: protectionsSort,
      columns: [
        { header: capitalized(terms.name), dataKey: "name" },
        { header: capitalized(terms.description), dataKey: "description" },
        {
          header: capitalized(terms.defenseRatingSmall),
          dataKey: "defenseRating",
        },
        {
          header: capitalized(terms.socialRatingSmall),
          dataKey: "socialRating",
        },
      ],
      columnStyles: {
        name: { cellWidth: 20 },
        description: { cellWidth: 40, fontSize: 6 },
        defenseRating: { cellWidth: 10 },
        socialRating: { cellWidth: 10 },
      },
      startY: startProtectionsY + 16,
      margin: { horizontal: 5 },
      styles: { cellWidth: "wrap", fontSize: 8 },
      didParseCell: function (data) {
        data.cell.styles.fillColor = [255, 255, 255];
        if (data.section === "head") {
          data.cell.styles.textColor = [169, 169, 169];
          data.cell.styles.fontSize = 6;
          data.cell.styles.minCellHeight = 7;
        }
      },
      didDrawCell: function (data) {
        // Dessiner une bordure inférieure pour chaque cellule
        if (data.section === "body") {
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
      },
      rowStyles: {
        0: { height: 4 },
      },
    });

    console.log(doc.autoTable);

    var endProtectionsX = doc.autoTable.previous.finalX;
    var endProtectionsY = doc.autoTable.previous.finalY;

    let xProtections = -10;
    let yProtections = startProtectionsY + 8;
    let widthProtections = 100;
    let heightProtections = endProtectionsY - startProtectionsY - 3;
    let radiusProtections = 3;

    // Définir la couleur de la bordure
    doc.setDrawColor(242, 5, 135);

    // Dessiner un rectangle avec des coins arrondis
    doc.roundedRect(
      xProtections,
      yProtections,
      widthProtections,
      heightProtections,
      radiusProtections,
      radiusProtections
    );
  }

  // EQUIPMENT

  // COMBAT

  // MAGIC

  // RESONANCE

  // MATRIX

  // BIOTECH

  // Ajouter un pied de page
  doc.setFontSize(8);
  doc.text("Générée par ShadowForge", 105, 300, null, null, "center");

  // Sauvegarder le PDF
  doc.save(`${character.SIN.name}.pdf`);
}
