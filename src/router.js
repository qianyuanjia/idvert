import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom"
import loader from '@/utils/loader'

import Interceptors from '@/components/Interceptors'

const Home = loader(() => import('./pages/home'))

export default class extends Component {
    render() {
        return (
            <BrowserRouter>
                <Interceptors />
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


