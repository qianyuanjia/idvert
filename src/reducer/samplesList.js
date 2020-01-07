import { handleActions } from 'redux-actions'
<<<<<<< HEAD
import { SAMPLES_LIST, } from '@/constants/actionTypes'

=======
import { POST_TABDATA } from '@/constants/actionTypes'
>>>>>>> wang
const initState = {
    tabData: [],
    result: [],
    count:''
}

export default handleActions({
<<<<<<< HEAD
    POST_TABDATA: (state, action) => ({ ...state, tabData: action.payload }),
    [SAMPLES_LIST]: (state, action) => {
        return {
            ...state, 
            result: action.payload.data.result.list,
            count: action.payload.data.result.count
        }
    }
=======
    [POST_TABDATA]: (state, action) => ({ ...state, tabData: action.payload.data.result.list }),

>>>>>>> wang
}, initState)