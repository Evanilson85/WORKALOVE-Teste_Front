import { array, InferType, object, string } from 'yup';

export const userSchema = object({
  fullName: string()
    .trim()
    .matches(/^\S+\s+\S+/, 'Informe nome completo')
    .max(255, 'Máximo de 255 caracteres')
    .required('Nome completo é obrigatório'),

  email: string()
    .email('Formato de e-mail inválido')
    .max(255, 'Máximo de 255 caracteres')
    .required('E-mail é obrigatório'),

  date: string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Data inválida.')
    .required('Data de nascimento é obrigatória')
    .test('age', 'Você deve ter pelo menos 14 anos', (value) => {
      if (!value) return false;
      const birthDate = new Date(value);
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 14);
      return birthDate <= minDate;
    }),
});

export const userSchemaTwo = object({
  institution: string().required('Instituição é obrigatório').max(255, 'Máximo de 255 caracteres'),
  course: string().required('Cursos é obrigatório'),
  state: string().required('Estado é obrigatório'),
  city: string().required('Cidade é obrigatório'),
});

export const userSchemaThree = object({
  photo: string().required('Foto é obrigatório'),
  link: array()
    .required('Link é obrigatório')
    .of(
      object({
        type: string().required('Rede social é obrigatório'),
        url: string()
          .required('link é obrigatório')
          .url('Formato de url inválido')
          .max(255, 'Máximo de 255 caracteres'),
      })
    ),
});

export type TypeUser = InferType<typeof userSchema>;
export type TypeUserTwo = InferType<typeof userSchemaTwo>;
export type TypeUserThree = InferType<typeof userSchemaThree>;
