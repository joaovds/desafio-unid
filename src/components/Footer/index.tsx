import React from 'react';

import tmdbLogo from '../../assets/tmdbLogo.svg';

import styles from './styles.module.scss';

const Footer: React.FC = function () {
  return (
    <footer>
      <div className={styles.info}>
        <p>Desenvolvido por:</p>
        <a href="https://github.com/joaovds">João Victor</a>
      </div>

      <img src={tmdbLogo} alt="TMDB" />
    </footer>
  );
};

export default Footer;
