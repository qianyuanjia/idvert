import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd'
import './style.less';

export default class extends PureComponent {
    state = {
        current: '0',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        const { 
            props: { data = [] }, 
            state: { current },
            handleClick 
        } = this
        return (
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                {
                    data.map((res, key) => (
                        <Menu.Item key={key}>
                            <Link to={res.path} style={{color: res.color}}>{res.title}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
}