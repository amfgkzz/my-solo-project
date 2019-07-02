const createdLeague = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYER_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default createdLeague;