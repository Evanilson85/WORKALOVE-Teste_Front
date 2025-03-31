import { useEffect, useRef, useState } from 'react';
import { CityData } from '../../../../domain/repositories/city.repository';
import { Course } from '../../../../domain/repositories/course.repository';
import { StateData } from '../../../../domain/repositories/state.repository';
import { GetCityUseCase } from '../../../../domain/use-cases/get-city.usecases';
import { GetCoursesUseCase } from '../../../../domain/use-cases/get-courses.usecases';
import { GetStateUseCase } from '../../../../domain/use-cases/get-state.usecases';
import { useFormStore } from '../../../state/zustand/form.state';
import { userSchema, userSchemaThree, userSchemaTwo } from './schema';

type TypeRepository = {
  coursesUseCase: GetCoursesUseCase;
  stateUseCase: GetStateUseCase;
  cityUseCase: GetCityUseCase;
};

export const useHomeModel = ({ coursesUseCase, stateUseCase, cityUseCase }: TypeRepository) => {
  const { setStep, setData } = useFormStore();

  const stepOne = useRef<HTMLDivElement>(null);
  const stepTwo = useRef<HTMLDivElement>(null);
  const stepThree = useRef<HTMLDivElement>(null);

  const [course, setCourse] = useState<Course[]>([]);
  const [states, setstates] = useState<StateData[]>([]);
  const [city, setCity] = useState<CityData[]>([]);

  useEffect(() => {
    requestCourses();
  }, []);

  const requestCourses = async () => {
    const response_courses = await coursesUseCase.execute();
    const response_states = await stateUseCase.execute();

    setCourse(response_courses);
    setstates(response_states);

    return {
      response_courses,
      response_states,
    };
  };

  const requestCity = async (idState: string) => {
    const response_states = await cityUseCase.execute(idState);

    setCity(response_states);

    return {
      response_states,
    };
  };

  const goToStep = (step: number) => {
    if (step === 1) stepOne.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (step === 2) stepTwo.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (step === 3) stepThree.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const initialValuesStepOne = { date: '', email: '', fullName: '' };

  const initialValuesStepTwo = { institution: '', course: '', state: '', city: '' };

  const initialValuesStepThree = { photo: '', link: [{ url: '' }] };

  return {
    stepOne,
    stepTwo,
    stepThree,
    goToStep,
    setStep,
    setData,

    course,
    states,
    requestCity,
    city,

    formOne: {
      initialValuesStepOne,
      userSchema,
    },

    formTwo: {
      initialValuesStepTwo,
      userSchemaTwo,
    },

    formThree: {
      initialValuesStepThree,
      userSchemaThree,
    },
  };
};
