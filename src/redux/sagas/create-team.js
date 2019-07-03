import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* createTeamSaga(action) {
    try {
        yield axios.post('/team/new', action.payload);
        yield dispatch({ type: 'GET_USER_TEAM' });
    } catch (error) {
        console.log(`Error with create team saga ${error}`);
    }
}

function* updateUserTeam(action) {
    try {
        const getUserTeam = yield axios.get('/team/user-team');
        yield dispatch({type: 'SET_TEAMS', payload: getUserTeam.data});
    } catch (error) {
        console.log(`Error with update user team saga ${error}`);
    }
}

function* createTeam() {
    yield takeLatest('CREATE_TEAM', createTeamSaga);
    yield takeLatest('GET_USER_TEAM', updateUserTeam);
}

export default createTeam;