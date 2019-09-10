import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from '../component/Function/AuthRoute';

const { lazy, Suspense } = React;
interface IProps {

}

const RouteConfig = [
    {
        path: '/',
        component: lazy(() => import('../pages/Home')),
        routeType: AuthRoute,
        authCode: '101',
        exact: true,
    },
    {
        path: '/login',
        component: lazy(() => import('../pages/Login')),
        routeType: AuthRoute,
        exact: false,
        authCode: null
    },
    {
        path: '/page1',
        component: lazy(() => import('../pages/Page1')),
        routeType: AuthRoute,
        exact: true,
        authCode: '101'
    },
    {
        path: '/404',
        component: lazy(() => import('../pages/notFound')),
        routeType: Route,
        exact: true,
    },
]

const Router = (props: IProps) => (
    <HashRouter>
        <Suspense fallback={null} >
            <Switch>
                {
                    RouteConfig.map((item: any, index: number) => {
                        const { routeType: ConfigRoute, exact, path, component, authCode } = item;
                        return (
                            <ConfigRoute exact={exact} key={String(index)} path={path} authCode={authCode} component={component} />
                        )
                    })
                }
            </Switch>
        </Suspense>
    </HashRouter>
)

export default Router;

