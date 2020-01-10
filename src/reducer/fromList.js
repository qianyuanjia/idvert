import { handleActions } from 'redux-actions'
import { LIST_STATUS } from '@/constants/actionTypes'

const initState = {
    state: '',

}
// 页面返回的数据
export default handleActions({
    [LIST_STATUS]: (state, option) => {
        return { ...state, state: option.payload }
    },
}, initState)