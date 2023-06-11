const Joi = require("joi");
const { emailRegexp, minPasswordLength } = require("../constants");

const userAddSchema = Joi.object({
  password: Joi.string().min(minPasswordLength).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = userAddSchema;
