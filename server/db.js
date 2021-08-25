const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "me",
    password: "password",
    database: "pokemondb"
  }
});

module.exports = knex;
