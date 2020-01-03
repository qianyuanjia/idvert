import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.less';
import '@/styles/iconfont.css'
import '@/styles/reset.css';
import './index.less';


import Router from '@/router/index'  // 路由
import { store } from './store'  //store
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'   //数据持久化
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <Router />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));