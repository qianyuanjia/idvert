import React, { Component } from 'react';
import { Select } from 'antd'
const { Option } = Select;

export default class index extends Component {

    handleChange = value => {
        console.log(value)
    }

    render() {
        
        return (
            <div> 
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="select one country"
                    onChange={this.handleChange}
                    optionLabelProp="label"
                    maxTagCount={2}
                >
                    <Option value="china" label="China">
                        China (中国)
                    </Option>
                    <Option value="usa"label="USA" >
                        USA (美国)
                    </Option>
                    <Option value="japan" label="Japan">
                        Japan (日本)
                    </Option>
                    <Option value="korea" label="Korea">
                        Korea (韩国)
                    </Option>
                </Select>
            </div>
        );
    }
}