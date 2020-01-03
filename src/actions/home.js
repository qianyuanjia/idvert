
import { DO_HOME} from '@/constants/actionTypes'
import { post } from '@/utils/request'

export const loading = (options) => {
    return {
        type: DO_HOME,
        payload: options,
    }
}

export const ceshi = () =>{
    return {
        type: 'CESHI',
        payload: post('/Home/Apis/listWithPage')
    }
}