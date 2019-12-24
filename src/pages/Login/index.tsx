import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.less';
import { setCookie, require } from 'utils'

interface IProps {
  form: any;
  history: any
}
class Login extends React.Component<IProps> {
  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        require.get('/api/home').then((res: any) => console.log(res));
        console.log('Received values of form: ', values);
        // setCookie('isLogin', true, 1);
        // this.props.history.push('/')
      }
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginContainer}>
        <Form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.LoginBtn}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm
