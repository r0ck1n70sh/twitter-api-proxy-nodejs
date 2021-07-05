const express = require('express');
const app = express();
const cors = require('cors');

const search = require('./search');

const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use('/search', search);

app.get('/', (req, res) => {
	res.send('proxy server running');
});

app.listen(PORT, () => {
	console.log(`running on https://localhost:${PORT}`);
});
