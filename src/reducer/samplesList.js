import { handleActions } from 'redux-actions'

const initState = {
    tabData: [],
}

export default handleActions({
    POST_TABDATA: (state, action) => ({ ...state, tabData: action.payload }),

}, initState)