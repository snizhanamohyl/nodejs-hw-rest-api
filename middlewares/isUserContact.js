const { HttpError } = require("../helpers");
const { Contact } = require("../models");

const isUserContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;

  const contact = await Contact.findById(contactId);

  const contactOwnerId = contact?.owner._id;

  if (JSON.stringify(contactOwnerId) !== JSON.stringify(userId))
    next(HttpError(404));

  next();
};

module.exports = isUserContact;
