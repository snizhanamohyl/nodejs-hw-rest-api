const { ctrlWrapper } = require("../../decorators");
const register = require("./register");

module.exports = { register: ctrlWrapper(register) };
