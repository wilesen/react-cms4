/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-10 17:10:26 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-12 11:42:52
 */
import * as React from 'react';
// import styles from './index.less';
import { Button } from 'antd';
import { setCookie } from 'utils'

interface IProps {
    form: any;
    history: any
}

class Home extends React.Component<IProps> {

    public render() {
        return (
            <>
                <span>This is Home page</span>
            </>
        );
    }
}

export default Home