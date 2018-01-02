var mongoose = require("mongoose");
// Part that connects to the DB
mongoose.connect("mongodb://localhost/book-app");

// import and export the module.Book

module.exports.Book = require('./book.js');