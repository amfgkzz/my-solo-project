const createdLeague = (state = [], action) => {
    switch (action.type) {
        case 'SET_LEAGUES':
            return action.payload;
        default:
            return state;
    }
}

export default createdLeague;