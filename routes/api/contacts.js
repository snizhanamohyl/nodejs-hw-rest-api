const express = require("express");
const router = express.Router();

const { contactsControllers } = require("../../controllers");
const { isValidId, authenticate } = require("../../middlewares");

router.use(authenticate);

router.get("/", contactsControllers.getAllContacts);

router.get("/:contactId", isValidId, contactsControllers.getContactById);

router.post("/", contactsControllers.addContact);

router.delete("/:contactId", isValidId, contactsControllers.deleteContact);

router.put("/:contactId", isValidId, contactsControllers.updateContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  contactsControllers.updateStatusContact
);

module.exports = router;
