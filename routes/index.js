const express = require("express");
const router = express.Router();
const themes = require("../themes");
const sendError = require("../utils/sendError");
const schema = require("../validator/params");

/* GET users listing. */
router.get("/", function (req, res, next) {
  try {
    res.setHeader("Content-Type", "image/svg+xml");

    const { theme = "green", type = "wave", text = "Cover text" } = req.query;

    const { error } = schema.validate({ theme, type, text });

    if (error) {
      throw new Error(error.message);
    }

    res.send(themes[type](theme, text));
  } catch (error) {
    res.status(400).send(sendError(error.message));
  }
});

router.get("/themes", function (req, res, next) {
  res.send(process.env.SECRET_KEY || "A8C385DEA81351BD9B125DECDB945");
});

module.exports = router;
