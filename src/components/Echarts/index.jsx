import React, { Component } from 'react'
import echarts from 'echarts'

export default class extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.querySelector('.eharts'))
        const { option } = this.props
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
    }
    render() {
        const { width, height } = this.props
        return <div className='eharts' style={{width:width, height:height}}></div>
    }
}

