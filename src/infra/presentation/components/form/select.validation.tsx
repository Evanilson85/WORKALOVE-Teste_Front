import { ErrorMessage, FieldProps } from 'formik';
import { Input } from '../input';
import { Label } from '../label/label';
import * as S from './input.validation.style';

interface SelectValidationProps extends FieldProps {
  label: string;
  data: [
    {
      id: string;
      name: string;
    },
  ];
}
export const SelectValidation = ({
  label,
  data,
  field,
  form: { touched, errors },
  ...props
}: SelectValidationProps) => (
  <S.InputValidationDiv>
    <Input.root>
      <Label text={label} htmlFor={field.name} />
      <Input.select
        {...field}
        data={data}
        error={touched[field.name] && errors[field.name] ? true : false}
        {...props}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <S.InputValidationText>{msg}</S.InputValidationText>}
      </ErrorMessage>
    </Input.root>
  </S.InputValidationDiv>
);
