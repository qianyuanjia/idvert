import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import cs from 'classnames';
import { withRouter } from 'react-router-dom'
import './style.less';

export default @withRouter
class extends PureComponent {
    render() {
        const { title, path, color } = this.props
        console.log(this.props.location.pathname, 'props');
        
        return (
            <Link className={cs({ component_nav: true ,component_nav_black: this.props.location.pathname === path })} to={path}>
                {title}
            </Link>
        )
    }
}