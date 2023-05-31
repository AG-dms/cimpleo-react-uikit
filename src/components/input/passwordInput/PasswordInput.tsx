import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './passwordInput.module.css';

const cx = classNames.bind(styles);

type Props = {
  /**
   * Size of input (padding size)
   */
  size?: 'large' | 'medium' | 'small';

  /**
   * Some base variant for input (borders / outline)
   */
  variant?: 'outline' | 'contain';

  /**
   * String value for input
   */
  value?: string;

  /**
   * Custom border color for input
   */
  borderColor?: string;

  /**
   * Base input props - placeholder (not label!)
   */
  placeholder?: string;

  /**
   * label for input (top position)
   */
  label?: string;

  /**
   * Validation value for input
   */
  error?: boolean;

  /**
   * Width fit all parent container
   */
  fullWidth?: boolean;

  /**
   * Input round borders
   */
  rounded?: boolean;

  /**
   * Input disabled change style
   */
  disabled?: boolean;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * helper text for input when validation have an error
   */
  helperText?: string;
};

const PasswordInput: React.FC<Props> = ({
  size = 'medium',
  value = '',
  variant = 'contain',
  borderColor,
  label = '',
  error = false,
  placeholder = '',
  rounded = false,
  onChange,
  disabled = false,
  fullWidth,
  helperText = '',

  ...args
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputContainerClassName = cx(
    'input_container',
    `${fullWidth && 'fullwidth'}`,
    `${disabled && 'input_container_disabled'}`,
    `${rounded && variant !== 'outline' && 'rounded'}`,
    `input_container_${variant}`,
    `${error && 'input_container_error'}`,
    `input_container_size_${size}`,
  );

  const labelClassName = cx(
    `label`,
    `${size === 'large' && 'label_large'}`,
    `${size === 'medium' && 'label_medium'}`,
    `${size === 'small' && 'label_small'}`,
    `${error && 'label_error'}`,
  );

  const errorClassName = cx(
    'error_text',
    `${size === 'large' && 'error_text_large'}`,
    `${size === 'medium' && 'error_text_medium'}`,
    `${size === 'small' && 'error_text_small'}`,
  );

  const inputClassName = cx('input', `${fullWidth && 'fullwidth'}`);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleUnFocus = () => {
    setIsFocus(false);
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const inputStyle = {
    borderColor: isFocus && borderColor ? `${borderColor}` : 'rgb(204, 204, 204)',
    outline: isFocus && borderColor ? `${borderColor}` : 'rgb(204, 204, 204)',
  };

  return (
    <div className={styles.container}>
      {label && (value || inputValue) && <span className={labelClassName}>{label}</span>}
      <div style={inputStyle} className={inputContainerClassName}>
        <input
          type={showPassword ? 'text' : 'password'}
          onFocus={handleFocus}
          onBlur={handleUnFocus}
          disabled={disabled}
          value={value ? value : inputValue}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClassName}
          {...args}
        />
        <button className={styles.button} onClick={handleClick} disabled={disabled}>
          {showPassword ? (
            <AiOutlineEyeInvisible size={size === 'small' ? 20 : 25} color={'rgb(175, 175, 175)'} />
          ) : (
            <AiOutlineEye size={size === 'small' ? 20 : 25} color={'rgb(175, 175, 175)'} />
          )}
        </button>
      </div>
      {error && helperText && <span className={errorClassName}>{helperText}</span>}
    </div>
  );
};

export default PasswordInput;
