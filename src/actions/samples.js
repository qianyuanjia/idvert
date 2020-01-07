
import { createActions } from 'redux-actions'
import { list } from '@/services'

export const samples = createActions({
    AD_SAMPLES: options => list(options)
})