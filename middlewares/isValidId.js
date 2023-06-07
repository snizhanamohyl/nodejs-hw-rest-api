const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId: id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(400, "Invalid id format"));
  }

  next();
};

module.exports = isValidId;
