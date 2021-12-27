import React from 'react';

import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Section from '../../components/Section';

import styles from './styles.module.scss';

const Home: React.FC = function () {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />

      <div className={styles.search_container}>
        <FiSearch className={styles.icon} />

        <input type="search" placeholder="Search" />
      </div>

      <Section name="Em cartaz" query="now_playing" />
      <Section name="Populares" query="popular" />
      <Section name="Melhor avaliação" query="top_rated" />
    </div>
  );
};

export default Home;
