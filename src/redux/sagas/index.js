import { all } from 'redux-saga/effects';
import loginSaga from '../sagas/Prime/loginSaga';
import registrationSaga from '../sagas/Prime/registrationSaga';
import userSaga from '../sagas/Prime/userSaga';

// Koua's Sagas
import playerListSaga from './player-list';
import createLeague from './create-league';
import createTeam from './create-team';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    playerListSaga(),
    createLeague(),
    createTeam(),
  ]);
}
