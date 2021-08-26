const createMethods = require("../utils/model-methods");
const knex = require("../db-config");

const name = "Type";
const tableName = "types";

const selectableProps = ["name", "color"];

const findAll = async () => {
  const types = await knex.from(tableName).timeout(1000);
  const weaknesses = await knex.from("type_weaknesses").timeout(1000);
  const resistances = await knex.from("type_resistances").timeout(1000);
  const immunities = await knex.from("type_immunities").timeout(1000);
  const data = { types, weaknesses, resistances, immunities };
  return data;
};

module.exports = knex => {
  const methods = createMethods({
    knex,
    name,
    tableName,
    selectableProps
  });

  return { ...methods, findAll };
};
