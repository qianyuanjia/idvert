import React, { PureComponent } from 'react'
import { Button } from 'antd'
import './styles.less'

export default class extends PureComponent {

    click = text => {
        this.props.buttonClick(text)
    }

    render() {
        const { title, data } = this.props
        return (
            <div className="buttons" >
                {title} :
                {
                    data.map((v, k) => {
                        return (
                            <Button
                                key={k}
                                onClick={() => this.click(v.text)}
                            >
                                {v.text}
                            </Button>
                        )
                    })
                }
            </div>
        )
    }
}