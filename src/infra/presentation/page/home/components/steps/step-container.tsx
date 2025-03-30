import React from 'react';
import { Steps } from '.';
import * as S from './step.styles';

interface StepContainerProps {
  children: React.ReactNode;
}

export const StepContainer = ({ children }: StepContainerProps) => {
  return (
    <S.StepContainer>
      <Steps.process step={1} />
      <S.Div>{children}</S.Div>
    </S.StepContainer>
  );
};
