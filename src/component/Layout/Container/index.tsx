import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import logo from 'assets/logo.png';
import Router from 'component/Function/Routes';
import LeftMenu from '../Menu';
import Header from '../Header';

const { Content, Footer, Sider } = Layout;
interface IProps {
  history: any
}

const App: React.FC<IProps> = (props: IProps) => {
  console.log(props)
  return (
    <Layout className={styles.container}>
      <Sider
        trigger={null}
        collapsible
        className={styles.slider}
      >
        <div className={styles.logoContainer} >
          <img className={styles.logo} src={logo} alt="" />
        </div>
        <div className={styles.titleContainer}>
          <span className={styles.title}>React-CMS4</span>
        </div>
        <LeftMenu />
      </Sider>
      <Layout>
        <Header className={styles.header} history={props.history} />
        <Content className={styles.content} >
          <Router />
        </Content>
        <Footer className={styles.footer} >React-CMS4 ©2018 Created by Ant Design</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
