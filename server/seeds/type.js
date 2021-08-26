const { types, weaknesses, resistances, immunities } = require("../data/type");

exports.seed = async function(knex) {
  try {
    await knex("type_weaknesses").del();
    await knex("type_resistances").del();
    await knex("type_immunities").del();
    await knex("types").del();

    await knex("types").insert(types);
    await knex("type_weaknesses").insert(weaknesses);
    await knex("type_resistances").insert(resistances);
    await knex("type_immunities").insert(immunities);
  } catch (err) {
    console.log("ERROR");
    console.error(err);
  }
};
