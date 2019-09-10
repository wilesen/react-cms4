import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.less';
import { setCookie } from 'utils'

interface IProps {
    form: any;
    history: any
}
class Login extends React.Component<IProps> {
    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                setCookie('isLogin', true, 1);
                this.props.history.push('/')
            }
        });
    };

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.LoginContainer}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
            </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm