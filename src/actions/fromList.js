import { createActions } from 'redux-actions'
import { LIST_STATUS } from '@/constants/actionTypes'

// 页面调用的数据 true, false
export const from_list = createActions({
    [LIST_STATUS]: options => options,
})