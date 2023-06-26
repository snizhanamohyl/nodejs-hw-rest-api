const express = require("express");
const router = express.Router();

const { usersControllers } = require("../../controllers");
const { authenticate, upload } = require("../../middlewares");

router.post("/register", usersControllers.register);

router.post("/login", usersControllers.login);

router.post("/logout", authenticate, usersControllers.logout);

router.post("/current", authenticate, usersControllers.getCurrent);

router.patch("/", authenticate, usersControllers.updateSubscription);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersControllers.updateAvatar
);

router.get("/verify/:verificationToken", usersControllers.verify);

router.post("/verify", usersControllers.resendVerify);

module.exports = router;
