exports.up = function(knex) {
  return knex.schema.createTable("type_resistances", function(table) {
    table.string("type").references("types.name");
    table.string("resistance").references("types.name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("type_resistances");
};
