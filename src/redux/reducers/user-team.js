const userTeam = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_PLAYERS':
            return action.payload;
        default:
            return state;
    }
}

export default userTeam;