import type { FC } from 'react';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';

import styles from './Header.module.scss';

const Header: FC<React.HTMLProps<any>> = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        <div className={styles['header__top-bar']}>
          <Logo />
          <NavMenu />
        </div>
        <h1 className={styles.header__title}>
          <span>Пункт назначения:&nbsp;</span>
          <span>Пантеон,</span>
          <span>Марс</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
