var express    = require("express");
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var routes     = require("./routes");
var app        = express();
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

var port = process.env.PORT || 8080; 
// const PORT = process.env.PORT || 3001; // master branch

// Connect to the Mongo DB

mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// Add routes, both API and view
// app.use(routes);

// Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
}


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



// Start the API server
app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on port ${port}!`);
});
