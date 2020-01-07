import React from 'react'
import { connect } from 'react-redux'
import { samples, } from '@/actions/samples'
import { hump } from '@/utils/string'
import { AD_SAMPLES } from '@/constants/actionTypes'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import imagesLoaded from 'imagesloaded'
import cs from 'classnames'
import { Spin } from 'antd'

import './styles.less'

export default @connect(state => {
    return {
        result: state.samples.result,
        counts: state.samples.count
    }
}, {
    samples: samples[hump(AD_SAMPLES)],
})
class extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            hasmore: true,
            count: 0,
            data: []
        }
        this.loadFunc()
    }
    imagesOnload = () => {
        const elLoad = imagesLoaded('.pages-hoc')
        elLoad.on('always', () => {
            this.advanceWidth()
        })
    }

    advanceWidth = () => {
        // new Masonry(节点, 配置)
        new Masonry(document.querySelector('.pages-hoc'), {
            itemSelector: '.d', // 要布局的网格元素
            columnWidth: 200,  // 获取节点 可以自动计算每列的宽度
            fitWidth: true, // 设置网格容器宽度等于网格宽度
            gutter: 20,
        })
    }

    loadFunc = (page = 1) => {
        const { data, count } = this.state
        if (count && data.length >= count) {
            return false
        }
        this.props.samples({ page, limit: 10 })
            .then(res => {
                const { result, counts } = this.props
                this.setState({
                    count: counts,
                    data: [...data, ...result]
                }, () => {
                    this.imagesOnload()
                })
            })
    }
    render() {
        const { hasmore, data, count } = this.state
        return (
            <div className='ad_samples'>
                <InfiniteScroll
                    loadMore={this.loadFunc}
                    hasMore={hasmore}
                    loader={<div className="loader" key={0}>{count >= data.length ? <Spin /> : '我也是有底线的'} </div>}
                    useWindow={false}
                    initialLoad={false}
                >
                    <div className='pages-hoc'>
                        {
                            data.length > 0 && data.map((v, k) => (
                                <Ddl v={v} key={k}/>
                            ))
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

class Ddl extends React.Component {
    render() {
        const { v } = this.props
        return (
            <dl key={v.id} className={cs('d', { d1: v.id % 2 === 0, d2: v.id % 2 !== 0 })}>
                <dt></dt>
                <dd>
                    <p>{v.title}</p>
                    <p>{v.tags}</p>
                    <p>
                        <span>
                            {v.id % 2 == 0 ? 'ssslver.cm' : 'mc.yandec.nu'}
                        </span>
                        <span>
                            {v.id % 2 == 0 ? 'Learn More' : 'No Button'}
                        </span>
                    </p>
                </dd>
            </dl>
        )
    }
}
