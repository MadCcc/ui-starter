import * as React from 'react';
import './style';

export type ButtonProps = {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <button type="button" className="ui-starter-button">
      {children}
    </button>
  );
};

export default Button;
