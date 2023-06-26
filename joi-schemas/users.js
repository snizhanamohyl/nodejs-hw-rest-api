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

const userUpdateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = {
  userAddSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
};
