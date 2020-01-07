import { handleActions } from 'redux-actions'
import { HOME_AD } from '@/constants/actionTypes'

const home_ad_State = {
    put: {}
}
// 页面返回的数据
export default handleActions({
    [HOME_AD]: (state, action) => ({ ...state, put: 'test' }),
}, home_ad_State)