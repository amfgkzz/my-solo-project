import {takeEvery, put as dispatch} from 'redux-saga/effects';
import axios from 'axios';

function* addPlayerToUserTeam(action) {
    try {
        yield axios.post(`/add-player?player_id=${action.payload.player_id}&team_id=${action.payload.team_id}`);
        yield dispatch({type: 'FETCH_PLAYERLIST_DATA'});
    } catch (error) {
        console.log(`Error with add player saga ${error}`);
    }
}

function* addPlayerSaga() {
    yield takeEvery('ADD_PLAYER', addPlayerToUserTeam);
}

export default addPlayerSaga;