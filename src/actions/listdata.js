import { createActions } from 'redux-actions'
import { tables } from '@/services'
import { LIST_DATA } from '@/constants/actionTypes'

export const listData = createActions({
    [LIST_DATA]: options => tables(options)
})