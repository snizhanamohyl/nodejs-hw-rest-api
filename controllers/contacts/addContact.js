const { HttpError } = require("../../helpers");
const { contactAddSchema } = require("../../joi-schemas");
const Contact = require("../../models/contact");

const addContact = async (req, res) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) throw HttpError(400, "Missing required name field");

  const newContact = await Contact.create(req.body);

  res.status(201).json(newContact);
};

module.exports = addContact;
