import {takeEvery, put as dispatch} from 'redux-saga/effects';
import axios from 'axios';

function* startPlayer(action) {
    try {
        console.log(action);
    } catch (error) {
        console.log(`Error with start player saga: ${error}`);
    }
}

function* startPlayerSaga() {
    yield takeEvery('START_PLAYER', startPlayer);
}

export default startPlayerSaga;