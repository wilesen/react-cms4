/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-12 09:40:33 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-18 10:12:24
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
        routeType: AuthRoute,
        component: lazy(() => import('../pages/Home')),
        authCode: '101',
        exact: true,
        displayMenu: true,
    },
    {
        path: '/page',
        name: '菜单一',
        component: lazy(() => import('../pages/Page1')),
        routeType: AuthRoute,
        displayMenu: true,
        exact: true,
        authCode: '102',
        children: [
            {
                name: 'page1',
                path: '/page/page1',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                displayMenu: true,
                exact: true,
                authCode: '1021'
            },
            {
                name: 'page2',
                path: '/page/page2',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                displayMenu: true,
                exact: true,
                authCode: '1022'
            },
            {
                name: 'page3',
                path: '/page/page3',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                displayMenu: true,
                exact: true,
                authCode: '1023'
            },
        ]
    },
    {
        path: '/menu',
        name: '菜单二',
        component: lazy(() => import('../pages/Page1')),
        routeType: AuthRoute,
        displayMenu: true,
        exact: true,
        authCode: '103'
    },
]

export default RouteConfig;