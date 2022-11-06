import type { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC<React.HTMLProps<any>> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
