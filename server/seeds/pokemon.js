exports.seed = async function(knex) {
  try {
    await knex("pokemons").del();

    await knex("pokemons").insert([
      {
        name: "Bulbasaur",
        national_pokedex_num: 001
      }
    ]);
  } catch (err) {
    console.log("ERROR");
    console.error(err);
  }
};
