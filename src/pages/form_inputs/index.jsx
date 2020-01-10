import React, { Component } from 'react'
import { Select } from 'antd'
const { Option } = Select

export default class extends Component {
    render() {
        const { title, data, show, handleChange } = this.props
        return (
            <div>
                <Select
                    mode="multiple"
                    placeholder={title}
                    onChange={handleChange}
                    optionLabelProp="label"
                    maxTagCount={1}
                >
                    {
                        data ? data.map(v => (
                            <Option value={v.value} label={v.key} key={v.count ? v.count : ''}>
                                <span role="img" aria-label={v.key} style={{ display: show }}>
                                    {v.value}
                                </span>
                                {v.key}
                            </Option>
                        )) : ''
                    }
                </Select>
            </div>
        );
    }
}