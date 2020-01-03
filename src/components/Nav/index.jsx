import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import cs from 'classnames';
import './style.less';

export default class extends PureComponent {
    render() {
        const { title, path, color } = this.props
        return (
            <Link className={cs({ component_nav: true ,component_nav_black: color })} to={path}>
                {title}
            </Link>
        )
    }
}