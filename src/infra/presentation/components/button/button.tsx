import { ButtonHTMLAttributes } from 'react';
import * as S from './button.style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <S.Button type="button" {...props}>
      {text}
    </S.Button>
  );
};
