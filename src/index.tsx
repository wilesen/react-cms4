import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { createBrowserHistory } from 'history';
import './mock';


const history = createBrowserHistory();

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App history={history} />
    </ConfigProvider>
    , document.getElementById('root'));
serviceWorker.unregister();
