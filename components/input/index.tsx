import React, { FC, memo, useCallback, useState } from 'react';
import styles from './Input.module.scss';
import { IInputProps } from './types';
const InputComponent: FC<IInputProps> = memo(({
  type,
  title,
  placeholder,
  error,
  onChange,
  ...anyProps
}) => {
  const onHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, e.target.value);
  }, []);
  
  return (
    <div className={styles.input_wrapper}>
      <span>{title}</span>
      <input
        {...anyProps}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onHandleChange}
      />
      {error && <p className={styles.input_error}>{error}</p>}
    </div>
  )
})

export default InputComponent;
