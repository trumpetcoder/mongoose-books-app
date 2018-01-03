var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AuthorSchema = new Schema ({
	name : String,
	alive : Boolean,
	image : String
});

// Creating a model out of the Schema
var Author = mongoose.model('Author', AuthorSchema);

// Exporting the Author model
module.exports = Author;