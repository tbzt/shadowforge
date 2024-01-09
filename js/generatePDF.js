const { jsPDF } = window.jspdf;

function generatePDF(character) {
  let doc = new jsPDF();

  // Définir la police et la taille de la police
  // Les chaînes Base64 pour les fichiers de police Roboto
  const robotoRegular = robotoRegularFontBase64;
  const robotoItalic = robotoItalicFontBase64;
  const robotoBold = robotoBoldFontBase64;

  // Ajoutez les fichiers de police au système de fichiers virtuel de jsPDF
  doc.addFileToVFS("Roboto-Regular.ttf", robotoRegular);
  doc.addFileToVFS("Roboto-Italic.ttf", robotoItalic);
  doc.addFileToVFS("Roboto-Bold.ttf", robotoBold);

  // Ajoutez la police à jsPDF
  doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  doc.addFont("Roboto-Italic.ttf", "Roboto", "italic");
  doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");

  // Maintenant, vous pouvez utiliser la police Roboto
  doc.setFont("Roboto");
  console.log(doc.getFontList());
  doc.setFontSize(10);

  // Ajouter un en-tête
  doc.text("SHADOWRUN 6", 105, 10, null, null, "center");

  // Ajouter du texte pour chaque propriété du personnage
  doc.text(
    `${capitalized(terms.SIN)}${terms.colons} ${character.SIN.name}`,
    15,
    25
  );
  doc.text(
    `${capitalized(terms.metatype)}${terms.colons} ${capitalized(
      terms[characterData.SIN.metatypeVariant]
    )}`,
    15,
    30
  );

  // ATTRIBUTES
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
    startY: 40,
    headStyles: { fillColor: [242, 5, 135], textColor: [255, 255, 255] },
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
    styles: { cellWidth: "wrap" },
    columnStyles: { 0: { cellWidth: 40 }, 1: { cellWidth: 10 } },
    headStyles: { fillColor: [242, 5, 135], textColor: [255, 255, 255] },
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
    styles: { cellWidth: "wrap" },
    margin: { horizontal: 70 },
    columnStyles: { 0: { cellWidth: 40 } }, // Utilisez la largeur de colonne calculée
    headStyles: { fillColor: [242, 5, 135], textColor: [255, 255, 255] },
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
      styles: { cellWidth: "wrap" },
      margin: { horizontal: 115 },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 50 } }, // Utilisez la largeur de colonne calculée
      headStyles: { fillColor: [242, 5, 135], textColor: [255, 255, 255] },
    });
  }

  // EQUIPMENT

  // COMBAT

  // MAGIC

  // RESONANCE

  // MATRIX

  // BIOTECH

  // Ajouter un pied de page
  doc.setFontSize(10);
  doc.text("Générée par ShadowForge", 105, 280, null, null, "center");

  // Sauvegarder le PDF
  doc.save(`${character.SIN.name}.pdf`);
}
