import { ErrorMessage, FieldProps, getIn } from 'formik';
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
}: InputValidationProps) => {
  const error = getIn(errors, field.name);
  const isTouched = getIn(touched, field.name);
  return (
    <S.InputValidationDiv>
      <Input.root>
        <Label text={label} htmlFor={field.name} />
        <Input.text
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
          $error={isTouched && error ? true : false}
        />
        <ErrorMessage name={field.name}>
          {(msg) => <S.InputValidationText>{msg}</S.InputValidationText>}
        </ErrorMessage>
      </Input.root>
    </S.InputValidationDiv>
  );
};
