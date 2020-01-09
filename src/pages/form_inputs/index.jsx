import React, { Component } from 'react';
import { Select } from 'antd'
const { Option } = Select;

export default class index extends Component {

    handleChange = value => {
        console.log(value)
    }

    render() {
        const { title } = this.props
        return (
            <div> 
                <Select
                    mode="multiple"
                    
                    placeholder={title}
                    onChange={this.handleChange}
                    optionLabelProp="label"
                    maxTagCount={2}
                >
                    <Option value="china" label="China">
                        <span role="img" aria-label="China">
                            🇨🇳
                        </span>
                    China (中国)
                    </Option>
                    <Option value="usa" label="USA">
                        <span role="img" aria-label="USA">
                            🇺🇸
                        </span>
                    USA (美国)
                    </Option>
                    <Option value="japan" label="Japan">
                        <span role="img" aria-label="Japan">
                            🇯🇵
                        </span>
                    Japan (日本)
                    </Option>
                    <Option value="korea" label="Korea">
                        <span role="img" aria-label="Korea">
                            🇰🇷
                        </span>
                    Korea (韩国)
                    </Option>
                </Select>
            </div>
        );
    }
}