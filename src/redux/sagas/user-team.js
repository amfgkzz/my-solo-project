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
        // yield dispatch({ type: 'SET_USER_START_QB', payload: axiosResponse.data });
        // console.log('axios response', axiosResponse.data);
        yield sort(axiosResponse.data);
    } catch (error) {
        console.log(`Error with get player saga: ${error}`);
    }
}

const sort = function* (array) {
    for (let i = 0; i < array.length; i++) {
        const player = array[i];
        if (player.player_position === 'QB') {
            yield dispatch({ type: 'SET_USER_START_QB', payload: player });
        } else if (player.player_position === 'RB') {
            yield dispatch({ type: 'SET_USER_START_RB', payload: player });
        } else if (player.player_position === 'WR') {
            yield dispatch({ type: 'SET_USER_START_WR', payload: player });
        } else if (player.player_position === 'TE') {
            yield dispatch({ type: 'SET_USER_START_TE', payload: player });
        } else if (player.player_position === 'K') {
            yield dispatch({ type: 'SET_USER_START_K', payload: player });
        }
    }
}

function* fetchUserPlayersSaga() {
    yield takeEvery('GET_USER_PLAYERS_BENCH', fetchPlayersBench);
    yield takeEvery('GET_USER_PLAYERS_START', fetchPlayersStart);
}

export default fetchUserPlayersSaga;