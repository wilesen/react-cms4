/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-12 11:27:30 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-12 15:36:10
 */
import React from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import styles from './index.less';
import history from 'utils/history'
import { setCookie } from 'utils'
const { Header } = Layout;


interface IProps {
    [propsName: string]: any
}

const Head: React.FC<IProps> = (props: IProps) => {
    console.log(props)
    const menu = (
        <Menu style={{ marginTop: '20px', textAlign: 'center' }} onClick={({ item, key, keyPath, domEvent }) => {
            if (key === '3') {
                console.log(props.history)

            }
        }}>
            <Menu.Item key="0">
                个人中心
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" >
                退出
          </Menu.Item>
        </Menu>
    );
    return (
        <Header {...props} >
            <div className={styles.userContainer} onClick={() => {
                setCookie('isLogin', false);
                props.history.push('/login');
            }}>
                <Icon type="poweroff" className={styles.userLogo} />
                <span className="ant-dropdown-link" >
                    Exit
                </span>
            </div>
        </Header >
    )
}

export default Head;