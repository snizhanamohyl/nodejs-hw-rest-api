const express = require("express");
const router = express.Router();

const { contactsControllers } = require("../../controllers");
const { isValidId, authenticate, isUserContact } = require("../../middlewares");

router.use(authenticate);

router.get("/", contactsControllers.getAllContacts);

router.get(
  "/:contactId",
  isValidId,
  isUserContact,
  contactsControllers.getContactById
);

router.post("/", contactsControllers.addContact);

router.delete(
  "/:contactId",
  isValidId,
  isUserContact,
  contactsControllers.deleteContact
);

router.put(
  "/:contactId",
  isValidId,
  isUserContact,
  contactsControllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isUserContact,
  contactsControllers.updateStatusContact
);

module.exports = router;
