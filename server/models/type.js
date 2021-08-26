const createMethods = require("../utils/model-methods");

const name = "Type";
const tableName = "types";

const selectableProps = ["name", "color"];

module.exports = knex => {
  const methods = createMethods({
    knex,
    name,
    tableName,
    selectableProps
  });

  return { ...methods };
};
