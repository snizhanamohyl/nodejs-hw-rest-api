const express = require("express");
const router = express.Router();

const { usersControllers } = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.post("/register", usersControllers.register);

router.post("/login", usersControllers.login);

router.post("/logout", authenticate, usersControllers.logout);

router.post("/current", authenticate, usersControllers.getCurrent);

router.patch("/", authenticate, usersControllers.updateSubscription);

module.exports = router;
