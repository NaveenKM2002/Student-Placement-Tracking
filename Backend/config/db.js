const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose.connect(process.env.MONGO_URL_CON).then(() => {
    console.log("Mongo db is connected successfully");
  });
};

module.exports = {databaseConnection}
