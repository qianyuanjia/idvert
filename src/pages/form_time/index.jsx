import React, { Component } from 'react';
import { DatePicker } from 'antd';

export default class index extends Component {
    state = {
        startValue: '',
        endValue: '',
    }

    onStartChange = (date, dateString)  => {
        this.setState({startValue: date})
    }

    onChangeEnd = (date, dateString) => {
        this.setState({endValue: date})
    }

    disabledStartDate = startValue => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() >= endValue.valueOf();
    }
    

    disabledEndDate = endValue => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
          return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };
    

    render() {
        //const { startValue, endValue } = this.state
        return (
            <>
                <div>
                    <DatePicker  
                        onChange={this.onStartChange} 
                        placeholder="First Seen"
                        disabledDate={this.disabledStartDate}
                    />
                </div>
                <div>
                <DatePicker 
                        onChange={this.onEndChange} 
                        placeholder="Last Seen"
                        disabledDate={this.disabledEndDate}
                    />
                </div>
            </>
        );
    }
}