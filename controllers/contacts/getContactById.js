const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { _id: ownerId } = req.user;

  const contact = await Contact.findById(req.params.contactId);

  const isUserContact =
    JSON.stringify(contact.owner._id) === JSON.stringify(ownerId);

  if (!contact || !isUserContact) throw HttpError(404, "Not found");

  res.json(contact);
};

module.exports = getContactById;
