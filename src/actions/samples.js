import { AD_SAMPLES, } from '@/constants/actionTypes'
import { createActions } from 'redux-actions'
import { requestPost } from '@/utils/request'

export const samples = createActions({
    [AD_SAMPLES]: options => requestPost('/Home/Apis/listWithPage', options)
})