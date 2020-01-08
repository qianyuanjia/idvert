import React from 'react'
import cs from 'classnames'
import { withRouter } from "react-router"
import { Icon } from 'antd'

export default @withRouter
class extends React.Component {
    render() {
        const { v } = this.props
        const q = JSON.parse(v.info)
        const route = this.props.location.pathname
        const path = '/formnative/formlist'
        return (
            <dl key={v.id} className={cs('d', { d1: v.id % 2 === 0, d2: v.id % 2 !== 0 })}>
                <span className='cang'><Icon type="star" />收藏</span>
                <span className='staic'>{q.typeImg}</span>
                <span className='hua'>{q.cod}</span>
                <p>{route === path ? q.title : ''}</p>
                <dt>
                    <img src={q.imgUrl} alt={q.http} />
                </dt>
                <dd>
                    <p>{q.content}</p>
                    <p>{q.createTime} - {q.endTime}</p>
                    <p>
                        <span>{q.http}</span>
                        <span>{route === path ? 'Learn More' : ''}</span>
                    </p>
                </dd>
            </dl>
        )
    }
}