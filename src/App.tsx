import React from 'react';
import styles from './App.less';
import Route from 'router'

interface IProps {
  history: any
}

const App: React.FC<IProps> = () => {
  return (
    <div className={styles.App}>
      <Route />
    </div>
  );
}

export default App;
