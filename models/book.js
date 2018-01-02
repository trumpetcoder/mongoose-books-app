var mongoose = require('mongoose');
// Bringing in the thirs party library known as mongoose
var Schema = mongoose.Schema;

// Creating the BookSchema with the keys title, author, image, releaseDate
var BookSchema = new Schema ({
	title: String,
	author: String,
	image: String,
	releaseDate: String
});

// define the Book model based of Schema refers to var 'Book' and the 'BookSchema'
var Book = mongoose.model('Book', BookSchema);

// Exporting the module and requiring it in server.js and elsewhere
module.exports = Book;