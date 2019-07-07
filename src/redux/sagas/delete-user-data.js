import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* deleteUserTeam(action) {
    try {
        yield axios.delete(`/delete/team?team_id=${action.payload.team_id}&user_id=${action.payload.id}`);
        yield dispatch({ type: 'GET_USER_TEAM' });
    } catch (error) {
        console.log('Error with delete team saga:', error);
    }
}

// FIX: Add ability to delete leagues
// function* deleteUserLeague(action) {
//     try {
//         yield axios.delete(`/delete/league?league_id=${action.payload.league_id}&user_id=${action.payload.id}`);
//     } catch (error) {
//         console.log('Error with delete league saga:', error);
//     }
// }

function* deleteUserDataSaga() {
    yield takeEvery('DELETE_USER_TEAM', deleteUserTeam);
    // FIX: Add ability to delete leagues
    // yield takeEvery('DELETE_USER_LEAGUE', deleteUserLeague);
}

export default deleteUserDataSaga;
