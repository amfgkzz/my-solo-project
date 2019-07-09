import { combineReducers } from 'redux';

const QB = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_START_QB':
            return action.payload;
        default:
            return state;
    }
}

const RB = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_START_RB':
            return action.payload;
        case 'SET_USER_TEAM_START':
            return action.payload;
        default:
            return state;
    }
}

const WR = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_START_WR':
            return action.payload;
        default:
            return state;
    }
}

const TE = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_START_TE':
            return action.payload;
        default:
            return state;
    }
}

const K = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_START_K':
            return action.payload;
        default:
            return state;
    }
}

const userTeamStart = combineReducers({
    QB,
    RB,
    WR,
    TE,
    K,
});

export default userTeamStart;