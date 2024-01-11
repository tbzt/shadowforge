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
  let endWeight = 15 + textWeightWidth;

  // ATTRIBUTES
  doc.setFontSize(12);
  doc.setFont("Roboto", "bold");
  doc.setTextColor(242, 5, 135);
  doc.text(`${capitalized(terms.attributes)}`, 10, 43);

  doc.setFont("Roboto", "normal");
  doc.setTextColor(0, 0, 0);
  fontSize = 8;
  doc.setFontSize(8);

  let attributeKeys = Object.keys(character.attributes).filter((key) => {
    if (!character.isMagic && key === "magic") {
      return false;
    }
    if (!character.isTechno && key === "resonance") {
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

  console.log(character.attributes);

  doc.autoTable({
    head: [attributeTerms],
    body: [attributeValues],
    startX: 10,
    startY: 45,
    styles: { fontSize: 8, halign: "center" },
    headStyles: {
      fillColor: [242, 5, 135],
      textColor: [255, 255, 255],
      fontSize: 8,
      halign: "center",
    },
  });

  // SKILLS
  let skillsKeys = Object.keys(character.skills).filter((key) => {
    if (key === "exoticWeapons") {
      return character.skills.exoticWeapons.specializations.length > 0;
    } else {
      return character.skills[key].rdd > 0;
    }
  });

  let skillsTerms = skillsKeys.map((key) => {
    let term = `${capitalized(terms[key])} [${character.skills[key].value}]`;
    if (character.skills[key].specializations.length === 1) {
      term += ` (${capitalized(
        terms[character.skills[key].specializations[0]]
      )})`;
    }
    if (character.skills[key].specializations.length === 2) {
      term += ` (${capitalized(
        terms[character.skills[key].specializations[0]]
      )} / ${capitalized(terms[character.skills[key].specializations[1]])})`;
    }
    return term;
  });
  let sortSkillsTerms = skillsTerms.sort();

  let skillsValues = skillsKeys.map((key) => character.skills[key].rdd);

  let skillsBody = sortSkillsTerms.map((term, i) => [term, skillsValues[i]]);

  skillsStart = doc.autoTable.previous.finalY;

  doc.autoTable({
    head: [[capitalized(terms.skills), terms.rdd]],
    body: skillsBody,
    startX: 10,
    startY: skillsStart + 5,
    styles: { cellWidth: "wrap", fontSize: 8 },
    columnStyles: { 0: { cellWidth: 40 }, 1: { cellWidth: 10, halign: "center" } },
    headStyles: {
      fillColor: [242, 5, 135],
      textColor: [255, 255, 255],
      fontSize: 8,
    },
  });

  skillsEnd = doc.autoTable.previous.finalY;

  // KNOWLEDGES + LANGUAGES
  let knowledgesKeys = character.knowledges.map((knowledge) => [knowledge.key]);
  let languagesKeys = character.languages.map((language) => [language.key]);

  let knowledgesAndLanguages = knowledgesKeys.concat(languagesKeys);

  doc.autoTable({
    head: [[capitalized(terms.knowledges)]],
    body: knowledgesAndLanguages,
    startY: skillsStart + 5, // Démarre le nouveau tableau à la même hauteur que le dernier tableau
    styles: { cellWidth: "wrap", fontSize: 8 },
    margin: { horizontal: 70 },
    columnStyles: { 0: { cellWidth: 40 } }, // Utilisez la largeur de colonne calculée
    headStyles: {
      fillColor: [242, 5, 135],
      textColor: [255, 255, 255],
      fontSize: 8,
    },
  });

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
      startY: skillsStart + 5, // Démarre le nouveau tableau à la même hauteur que le dernier tableau
      styles: { cellWidth: "wrap", fontSize: 8 },
      margin: { horizontal: 115 },
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
