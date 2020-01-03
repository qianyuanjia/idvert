import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ceshi } from '@/actions/home'

export default @connect(state => {
    return {
        loading: state.home.loading
    }
}, {
    ceshi,
})
class extends Component {
    onclick = () => {
        this.props.ceshi()
    }
    render() {
        const { loading } = this.props
        return (
            <div>
                <h1>{loading && 'loading'}</h1>
                <div onClick={this.onclick}> home </div>
            </div>
        )
    }
}

