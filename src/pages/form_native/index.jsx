import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import Nav from '@@/Nav';
import './styles.less'

export default class extends React.PureComponent {
    render() {
        return (
            <div className='form_native'>
                <div className="form_native_nav">
                    <div className="center_nav">
                        <Nav
                            title="FormList"
                            color
                            path="/formnative/formlist"
                        />
                        <Nav
                            title="SamplesList"
                            color
                            path="/formnative/sampleslist"
                        />
                        <Nav
                            title="Home"
                            color
                            path="/formnative/home"
                        />
                    </div>
                </div>
                <div className="form_native_content">
                    <PrivateRoute route={this.props.route.router} />
                </div>
            </div>
        )
    }
}
