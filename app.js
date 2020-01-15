const express = require('express'); //Allows me to run a server
const chalk = require('chalk'); //Debugging my code with color

const app = express();
var port = 4000;

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port: ${chalk.green(port)}`);
});