import type { FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout: FC<React.HTMLProps<any>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
