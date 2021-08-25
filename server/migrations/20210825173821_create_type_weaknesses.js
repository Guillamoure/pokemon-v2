exports.up = function(knex) {
  return knex.schema.createTable("typeWeaknesses", function(table) {
    table.string("type").references("types.name");
    table.string("weakness").references("types.name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("typeWeaknesses");
};
