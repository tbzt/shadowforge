document.addEventListener("DOMContentLoaded", function () {
  setLang("fr");
  showPriorities();
});

// Fonction pour changer la langue
function setLang(language) {
  // Utilisez le tableau de traduction correspondant à la langue
  terms = translations[language];
}

// Fonction pour afficher les données des priorités
function showPriorities() {
  // Sélectionnez le modèle Handlebars
  var source = document.getElementById("priority-template").innerHTML;

  // Compilez le modèle Handlebars
  var template = Handlebars.compile(source);

  // Sélectionnez l'élément du corps de la table des priorités
  var tableBody = document.querySelector("#priorityTable tbody");

  const metatype_A_12 = sort([].concat(tablePrioritiesMetatypes["A"]["12"]));
  const metatype_A_13 = sort([].concat(tablePrioritiesMetatypes["A"]["13"]));
  const metatype_A_14 = sort([].concat(tablePrioritiesMetatypes["A"]["14"]));
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
      metatypes:
        metatype_A_14.map((item) => capitalized(item.terms)).join(", ") +
        " (14), " +
        metatype_A_13.map((item) => capitalized(item.terms)).join(", ") +
        " (13), " +
        metatype_A_12.map((item) => capitalized(item.terms)).join(", ") +
        " (12)",
      attributes: "24",
      skills: "32",
      magicOrResonance1: "Magicien pur & adepte mystique : Magie 4, 8 formules",
      magicOrResonance2: "Magicien spécialisé : Magie 5, 10 formules",
      magicOrResonance3: "Adepte : Magie 4",
      magicOrResonance4: "Technomancien : Résonance 4, 8 formes complexes",
      resources: "450000",
    },
    B: {
      metatypes:
        metatype_B_12.map((item) => capitalized(item.terms)).join(", ") +
        " (12), " +
        metatype_B_11.map((item) => capitalized(item.terms)).join(", ") +
        " (11), " +
        metatype_B_10.map((item) => capitalized(item.terms)).join(", ") +
        " (10)",
      attributes: "16",
      skills: "24",
      magicOrResonance1: "Magicien pur & adepte mystique : Magie 3, 6 formules",
      magicOrResonance2: "Magicien spécialisé : Magie 4, 8 formules",
      magicOrResonance3: "Adepte : Magie 3",
      magicOrResonance4: "Technomancien : Résonance 3, 6 formes complexes",
      resources: "275000",
    },
    C: {
      metatypes:
        metatype_C_10.map((item) => capitalized(item.terms)).join(", ") +
        " (10), " +
        metatype_C_9.map((item) => capitalized(item.terms)).join(", ") +
        " (9), " +
        metatype_C_8.map((item) => capitalized(item.terms)).join(", ") +
        " (8), " +
        metatype_C_4.map((item) => capitalized(item.terms)).join(", ") +
        " (4)",
      attributes: "12",
      skills: "20",
      magicOrResonance1: "Magicien pur & adepte mystique : Magie 2, 4 formules",
      magicOrResonance2: "Magicien spécialisé : Magie 3, 6 formules",
      magicOrResonance3: "Adepte : Magie 2",
      magicOrResonance4: "Technomancien : Résonance 2, 4 formes complexes",
      resources: "150000",
    },
    D: {
      metatypes:
        metatype_D_5.map((item) => capitalized(item.terms)).join(", ") +
        " (5), " +
        metatype_D_4.map((item) => capitalized(item.terms)).join(", ") +
        " (4), " +
        metatype_D_2.map((item) => capitalized(item.terms)).join(", ") +
        " (2)",
      attributes: "8",
      skills: "16",
      magicOrResonance1: "Magicien pur & adepte mystique : Magie 1, 2 formules",
      magicOrResonance2: "Magicien spécialisé : Magie 2, 4 formules",
      magicOrResonance3: "Adepte : Magie 1",
      magicOrResonance4: "Technomancien : Résonance 1, 2 formes complexes",
      resources: "50000",
    },
    E: {
      metatypes:
        metatype_E_1.map((item) => capitalized(item.terms)).join(", ") + " (1)",
      attributes: "2",
      skills: "10",
      magicOrResonance: "Ordinaire",
      resources: "8000",
    },
  };

  // Générez le contenu HTML en utilisant le modèle et les données
  var html = template(priorities);
  // Affichez le contenu généré dans le corps de la table des priorités
  tableBody.innerHTML = html;
}
