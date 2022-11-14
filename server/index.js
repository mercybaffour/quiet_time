require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const loginRouter = require('./routes/loginRoutes')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

// setting up connect-mongodb-session store

//INITIATE EXPRESS APP
const app = express()
const MAX_AGE = 1000 * 60 * 60 * 3 // 3hrs
const port = process.env.PORT || 5001


// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
  uri: process.env.DATABASE_CONNECTION_STRING,
  collection: 'mySessions',
})

//we call the session object as Express application-level middleware for setup of the session object
app.use(
  session({
    secret: 'a1s2d3f4g5h6',
    name: 'session-id', // cookies name to be put in "key" field in postman
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
      sameSite: false,
      secure: false, // to turn on just in production
    },
    resave: true,
    saveUninitialized: false,
  })
)

//Make these middleware available for all requests in this application
app.use(cors());
app.use(express.json());

// ROUTERS
app.use('/api', loginRouter);   //using the login routes for any call made under /api

// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)   //listening on port 5001 for any incoming request from client
});

module.exports = app
