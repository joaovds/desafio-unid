import React from 'react';

import styles from './styles.module.scss';

const Banner: React.FC = () => {
  return (
    <div className={styles.container} style={{ backgroundImage: '' }}>
      <img
        src="https://t.ctcdn.com.br/ocN8h79WUuns_N77xnXYkdaabh0=/512x288/smart/i542482.jpeg"
        alt="banner image"
      />

      <div className={styles.content}>
        <div className={styles.badge}>Em alta</div>

        <h1>Homem-Aranha: Sem Volta Para Casa</h1>

        <button>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default Banner;
