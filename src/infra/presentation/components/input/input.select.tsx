import { SelectHTMLAttributes } from 'react';
import * as S from './input.style';

interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const InputSelect = ({ ...props }: InputSelectProps) => {
  return (
    <S.InputSelect {...props}>
      <S.OptionSelect value="">selecione um curso</S.OptionSelect>
      <S.OptionSelect value="1">Opção 1</S.OptionSelect>
      <S.OptionSelect value="2">Opção 2</S.OptionSelect>
      <S.OptionSelect value="3">Opção 3</S.OptionSelect>
      <S.OptionSelect value="4">Opção 4</S.OptionSelect>
      <S.OptionSelect value="5">Opção 5</S.OptionSelect>
    </S.InputSelect>
  );
};
