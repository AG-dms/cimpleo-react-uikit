import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './textInput.module.css';

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
   * Icon inside input. Accepts any icon from react-icon. Need instal package "react-icons"!
   */
  icon?: React.ReactNode;

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

const TextInput: React.FC<Props> = ({
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
  helperText = '',
  fullWidth,
  icon,
  ...args
}) => {
  const [isFocus, setIsFocus] = useState(false);

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

  const inputStyle = {
    borderColor: isFocus && borderColor ? `${borderColor}` : 'rgb(204, 204, 204)',
    outline: isFocus && borderColor ? `${borderColor}` : 'rgb(204, 204, 204)',
  };

  return (
    <div className={styles.container}>
      {label && value && <span className={[labelClassName].join(' ')}>{label}</span>}
      <div style={inputStyle} className={inputContainerClassName}>
        <input
          onFocus={handleFocus}
          onBlur={handleUnFocus}
          defaultValue=""
          type={'text'}
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClassName}
          {...args}
        />
        {icon && icon}
      </div>
      {error && helperText && <span className={errorClassName}>{helperText}</span>}
    </div>
  );
};

export default TextInput;
