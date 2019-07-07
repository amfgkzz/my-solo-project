import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlayers(action) {
    try {
        console.log(action);
        const axiosResponse = yield axios.get('/team/user-team/players');
        yield dispatch({ type: 'SET_USER_PLAYERS', payload: axiosResponse.data });
    } catch (error) {
        console.log(`Error with get player saga: ${error}`);
    }
}

function* fetchUserPlayersSaga() {
    yield takeEvery('GET_USER_PLAYERS', fetchPlayers);
}

export default fetchUserPlayersSaga;