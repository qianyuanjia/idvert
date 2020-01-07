import api from './api'
import { requestPost } from '@/utils/request'

// 张慧敏 api

// 李晓超 api
export const table = options => {
    return requestPost(api.List, options)
}

// 王红涛 api

// 崔亚俊 api
export const homt_add_api = options => requestPost(api.Put, options)