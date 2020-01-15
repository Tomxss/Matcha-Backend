const express = require('express'); // Allows me to run a server
const chalk = require('chalk'); // Debugging my code with color
const debug = require('debug')('app'); // Removes the need to use console.log, but only runs when in Debug mode.
const morgan = require('morgan'); // Logs web traffic, morgan is known as middleware

const app = express();
var port = 4000;

app.use(morgan('tiny'));// combined: more verbose

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(port, (req, res) => {
  debug(`Listening on port: ${chalk.green(port)}`);
});