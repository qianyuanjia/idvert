import React from 'react';
import Select from '@/pages/form_inputs'
import { connect } from 'react-redux'
import { samples_list, } from '@/actions/samplesList'
import { hump } from '@/utils/string'
import { SAMPLES_LIST } from '@/constants/actionTypes'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import imagesLoaded from 'imagesloaded'
import cs from 'classnames'
import { Spin } from 'antd'
import './styles.less'

import { POST_TABDATA } from '@/constants/actionTypes'
import selectJson from '@/assets/select.json'
import { Checkbox } from 'antd'


export default @connect(state => {
    return {
        tabData: state.samplesList.tabData,
        result: state.samplesList.result,
        counts: state.samplesList.count
    }
}, {
    // POST_TABDATA: samples_list.POST_TABDATA
    samples: samples_list[hump(SAMPLES_LIST)],
    post_data: samples_list[hump(POST_TABDATA)]
})
class extends React.Component {
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
    
    componentDidMount() {
        console.log(selectJson);
        const token = localStorage.getItem('token')
        this.props.post_data({ limit: 10, page: 1, token })
    }   
    
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
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
        const { tabData } = this.props
        console.log(tabData);
        return (
            <div className='samples_list'>
                <div className="list_top">
                    <div>Permium Search: </div>
                    <div>
                        <Select title="Search Position"/>
                        <Select title="Geo"/>
                        <Select title="Languge"/>
                        <Select title="Device Type"/>
                        <Select title="Ad Network"/>
                        <Select title="Height"/>
                        <Select title="Width"/>
                        <Select title="Affiliate Network"/>
                        <Select title="Vertivcal"/>
                        <Select title="Offer Name"/>
                        <Select title="Search Position"/>
                        <Select title="Search Position"/>
                        <div className="checkout">
                            <Checkbox onChange={this.onChange}>
                                CDN
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <div className="list_title">
                    SortBy:<p>ID</p><p>时间</p>
                </div>
                <div className="list_body">
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
                                    <Ddl v={v} key={k} />
                                ))
                            }
                        </div>
                    </InfiniteScroll>
                </div>
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
