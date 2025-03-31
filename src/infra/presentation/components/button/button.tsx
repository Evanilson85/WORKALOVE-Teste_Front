import { ButtonHTMLAttributes } from 'react';
import * as S from './button.style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullSpace?: boolean;
}

export const Button = ({ text, fullSpace = false, ...props }: ButtonProps) => {
  return (
    <S.Button fullSpace={fullSpace} type="button" {...props}>
      {text}
    </S.Button>
  );
};
