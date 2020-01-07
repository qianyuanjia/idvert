import React from 'react';
import './styles.less'
import api from '@/services/api'
import Select from '@/pages/form_inputs'

import { connect } from 'react-redux'
import { requestPost } from '@/utils/request'
import { samples_list } from '@/actions/samplesList'
import selectJson from '@/assets/select.json'
console.log(samples_list);

export default @connect(state => {
    return { tabData: state.samplesList.tabData }
}, {
    // POST_TABDATA: samples_list.POST_TABDATA
})
class extends React.Component {

    componentDidMount() {
        console.log(selectJson);
        
        // this.props.POST_TABDATA(
        //         {   limit: 10, page: 1, 
        //             token: localStorage.getItem('token')
        //     })
        //     .then(res => {
        //         console.log(res.data.result)
        //     })
 
    }           

    render() {
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
