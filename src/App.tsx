import React from 'react';
import logo from './logo.svg';
import styles from './App.less';
import { Button } from 'antd'

const App: React.FC = () => {
  console.log('App', styles)
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>按钮</Button>
      </header>
    </div>
  );
}

export default App;
