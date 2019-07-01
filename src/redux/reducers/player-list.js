const playerList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYER_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default playerList;