/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-12 09:40:33 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-12 10:33:03
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import AuthRoute from 'component/Function/AuthRoute';
const { lazy } = React;

export interface IRouteConfig {
    path: string,
    name: string,
    component: React.ReactNode,
    routeType: React.ReactNode,
    displayMenu: boolean,
    exact: boolean,
    authCode: string,
    children?: IRouteConfig[]
}

const RouteConfig: IRouteConfig[] = [
    {
        path: '/home',
        name: '首页',
        routeType: Route,
        component: lazy(() => import('../pages/Home')),
        authCode: '101',
        exact: true,
        displayMenu: true,
    },
    {
        path: '/page',
        name: 'page',
        component: lazy(() => import('../pages/Page1')),
        routeType: AuthRoute,
        displayMenu: true,
        exact: true,
        authCode: '101',
        children: [
            {
                name: 'page1',
                path: '/page/page1',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                displayMenu: true,
                exact: true,
                authCode: '101'
            },
            {
                name: 'page2',
                path: '/page/page2',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                displayMenu: true,
                exact: true,
                authCode: '101'
            },
            {
                name: 'page3',
                path: '/page/page3',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                displayMenu: true,
                exact: true,
                authCode: '101'
            },
        ]
    },
]

export default RouteConfig;