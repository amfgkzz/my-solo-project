import { combineReducers } from 'redux';
import errors from '../reducers/Prime/errorsReducer';
import loginMode from '../reducers/Prime/loginModeReducer';
import user from '../reducers/Prime/userReducer';

// Koua's reducers
import playerList from './player-list';
import createdLeague from './created-leagues';
import createdTeam from './created-team';
import userTeamBench from './bench-team';
import userTeamStart from './start-team';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  playerList,
  createdLeague,
  createdTeam,
  userTeamBench,
  userTeamStart,
});

export default rootReducer;
