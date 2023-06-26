const { HttpError, sendEmail } = require("../../helpers");
const { userEmailSchema } = require("../../joi-schemas");
const { User } = require("../../models");

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { error } = userEmailSchema.validate(req.body);
  if (error) throw HttpError(400, "missing required field email");

  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.verify)
    throw HttpError(400, "Verification has already been passed");

  const emailData = {
    to: req.body.email,
    subject: "Email verification",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click here to verify your email.</a>`,
  };

  await sendEmail(emailData);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerify;
