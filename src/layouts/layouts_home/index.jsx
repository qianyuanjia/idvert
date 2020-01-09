import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import { Nav } from '@@'
import login from '@/assets/images/logo.png'
import './styles.less'

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

export default class extends React.PureComponent {
    
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
                        <input className="allSearch" type="text" />
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
