import React from 'react';
import PrivateRoute from '@@/PrivateRoute'
import './styles.less'

export default class extends React.PureComponent {
    render() {
        return (
            <div className='layouts_user'>
                <PrivateRoute route={this.props.route.router} />
            </div>
        )
    }
}
