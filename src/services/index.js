import api from './api'
import { requestPost } from '@/utils/request'

// 张慧敏 api

// 李晓超 api

// 王红涛 api
export const table = options => {
    return requestPost(api.List, options)
}

// 崔亚俊 api
export const login = (options) => {
    return requestPost(api.Login, options)
}