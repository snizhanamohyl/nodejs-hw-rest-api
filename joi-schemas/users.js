const Joi = require("joi");

const {
  emailRegexp,
  minPasswordLength,
  subscriptionList,
} = require("../constants");

const userAddSchema = Joi.object({
  password: Joi.string().min(minPasswordLength).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const contactUpdateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

module.exports = { userAddSchema, contactUpdateSubscriptionSchema };
