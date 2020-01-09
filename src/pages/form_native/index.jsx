import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import Nav from '@@/Nav';
import './styles.less'

const nav = [
    {
        id: 1,
        title: "FormList",
        path: "/formnative/formlist",
        color: '#111',
    },
    {
        id: 2,
        title: "SamplesList",
        path: "/formnative/sampleslist",
        color: '#111',
    },
    {
        id: 3,
        title: "Home",
        path: "/formnative/home",
        color: '#111',
    }
]

export default class extends React.PureComponent {
    render() {
        return (
            <div className='form_native'>
                <div className="form_native_nav">
                    <div className="center_nav">
                        <Nav data={nav} />
                    </div>
                </div>
                <div className="form_native_content">
                    <PrivateRoute route={this.props.route.router} />
                </div>
            </div>
        )
    }
}
