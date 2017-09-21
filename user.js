let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		lowercase: true
	},
	password: {
		type: Number,
		required: true,
		min: 3
	},
	email: {
		type: String,
		required: true,
		uppercase: true
	},
})

let User = mongoose.model('User', UserSchema);

module.exports = User;