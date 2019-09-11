import * as React from 'react';
import { HashRouter, Route, Switch, RouteProps, RouteComponentProps } from 'react-router-dom';
import AuthRoute from 'component/Function/AuthRoute';

const { lazy, Suspense } = React;
interface IProps {

}

interface IAuthProps {
    authCode?: string;
}

interface IAuthRouteProps {
    routeType: React.ReactNode,
    children: React.ReactNode[],
    exact: boolean,
    path: string,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    authCode: string,
}


export const RouteConfig: React.ReactNode[] = [
    {
        path: '/index',
        name: '首页',
        component: lazy(() => import('../pages/Home')),
        routeType: AuthRoute,
        authCode: '101',
        exact: true,
        children: [
            {
                name: 'page1',
                path: '/page1',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                exact: true,
                authCode: '101'
            },
        ]
    },
    {
        path: '/page1',
        name: 'page2',
        component: lazy(() => import('../pages/Page1')),
        routeType: AuthRoute,
        exact: true,
        authCode: '101'
    }
]

const SplitRoute = (routeData: React.ReactNode[]): React.ReactNode[] => {
    const returnRoute: React.ReactNode[] = [];
    routeData.forEach((item: any, index: number) => {
        const { routeType: ConfigRoute, children = [], exact, path, component, authCode } = item;
        returnRoute.push(<ConfigRoute key={String(index)} exact={exact} path={path} authCode={authCode} component={component} />)
        if (children.length) {
            return SplitRoute(children);
        }
    })
    return returnRoute;
}

const LoginComponent = () => {
    const loginProps = {
        path: '/login',
        exact: false,
        component: lazy(() => import('../pages/Login')),
        authCode: '999'
    }
    return AuthRoute(loginProps)
}

const Router = (props: IProps) => (
    <HashRouter>
        <Suspense fallback={null} >
            <Switch>
                {
                    LoginComponent()
                }
                {SplitRoute(RouteConfig)}
            </Switch>
        </Suspense>
    </HashRouter>
)

export default Router;

