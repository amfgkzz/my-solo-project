import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* deleteUserTeam(action) {
    try {
        yield axios.delete(`/delete/team?team_id=${action.payload.team_id}&user_id=${action.payload.id}`);
    } catch (error) {
        console.log('Error with delete team saga:', error);
    }
}

function* deleteUserLeague(action) {
    try {
        yield axios.delete(`/delete/league?league_id=${action.payload.league_id}&user_id=${action.payload.id}`);
    } catch (error) {
        console.log('Error with delete league saga:', error);
    }
}

function* deleteUserDataSaga() {
    yield takeEvery('DELETE_USER_TEAM', deleteUserTeam);
    yield takeEvery('DELETE_USER_LEAGUE', deleteUserLeague);
}

export default deleteUserDataSaga;
