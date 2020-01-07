import {
	createActions
} from 'redux-actions'
import {
	homt_add_api
} from '@/services'
import {
	HOME_AD
} from '@/constants/actionTypes'
// 页面调用的数据
export const home_form = createActions({
	[HOME_AD]: options => homt_add_api(options)
})