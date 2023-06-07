const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Snizhana:s6dq2R1JAcLLvyiv@cluster0.peht7og.mongodb.net/my-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");

    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
