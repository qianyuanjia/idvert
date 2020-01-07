import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Interceptors from '@/components/Interceptors'

import {
    Layouts_home,
    Layouts_user,
    Home,
    Login,
    Register,
    Info,
    Home_ad,
    Ad_samples,
    Form_native,
    Form_list,
    Samples_list
} from './router' // 引入页面


const route = [
    {
        path: '/user',
        component: Layouts_user,
        router: [
            {
                path: '/user/login',
                component: Login,
            }, {
                path: '/user/register',
                component: Register
            }, {
                path: '/user',
                component: Login
            }
        ]
    }, {
        path: '/',
        component: Layouts_home,
        router: [
            {
                path: '/homead',
                component: Home_ad,  // 带标题的 form表单页面 
            },
            {
                path: '/adSamples',
                component: Ad_samples,  // 不带标题的 form表单页面 
            },
            {
                path: '/formnative',
                component: Form_native,  // 数据列表
                router: [
                    {
                        path: '/formnative/formlist',
                        component: Form_list
                    },
                    {
                        path: '/formnative/sampleslist',
                        component: Samples_list
                    },
                    {
                        path: '/formnative/home',
                        component: Home
                    },
                    {
                        path: '/formnative',
                        component: Form_list
                    }
                ]
            },
            {
                path: '/info',
                component: Info
            },
            {
                path: '/',
                component: Form_native,
                router: [
                    {
                        path: '/',
                        component: Form_list
                    }
                ]
            }
        ]
    }
]

export default class extends React.PureComponent {
    render() {
        return (
            <BrowserRouter >
                <Interceptors />
                {renderRoutes(route)}
            </BrowserRouter>
        )
    }
}
