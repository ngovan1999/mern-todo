const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect("mongodb://mongo:27017/mern123", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("success");
    })
    .catch((err) => {
      console.error("err hihi ", err);
      process.exit(1);
    });
};

module.exports = connectDB;
