import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import './mock';


const history = createBrowserHistory();

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App history={history} />
        </ConfigProvider>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
