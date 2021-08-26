exports.up = function(knex) {
  return knex.schema.createTable("type_immunities", function(table) {
    table.string("type").references("types.name");
    table.string("immunity").references("types.name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("type_immunities");
};
