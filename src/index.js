import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import '@/styles/iconfont.less'
import '@/styles/reset.less'
import './index.less'
import Router from '@/router/index'  // 路由
import { store } from './store'  //store
import { Provider } from 'react-redux'
import { StoreContext } from 'redux-react-hook'
import { persistStore } from 'redux-persist'   //数据持久化
import { PersistGate } from 'redux-persist/lib/integration/react'

//111111
ReactDOM.render(
    <Provider store={store}>
        <StoreContext.Provider value={store} >
            <PersistGate loading={null} persistor={persistStore(store)}>
                <Router />
            </PersistGate>
        </StoreContext.Provider>
    </Provider>,
    document.getElementById('root'))