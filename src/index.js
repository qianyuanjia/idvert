import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store } from './store'
import 'antd/dist/antd.less'
import './index.less'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <Router />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)