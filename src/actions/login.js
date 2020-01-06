import { createActions } from 'redux-actions'
import { login } from '@/services'
export const toLogin = createActions({
    LOGIN: options => login(options),
    SAVE_TOKEN: options => options
})