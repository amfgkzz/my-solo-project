import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlayers(action) {
    try {
        const axiosResponse = yield axios.get('/team/user-team/players');
        yield sort(axiosResponse.data);
    } catch (error) {
        console.log(`Error with get player saga: ${error}`);
    }
}

const sort = function* (array) {
    let benchTeam = [];
    let startTeam = {
        QB: {},
        RB: {},
        WR: {},
        TE: {},
        K: {}
    }
    for (let i = 0; i < array.length; i++) {
        const player = array[i];
        if (player.player_start === false) {
            benchTeam.push(player);
        } else if (player.player_start === true) {
            if (player.player_position === 'QB') {
                startTeam.QB = player;
            } else if (player.player_position === 'RB') {
                startTeam.RB = player;
            } else if (player.player_position === 'WR') {
                startTeam.WR = player;
            } else if (player.player_position === 'TE') {
                startTeam.TE = player;
            } else if (player.player_position === 'K') {
                startTeam.K = player;
            }
        }
    }
    console.log(startTeam);
    yield dispatch({ type: 'SET_USER_PLAYERS_BENCH', payload: benchTeam });
    yield dispatch({ type: 'SET_USER_PLAYERS_START', payload: startTeam });
}

function* fetchUserPlayersSaga() {
    yield takeEvery('GET_USER_PLAYERS', fetchPlayers);
}

export default fetchUserPlayersSaga;