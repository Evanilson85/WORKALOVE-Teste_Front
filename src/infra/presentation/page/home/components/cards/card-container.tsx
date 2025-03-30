import React from 'react';
import * as S from './card.style';

interface CardContainerProps {
  children: React.ReactNode;
}

export const CardContainer = ({ children }: CardContainerProps) => {
  return <S.CardContainer>{children}</S.CardContainer>;
};
