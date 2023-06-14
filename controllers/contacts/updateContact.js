const { contactAddSchema } = require("../../joi-schemas");
const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const updateContact = async (req, res) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) throw HttpError(400, "Missing fields");

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    { new: true }
  );

  if (!updatedContact) throw HttpError(404, "Not found");

  res.json(updatedContact);
};

module.exports = updateContact;
