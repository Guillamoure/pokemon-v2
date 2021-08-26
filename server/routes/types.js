var express = require("express");
var router = express.Router();
const db = require("../db-config");

router.get("/types", async (req, res, next) => {
  try {
    const types = await db("types");
    res.status(200).json(types);
  } catch (err) {
    res.status(5000).json({ message: "Error accessing database" });
  }
});

module.exports = router;
