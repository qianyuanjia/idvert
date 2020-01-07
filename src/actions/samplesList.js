import { createActions } from 'redux-actions'
import { table } from '@/services'
export const samples_list = createActions({
    POST_TABDATA: options => table(options)
})