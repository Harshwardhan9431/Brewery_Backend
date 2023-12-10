const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/brewery")
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(5000, () => {
  console.log("Server started at 5000");
});
