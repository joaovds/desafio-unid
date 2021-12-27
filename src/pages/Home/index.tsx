import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
