import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
    try {
        const axiosCall = yield axios.get('/data');
        yield dispatch({ type: 'SET_PLAYER_LIST', payload: axiosCall.data });
    } catch (error) {
        console.log(`Error with axios call ${error}`);
    }
}

function* updateData(action) {
    try {
        const axiosCall = yield axios.put('/data/player-position', action);
        yield dispatch({ type: 'SET_PLAYER_LIST', payload: axiosCall.data });
    } catch (error) {
        console.log(`Error with axios call ${error}`);
    }
}

function* playerListSaga() {
    yield takeLatest('FETCH_PLAYERLIST_DATA', fetchData);
    yield takeLatest('UPDATE_PLAYERLIST_DATA', updateData);
}

export default playerListSaga;