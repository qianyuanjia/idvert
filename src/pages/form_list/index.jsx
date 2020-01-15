import React from 'react'
import _ from 'loadsh'
import InfiniteScroll from 'react-infinite-scroller'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import moment from 'moment'
import { Spin, Empty, Select, Tag } from 'antd'
import { connect } from 'react-redux'
import { hump } from '@/utils/string'
import { requestPost } from '@/utils/request'
import { LIST_DATA, DETAILS } from '@/constants/actionTypes'
import Time from '@/pages/form_time'
import { listData, } from '@/actions/listdata'
import { samples_list, } from '@/actions/samplesList'
import Button from '@@/Button'
import Cart from '@@/Cart'
import './styles.less'

const { RangePicker } = DatePicker;
export default @connect(state => {
    return {
        tabData: state.listData.tabData,
        state: state.fromList.state,
    }
}, {
    getListData: listData[hump(LIST_DATA)],
    detils: samples_list[hump(DETAILS)]
})

class extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            count: '',
            status: true,
            time: '',
            clickStats: true,
            selectData: [],
            textStyle: {}
        }
        this.loadMoreData()  // 初始化进入页面 获取数据
    }

    componentDidMount() {
        if (!Number(this.props.state)) {
            this.setState({
                textStyle: { color: '#ccc' }
            })
        }
    }

    componentWillReceiveProps() {
        if (Number(this.props.state)) {
            this.setState({
                textStyle: { color: '#ccc' }
            })
        } else {
            this.setState({
                textStyle: { color: '#000' }
            })
        }
    }

    loadMoreData = (page = 1) => {

        const { data } = this.state

        requestPost('/Home/Apis/sampleList', {
            token: localStorage.token,
            page,   // 页数
            limit: 5,  // 每页的条数
        })
            .then(res => {
                this.setState({
                    data: [...data, ...res.data.result.list],
                    count: res.data.result.count,
                }, () => {
                    this.imagesOnload()
                })
            })
    }

    // 监听图片
    imagesOnload = () => {
        const elLoad = imagesLoaded('.cart-cpt')
        elLoad.on('always', () => {
            // 图片加载后执行的方法
            // 拿第一次的数据
            this.advanceWidth()
        })
    }

    // 瀑布流
    advanceWidth = () => {
        // new Masonry(节点, 配置)
        new Masonry(document.querySelector('.list_content'), {
            itemSelector: '.cart-cpt', // 要布局的网格元素
            columnWidth: 215,  // 获取节点 可以自动计算每列的宽度
            fitWidth: true, // 设置网格容器宽度等于网格宽度
            gutter: 20,
        })
    }

    // oop(text,'点击谁', '排序谁')
    oop = (text, clickHow, sortHow) => {
        const { data, clickStats } = this.state
        if (text === clickHow) {
            let arr = []
            if (clickStats) {
                arr = data.sort((x, y) => {
                    return y[sortHow] - x[sortHow]
                })
            } else {
                arr = data.sort((x, y) => {
                    return x[sortHow] - y[sortHow]
                })
            }
            this.setState({
                data: arr,
                time: new Date()
            })
        }
    }

    buttonClick = (text) => {
        this.imagesOnload()
        const { clickStats } = this.state
        this.setState({
            clickStats: !clickStats
        })
        this.oop(text, 'ID', 'id')
        this.oop(text, '时间', 'createtime')
    }

    // 获取id  跳转到详情页面
    toInfo = value => {
        const { detils, history } = this.props
        detils(value)
        history.push('/info')
    }

    // 获取下拉框数据

    handleChange = value => {
        let arr = []
        arr.push(...value)
        this.setState({
            selectData: arr
        })
    }

    // 点击关闭
    log = (item, k) => {
        const { selectData } = this.state

        // const arr = _.remove(selectData, function (v) {
        //     return item !== v
        // })

        // this.setState({
        //     selectData: arr,
        // })
    }

    // 点击头部文字
    listData = items => { }


    // 时间框 显示
    disabledDate = current => {
        return current && current < moment().endOf('day')
    }

    timeChange = (info, items) => {
        console.log(items, 'items');
    }

    // 删除所有
    clearAll = () => {
        this.setState({
            selectData: []
        })
    }
<<<<<<< HEAD

