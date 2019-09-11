import * as React from 'react';
import { HashRouter, Route, Switch, RouteProps, RouteComponentProps, Redirect } from 'react-router-dom';
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
        path: '/home',
        name: '首页',
        routeType: Route,
        authCode: '101',
        exact: true,
        displayMenu: true,
        children: [
            {
                path: '/home/index',
                name: '首页',
                component: lazy(() => import('../pages/Home')),
                routeType: AuthRoute,
                authCode: '101',
                exact: true,
                displayMenu: true,
            },
            {
                name: 'page1',
                path: '/home/page1',
                component: lazy(() => import('../pages/Page1')),
                routeType: AuthRoute,
                displayMenu: true,
                exact: true,
                authCode: '101'
            },
        ]
    },
    {
        path: '/page2',
        name: 'page2',
        component: lazy(() => import('../pages/Page1')),
        routeType: AuthRoute,
        displayMenu: true,
        exact: true,
        authCode: '101'
    },
]


const SplitRoute = (routeData: React.ReactNode[]): React.ReactNode[] => {
    const returnRoute: React.ReactNode[] = [];
    routeData.forEach((item: any, index: number) => {
        const { routeType: ConfigRoute, children = [], exact, path, component, authCode } = item;
        if (children && children.length) {
            children.forEach((childrenItem: any, index: number) => {
                const { routeType: KRoute, exact: kExact, path: kPath, component: kComponent, authCode: kAuthCode } = childrenItem;
                returnRoute.push(<KRoute key={String(index)} exact={kExact} path={kPath} authCode={kAuthCode} component={kComponent} />)
            });
        } else {
            returnRoute.push(<ConfigRoute key={String(index)} exact={exact} path={path} authCode={authCode} component={component} />)
        }
    })
    return returnRoute;
}

const Router = (props: IProps) => (
    <HashRouter>
        <Suspense fallback={null} >
            <Switch>
                <Route path="/" exact render={() => (<Redirect to="/home/index" />)} />
                {SplitRoute(RouteConfig)}
                <Route exact={false} component={lazy(() => import('pages/notFound'))} />
            </Switch>
        </Suspense>
    </HashRouter>
)

export default Router;

