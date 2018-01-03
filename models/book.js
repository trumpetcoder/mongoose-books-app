var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  // Pulling in information from the author schema set-up in author.js
  author: {
  	type: Schema.Types.ObjectId,
  	ref: 'Author' 
  },
  image: String,
  releaseDate: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
