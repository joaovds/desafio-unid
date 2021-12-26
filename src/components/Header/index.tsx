import React from 'react';

import { FiSearch } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="logo find movies" />

      <form>
        <FiSearch className={styles.icon} />

        <input type="search" placeholder="Search" />
      </form>
    </div>
  );
};

export default Header;
