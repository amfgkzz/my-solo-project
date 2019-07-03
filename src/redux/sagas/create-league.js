import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* createLeagueSaga(action) {
    try {
        yield axios.post('/league/new', action.payload);
        yield dispatch({ type: 'GET_USER_LEAGUE' });
    } catch (error) {
        console.log(`Error with create league saga ${error}`);
    }
}

function* getUserLeagues() {
    try {
        const leagueData = yield axios.get('/league/user');
        yield dispatch({type: 'SET_LEAGUES', payload: leagueData.data});
    } catch (error) {
        console.log(`Error with user league saga ${error}`);
    }
}

function* createLeague() {
    yield takeLatest('GET_USER_LEAGUE', getUserLeagues);
    yield takeLatest('CREATE_LEAGUE', createLeagueSaga);
}

export default createLeague;