/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-10 17:10:26 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-10 17:44:24
 */
import * as React from 'react';
import { Button } from 'antd';
import styles from './index.less';
interface IProps {
    form: any;
    history: any
}

class NotFound extends React.Component<IProps> {
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    public backHome = () => {
        console.log(this.props);
        const { history } = this.props;
        history.push('/123123')
    }

    public render() {
        return (
            <div className={styles.notFoundBg}>
                <Button onClick={this.backHome} type='primary' className={styles.backHome}>返回</Button>
            </div>
        );
    }
}

export default NotFound