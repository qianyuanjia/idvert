import { createActions } from 'redux-actions'
import { table } from '@/services'
import { SAMPLES_LIST, POST_TABDATA} from '@/constants/actionTypes'
import { list } from '@/services'

export const samples_list = createActions({
    [SAMPLES_LIST]: options => list(options),
    [POST_TABDATA]: options => table(options)
})
