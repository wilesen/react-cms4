import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Switch } from 'react-router-dom';
import request from 'utils/require';
import { setStorage } from 'utils';
import './mock';

const { lazy, Suspense } = React;

const history = createBrowserHistory();

const LoginComponent = lazy(() => import('pages/Login'));
const IndexComponent = lazy(() => import('pages/Layout/Container'));

request.get('/getAuth').then((res: any) => {
    setStorage('authCode', res.data.code)
})

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <HashRouter>
            <Suspense fallback={null} >
                <Switch>
                    <Route path='/Login' exact={false} component={LoginComponent} />
                    <Route path='/' exact={false} component={IndexComponent} />
                </Switch>
            </Suspense>
        </HashRouter>
    </ConfigProvider>
    , document.getElementById('root'));
serviceWorker.unregister();
