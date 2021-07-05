const express = require('express');
const search = express.Router();

const { getTweetsFromQuery } = require('./package/searchApi');


search.use( express.json() );
search.use( express.urlencoded( { extended: true } ) );

search.use((req, res, next) => {
	console.log(req.body);
	next();
});

search.post('/', async (req, res) => {
	const query = req.body.query || 'nasa';
	const respJSON = await getTweetsFromQuery(query);

	res.json(respJSON);
});

module.exports = search