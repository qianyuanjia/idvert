import { requestPost } from '@/utils/request'

export function login (items) {
    return{
        type: 'POST_LOGIN',
        payload: requestPost('/Home/Apis/listWithPage', items)
    }
}


