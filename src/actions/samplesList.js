import { createActions } from 'redux-actions'
import { table } from '@/services'
<<<<<<< HEAD
import { SAMPLES_LIST, } from '@/constants/actionTypes'
import { list } from '@/services'

export const samples_list = createActions({
    POST_TABDATA: options => table(options),
    [SAMPLES_LIST]: options => list(options)
=======
import { POST_TABDATA } from '@/constants/actionTypes'
export const samples_list = createActions({
    [POST_TABDATA]: options => table(options)
>>>>>>> wang
})