const initState = {
    login: [],
}

export default function login(state = initState, action) {
    switch (action.type) {
        case 'POST_LOGIN':
            console.log(action.payload, 'action_login');
            return 1
    
        default:
            return state
    }
}