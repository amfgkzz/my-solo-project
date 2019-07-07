import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlayersBench(action) {
    try {
        const axiosResponse = yield axios.get('/team/user-team/bench-players');
        yield dispatch({ type: 'SET_USER_PLAYERS_BENCH', payload: axiosResponse.data });
    } catch (error) {
        console.log(`Error with get player saga: ${error}`);
    }
}

function* fetchPlayersStart(action) {
    try {
        const axiosResponse = yield axios.get('/team/user-team/start-players');
        yield dispatch({ type: 'SET_USER_PLAYERS_START', payload: axiosResponse.data });
    } catch (error) {
        console.log(`Error with get player saga: ${error}`);
    }
}

function* fetchUserPlayersSaga() {
    yield takeEvery('GET_USER_PLAYERS_BENCH', fetchPlayersBench);
    yield takeEvery('GET_USER_PLAYERS_START', fetchPlayersStart);
}

export default fetchUserPlayersSaga;