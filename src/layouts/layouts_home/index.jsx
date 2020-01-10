import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import { Nav } from '@@'
import login from '@/assets/images/logo.png'
import { Input, Avatar, Icon, Menu, Dropdown, } from 'antd'
import { from_list } from '@/actions/fromList'
import { hump } from '@/utils/string'
import { LIST_STATUS } from '@/constants/actionTypes'
import { connect } from 'react-redux'
import './styles.less'

const nav = [
    {
        id: 1,
        title: "formnative",
        path: "/formnative",
    },
    {
        id: 2,
        title: "homead",
        path: "/homead",
    },
    {
        id: 3,
        title: "adSamples",
        path: "/adSamples",
    }
]


export default @connect(state => ({}), {
    from_list: from_list[hump(LIST_STATUS)]
})
class extends React.PureComponent {

    change = (e) => {
        if (e.target.value.length) {
            this.props.from_list('1')
        } else {
            this.props.from_list('0')
        }
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        1st menu item
                </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        2nd menu item
                </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>
                    3rd menu item（disabled）
              </Menu.Item>
            </Menu>
        )
        return (
            <div className='layouts_home'>
                <div className="header_nav">
                    <div className="logo">
                        <img src={login} alt="logo" />
                    </div>
                    <div className="nav">
                        {/* 路由点击跳转 */}
                        <Nav data={nav} />
                    </div>
                    <div className="search">
                        {/* <input className="allSearch" type="text" /> */}
                        <Input size="large" placeholder="large size" onChange={(e) => this.change(e)} />
                    </div>
                    <div className="user">
                        <div className='user_left'>
                            <Avatar icon="user" />

                        </div>
                        <div className='user_right'>
                            <div className='user_left_top'>
                                <Dropdown overlay={menu}>
                                    <span>
                                        Hover me <Icon type="down" />
                                    </span>
                                </Dropdown>
                            </div>
                            <div className='user_left_bot'>
                                <Icon type="crown" /> Vip
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_content">
                    <PrivateRoute route={this.props.route.router} />
                </div>
            </div>
        )
    }
}
