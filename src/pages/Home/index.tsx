/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-10 17:10:26 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-10 17:33:13
 */
import * as React from 'react';
import styles from './index.less';

interface IProps {
    form: any;
    history: any
}

class Home extends React.Component<IProps> {

    public render() {
        return (
            'This is Home page'
        );
    }
}

export default Home