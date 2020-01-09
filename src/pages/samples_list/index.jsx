import React from 'react';
//引组件
import Select from '@/pages/form_inputs'
import Times from '@/pages/form_time'
import InfiniteScroll from '@@/InfiniteScroll'
//redux
import { connect } from 'react-redux'
import { samples_list, } from '@/actions/samplesList'
import { hump } from '@/utils/string'
import { POST_TABDATA, DETAILS } from '@/constants/actionTypes'
//插件
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import { Checkbox } from 'antd'
import selectJson from '@/assets/select'
//样式
import './styles.less'

export default @connect(state => {
    return {
        tabData: state.samplesList.tabData,
    }
}, {
    // POST_TABDATA: samples_list.POST_TABDATA
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
    
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    
    //点击跳详情
    jump = value => {
        const { detils, history } = this.props
        detils(value)
        console.log(value);
        
        //history.push('/info')
    }

    loadFunc = (page = 1) => {
        const { data, count } = this.state
        const token = localStorage.getItem('token')
        if (count && data.length >= count) {
            return false
        }
        this.props.post_data({ limit: 10, page, token })
            .then(res => {
                const { list, count } = this.props.tabData
                this.setState({
                    count: count,
                    data: [...data, ...list]
                }, () => {
                    this.imagesOnload()
                })
            })
    }
    render() {
        const { hasmore, data, count } = this.state
        return (
            <div className='samples_list'>
                <div className="list_top">
                    <div>Permium Search: </div>
                    <div className='select-s'>
                        <Select title="Search Position" data={selectJson}/>
                        <Select title="Geo"/>
                        <Select title="Languge"/>
                        <Select title="Device Type"/>
                        <Select title="Ad Network"/>
                        <Times />
                        <Select title="Height"/>
                        <Select title="Width"/>
                        <Select title="Affiliate Network"/>
                        <Select title="Vertivcal"/>
                        <Select title="Offer Name"/>
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
