import React, { Component } from 'react';
import { Icon } from 'antd'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: false
        }
    }
    

    render() {
        const { bool } = this.state
        return (
            <div className="uncollect">
                {
                    bool
                        ?<div><Icon type="star" /> Uncollect</div>
                        :<div>
                            <Icon type="star" theme="filled" /> Uncollect
                         </div>
                }
            </div>
        );
    }
}