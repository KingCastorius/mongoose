let mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	}
})

let Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;


//create a user model with rules
//has to have a username, an email, and a paswword.
// username must be lowercase in the database
//email must be saved uppercase in database
//password needs to be a number, this number must have a minimum length of 3