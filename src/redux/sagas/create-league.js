import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* createLeagueSaga(action) {
    try {
        yield axios.post('/league/new', action.payload);
        yield dispatch({ type: 'USER_LEAGUE_CREATED' });
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
    yield takeLatest('USER_LEAGUE_CREATED', getUserLeagues);
    yield takeLatest('CREATE_LEAGUE', createLeagueSaga);
}

export default createLeague;