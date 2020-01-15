import React, { PureComponent } from 'react'
import { Icon } from 'antd'
import './styles.less'

export default class extends PureComponent {
    state = {
        status: false,
    }
    click = status => {
        this.setState({
            status: !status
        })

    }
    render() {
        const { status } = this.state
        return (
            <div className="uncollectx" onClick={() => this.click(status)}>
                {
                    status
                        ? <>
                            <Icon type="star" theme="filled" />
                            Uncollect
                         </>
                        : <>
                            <Icon type="star" /> Collect
                         </>
                }
            </div>
        )
    }
}