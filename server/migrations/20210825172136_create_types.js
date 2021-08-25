exports.up = function(knex) {
  return knex.schema.createTable("types", function(table) {
    table.increments("typeId");
    table.string("name").unique();
    table.string("color");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("types");
};
