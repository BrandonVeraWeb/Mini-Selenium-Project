const { Chance } = require("chance");

let chance = new Chance();
let sentence = chance.sentence();
let animal = chance.animal();

module.exports = { sentence, animal };
