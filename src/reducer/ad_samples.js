import { handleActions } from 'redux-actions'
import { AD_SAMPLES, } from '@/constants/actionTypes'

const initState = {
    result: [],
    count:''
}

export default handleActions({
    [AD_SAMPLES]: (state, action) => {
        return {
            ...state, 
            result: action.payload.data.result.list,
            count: action.payload.data.result.count
        }
    }
}, initState)