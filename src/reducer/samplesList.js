import { handleActions } from 'redux-actions'
import { POST_TABDATA } from '@/constants/actionTypes'
const initState = {
    tabData: [],
    result: [],
    count:''
}

export default handleActions({
    [POST_TABDATA]: (state, action) => ({ ...state, tabData: action.payload.data.result.list }),

}, initState)