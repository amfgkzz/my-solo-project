import {takeEvery, put as dispatch} from 'redux-saga/effects';
import axios from 'axios';

function* startPlayer(action) {
    try {
        yield axios.put(`/update/start-player?player_id=${action.payload}`);
        yield dispatch({type: 'GET_USER_PLAYERS'});
    } catch (error) {
        console.log(`Error with start player saga: ${error}`);
    }
}

function* startPlayerSaga() {
    yield takeEvery('START_PLAYER', startPlayer);
}

export default startPlayerSaga;