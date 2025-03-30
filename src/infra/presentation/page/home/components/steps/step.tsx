import { ReactNode, Ref } from 'react';
import * as S from './step.styles';

interface StepProps {
  ref: Ref<HTMLDivElement>;
  children: ReactNode;
}

export const Step = ({ ref, children }: StepProps) => {
  return <S.Step ref={ref}>{children}</S.Step>;
};
