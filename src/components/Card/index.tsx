import React from 'react';

import { BsStarFill } from 'react-icons/bs';

import styles from './styles.module.scss';

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/homem-aranha-sem-volta-para-casa.jpg"
        alt="image movie"
      />

      <h4>Homem-Aranha: Sem Volta Para Casa</h4>

      <div className={styles.rating}>
        <BsStarFill className={styles.icon} />
        8.6
      </div>

      <div className={styles.containerButton}>
        <button>Ver detalhes</button>
      </div>
    </div>
  );
};

export const SearchCard: React.FC = () => <></>;

export default Card;
