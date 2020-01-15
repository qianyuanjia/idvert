import React, { useEffect, useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { samples_list } from '../../actions/samplesList'

export default function Person() {
    //hook是一个特殊的函数，可以让你沟入react 例如 useState
    //最多两个，一个变量，一个改变它的方法
    const mapState = useCallback(state => ({
        result: state.samplesList.tabData
    }))
    // 从 store 中读取 dispatch
    const dispatch = useDispatch()
    // 拿我们的数据
    const data = useMappedState(mapState)

    useEffect(() => {
        const token = localStorage.getItem('token')
        dispatch(samples_list.postTabdata({ page: 1, limit: 10, token }))
    }, [])
    return (
        <div className='pages_home'>
            {
                data.result.list.map((val, key) => {
                    return (
                        <div className="content" key={key}>
                            {val.id}
                        </div>
                    )
                })
            }
        </div>
    )
}