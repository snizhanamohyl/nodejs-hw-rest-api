const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { page = 1, limit = 10, ...query } = req.query;

  const skip = (page - 1) * limit;

  const contacts = await Contact.find(
    { owner: ownerId, ...query },
    "-createdAt -updatedAt",
    { skip, limit }
  ).populate("owner", "email");

  res.json(contacts);
};

module.exports = getAllContacts;
