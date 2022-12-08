import { FC } from 'react';
import { ReactComponent as LogoImg } from './images/logo.svg';

import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <a href="/" className={styles['logo-wrapper']}>
      <LogoImg className={styles['logo']} />
      <span className={styles['logo-title']}>
        PANTHEON <p className={styles['logo-subtitle']}>project</p>
      </span>
    </a>
  );
};

export default Logo;
