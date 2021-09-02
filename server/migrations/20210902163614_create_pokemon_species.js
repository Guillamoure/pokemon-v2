exports.up = function(knex) {
  return knex.schema.createTable("pokemon_species", function(table) {
    table.string("name");
    table.integer("catch_rate");
    table.integer("base_happiness");
    table.integer("gender_rate");
    table.string("evolves_from_species");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pokemon_species");
};
