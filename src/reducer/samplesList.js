import { handleActions } from 'redux-actions'
import { POST_TABDATA } from '@/constants/actionTypes'
import _ from 'loadsh'

const initState = {
    tabData: [],
}

export default handleActions({
    [POST_TABDATA]: (state, action) => ({ ...state, tabData: _.get(action, 'payload.data.result', [])}),
}, initState)