const Joi = require("joi");

const params = Joi.object({
  theme: Joi.string().valid("green", "blue", "red", "yellow", "purple"),
  type: Joi.string().valid("wave", "circle", "blob", "stacked"),
  text: Joi.string(),
});

module.exports = params;
