const pokemon = require("../data/pokemon");

exports.seed = async function(knex) {
  try {
    await knex("pokemons").del();

    await knex("pokemons").insert(pokemon);
  } catch (err) {
    console.log("ERROR");
    console.error(err);
  }
};
