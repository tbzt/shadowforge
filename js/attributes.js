
// Fonction pour mettre à jour les valeurs d'attributes en fonction du métatype
function updateAttributesForMetatype(metatype) {
  var attributesData = characterData.attributes;
  if (metatype === "dwarf") {
    attributesData.body.max = 7;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 5;
    attributesData.strength.max = 8;
    attributesData.willpower.max = 7;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "elf") {
    attributesData.body.max = 6;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 8;
    attributesData.edge.max = 6;
  } else if (metatype === "ork") {
    attributesData.body.max = 8;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 8;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 5;
    attributesData.edge.max = 6;
  } else if (metatype === "troll") {
    attributesData.body.max = 9;
    attributesData.agility.max = 5;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 9;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 5;
    attributesData.edge.max = 6;
  } else if (metatype === "human") {
    attributesData.body.max = 6;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 7;
  } else if (metatype === "dalakitnon") {
    attributesData.body.max = 6;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 8;
    attributesData.intuition.max = 7;
    attributesData.charisma.max = 8;
    attributesData.edge.max = 6;
  } else if (metatype === "dryad") {
    attributesData.body.max = 6;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 5;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 8;
    attributesData.edge.max = 6;
  } else if (metatype === "nocturna") {
    attributesData.body.max = 5;
    attributesData.agility.max = 8;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 7;
    attributesData.edge.max = 6;
  } else if (metatype === "wakyambi") {
    attributesData.body.max = 6;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 7;
    attributesData.edge.max = 7;
  }else if (metatype === "xapiri_thepe") {
    attributesData.body.max = 6;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 7;
    attributesData.edge.max = 6;
  } else if (metatype === "nartaki") {
    attributesData.body.max = 8;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 8;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "valkyrie") {
    attributesData.body.max = 7;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 7;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "duende") {
    attributesData.body.max = 7;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 8;
    attributesData.strength.max = 6;
    attributesData.willpower.max = 7;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 7;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  }else if (metatype === "gnome") {
    attributesData.body.max = 4;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 4;
    attributesData.willpower.max = 7;
    attributesData.logic.max = 7;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "hanuman") {
    attributesData.body.max = 6;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 7;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 7;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "koborokuru") {
    attributesData.body.max = 7;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 7;
    attributesData.willpower.max = 7;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "menehune") {
    attributesData.body.max = 7;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 5;
    attributesData.strength.max = 7;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  }else if (metatype === "hobgobelin") {
    attributesData.body.max = 6;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 7;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 7;
    attributesData.edge.max = 6;
  } else if (metatype === "ogre") {
    attributesData.body.max = 9;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 5;
    attributesData.strength.max = 8;
    attributesData.willpower.max = 7;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  } else if (metatype === "oni") {
    attributesData.body.max = 8;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 7;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 7;
    attributesData.edge.max = 6;
  } else if (metatype === "satyr") {
    attributesData.body.max = 7;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 7;
    attributesData.strength.max = 7;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
  }else if (metatype === "cyclops") {
    attributesData.body.max = 9;
    attributesData.agility.max = 5;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 10;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 5;
    attributesData.edge.max = 6;
  } else if (metatype === "fomorian") {
    attributesData.body.max = 9;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 8;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 7;
    attributesData.edge.max = 6;
  } else if (metatype === "giant") {
    attributesData.body.max = 9;
    attributesData.agility.max = 5;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 10;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 5;
    attributesData.edge.max = 6;
  } else if (metatype === "minotaur") {
    attributesData.body.max = 10;
    attributesData.agility.max = 5;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 9;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 5;
    attributesData.edge.max = 6;
  } else if (metatype === "centaur") {
    attributesData.body.max = 8;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 9;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
    attributesData.magic.base = 1;
    attributesData.magic.max = 6;
  }else if (metatype === "naga") {
    attributesData.body.max = 8;
    attributesData.agility.max = 7;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 9;
    attributesData.willpower.max = 7;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 7;
    attributesData.edge.max = 6;
    attributesData.magic.base = 1;
    attributesData.magic.max = 6;
  } else if (metatype === "pixie") {
    attributesData.body.max = 3;
    attributesData.agility.max = 8;
    attributesData.reaction.max = 8;
    attributesData.strength.max = 2;
    attributesData.willpower.max = 8;
    attributesData.logic.max = 7;
    attributesData.intuition.max = 7;
    attributesData.charisma.max = 8;
    attributesData.edge.max = 6;
    attributesData.magic.base = 1;
    attributesData.magic.max = 6;
  } else if (metatype === "sasquatch") {
    attributesData.body.max = 10;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 10;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
    attributesData.magic.base = 1;
    attributesData.magic.max = 6;
  } else if (metatype === "merrow") {
    attributesData.body.max = 9;
    attributesData.agility.max = 6;
    attributesData.reaction.max = 6;
    attributesData.strength.max = 9;
    attributesData.willpower.max = 6;
    attributesData.logic.max = 6;
    attributesData.intuition.max = 6;
    attributesData.charisma.max = 6;
    attributesData.edge.max = 6;
    attributesData.magic.base = 1;
    attributesData.magic.max = 6;
  }
  
  handleAttributes();
  updateValues("attributes");
}