import { ErrorMessage, FieldProps } from 'formik';
import { Input } from '../input';
import { Label } from '../label/label';
import * as S from './input.validation.style';

interface InputValidationProps extends FieldProps {
  label: string;
  type: string;
  placeholder: string;
}

export const InputValidation = ({
  label,
  placeholder,
  type,
  field,
  form: { touched, errors },
  ...props
}: InputValidationProps) => (
  <S.InputValidationDiv>
    <Input.root>
      <Label text={label} htmlFor={field.name} />
      <Input.text
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
        $error={touched[field.name] && errors[field.name] ? true : false}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <S.InputValidationText>{msg}</S.InputValidationText>}
      </ErrorMessage>
    </Input.root>
  </S.InputValidationDiv>
);
