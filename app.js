let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let bodyParser = require('body-parser');
let database = require('./config/database');
let middleware = require('./middleware/middleware');
require('./runDatabase')(false);
let app = express();
let router = express.Router();
let auth = require("./config/auth.js")();
let index = require('./routes/index');
let io = require('./socket');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(auth.initialize());

express.middleware = middleware;

//Controllers define.
router.use('/api', require('./controllers/AuthController'));
app.use(router);

app.use('/', index);

// error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.stack)
});


module.exports = app;
