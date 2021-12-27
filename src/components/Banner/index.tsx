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

        <p>
          Peter Parker é desmascarado e não consegue mais separar sua vida
          normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda
          ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o
          forçam a descobrir o que realmente significa ser o Homem-Aranha.
        </p>

        <button>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default Banner;
