import React, { FC, memo, useCallback, useState } from 'react';
import styles from '../input/Input.module.scss';
import passwordStyles from './PasswordInput.module.scss'
import { IInputProps } from '../input/types';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/display-name
const PasswordInputComponent: FC<IInputProps> = memo(({
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
  const [showSymbols, setShowSymbols] = useState(false);
  const changeSymbols = () => {
    setShowSymbols(!showSymbols);
  };
  return (
    <div className={styles.input_wrapper}>
      <span>{title}</span>
      <div className={passwordStyles.passwordInputWrapper}>
        <input
          {...anyProps}
          className={styles.input}
          type={showSymbols ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={onHandleChange}
        />
        <div className={passwordStyles.icon_wrapper}>
          {showSymbols ? <FontAwesomeIcon icon={faEyeSlash} onClick={changeSymbols}/>
            :
          <FontAwesomeIcon icon={faEye} onClick={changeSymbols}/>}
        </div>
      </div>
      {error && <p className={styles.input_error}>{error}</p>}
    </div>
  )
})

export default PasswordInputComponent;
