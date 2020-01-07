import React, { Component } from 'react';
import { Select } from 'antd'
const { Option } = Select;

export default class index extends Component {

    onChange = (value) => {
        //console.log(`selected ${value}`);
    }
      
    onBlur = () => {
        //console.log('blur');
    }
    
    onFocus = () => {
        //console.log('focus');
    }
      
    onSearch = (val) => {
        //console.log('search:', val);
    }
      

    render() {
        return (
            <div> 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder={this.props.title}
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div>
        );
    }
}