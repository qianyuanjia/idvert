import React, { Component } from 'react';
import { Icon } from 'antd'
import './style.less'
export default class index extends Component {
    
    render() {
        const { bool, click } = this.props
        return (
            <div className="uncollect" onClick={click}>
                {
                    bool
                        ?<>
                            <Icon type="star" theme="filled" /> 
                            Uncollect
                         </>
                        :<>
                            <Icon type="star" /> Collect
                         </>
                }
            </div>
        );
    }
}