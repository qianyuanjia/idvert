import { handleActions } from 'redux-actions'
import { POST_TABDATA, DETAILS } from '@/constants/actionTypes'

const initState = {
    tabData: [],
    details: {},
}

export default handleActions({
    [POST_TABDATA]: (state, action) => (
        { ...state, tabData: action.payload.data.result }),
    [DETAILS]: (state, action) => (
        { ...state, details: action.payload}),
}, initState)