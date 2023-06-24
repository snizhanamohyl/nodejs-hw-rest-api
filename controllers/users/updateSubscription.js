const { HttpError } = require("../../helpers");
const { userUpdateSubscriptionSchema } = require("../../joi-schemas");
const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { error } = userUpdateSubscriptionSchema.validate(req.body);

  if (error) throw HttpError(400, "invalid subscription value");

  const { _id: id } = req.user;

  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedUser) throw HttpError(404, "Not found");

  res.json(updatedUser);
};

module.exports = updateSubscription;
