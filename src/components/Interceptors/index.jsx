
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loading } from '@/actions/home'

export default @withRouter
class extends React.PureComponent {
    constructor(props) {
        super(props)

        let cancelToken = axios.CancelToken

        const cancel = []

        const removePending = config => {
            for (let p in cancel) {
                if (cancel[p].u === config.url) {
                    cancel[p].f()
                }
            }
        }

        // 请求拦截器 发送一个请求之前
        axios.interceptors.request.use(config => {
            //在一个ajax发送前执行一下取消操作
            removePending(config)
            config.cancelToken = new cancelToken(c => {
                cancel.push({
                    f: c,
                    u: config.url,
                })
            })
            window.store.dispatch(loading(true))
            return config
        }, error => {
            return Promise.reject(error)
        })

        //添加响应拦截器
        axios.interceptors.response.use(response => {
            window.store.dispatch(loading(false))
            return response
        }, error => {
            return Promise.reject(error)
        })
    }

    render() {
        return <></>
    }
}
