const express = require("express");
const { usersControllers } = require("../../controllers");
const router = express.Router();

router.post("/register", usersControllers.register);

module.exports = router;
