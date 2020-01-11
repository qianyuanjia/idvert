// 张慧敏 api
import api from './api'
import { requestPost } from '@/utils/request'
const search = options => {
    requestPost(api.Search, options)
}

export {
    search
}
// 李晓超 api
export const tables = options => {
    return requestPost(api.List, options)
}

// 王红涛 api
export const table = options => {
    return requestPost(api.List, options)
}

// 崔亚俊 api
export const homt_add_api = options => requestPost(api.Put, options)
export const login = (options) => requestPost(api.Login, options)