import React from 'react';

import Header from '../../components/Header';

import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
