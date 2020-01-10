import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import { Nav } from '@@'
import login from '@/assets/images/logo.png'
import './styles.less'
import { Input } from 'antd';
import { from_list } from '@/actions/fromList'
import { hump } from '@/utils/string'
import { LIST_STATUS } from '@/constants/actionTypes'
import { connect } from 'react-redux'

const nav = [
    {
        id: 1,
        title: "formnative",
        path: "/formnative",
        color: '#fff'
    },
    {
        id: 2,
        title: "homead",
        path: "/homead",
        color: '#fff'
    },
    {
        id: 3,
        title: "adSamples",
        path: "/adSamples",
        color: '#fff'
    }
]

export default @connect(state => ({}), {
    from_list: from_list[hump(LIST_STATUS)]
})
class extends React.PureComponent {

    change = (e) => {
        if(e.target.value.length) {
            this.props.from_list('1')
        } else {
            this.props.from_list('0')
        }
    }

    render() {
        return (
            <div className='layouts_home'>
                <div className="header_nav">
                    <div className="logo">
                        <img src={login} alt="logo" />
                    </div>
                    <div className="nav">
                        <Nav data={nav} />
                    </div>
                    <div className="search">
                        {/* <input className="allSearch" type="text" /> */}
                        <Input size="large" placeholder="large size" onChange={(e) => this.change(e)}/>
                    </div>
                    <div className="user">
                        USER
                    </div>
                </div>
                <div className="home_content">
                    <PrivateRoute route={this.props.route.router} />
                </div>
            </div>
        )
    }
}
