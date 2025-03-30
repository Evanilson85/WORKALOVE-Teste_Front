import React from 'react';
import * as S from './input.style';

interface InputRootProps {
  children: React.ReactNode;
}

export const InputRoot = ({ children }: InputRootProps) => {
  return <S.InputRoot>{children}</S.InputRoot>;
};
