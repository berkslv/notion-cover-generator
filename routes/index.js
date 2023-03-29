const express = require("express");
const router = express.Router();
const themes = require("../themes");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const theme = req.query.theme || "green";
  const text = req.query.text || "Cover title";

  res.send(themes[theme](text));
});

module.exports = router;
