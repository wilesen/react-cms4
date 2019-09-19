/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-12 09:40:34 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-12 14:20:53
 */
import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import RouteConfig from 'config/routeConfig'

const { lazy, Suspense } = React;
interface IProps {

}

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
                <Route path="/" exact render={() => (<Redirect to="/home" />)} />
                {SplitRoute(RouteConfig)}
                <Route exact={false} component={lazy(() => import('pages/notFound'))} />
            </Switch>
        </Suspense>
    </HashRouter>
)

export default Router;

