// This file is for organizing all the models across our app used for organization

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./book.js");
module.exports.Author = require("./author.js");
