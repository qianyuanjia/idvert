// 张慧敏 api
import api from './api'
import { requestPost } from '@/utils/request'

const list = options => requestPost(api.Demo, options)
export {
    list
}

// 李晓超 api

// 王红涛 api
export const table = options => {
    return requestPost(api.List, options)
}

// 崔亚俊 api
export const homt_add_api = options => requestPost(api.Put, options)
export const login = (options) => requestPost(api.Login, options)