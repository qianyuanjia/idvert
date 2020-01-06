import React from 'react';
import './styles.less'
import { connect } from 'react-redux'
import { requestPost } from '@/utils/request'
import api from '@/services/api'
export default @connect(state => {
    return { tabData: state.samplesList.tabData }
}, {
    getTabData: value => {
        return {
            type: 'GET_TABDATA',
            payload: value
        }
    }
})
class extends React.PureComponent {

    componentDidMount() {
        console.log(api.List);
        
        requestPost(api.List, { limit: 10, page: 1 })
            .then(res => {
                console.log(res)
                
            })
    }

    render() {
        return (
            <div className='samples_list'>
                <div className="list_top"></div>
                <div className="list_title">
                    SortBy:<p>ID</p><p>时间</p>
                </div>
                <div className="list_body">
                    
                </div>
            </div>
        )
    }
}
