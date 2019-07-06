import {takeEvery, put as dispatch} from 'redux-saga/effects';
import axios from 'axios';

function* addPlayerToUserTeam(action) {
    try {
        console.log(action.payload);
        yield axios.post('/add-player');
    } catch (error) {
        console.log(`Error with add player saga ${error}`);
    }
}

function* addPlayerSaga() {
    yield takeEvery('ADD_PLAYER', addPlayerToUserTeam);
}

export default addPlayerSaga;