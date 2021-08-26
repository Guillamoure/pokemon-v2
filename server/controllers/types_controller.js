const { Type } = require("../models");

const getTypes = (req, res, next) => {
  Type.findAll()
    .then(typesObj => {
      const typesData = typesObj.types.map(type => {
        let weaknesses = typesObj.weaknesses
          .filter(w => w.type === type.name)
          .map(w => w.weakness);

        let resistances = typesObj.resistances
          .filter(w => w.type === type.name)
          .map(w => w.resistance);

        let immunities = typesObj.immunities
          .filter(w => w.type === type.name)
          .map(w => w.immunity);

        return { ...type, weaknesses, resistances, immunities };
      });

      res.json({
        types: typesData
      });
    })
    .catch(next);
};

module.exports = {
  getTypes
};
