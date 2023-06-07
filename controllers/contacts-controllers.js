// const Joi = require("joi");

// const Contact = require("../models/contact");
// const { HttpError } = require("../helpers");
// const { ctrlWrapper } = require("../decorators");

// const contactAddSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string(),
//   phone: Joi.string(),
//   favorite: Joi.boolean(),
// });

// const contactUpdateFavoriteSchema = Joi.object({
//   favorite: Joi.boolean().required(),
// });

// const getAllContacts = async (req, res) => {
//   const contacts = await Contact.find();
//   res.json(contacts);
// };

// const getContactById = async (req, res) => {
//   const contact = await Contact.findById(req.params.contactId);

//   if (!contact) throw HttpError(404, "Not found");

//   res.json(contact);
// };

// const addContact = async (req, res) => {
//   const { error } = contactAddSchema.validate(req.body);
//   if (error) throw HttpError(400, "Missing required name field");

//   const newContact = await Contact.create(req.body);

//   res.status(201).json(newContact);
// };

// const deleteContact = async (req, res) => {
//   const result = await Contact.findByIdAndDelete(req.params.contactId);

//   if (!result) throw HttpError(404);

//   res.json({ message: "Contact deleted" });
// };

// const updateContact = async (req, res) => {
//   const { error } = contactAddSchema.validate(req.body);
//   if (error) throw HttpError(400, "Missing fields");

//   const updatedContact = await Contact.findByIdAndUpdate(
//     req.params.contactId,
//     req.body,
//     { new: true }
//   );

//   if (!updatedContact) throw HttpError(404, "Not found");

//   res.json(updatedContact);
// };

// const updateStatusContact = async (req, res) => {
//   const { error } = contactUpdateFavoriteSchema.validate(req.body);
//   if (error) throw HttpError(400, "missing field favorite");

//   const updatedContact = await Contact.findByIdAndUpdate(
//     req.params.contactId,
//     req.body,
//     { new: true }
//   );

//   if (!updatedContact) throw HttpError(404, "Not found");

//   res.json(updatedContact);
// };

// module.exports = {
//   getAllContacts: ctrlWrapper(getAllContacts),
//   getContactById: ctrlWrapper(getContactById),
//   addContact: ctrlWrapper(addContact),
//   deleteContact: ctrlWrapper(deleteContact),
//   updateContact: ctrlWrapper(updateContact),
//   updateStatusContact: ctrlWrapper(updateStatusContact),
// };
