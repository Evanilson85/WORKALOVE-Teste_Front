import { useRef } from 'react';

export const useHomeModel = () => {
  const stepOne = useRef<HTMLDivElement>(null);
  const stepTwo = useRef<HTMLDivElement>(null);
  const stepThree = useRef<HTMLDivElement>(null);

  const goToStep = (step: number) => {
    if (step === 1) stepOne.current?.scrollIntoView({ behavior: 'smooth' });
    if (step === 2) stepTwo.current?.scrollIntoView({ behavior: 'smooth' });
    if (step === 3) stepThree.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    stepOne,
    stepTwo,
    stepThree,
    goToStep,
  };
};
