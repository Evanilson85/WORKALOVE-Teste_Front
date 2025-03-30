import { useRef } from 'react';
import { userSchema } from './schema';

export const useHomeModel = () => {
  const stepOne = useRef<HTMLDivElement>(null);
  const stepTwo = useRef<HTMLDivElement>(null);
  const stepThree = useRef<HTMLDivElement>(null);

  const goToStep = (step: number) => {
    if (step === 1) stepOne.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (step === 2) stepTwo.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (step === 3) stepThree.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const initialValuesStepOne = { date: '', email: '', fullName: '' };

  // const validateSubmitStepOne = (props: TypeUser) => {};

  return {
    stepOne,
    stepTwo,
    stepThree,
    goToStep,

    formOne: {
      initialValuesStepOne,
      userSchema,
    },
  };
};
