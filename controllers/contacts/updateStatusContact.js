const { contactUpdateFavoriteSchema } = require("../../joi-schemas");
const { HttpError } = require("../../helpers");
const Contact = require("../../models");

const updateStatusContact = async (req, res) => {
  const { error } = contactUpdateFavoriteSchema.validate(req.body);
  if (error) throw HttpError(400, "missing field favorite");

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    { new: true }
  );

  if (!updatedContact) throw HttpError(404, "Not found");

  res.json(updatedContact);
};

module.exports = updateStatusContact;
