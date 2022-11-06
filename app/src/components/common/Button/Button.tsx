import type { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {},
  className = '',
  type = 'submit',
}) => {
  const getClassName = () => {
    let classList = `${styles.button}`;

    if (className) {
      classList += ` ${className}`;
    }

    return classList;
  };

  return (
    <button className={getClassName()} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
