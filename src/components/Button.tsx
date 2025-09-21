import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...rest }) => {
  return (
    <button
      data-variant={variant}
      className={clsx('btn', `btn--${variant}`, className)}
      {...rest}
    />
  );
};
