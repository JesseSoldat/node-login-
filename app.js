var express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	exphbs = require('express-handlebars'),
	expressValidator = require('express-validator'),
	flash = require('connect-flash'),
	session = require('express-session'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongo = require('mongodb'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp');

var db = mongoose.connection;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: 'jlab',
	saveUninitialized: true,
	resave: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());


app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Listening on port ' + app.get('port'));
});

