const userTeamStart = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_PLAYERS_START':
            return action.payload;
        default:
            return state;
    }
}

export default userTeamStart;