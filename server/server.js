const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Koua's routes
const playerDataRouter = require('./routes/player.data');
const leagueDataRouter = require('./routes/league.data');
const teamDataRouter = require('./routes/team.data');
const updateUserDataRouter =  require('./routes/update.data.router');
const addPlayerRouter = require('./routes/add.player')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/data', playerDataRouter);
app.use('/league', leagueDataRouter);
app.use('/team', teamDataRouter);
app.use('/update', updateUserDataRouter);
app.use('/add-player', addPlayerRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});