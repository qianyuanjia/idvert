const initState = {
    tabData: [],
}

export default function login(state = initState, action) {
    switch (action.type) {
        case 'GET_TABDATA':
            console.log(action.payload, 'action_login');
            return {...state, tabData: action.payload}
        default:
            return state
    }
}