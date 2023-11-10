document.addEventListener("DOMContentLoaded", function () {
  setLang("fr");
  showPriorities();
});

// Fonction pour changer la langue
function setLang(language) {
  // Utilisez le tableau de traduction correspondant à la langue
  terms = translations[language];
}

Handlebars.registerHelper("capitalized", function(item) {
  return capitalized(item);;
});

// Fonction pour afficher les données des priorités
function showPriorities() {
  // Sélectionnez le modèle Handlebars
  var source = document.getElementById("priority-template").innerHTML;

  // Compilez le modèle Handlebars
  var template = Handlebars.compile(source);

  // Sélectionnez l'élément du corps de la table des priorités
  var tableBody = document.querySelector("#priorityTable tbody");

  const metatype_A_11 = sort([].concat(tablePrioritiesMetatypes["A"]["11"]));
  const metatype_A_12 = sort([].concat(tablePrioritiesMetatypes["A"]["12"]));
  const metatype_A_13 = sort([].concat(tablePrioritiesMetatypes["A"]["13"]));
  const metatype_A_14 = sort([].concat(tablePrioritiesMetatypes["A"]["14"]));
  const metatype_B_9 = sort([].concat(tablePrioritiesMetatypes["B"]["9"]));
  const metatype_B_10 = sort([].concat(tablePrioritiesMetatypes["B"]["10"]));
  const metatype_B_11 = sort([].concat(tablePrioritiesMetatypes["B"]["11"]));
  const metatype_B_12 = sort([].concat(tablePrioritiesMetatypes["B"]["12"]));
  const metatype_C_4 = sort([].concat(tablePrioritiesMetatypes["C"]["4"]));
  const metatype_C_10 = sort([].concat(tablePrioritiesMetatypes["C"]["10"]));
  const metatype_C_9 = sort([].concat(tablePrioritiesMetatypes["C"]["9"]));
  const metatype_C_8 = sort([].concat(tablePrioritiesMetatypes["C"]["8"]));
  const metatype_D_2 = sort([].concat(tablePrioritiesMetatypes["D"]["2"]));
  const metatype_D_4 = sort([].concat(tablePrioritiesMetatypes["D"]["4"]));
  const metatype_D_5 = sort([].concat(tablePrioritiesMetatypes["D"]["5"]));
  const metatype_E_1 = sort([].concat(tablePrioritiesMetatypes["E"]["1"]));

  // Injectez les données JSON des priorités dans le modèle Handlebars
  var priorities = {
    A: {
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
      magicOrResonance1: capitalized(terms.fullMagician) + " & " + capitalized(terms.mysticAdept) + terms.colons + " " + capitalized(terms.magic) + " 4, 8 " + terms.formulas,
      magicOrResonance2: capitalized(terms.aspectedMagician) + terms.colons + " " + capitalized(terms.magic) + " 5, 10 " + terms.formulas,
      magicOrResonance3: capitalized(terms.adept) + terms.colons + " " + capitalized(terms.magic) + " 4",
      magicOrResonance4: capitalized(terms.technomancer) + terms.colons + " " + capitalized(terms.resonance) + " 4, 8 " + terms.complexForms,
      resources: "450000",
    },
    B: {
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
        metatype_B_9.map((item) => capitalized(item.terms)).join(", ") +
        " (9)",
      attributes: "16",
      skills: "24",
      magicOrResonance1: capitalized(terms.fullMagician) + " & " + capitalized(terms.mysticAdept) + terms.colons + " " + capitalized(terms.magic) + " 3, 6 " + terms.formulas,
      magicOrResonance2: capitalized(terms.aspectedMagician) + terms.colons + " " + capitalized(terms.magic) + " 4, 8 " + terms.formulas,
      magicOrResonance3: capitalized(terms.adept) + terms.colons + " " + capitalized(terms.magic) + " 3",
      magicOrResonance4: capitalized(terms.technomancer) + terms.colons + " " + capitalized(terms.resonance) + " 3, 6 " + terms.complexForms,
      resources: "275000",
    },
    C: {
      metatypes1:
        metatype_C_10.map((item) => capitalized(item.terms)).join(", ") +
        " (10)",
      metatypes2:
        metatype_C_9.map((item) => capitalized(item.terms)).join(", ") +
        " (9)",
      metatypes3:
        metatype_C_8.map((item) => capitalized(item.terms)).join(", ") +
        " (8)",
      metatypes4:
        metatype_C_4.map((item) => capitalized(item.terms)).join(", ") +
        " (4)",
      attributes: "12",
      skills: "20",
      magicOrResonance1: capitalized(terms.fullMagician) + " & " + capitalized(terms.mysticAdept) + terms.colons + " " + capitalized(terms.magic) + " 2, 4 " + terms.formulas,
      magicOrResonance2: capitalized(terms.aspectedMagician) + terms.colons + " " + capitalized(terms.magic) + " 3, 6 " + terms.formulas,
      magicOrResonance3: capitalized(terms.adept) + terms.colons + " " + capitalized(terms.magic) + " 2",
      magicOrResonance4: capitalized(terms.technomancer) + terms.colons + " " + capitalized(terms.resonance) + " 2, 4 " + terms.complexForms,
      resources: "150000",
    },
    D: {
      metatypes1:
        metatype_D_5.map((item) => capitalized(item.terms)).join(", ") +
        " (5)",
      metatypes2:
        metatype_D_4.map((item) => capitalized(item.terms)).join(", ") +
        " (4)",
      metatypes3:
        metatype_D_2.map((item) => capitalized(item.terms)).join(", ") +
        " (2)",
      attributes: "8",
      skills: "16",
      magicOrResonance1: capitalized(terms.fullMagician) + " & " + capitalized(terms.mysticAdept) + terms.colons + " " + capitalized(terms.magic) + " 1, 2 " + terms.formulas,
      magicOrResonance2: capitalized(terms.aspectedMagician) + terms.colons + " " + capitalized(terms.magic) + " 2, 4 " + terms.formulas,
      magicOrResonance3: capitalized(terms.adept) + terms.colons + " " + capitalized(terms.magic) + " 1",
      magicOrResonance4: capitalized(terms.technomancer) + terms.colons + " " + capitalized(terms.resonance) + " 1, 2 " + terms.complexForms,
      resources: "50000",
    },
    E: {
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

  console.log(html);
  // Affichez le contenu généré dans le corps de la table des priorités
  tableBody.innerHTML = html;
}
