/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-05 15:13:25 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-06 16:13:00
 */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useCan from '../Hooks/useCan';
import { RouteProps } from 'react-router/index';

interface IAuthProps {
    authCode: string
}
const AuthRoute = (props: RouteProps & IAuthProps): any => {
    const { authCode } = props;
    const [isCode] = useCan(authCode);

    if (isCode) {
        return <Route {...props}  />
    }
    return <Redirect to='/login' />
}

export default AuthRoute;