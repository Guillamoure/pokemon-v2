exports.up = function(knex) {
  return knex.schema.createTable("pokemons", function(table) {
    table.increments("id");
    table.string("name");
    table.integer("national_pokedex_num");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pokemons");
};
