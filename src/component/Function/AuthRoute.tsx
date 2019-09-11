/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-05 15:13:25 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-11 14:55:24
 */
import * as React from 'react';
import { Route, RouteProps, Redirect, RouteComponentProps } from 'react-router-dom';
import useCan from '../Hooks/useCan';
// import { RouteProps } from 'react-router/index';
import { getCookie } from 'utils'

// 路由守卫
interface IAuthProps extends RouteProps {
    children?: React.ReactNode[],
    exact: boolean,
    path: string,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    authCode: string,
}

const AuthRoute = (props: IAuthProps): React.ReactNode => {
    const { authCode, path } = props;
    const [isCode] = useCan(authCode || '');
    const isLogin = getCookie('isLogin');
    if (isLogin) {
        if (isCode) {
            return <Route path={`/${props.path}`} {...props} />
        }
        if (!authCode) {
            return <Redirect to='/' />
        }
        return <Redirect to='' />
    } else if (!isLogin && path === '/login') {
        return <Route {...props} />
    }
    return <Redirect to='/login' />
}

export default AuthRoute;