import React from 'react';

import styles from './styles.module.scss';

const Badge: React.FC<{ name: string }> = function ({ name }) {
  return <div className={styles.container}>{name}</div>;
};

export default Badge;
