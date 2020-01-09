import { handleActions } from 'redux-actions'
import _ from 'loadsh'
import { POST_TABDATA, DETAILS } from '@/constants/actionTypes'

const initState = {
    tabData: [],
    details: {},
}

export default handleActions({
    [POST_TABDATA]: (state, action) => ({ ...state, tabData: _.get(action, 'payload.data.result', [])}),
    [DETAILS]: (state, action) => (
        { ...state, details: action.payload}),
}, initState)