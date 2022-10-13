//packages to include for Node server
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

//variable directories required
//order matters beyond this line
const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/auth');

//use sql to create the database
const sequelize = require('./config/connection');
//initialize sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//the app uses express on the given port
const app = express();
const PORT = process.env.PORT || 3001;

//handlebars engine setup with custom helpers
const hbs = exphbs.create({ helpers });

//sess is communicating with the SequelizeStore to collect the cookies of that session, store it in the sequelize database   
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//express is now running the engine to handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//to log post and put requests in json format and to serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app will use routes to comminucate with api methods
// app.use(routes);

//sync the server and log when listening on the terminal
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});

