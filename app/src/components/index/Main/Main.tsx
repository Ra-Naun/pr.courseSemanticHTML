import type { FC } from 'react';

import styles from './Main.module.scss';

const Main: FC<React.HTMLProps<any>> = ({ children }) => {
  return <header className={`container ${styles.header}`}>{children}</header>;
};

export default Main;
