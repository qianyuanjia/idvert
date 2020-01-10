import React from 'react';
import './styles.less'
import { Cart } from '@@'
import { connect } from 'react-redux'
export default @connect(state => {
    return { details: state.samplesList.details }
})
class extends React.PureComponent {
    
    render() {
        console.log(this.props.details)
        const { details } = this.props

        return (
            <div className='info'>
                <div className="info-cart">
                    <Cart 
                        cod={details.cod}
                        imgurl={details.imgUrl} 
                        addInfo={details.content}
                        http={details.http}
                        content={details.http}
                        createTime={details.createTime}
                        endTime={details.endTime}
                        typeImg={details.typeImg}
                    />
                    <div className="info-bottom"></div>
                </div>
                <div className="info-data">
                    <div className="info-content">
                     
                    </div>
                </div>
            </div>
        )
    }
}
