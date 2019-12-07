const express = require('express');

const studentRouter = express.Router();

const students = [ 2334, 3432, 1432 ];

studentRouter. get('/', (req, res) => res.send(students));
module.exports = studentRouter;
