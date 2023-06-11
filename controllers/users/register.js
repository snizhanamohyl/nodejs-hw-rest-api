const bcrypt = require("bcryptjs");

const { HttpError } = require("../../helpers");
const userAddSchema = require("../../joi-schemas/users");
const { User } = require("../../models");

const register = async (req, res) => {
  const { error } = userAddSchema.validate(req.body);
  if (error)
    throw HttpError(400, "Помилка від Joi або іншої бібліотеки валідації");

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) throw HttpError(409, "Email in use");

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
