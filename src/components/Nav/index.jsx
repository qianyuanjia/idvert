import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom';
import './style.less';

export default class extends PureComponent {
    render() {
        const { 
            props: { data = [] }, 
        } = this
        return (
            <>
                {
                    data.length > 0 && data.map((res, key) => (
                        <NavLink 
                            key={key}
                            activeClassName="selected" 
                            to={res.path} 
                            style={{color: res.color}}>{res.title}
                        </NavLink>
                    ))
                }
            </>
        )
    }
}