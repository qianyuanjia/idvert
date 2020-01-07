import { createActions } from 'redux-actions'
import { table } from '@/services'
import { SAMPLES_LIST, } from '@/constants/actionTypes'
import { list } from '@/services'
import { POST_TABDATA } from '@/constants/actionTypes'

export const samples_list = createActions({
    [SAMPLES_LIST]: options => list(options),
    [POST_TABDATA]: options => table(options)
})