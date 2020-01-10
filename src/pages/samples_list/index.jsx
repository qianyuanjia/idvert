import React from 'react';
//引组件
import Select from '@/pages/form_inputs'
import Times from '@/pages/form_time'
import InfiniteScroll from '@@/InfiniteScroll'
import { search } from '@/services'
//redux
import { connect } from 'react-redux'
import { samples_list, } from '@/actions/samplesList'
import { hump } from '@/utils/string'
import { POST_TABDATA, DETAILS } from '@/constants/actionTypes'
//插件
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import { Checkbox } from 'antd'
import _ from 'loadsh'
import selectJson from '@/assets/select'
//样式
import './styles.less'

import { requestPost } from '@/utils/request'

export default @connect(state => ({
    tabData: state.samplesList.tabData,
}), {
    post_data: samples_list[hump(POST_TABDATA)],
    detils: samples_list[hump(DETAILS)]
})
class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasmore: true,
            count: 0,
            data: [],
            sum: 1
        }
        this.loadFunc()
    }
    //监听图片
    imagesOnload = () => {
        const elLoad = imagesLoaded('.pages-hoc')
        elLoad.on('always', () => {
            this.advanceWidth()
        })
    }
    //瀑布流
    advanceWidth = () => {
        // new Masonry(节点, 配置)
        new Masonry(document.querySelector('.pages-hoc'), {
            itemSelector: '.d', // 要布局的网格元素
            columnWidth: 200,  // 获取节点 可以自动计算每列的宽度
            fitWidth: true, // 设置网格容器宽度等于网格宽度
            gutter: 20,
        })
    }
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    //点击跳详情
    jump = value => {
        const { detils, history } = this.props
        detils(value)
        history.push('/info')
    }
    //无限滚动
    loadFunc = (page = 1) => {
        const { data, count } = this.state
        const token = localStorage.getItem('token')
        if (count && data.length >= count) {
            return false
        }
        this.props.post_data({ limit: 10, page, token })
            .then(() => {
                const { list, count } = this.props.tabData
                this.setState({
                    count: count,
                    data: [...data, ...list]
                }, () => {
                    this.imagesOnload()
                })
            })
    }
    //id排序
    sortId = () => {
        const { data, sum } = this.state
        const arr = [...data]
        if (sum % 2 === 0) {
            arr.sort((a, b) => {
                return a.id - b.id
            })
        } else {
            arr.sort((a, b) => {
                return b.id - a.id
            })
        }
        this.setState({
            data: arr,
            sum: sum + 1
        })
        this.imagesOnload()
    }
    //按时间排序
    sortTime = () => {
        const { data, sum } = this.state
        const arr = [...data]
        if (sum % 2 === 0) {
            arr.sort((a, b) => {
                return a.createtime - b.createtime
            })
        } else {
            arr.sort((a, b) => {
                return b.createtime - a.createtime
            })
        }
        this.setState({
            data: arr,
            sum: sum + 1
        })
        this.imagesOnload()
    }
    //搜索
    handleChange = value => {
        console.log(value)
    }
    render() {
        const { hasmore, data, count } = this.state
        const languge = _.get(selectJson, 'resultMap.data.language', [])
        const country = _.get(selectJson, 'resultMap.data.country', [])
        const network = _.get(selectJson, 'resultMap.data.network', [])
        const device = _.get(selectJson, 'resultMap.data.device', [])
        const bhCategory = _.get(selectJson, 'resultMap.data.bhCategory', [])
        return (
            <div className='samples_list'>
                <div className="list_top">
                    <div>Permium Search: </div>
                    <div className='select-s'>
                        <Select title="Search Position" data={country} show={'inline'} />
                        <Select title="Geo" data={bhCategory} show={'none'} handleChange={this.handleChange} />
                        <Select title="Languge" data={languge} show={'none'}/>
                        <Select title="Device Type" data={device} show={'none'} />
                        <Select title="Ad Network" data={network} show={'none'} />
                        <Times />
                        <Select title="Height" />
                        <Select title="Width" />
                        <Select title="Affiliate Network" />
                        <Select title="Vertivcal" />
                        <Select title="Offer Name" />
                        <Select title="Search Position" />

                        <div className="checkout">
                            <Checkbox onChange={this.onChange}>
                                CDN
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <div className="list_title">
                    SortBy:
                    <p onClick={this.sortId}>ID</p>
                    <p onClick={this.sortTime}>时间</p>
                </div>
                <div className="list_body">
                    <InfiniteScroll
                        hasmore={hasmore}
                        data={data}
                        count={count}
                        loadFunc={this.loadFunc}
                        click={this.jump}
                    />
                </div>
            </div>
        )
    }
}
