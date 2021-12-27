import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import Card from '../Card';
import styles from './styles.module.scss';

interface IProps {
  name: string;
  query: string;
}

const Section: React.FC<IProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <header>
        <h3>{name}</h3>

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
