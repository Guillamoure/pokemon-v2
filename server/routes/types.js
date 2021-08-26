var express = require("express");
var router = express.Router();
const db = require("../db-config");

const { getTypes } = require("../controllers/types_controller");

// router.get("/types", async (req, res, next) => {
//   try {
//     const types = await db("types");
//     res.status(200).json(types);
//   } catch (err) {
//     res.status(500).json({ message: "Error accessing database" });
//   }
// });

router.route("/types").get(getTypes);

module.exports = router;
