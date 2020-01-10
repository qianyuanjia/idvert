import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import { Link, } from 'react-router-dom';
import cs from 'classnames'
import './styles.less'

const nav = [
    {
        id: 1,
        title: "FormList",
        path: "/formnative",
    },
    {
        id: 2,
        title: "SamplesList",
        path: "/formnative/sampleslist",
    },
    {
        id: 3,
        title: "Home",
        path: "/formnative/home",
    }
]

export default class extends React.PureComponent {
    render() {
        const url = this.props.location.pathname == '/' ? '/formnative' :  this.props.location.pathname
        
        return (
            <div className='form_native'>
                <div className="form_native_nav">
                    <div className="center_nav">
                        {
                            nav.map((v, k) => {
                                return (
                                    <Link
                                        to={v.path}
                                        key={k}
                                        className={cs({ 'astyle': url === v.path})}
                                    >
                                        {v.title}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="form_native_content">
                    <PrivateRoute route={this.props.route.router} />
                </div>
            </div>
        )
    }
}
