const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) throw HttpError(404);

  res.json({ message: "Contact deleted" });
};

module.exports = deleteContact;
