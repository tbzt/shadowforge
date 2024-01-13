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
      return character.derivedAttributes[key] >= 0;
    }
  );

  console.log(attributeDerivedKeys);

  let attributesDerived = attributeDerivedKeys.map((key) => [
    [capitalized(terms[key])],
    [character.derivedAttributes[key]],
  ]);

  console.log(attributesDerived);

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
  let widthAttributes = 100;
  let heightAttributes = doc.autoTable.previous.finalY - 38;
  let radiusAttributes = 3; // Rayon des coins arrondis

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
  doc.text(`${capitalized(terms.skills)}`, 110, 45);

  doc.setFont("Roboto", "normal");
  doc.setTextColor(0, 0, 0);
  fontSize = 8;
  doc.setFontSize(8);

  function generateSkillTerm(key) {
    let term = `${capitalized(terms[key])} [${character.skills[key].value}]`;
    character.skills[key].specializations.forEach((specialization, index) => {
      term += index === 0 ? ` (${capitalized(terms[specialization])}` : ` / ${capitalized(terms[specialization])}`;
    });
    if (character.skills[key].specializations.length > 0) term += ')';
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
  let sortSkillsTerms = skillsTerms.sort((a, b) => a.localeCompare(b, 'fr'));

  let skillsValues = skillsKeys.map((key) => character.skills[key].rdd);

  let skillsBody = sortSkillsTerms.map((term, i) => [term, skillsValues[i]]);

  doc.autoTable({
    body: skillsBody,
    startX: attributesStart,
    startY: 48,
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

  let knowledgesAndLanguages = knowledgesKeys.concat(languagesKeys).sort((a, b) => a.localeCompare(b, 'fr'));

  doc.autoTable({
    body: knowledgesAndLanguages,
    startX: attributesStart,
    startY: 48,
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

  let xSkills = 105;
  let ySkills = 40;
  let widthSkills = 130;
  let heightSkills = endSkillsY - 35;
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
    console.log(character.qualities);
    let qualities = character.qualities.map((quality) => [
      quality.key,
      quality.description,
    ]);

    doc.autoTable({
      head: [[capitalized(terms.qualities), capitalized(terms.description)]],
      body: qualities,
      startX: 10, // Démarre le nouveau tableau à la même hauteur que le dernier tableau
      startY: endAttributeY + 5, // Démarre le nouveau tableau à la même hauteur que le dernier tableau
      styles: { cellWidth: "wrap", fontSize: 8 },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 50 } }, // Utilisez la largeur de colonne calculée
      headStyles: {
        fillColor: [242, 5, 135],
        textColor: [255, 255, 255],
        fontSize: 8,
      },
    });
  }

  // EQUIPMENT

  // COMBAT

  // MAGIC

  // RESONANCE

  // MATRIX

  // BIOTECH

  // Ajouter un pied de page
  doc.setFontSize(8);
  doc.text("Générée par ShadowForge", 105, 280, null, null, "center");

  // Sauvegarder le PDF
  doc.save(`${character.SIN.name}.pdf`);
}
