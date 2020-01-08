import React from 'react';
import './styles.less'
import { LIST_DATA } from '@/constants/actionTypes'
import { listData } from '@/actions/listdata'
import { connect } from 'react-redux'
import { hump } from '@/utils/string'

import Masonry from 'masonry-layout'
import InfiniteScroll from 'react-infinite-scroller'
import cs from 'classnames'
import Cart from '@@/Cart'


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

        this.props.getListData({
            token: localStorage.token
        })


    }

    // 瀑布流
    advanceWidth = () => {
        // new Masonry(节点, 配置)
        new Masonry(document.querySelector('.form_list_bot'), {
            itemSelector: '.cart_list', // 要布局的网格元素
            columnWidth: 200,  // 获取节点 可以自动计算每列的宽度
            fitWidth: true, // 设置网格容器宽度等于网格宽度
            gutter: 20,
        })
    }



    render() {
        const { tabData } = this.props  //获取全部数据
        console.log(tabData, 'tabData');
        
        return (
            <div className='form_list'>
                <div className='form_list_top'></div>
                <div className='form_list_search'></div>
                <div className='form_list_bot'>
                    {
                        tabData.length > 0 ? 
                        tabData.map((v, k) => {
                            return (
                                <Cart 
                                    key={k}
                                    className='cart_list'
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
                        }) : '没有数据'
                    }



                </div>
            </div>
        )
    }
}
