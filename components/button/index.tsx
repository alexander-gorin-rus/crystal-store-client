import React, { FC, memo } from 'react';
import { IButtonProps } from './types';
import styles from './Button.module.scss';

const Button: FC<IButtonProps> = memo(({
  disabled,
  isLoading,
  children,
  ...anyProps
}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={disabled ? styles.button_disabled : styles.button}
        disabled={disabled}
        {...anyProps}
      >
        {children}
      </button>
    </div>
  )
});

export default Button;
