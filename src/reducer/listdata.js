import { handleActions } from 'redux-actions'
import { LIST_DATA } from '@/constants/actionTypes'

const initState = {
    tabData: [],
}

export default handleActions({
    [LIST_DATA]: (state, action) => {
        return { ...state, tabData: action.payload.data.result.list }
    },

}, initState)