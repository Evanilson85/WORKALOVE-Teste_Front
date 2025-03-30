import { InferType, object, string } from 'yup';

const minAge = 14;
const minBirthDate = new Date();
minBirthDate.setFullYear(minBirthDate.getFullYear() - minAge);

export const userSchema = object({
  fullName: string()
    .trim()
    .matches(/^\S+\s+\S+/, 'Informe nome e sobrenome')
    .max(255, 'Máximo de 255 caracteres')
    .required('Nome completo é obrigatório'),

  email: string()
    .email('Formato de e-mail inválido')
    .max(255, 'Máximo de 255 caracteres')
    .required('E-mail é obrigatório'),

  date: string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Data inválida. Use o formato YYYY-MM-DD')
    .required('Data de nascimento é obrigatória')
    .test('age', 'Você deve ter pelo menos 14 anos', (value) => {
      if (!value) return false;
      const birthDate = new Date(value);
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 14);
      return birthDate <= minDate;
    }),
});

export type TypeUser = InferType<typeof userSchema>;
