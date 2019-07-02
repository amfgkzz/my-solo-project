import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* createLeagueSaga(action) {
    try {
        yield axios.post('/league/new', action.payload);
        yield dispatch({ type: 'NEW_LEAGUE_CREATED' });
    } catch (error) {
        console.log(`Error with create league saga ${error}`);
    }
}

function* createLeague() {
    yield takeLatest('CREATE_LEAGUE', createLeagueSaga);
}

export default createLeague;