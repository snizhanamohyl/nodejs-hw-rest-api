const { contactAddSchema, contactUpdateFavoriteSchema } = require("./contacts");
const {
  userAddSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
} = require("./users");

module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
  userAddSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
};
