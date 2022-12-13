import { FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as IconMenuImg } from './images/icon-menu.svg';
import { ReactComponent as IconMenuCloseImg } from './images/icon-menu-close.svg';

import Button from 'components/common/Button/Button';

import styles from './NavMenu.module.scss';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

const NavMenu: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleOpen = (e: any, isOpen?: boolean) => {
    setIsOpenMenu((isOpen !== undefined && isOpen) || (() => !isOpenMenu));
  };

  const swchRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(swchRef, () => {
    isOpenMenu && toggleOpen(false);
  });

  return (
    <div className={styles['nav-wrapper']} ref={swchRef}>
      <Button
        onClick={toggleOpen}
        type="button"
        className={`button_transparent ${styles['menu-btn']}`}>
        <span className={styles['menu-btn__title']}>Menu</span>
        <IconMenuImg width="47" height="18" className={styles['menu-btn__icon']} />
      </Button>

      <nav
        className={classNames({
          [styles['nav']]: true,
          [styles['nav_hidden']]: !isOpenMenu,
        })}>
        <div className={styles['nav__close-btn-wrapper']}>
          <Button
            onClick={() => toggleOpen(false)}
            type="button"
            className={`button_transparent ${styles['nav__close-btn']}`}>
            <IconMenuCloseImg />
          </Button>
        </div>
        <ul className={styles['nav__list']}>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">Организация жизни</a>
          </li>
          <li>
            <a href="/">Подробнее о проекте</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
