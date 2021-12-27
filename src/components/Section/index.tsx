import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import Card from '../Card';
import styles from './styles.module.scss';

const Section: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <h3>Em cartaz</h3>

        <a href="">
          Ver Mais
          <FiArrowRight className={styles.icon} />
        </a>
      </header>

      <section>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default Section;
