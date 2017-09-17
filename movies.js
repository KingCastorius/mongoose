let express = require('express');
let mongoose = require('mongoose');
let app = express();
let router = express.Router();
let Movie = mongoose.model('Movie');

router.post('/', (req, res) => {
	let newMovie = new Movie();
	newMovie.title = req.body.title;
	newMovie.genre  =req.body.genre;

	newMovie.save((err) => {
		if(err) {
			res.send(err);
		} else {
			res.sendStatus(200);
		}
	})

})

module.exports = router;