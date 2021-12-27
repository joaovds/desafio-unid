import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

import styles from './styles.module.scss';

const Home: React.FC = function () {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.container}>
      <Header />
      <Banner />

      <div className={styles.search_container}>
        <FiSearch className={styles.icon} />

        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {!search ? (
        <>
          <Section name="Em cartaz" query="now_playing" />
          <Section name="Populares" query="popular" />
          <Section name="Melhor avaliação" query="top_rated" />
        </>
      ) : (
        <Section name="Resultado da Pesquisa" query="search/movie" />
      )}

      <Footer />
    </div>
  );
};

export default Home;
