const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../middlewares");
const {
  subscriptionList,
  minPasswordLength,
  emailRegexp,
} = require("../constants");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: minPasswordLength,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: subscriptionList[0],
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
