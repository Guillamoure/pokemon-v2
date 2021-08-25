const { types, weaknesses } = require("../data/type");

exports.seed = async function(knex) {
  try {
    await knex("types").del();
    await knex("typeWeaknesses").del();

    await knex("types").insert(types);
    await knex("typeWeaknesses").insert(weaknesses);
  } catch (err) {
    console.log("ERROR");
    console.error(err);
  }
};
