import { InputHTMLAttributes } from 'react';
import * as S from './input.style';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputText = ({ ...props }: InputTextProps) => {
  return <S.InputText {...props} />;
};
