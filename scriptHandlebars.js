document.addEventListener("DOMContentLoaded", function () {
    afficherPriorites();
    handleAttributs();
});

// Fonction pour afficher les données des priorités
function afficherPriorites() {
    // Sélectionnez le modèle Handlebars
    var source = document.getElementById("priorite-template").innerHTML;

    // Compilez le modèle Handlebars
    var template = Handlebars.compile(source);

    // Sélectionnez l'élément du corps de la table des priorités
    var tableBody = document.querySelector("#prioriteTable tbody");

    // Injectez les données JSON des priorités dans le modèle Handlebars
    var priorites = {
        "A": {
            "metatypes": "Nain, Ork, Troll (13)",
            "attributs": "24",
            "competences": "32",
            "magie_ou_resonnance1": "Magicien pur & adepte mystique : Magie 4, 8 formules",
            "magie_ou_resonnance2": "Magicien spécialisé : Magie 5, 10 formules",
            "magie_ou_resonnance3": "Adepte : Magie 4",
            "magie_ou_resonnance4": "Technomancien : Résonance 4, 8 formes complexes",
            "ressources": "450000"
        },
        "B": {
            "metatypes": "Nain, Elfe, Ork, Troll (11)",
            "attributs": "16",
            "competences": "24",
            "magie_ou_resonnance1": "Magicien pur & adepte mystique : Magie 3, 6 formules",
            "magie_ou_resonnance2": "Magicien spécialisé : Magie 4, 8 formules",
            "magie_ou_resonnance3": "Adepte : Magie 3",
            "magie_ou_resonnance4": "Technomancien : Résonance 3, 6 formes complexes",
            "ressources": "275000"
        },
        "C": {
            "metatypes": "Nain, Elfe, Humain, Ork, Troll (9)",
            "attributs": "12",
            "competences": "20",
            "magie_ou_resonnance1": "Magicien pur & adepte mystique : Magie 2, 4 formules",
            "magie_ou_resonnance2": "Magicien spécialisé : Magie 3, 6 formules",
            "magie_ou_resonnance3": "Adepte : Magie 2",
            "magie_ou_resonnance4": "Technomancien : Résonance 2, 4 formes complexes",
            "ressources": "150000"
        },
        "D": {
            "metatypes": "Nain, Elfe, Humain, Ork, Troll (4)",
            "attributs": "8",
            "competences": "16",
            "magie_ou_resonnance1": "Magicien pur & adepte mystique : Magie 1, 2 formules",
            "magie_ou_resonnance2": "Magicien spécialisé : Magie 2, 4 formules",
            "magie_ou_resonnance3": "Adepte : Magie 1",
            "magie_ou_resonnance4": "Technomancien : Résonance 1, 2 formes complexes",
            "ressources": "50000"
        },
        "E": {
            "metatypes": "Nain, Elfe, Humain, Ork, Troll (1)",
            "attributs": "2",
            "competences": "10",
            "magie_ou_resonnance": "Ordinaire",
            "ressources": "8000"
        }
    };

    // Générez le contenu HTML en utilisant le modèle et les données
    var html = template(priorites);
    // Affichez le contenu généré dans le corps de la table des priorités
    tableBody.innerHTML = html;
}
