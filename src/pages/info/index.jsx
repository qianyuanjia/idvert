import React from 'react';
import './styles.less'
import { Cart } from '@@'

export default class extends React.PureComponent {
    render() {
        return (
            <div className='info'>
                <div className="info-cart">
                    <Cart />
                    <div className="info-bottom"></div>
                </div>
                <div className="info-data">
                    <div className="info-content"></div>
                </div>
            </div>
        )
    }
}
