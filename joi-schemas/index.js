const { contactAddSchema, contactUpdateFavoriteSchema } = require("./contacts");
const { userAddSchema, contactUpdateSubscriptionSchema } = require("./users");

module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
  userAddSchema,
  contactUpdateSubscriptionSchema,
};
