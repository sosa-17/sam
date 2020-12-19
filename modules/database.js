"use strict";

var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

var servidor = "localhost:27017";
var db = "sam";

class Database {
  constructor() {
    //Promesas
    mongoose
      .connect(`${process.env.MONGO_DB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Se conecto a mongo");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new Database();
