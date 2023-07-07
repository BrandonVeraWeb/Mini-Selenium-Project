const { Chance } = require("chance");

let chance = new Chance();
let sentence = chance.sentence({ words: 5 });
let word = chance.word({ length: 5 });
let fullsentences = `${sentence} + ${word} `;
let animal = chance.animal();

module.exports = { fullsentences, animal };
