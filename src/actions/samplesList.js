import { createActions } from 'redux-actions'
import { table } from '@/services'
import { POST_TABDATA } from '@/constants/actionTypes'
export const samples_list = createActions({
    [POST_TABDATA]: options => table(options)
})