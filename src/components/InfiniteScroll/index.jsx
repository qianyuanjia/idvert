import React, { Component } from 'react'
import Card from '@@/Card'
import { Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'

export default class extends Component {
    render() {
        const { hasmore, data, count, loadFunc } = this.props
        return (
            <InfiniteScroll
                loadMore={loadFunc}
                hasMore={hasmore}
                loader={<div className="loader" key={0}>{count >= data.length ? <Spin /> : '我也是有底线的'} </div>}
                useWindow={false}
                initialLoad={false}
            >
                <div className='pages-hoc'>
                    {
                        data.length > 0 && data.map((v, k) => (
                            <Card v={v} key={k} />
                        ))
                    }
                </div>
            </InfiniteScroll>
        )
    }
}

