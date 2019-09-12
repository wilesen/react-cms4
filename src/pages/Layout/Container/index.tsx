import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import logo from 'assets/logo.png';
import Router from 'router';
import LeftMenu from '../Menu'

const { Header, Content, Footer, Sider } = Layout;
interface IProps {
  history: any
}

const App: React.FC<IProps> = () => {
  return (
    <Layout className={styles.container}>
      <Sider
        trigger={null}
        collapsible
      >
        <div className={styles.logoContainer} >
          <img className={styles.logo} src={logo} alt="" />
          <span className={styles.title}>React-CMS4</span>
        </div>
        <LeftMenu />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <Router />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
