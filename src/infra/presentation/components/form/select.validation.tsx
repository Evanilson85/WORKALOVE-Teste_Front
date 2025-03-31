import { ErrorMessage, FieldProps, getIn } from 'formik';
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
  indexDinamic?: number;
}
export const SelectValidation = ({
  label,
  data,
  field,
  form: { touched, errors },
  ...props
}: SelectValidationProps) => {
  const error = getIn(errors, field.name);
  const isTouched = getIn(touched, field.name);
  return (
    <S.InputValidationDiv>
      <Input.root>
        <Label text={label} htmlFor={field.name} />
        <Input.select error={isTouched && error ? true : false} {...field} data={data} {...props} />
        <ErrorMessage name={field.name}>
          {(msg) => <S.InputValidationText>{msg}</S.InputValidationText>}
        </ErrorMessage>
      </Input.root>
    </S.InputValidationDiv>
  );
};
