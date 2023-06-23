const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateAvatar = async (req, res) => {
  const { path: oldPath, filename } = req.file;
  const avatarsDir = path.resolve("public", "avatars");
  const newPath = path.join(avatarsDir, filename);

  const image = await Jimp.read(oldPath);
  image.resize(250, 250).write(newPath);

  await fs.unlink(oldPath);

  const avatarURL = path.join("avatars", filename);

  const { _id: id } = req.user;
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { avatarURL },
    { new: true }
  );

  if (!updatedUser) throw HttpError(404);

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
