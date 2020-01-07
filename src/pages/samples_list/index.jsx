import React from 'react';
import './styles.less'
import Select from '@/pages/form_inputs'
import { POST_TABDATA } from '@/constants/actionTypes'
import { connect } from 'react-redux'
import { samples_list } from '@/actions/samplesList'
import selectJson from '@/assets/select.json'
import { hump } from '@/utils/string.js'
import { Checkbox } from 'antd'


export default @connect(state => {
    return { tabData: state.samplesList.tabData }
}, {
    post_data: samples_list[hump(POST_TABDATA)]
})
class extends React.Component {

    componentDidMount() {
        console.log(selectJson);
        const token = localStorage.getItem('token')
        this.props.post_data({ limit: 10, page: 1, token })
    }   
    
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
        const { tabData } = this.props
        console.log(tabData);
        return (
            <div className='samples_list'>
                <div className="list_top">
                    <div>Permium Search: </div>
                    <div>
                        <Select title="Search Position"/>
                        <Select title="Geo"/>
                        <Select title="Languge"/>
                        <Select title="Device Type"/>
                        <Select title="Ad Network"/>
                        <Select title="Height"/>
                        <Select title="Width"/>
                        <Select title="Affiliate Network"/>
                        <Select title="Vertivcal"/>
                        <Select title="Offer Name"/>
                        <Select title="Search Position"/>
                        <Select title="Search Position"/>
                        <div className="checkout">
                            <Checkbox onChange={this.onChange}>
                                CDN
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <div className="list_title">
                    SortBy:<p>ID</p><p>时间</p>
                </div>
                <div className="list_body">
                    
                </div>
            </div>
        )
    }
}
