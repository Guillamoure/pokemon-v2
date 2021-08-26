const { Type } = require("../models");

const getTypes = (req, res, next) => {
  Type.findAll()
    .then(types =>
      res.json({
        ok: true,
        message: "Types found",
        types
      })
    )
    .catch(next);
};

module.exports = {
  getTypes
};
