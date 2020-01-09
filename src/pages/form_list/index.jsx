import React from 'react';
import './styles.less'
import { LIST_DATA } from '@/constants/actionTypes'
import { listData } from '@/actions/listdata'
import { connect } from 'react-redux'
import { hump } from '@/utils/string'
import { Spin, Empty } from 'antd'
import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import imagesLoaded from 'imagesloaded'
import Cart from '@@/Cart'
import { requestPost } from '@/utils/request'


export default @connect(state => {
    return {
        tabData: state.listData.tabData
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
        }
        this.loadMoreData()  // 初始化进入页面 获取数据
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
            columnWidth: 200,  // 获取节点 可以自动计算每列的宽度
            fitWidth: true, // 设置网格容器宽度等于网格宽度
            gutter: 20,
        })
    }


    render() {
        const { data, count, status } = this.state  //获取全部数据

        return (
            <div className='form_list'>
                <div className='form_list_top'></div>
                <div className='form_list_search'></div>
                <div className='form_list_bot'>

                </div>
                <InfiniteScroll
                        initialLoad={false} // 不让它进入直接加载
                        pageStart={1} // 设置初始化请求的页数
                        loadMore={this.loadMoreData}  // 监听的ajax请求
                        loader={<div className="loader" key={0}>{data.length < 22 ? <Spin /> : '加载完毕...'} </div>}
                        hasMore={status} // 是否继续监听滚动事件 true 监听 | false 不再监听
                        useWindow={false} // 不监听 window 滚动条
                    >
                        <div className='list_content'>
                            {
                                data.length > 0 ?
                                    data.map((v, k) => {
                                        return (
                                                <Cart
                                                    key={k}
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
