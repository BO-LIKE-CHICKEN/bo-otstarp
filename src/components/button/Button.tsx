import React from 'react';
// import * as S from './Button.style';

type ButtonMode = 'default' | 'primary' | 'secondary' | 'link' | 'danger';
type ButtonVariant = 'text' | 'angular' | 'rounded' | 'contained';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  mode?: ButtonMode;
  variant?: ButtonVariant;
  bordered?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'rounded',
  mode = 'default',
  bordered = false,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
