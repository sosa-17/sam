"use strict";

var mongoose = require("mongoose");

var servidor = "localhost:27017";
var db = "sam";
class Database {
  constructor() {
    //Promesas
    mongoose
      .connect("mongodb+srv://sam:asd.456@cluster0.9atxk.mongodb.net/test", {
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
