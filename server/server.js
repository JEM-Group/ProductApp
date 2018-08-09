const express      = require("express");
const bodyParser   = require("body-parser");
const morgan       = require('morgan');
const session      = require('express-session');
const dbConnection = require('./database');
const MongoStore   = require('connect-mongo')(session)
const passport     = require('./passport');
const app          = express();
const PORT         = process.env.PORT || 3001;
// const mongoose     = require("mongoose");

// const routes       = require("./routes");
const user         = require("./routes/user");

// const flash        = require('connect-flash');
// const cookieParser = require('cookie-parser');

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dashAutoData");

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

// MIDDLEWARE
app.use(morgan('dev')) // log every request to the console
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// app.use(cookieParser()); // read cookies (needed for auth)

//Add routes, both API and view
// app.use(routes);
app.use('/user', user)
// app.use('/signup', user)

// Start the API server
app.listen(PORT, () => {
  console.log(`The magic happens on PORT: ${PORT}`);
})


// app.listen(port, function() {
//   console.log(`🌎  ==> API Server now listening on port ${port}!`);
// });
