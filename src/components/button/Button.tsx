import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.css';
interface Props {
  /**
   * Button text
   */
  title?: string;
  /**
   * Some base variant for button (colors)
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger';

  /**
   * Loader spin inside button
   */
  loader?: boolean;

  /**
   * size of button (padding)
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Round borders
   */
  rounded?: boolean;

  /**
   * type of button
   */
  type?: 'text' | 'outline' | 'fit';

  /**
   * Disable button component
   */
  disabled?: boolean;

  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Icon inside a button. Accepts any icon from react-icon. Need instal package "react-icons"!
   */
  startIcon?: React.ReactNode;
  /**
   * Icon inside a button. Accepts any icon from react-icon. Need instal package "react-icons"!
   */
  endIcon?: React.ReactNode;
  /**
   * What background color to use in button
   */
  backgroundColor?: string;

  /**
   * Text transform form
   */
  textTransform?: 'uppercase' | 'lowercase' | 'none';
  /**
   * Write a color for button text
   */
  color?: string;
  children?: ReactNode;
  /**
   * fullWidth button will be fit all width of container
   */
  fullWidth?: boolean;
}

const cx = classNames.bind(styles);

const Button: React.FC<Props> = ({
  variant = 'primary',
  type = 'fit',
  startIcon,
  endIcon,
  size = 'medium',
  loader = false,
  textTransform = 'uppercase',
  fullWidth = false,
  backgroundColor,
  rounded = false,
  color,
  disabled = false,
  title = 'button',
  ...props
}) => {
  const buttonClassName = cx(
    'button',
    `button_${type}`,
    `button_${type}_${variant}`,
    `${size}`,
    `${loader && 'disabled'}`,
    `${rounded && 'rounded'}`,
    `${fullWidth && 'fullwidth'}`,
    `${disabled && 'disabled'}`,
  );

  const spinClassName = cx('spin');

  const rippleClassName = cx('hove', 'ripple');

  const loaderClassname = cx({
    loader: loader ? true : false,
  });

  return (
    <button
      style={{ backgroundColor, color, textTransform }}
      className={buttonClassName}
      {...props}
    >
      {startIcon && !loader && startIcon}
      <span className={loaderClassname}>{title}</span>
      {endIcon && !loader && endIcon}
      {loader && <div className={spinClassName} />}
      {(!loader && !disabled) && <span className={rippleClassName} />}
    </button>
  );
};

export default Button;
