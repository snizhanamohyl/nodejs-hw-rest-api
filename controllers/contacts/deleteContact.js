const { HttpError } = require("../../helpers");
const Contact = require("../../models/contact");

const deleteContact = async (req, res) => {
  const result = await Contact.findByIdAndDelete(req.params.contactId);

  if (!result) throw HttpError(404);

  res.json({ message: "Contact deleted" });
};

module.exports = deleteContact;
