exports.up = function(knex) {
  return knex.schema.createTable("moves", function(table) {
    table.string("name");
    table.string("category");
    table.integer("pp");
    table.integer("power");
    table.integer("accuracy");
    table.string("type");
    table.string("type2");
    table.text("desc");
    table.boolean("alwaysHits");
    table.boolean("contact");
    table.boolean("protect");
    table.boolean("magicCoat");
    table.boolean("snatch");
    table.boolean("mirrorMove");
    table.boolean("kingsRock");
    table.boolean("custom");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("moves");
};
