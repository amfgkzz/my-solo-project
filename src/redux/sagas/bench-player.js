import {takeEvery, put as dispatch} from 'redux-saga/effects';
import axios from 'axios';

function* benchPlayer(action) {
    try {
        yield axios.put(`/update/bench-player?player_id=${action.payload}`);
        yield dispatch({type: 'GET_USER_PLAYERS_BENCH'});
        yield dispatch({type: 'GET_USER_PLAYERS_START'});
    } catch (error) {
        console.log(`Error with start player saga: ${error}`);
    }
}

function* benchPlayerSaga() {
    yield takeEvery('BENCH_PLAYER', benchPlayer);
}

export default benchPlayerSaga;