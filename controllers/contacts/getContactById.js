const { HttpError } = require("../../helpers");
const Contact = require("../../models/contact");

const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.contactId);

  if (!contact) throw HttpError(404, "Not found");

  res.json(contact);
};

module.exports = getContactById;
