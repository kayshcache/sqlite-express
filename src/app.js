const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const studentRouter = require('./routes/students-routes');

const app = express();
const port = process.env.port || 3001;

app.use(helmet());
app.use(express.json());

const accessLogStream = fs.createWriteStream(path.join(__dirname, './access.log'), {flags: 'a'});
app.use(morgan('dev', { stream: accessLogStream }));

app.get('/', (req, res) => {
	console.log(req.body);

	res.send(
		`<h2>Thanks for the ${req.method} request</h2>`
	);
});

app.use('/students', studentRouter);

app.listen(port);
