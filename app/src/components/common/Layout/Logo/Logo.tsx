import { FC } from 'react';
import { ReactComponent as LogoImg } from './images/logo.svg';

import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <div className={styles['logo-wrapper']}>
      <LogoImg className={styles['logo']} />
      <span className={styles['logo-title']}>
        PANTHEON <p className={styles['logo-subtitle']}>project</p>
      </span>
    </div>
  );
};

export default Logo;
