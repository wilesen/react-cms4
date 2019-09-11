import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.less';
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
        <div className="logo" />
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
