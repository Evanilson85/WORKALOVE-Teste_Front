import { LabelHTMLAttributes } from 'react';
import * as S from './label.style';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label = ({ text, ...props }: LabelProps) => {
  return <S.Label {...props}>{text}</S.Label>;
};
