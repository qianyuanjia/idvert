import React, { Component } from 'react';
import { DatePicker } from 'antd';

export default class index extends Component {

    onChange = (date, dateString) => {
    console.log(date, dateString);
    }

    render() {
        return (
            <>
                <div>
                    <DatePicker 
                        onChange={this.onChange} 
                        placeholder="First Seen"
                    />
                </div>
                <div>
                <DatePicker 
                        onChange={this.onChange} 
                        placeholder="Last Seen"
                    />
                </div>
            </>
        );
    }
}