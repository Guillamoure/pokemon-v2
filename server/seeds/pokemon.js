const { pokemon, species } = require("../data/pokemon");

exports.seed = async function(knex) {
  try {
    await knex("pokemons").del();
    await knex("pokemon_species").del();

    await knex("pokemon_species").insert(species);
    await knex("pokemons").insert(pokemon);
  } catch (err) {
    console.log("ERROR");
    console.error(err);
  }
};
