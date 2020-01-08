import React, { Component } from 'react';
import { Select } from 'antd'
const { Option } = Select;

export default class index extends Component {

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {
        console.log(this.props.data);
        
        return (
            <div> 
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="select one country"
                    onChange={this.handleChange}
                    optionLabelProp="label"
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