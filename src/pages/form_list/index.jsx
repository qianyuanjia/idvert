import React from 'react';
import './styles.less'
import { LIST_DATA } from '@/constants/actionTypes'
import { listData } from '@/actions/listdata'
import { connect } from 'react-redux'
import { hump } from '@/utils/string'
import { Spin, Empty, DatePicker, Select, Tag } from 'antd'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import imagesLoaded from 'imagesloaded'
import Cart from '@@/Cart'
import { requestPost } from '@/utils/request'
import Button from '@@/Button'
import _ from 'loadsh'


const { Option } = Select;


function onChange(date, dateString) {
    console.log(date, dateString);
}



// console.log(state.fromList.state, 'state');


export default @connect(state => {
    return {
        tabData: state.listData.tabData,
        state: state.fromList.state,
    }
}, {
    getListData: listData[hump(LIST_DATA)],
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
        if(!Number(this.props.state)) {
            this.setState({
                textStyle: { color: '#ccc' }
            })
        }
    }

    componentWillReceiveProps() {
        if(Number(this.props.state)) {
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

    buttonClick = (text) => {
        this.imagesOnload()
        const { data, clickStats } = this.state
        this.setState({
            clickStats: !clickStats
        })
        if (text === 'ID') {
            let arr = []
            if (clickStats) {
                arr = data.sort((x, y) => {
                    return y.id - x.id
                })
            } else {
                arr = data.sort((x, y) => {
                    return x.id - y.id
                })
            }

            this.setState({
                data: arr,
                time: new Date()
            })
        } else if (text === '时间') {

            let arr = []
            if (clickStats) {
                arr = data.sort((x, y) => {
                    return y.createtime - x.createtime
                })
            } else {
                arr = data.sort((x, y) => {
                    return x.createtime - y.createtime
                })
            }

            this.setState({
                data: arr,
                time: new Date()
            })
        }
    }

    // 获取id
    toInfo = id => {
        console.log(id)
    }

    // 获取下拉框数据
    handleChange = value => {
        console.log(value);
        this.setState({
            selectData: value
        })
    }

    // 点击关闭
    log = (item, k) => {
        const { selectData } = this.state

        const arr = _.remove(selectData, function (v) {
            return item !== v
        });
        console.log(arr);

        this.setState({
            selectData: arr,
        })
    }

    // 点击头部文字
    listData = items => {

    }

    render() {
        const { data, count, status } = this.state  //获取全部数据

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
                            <div className='form_list_top_div_content'> <DatePicker onChange={onChange} /> </div>
                        </div>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Last Seen Date :</div>
                            <div className='form_list_top_div_content'> <DatePicker onChange={onChange} /> </div>
                        </div>
                    </div>

                    <div className='form_list_top_Div'>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Premlum Search :</div>
                            <div className='form_list_top_div_content'>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="select one country"
                                    // defaultValue={['china']}
                                    onChange={this.handleChange}
                                    optionLabelProp="label"
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
                            </div>
                        </div>
                    </div>

                    {/* 结果 */}
                    <div className='form_list_top_Div'>
                        <div className='form_list_top_div_List'>
                            <div className='form_list_top_div_List_title'>Searched :</div>
                            <div className='form_list_top_div_content'>
                                {
                                    this.state.selectData.map((v, k) => {
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
                            </div>
                        </div>
                    </div>

                </div>
                {/* 点击排序 */}
                <div className='form_list_search'>
                    <Button title="SortBy" data={buttonData} buttonClick={this.buttonClick} />
                </div>
                {/* <div className='form_list_bot'>

                </div> */}
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
