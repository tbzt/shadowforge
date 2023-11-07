document.addEventListener("DOMContentLoaded", function () {
    showPriorities();
});

// Fonction pour afficher les données des priorités
function showPriorities() {
    // Sélectionnez le modèle Handlebars
    var source = document.getElementById("priority-template").innerHTML;

    // Compilez le modèle Handlebars
    var template = Handlebars.compile(source);

    // Sélectionnez l'élément du corps de la table des priorités
    var tableBody = document.querySelector("#priorityTable tbody");

    // Injectez les données JSON des priorités dans le modèle Handlebars
    var priorities = {
        "A": {
            "metatypes": "Nain, Ork, Troll (13)",
            "attributes": "24",
            "skills": "32",
            "magicOrResonance1": "Magicien pur & adepte mystique : Magie 4, 8 formules",
            "magicOrResonance2": "Magicien spécialisé : Magie 5, 10 formules",
            "magicOrResonance3": "Adepte : Magie 4",
            "magicOrResonance4": "Technomancien : Résonance 4, 8 formes complexes",
            "resources": "450000"
        },
        "B": {
            "metatypes": "Nain, Elfe, Ork, Troll (11)",
            "attributes": "16",
            "skills": "24",
            "magicOrResonance1": "Magicien pur & adepte mystique : Magie 3, 6 formules",
            "magicOrResonance2": "Magicien spécialisé : Magie 4, 8 formules",
            "magicOrResonance3": "Adepte : Magie 3",
            "magicOrResonance4": "Technomancien : Résonance 3, 6 formes complexes",
            "resources": "275000"
        },
        "C": {
            "metatypes": "Nain, Elfe, Humain, Ork, Troll (9)",
            "attributes": "12",
            "skills": "20",
            "magicOrResonance1": "Magicien pur & adepte mystique : Magie 2, 4 formules",
            "magicOrResonance2": "Magicien spécialisé : Magie 3, 6 formules",
            "magicOrResonance3": "Adepte : Magie 2",
            "magicOrResonance4": "Technomancien : Résonance 2, 4 formes complexes",
            "resources": "150000"
        },
        "D": {
            "metatypes": "Nain, Elfe, Humain, Ork, Troll (4)",
            "attributes": "8",
            "skills": "16",
            "magicOrResonance1": "Magicien pur & adepte mystique : Magie 1, 2 formules",
            "magicOrResonance2": "Magicien spécialisé : Magie 2, 4 formules",
            "magicOrResonance3": "Adepte : Magie 1",
            "magicOrResonance4": "Technomancien : Résonance 1, 2 formes complexes",
            "resources": "50000"
        },
        "E": {
            "metatypes": "Nain, Elfe, Humain, Ork, Troll (1)",
            "attributes": "2",
            "skills": "10",
            "magicOrResonance": "Ordinaire",
            "resources": "8000"
        }
    };

    // Générez le contenu HTML en utilisant le modèle et les données
    var html = template(priorities);
    // Affichez le contenu généré dans le corps de la table des priorités
    tableBody.innerHTML = html;
}
