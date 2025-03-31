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
    photo: string;
    link: { type: string; url: string }[];
  };
  allDataStudent: Array<FormState['data']>;
  setStep: (step: number) => void;
  setData: (newData: Partial<FormState['data']>) => void;
  saveDataLocal: () => void;
  reset: () => void;
  loadSavedData: () => void;
}

export const useFormStore = create<FormState>()((set) => {
  return {
    step: 1,
    data: {
      fullName: '',
      email: '',
      date: '',
      course: '',
      state: '',
      city: '',
      institution: '',
      link: [
        {
          type: '',
          url: '',
        },
      ],
      photo: '',
    },
    allDataStudent: [],
    setStep: (step) => set({ step }),
    setData: (newData) =>
      set((state) => {
        const updatedData = { ...state.data, ...newData };
        return { data: updatedData };
      }),
    saveDataLocal: () => {
      const state = useFormStore.getState();
      const existingData = JSON.parse(localStorage.getItem('form') || '[]');
      const updatedArray = [...existingData, state.data];
      localStorage.setItem('form', JSON.stringify(updatedArray));
      state.loadSavedData();
    },
    loadSavedData: () => {
      const savedData = JSON.parse(localStorage.getItem('form') || '[]');
      set({ allDataStudent: savedData.reverse() });
    },
    reset: () => {
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
          link: [
            {
              type: '',
              url: '',
            },
          ],
          photo: '',
        },
      });
    },
  };
});
