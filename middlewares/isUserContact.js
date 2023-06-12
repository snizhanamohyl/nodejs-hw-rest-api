const { HttpError } = require("../helpers");
const { Contact } = require("../models");

const isUserContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;

  const contact = await Contact.findById(contactId);

  const contactOwnerId = contact?.owner._id;

  console.log(
    "🚀 ~ file: isUserContact.js:13 ~ isUserContact ~ JSON.stringify(userId):",
    JSON.stringify(userId)
  );
  console.log(
    "🚀 ~ file: isUserContact.js:13 ~ isUserContact ~ JSON.stringify(contactOwnerId):",
    JSON.stringify(contactOwnerId)
  );

  if (JSON.stringify(contactOwnerId) !== JSON.stringify(userId))
    next(HttpError(404));

  next();
};

module.exports = isUserContact;
