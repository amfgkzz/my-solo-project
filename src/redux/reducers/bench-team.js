const userTeamBench = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_PLAYERS_BENCH':
            return action.payload;
        default:
            return state;
    }
}

export default userTeamBench;