import api from './api'
import { requestPost } from '@/utils/request'

// 张慧敏 api
export const search = options => requestPost(api.Search, options)

// 李晓超 api
export const tables = options =>  requestPost(api.List, options)
export const reg = options => requestPost(api.Reg, options)  // 注册

// 王红涛 api
export const table = options => requestPost(api.List, options)


// 崔亚俊 api
export const homt_add_api = options => requestPost(api.Put, options)
export const login = (options) => requestPost(api.Login, options)