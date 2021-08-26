const moves = require("../data/moves");

exports.seed = async function(knex) {
  try {
    await knex("moves").del();

    await knex("moves").insert(moves);
  } catch (err) {
    console.log("ERROR");
    console.error(err);
  }
};
