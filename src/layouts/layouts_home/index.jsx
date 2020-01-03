import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import Nav from '@@/Nav';
import './styles.less'

export default class extends React.PureComponent {
    render() {
        return (
            <div className='layouts_home'>
                <div className="header_nav">
                    <div className="logo">
                        LOGO
                    </div>
                    <div className="nav">
                        <Nav
                            path="/formnative"
                            title="formnative"
                        />
                        <Nav
                            path="/homead"
                            title="homead"
                        />
                        <Nav
                            path="/adSamples"
                            title="adSamples"
                        />
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
