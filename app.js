let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();

mongoose.connect('mongodb://ryan:098@ds135364.mlab.com:35364/test-db')
require('./movie');
let movies = require('./movies');

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.end();
})

app.use('/movies', movies);

app.listen(3000, () => {
	console.log('Connected to Server');
})

module.exports = router;