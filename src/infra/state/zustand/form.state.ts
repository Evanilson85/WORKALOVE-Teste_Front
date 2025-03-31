import { create } from 'zustand';

interface FormState {
  step: number;
  data: {
    fullName: string;
    email: string;
    date: string;
    institution: string;
    course: string;
    state: string;
    city: string;
    Photo: string;
    link: string;
  };
  setStep: (step: number) => void;
  setData: (newData: Partial<FormState['data']>) => void;
  reset: () => void;
}

export const useFormStore = create<FormState>()((set) => {
  const savedData = JSON.parse(localStorage.getItem('form') || '{}');

  return {
    step: 1,
    data: savedData || {
      fullName: '',
      email: '',
      date: '',
      course: '',
      cityAndState: '',
      institution: '',
      link: '',
      Photo: '',
    },
    setStep: (step) => set({ step }),
    setData: (newData) =>
      set((state) => {
        const updatedData = { ...state.data, ...newData };
        localStorage.setItem('form', JSON.stringify(updatedData));
        return { data: updatedData };
      }),
    reset: () => {
      //   localStorage.removeItem('form');
      set({
        step: 1,
        data: {
          fullName: '',
          email: '',
          date: '',
          course: '',
          state: '',
          city: '',
          institution: '',
          link: '',
          Photo: '',
        },
      });
    },
  };
});
