import React from 'react'
import cs from 'classnames'
import Collection_detail from '@/pages/collection_detail'
import { withRouter } from "react-router"

export default @withRouter
class extends React.Component {
    state = {
        bool: false,
    }
    //点击收藏
    uncollect = () => {
        const { bool } = this.state
        this.setState({ bool: !bool })
    }
    render() {
        const { v, width } = this.props
        const q = JSON.parse(v.info)
        const route = this.props.location.pathname
        const path = '/formnative/formlist'
        return (
            <dl key={v.id} className={cs('d', { d1: v.id % 2 === 0, d2: v.id % 2 !== 0 })} style={{ width: width }}>
                <Collection_detail
                    click={this.uncollect}
                    bool={this.state.bool}
                />
                <span className='staic'>{q.typeImg}</span>
                <span className='hua'>{q.cod}</span>
                <p>{route === path ? q.title : ''}</p>
                <dt>
                    <p className='head'>
                        <img src={q.imgUrl} alt={q.http} />
                        <span>{q.cod}</span>
                    </p>
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