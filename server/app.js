'use strict';

const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');

const config = require('./config');

const app = express();

app.use(cors());

app.use(express.static(`${__dirname}/../public/bower_components`));
app.get('/', (req, res) => {
	res.sendFile(path.resolve(`${__dirname}/../public/index.html`));
});

app.get('/piano', (req, res) => {
	const piano = fs.createReadStream(`${__dirname}/sounds/piano.wav`);
	piano.pipe(res);
});

app.listen(config.PORT)