=======
>>>>>>> 545776121e895f548da2b484fb0024076c70e07d

    render() {
        const { data, status, selectData } = this.state  //获取全部数据
        const { Option } = Select

        // 按钮
        const buttonData = [
            { id: 0, text: 'ID', },
            { id: 1, text: '时间', },
        ]

        // 文字list
        const listData = [
            { id: 0, text: 'Page' },
            { id: 1, text: 'Name' },
            { id: 2, text: 'URL' },
            { id: 3, text: 'Text' },
        ]

        return (
            <div className='form_list'>
                {/* 搜搜 */}
                <div className='form_list_top'>
                    <div className='form_list_top_Div'>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Search Position:</div>
                            <div className='form_list_top_div_content'>
                                {
                                    listData.map((v, k) => {
                                        return (
                                            <span key={k} onClick={() => this.listData(v)} style={this.state.textStyle}>{v.text}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='form_list_top_Div'>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Ads Format :</div>
                            <div className='form_list_top_div_content'> Image Video Carousel</div>
                        </div>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Device :</div>
                            <div className='form_list_top_div_content'> Desktop Android IOS</div>
                        </div>
                    </div>

                    <div className='form_list_top_Div'>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>First Seen Date :</div>
                            <div className='form_list_top_div_content'>
                                <Time />
                            </div>
                        </div>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Last Seen Date :</div>
                            <div className='form_list_top_div_content'>
                                <Time />
                            </div>
                        </div>
                    </div>

                    <div className='form_list_top_Div'>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Premlum Search :</div>
                            <div className='form_list_top_div_content'>
                                <Select
                                    mode="multiple"
                                    style={{ width: '250px', marginLeft: '20px' }}
                                    placeholder="select one country"
                                    allowClear  // 支持清除
                                    autoClearSearchValue
                                    onChange={this.handleChange}
                                    optionLabelProp="label"
                                    showArrow
                                    maxTagCount={2}
                                >
                                    <Option value="china" label="China">
                                        China
                                    </Option>
                                    <Option value="usa" label="USA">
                                        U.S.A
                                    </Option>
                                    <Option value="japan" label="Japan">
                                        Japan
                                    </Option>
                                    <Option value="korea" label="Korea">
                                        Korea
                                    </Option>
                                </Select>

                                <Select
                                    mode="multiple"
                                    style={{ width: '250px', marginLeft: '20px' }}
                                    placeholder="select one country"
                                    allowClear  // 支持清除
                                    autoClearSearchValue
                                    onChange={this.handleChange}
                                    optionLabelProp="label"
                                    showArrow
                                    maxTagCount={2}
                                >
                                    <Option value="China1" label="China1">
                                        China1
                                    </Option>
                                    <Option value="U.S.A1" label="U.S.A1">
                                        U.S.A1
                                    </Option>
                                    <Option value="Japan1" label="Japan1">
                                        Japan1
                                    </Option>
                                    <Option value="Korea1" label="Korea1">
                                        Korea1
                                    </Option>
                                </Select>

                                <Select
                                    mode="multiple"
                                    style={{ width: '250px', marginLeft: '20px' }}
                                    placeholder="select one country"
                                    allowClear  // 支持清除
                                    autoClearSearchValue
                                    onChange={this.handleChange}
                                    optionLabelProp="label"
                                    showArrow
                                    maxTagCount={2}
                                >
                                    <Option value="China2" label="China2">
                                        China2
                                    </Option>
                                    <Option value="U.S.A.2" label="U.S.A.2">
                                        U.S.A.2
                                    </Option>
                                    <Option value="Japan2" label="Japan2">
                                        Japan2
                                    </Option>
                                    <Option value="Korea2" label="Korea2">
                                        Korea2
                                    </Option>
                                </Select>

                            </div>
                        </div>
                    </div>

                    {/* 结果 */}
                    <div className='form_list_top_Div'>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Searched :</div>
                            <div className='form_list_top_div_content'>
                                {
                                    selectData.length > 0 && selectData.map((v, k) => {
                                        return (
                                            <Tag
                                                key={k}
                                                closable
                                                onClose={() => this.log(v, k)}
                                            >
                                                {v}
                                            </Tag>
                                        )
                                    })
                                }
                                {
                                    // 删除全部
                                    selectData.length > 0 && <a onClick={this.clearAll}>clear All</a>
                                }
                            </div>
                        </div>
                    </div>

                </div>
                {/* 点击排序 */}
                <div className='form_list_search'>
                    <Button title="SortBy" data={buttonData} buttonClick={this.buttonClick} />
                </div>

                <InfiniteScroll
                    initialLoad={false} // 不让它进入直接加载
                    pageStart={1} // 设置初始化请求的页数
                    loadMore={this.loadMoreData}  // 监听的ajax请求
                    loader={<div className="loader" key={0}>{data.length < 22 ? <Spin /> : '加载完毕'} </div>}
                    hasMore={status} // 是否继续监听滚动事件 true 监听 | false 不再监听
                    useWindow={false} // 不监听 window 滚动条
                >
                    <div className='list_content'>
                        {
                            data.length > 0 ?
                                data.map((v, k) => {
                                    return (
                                        <Cart
                                            isInfo={this.toInfo}
                                            key={k}
                                            id={v.id}
                                            title={JSON.parse(v.info).title}
                                            imgurl={JSON.parse(v.info).imgUrl}
                                            add={JSON.parse(v.info).add}
                                            cod={JSON.parse(v.info).cod}
                                            content={JSON.parse(v.info).content}
                                            createTime={JSON.parse(v.info).createTime}
                                            endTime={JSON.parse(v.info).endTime}
                                            http={JSON.parse(v.info).http}
                                            save={JSON.parse(v.info).save}
                                            typeImg={JSON.parse(v.info).typeImg}
                                        />
                                    )
                                }) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
