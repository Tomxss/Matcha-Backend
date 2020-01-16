const express = require('express'); // Allows me to run a server
const chalk = require('chalk'); // Debugging my code with color
const debug = require('debug')('app'); // Removes the need to use console.log, but only runs when in Debug mode.
const morgan = require('morgan'); // Logs web traffic, morgan is known as middleware
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const navRouter = express.Router();

app.use(morgan('tiny')); // combined: more verbose
app.use(express.static(path.join(__dirname, 'public'))); // letting express know where my static files are: css/js
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css'))); // will recognise this as another css file
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

navRouter.route('/register')
  .get((req, res) => {
    res.render('register');
  });

navRouter.route('/login')
.get((req, res) => {
  res.render('login');
});

app.use('/', navRouter);
app.use('/register', navRouter);

app.get('/', (req, res) => {
  res.render('index', { 
    topBar: [{title:'Register', link: '/register'}, 
            {title:'Login', link:'/login'}], 
    title: 'Matcha' 
  });  //__dirname: location of current app
});

app.listen(port, (req, res) => {
  debug(`Listening on port: ${chalk.green(port)}`);
});