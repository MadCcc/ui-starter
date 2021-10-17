import * as React from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return <button type="button">{children}</button>;
};

export default Button;
