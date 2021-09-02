exports.up = function(knex) {
  return knex.schema.createTable("pokemons", function(table) {
    table.string("name");
    table.string("national_pokedex_num");
    table.integer("base_hp");
    table.integer("base_attack");
    table.integer("base_defense");
    table.integer("base_special_attack");
    table.integer("base_special_defense");
    table.integer("base_speed");
    table.string("type1");
    table.string("type2");
    table.string("type3");
    table.string("height");
    table.float("weight");
    table.boolean("custom");
    table.string("growth_rate");
    table.string("genus");
    table.integer("base_experience");
    table.string("front_sprite");
    table.string("back_sprite");
    table.string("front_sprite_shiny");
    table.string("back_sprite_shiny");
    table.string("official_artwork");
    table.string("icon");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pokemons");
};
