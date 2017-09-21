let express = require('express');
let mongoose = require('mongoose');
let app = express();
let router = express.Router();
let User = mongoose.model('User');

router.post('/', (req, res) => {
	let newUser = new User();
	newUser.title = req.body.title;
	newUser.genre  =req.body.genre;

	newUser.save((err) => {
		if(err) {
			res.send(err);
		} else {
			res.sendStatus(200);
		}
	})

})

module.exports = router;
