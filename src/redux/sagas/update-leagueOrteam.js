import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* updateUserData(action) {
    try {
        yield axios.put('/update', action.payload);
        yield dispatch({ type: 'GET_USER_TEAM' });
        yield dispatch({ type: 'GET_USER_LEAGUE' });
    } catch (error) {
        console.log('Error with update saga:', error);
    }
}

function* updateUserDataSaga() {
    yield takeEvery('UPDATE_LEAGUE_AND_TEAM', updateUserData)
}

export default updateUserDataSaga;