const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/portfoliodata")
  .then(() => {
    console.log("connection successfull");
  })
  .catch((e) => {
    console.log("Connection error");
  });
