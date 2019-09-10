/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-05 15:13:25 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-10 17:40:35
 */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useCan from '../Hooks/useCan';
import { RouteProps } from 'react-router/index';
import { getCookie } from 'utils'

interface IAuthProps {
    authCode: string
}
const AuthRoute = (props: RouteProps & IAuthProps): any => {
    const { authCode } = props;
    const [isCode] = useCan(authCode);
    const isLogin = getCookie('isLogin');

    if (isLogin) {
        if (isCode) {
            return <Route {...props} />
        }
        if (!authCode) {
            return <Redirect to='/' />
        }
        return <Redirect to='/404' />
    }
    return <Redirect to='/login' />
}

export default AuthRoute;