import { ErrorMessage, FieldProps } from 'formik';

import { ChangeEvent, useState } from 'react';
import { Input } from '../input';
import { Label } from '../label/label';
import * as S from './input.validation.style';

interface InputFileValidationProps extends FieldProps {
  label: string;
}

export const InputFileValidation = ({
  label,
  field,
  form: { touched, errors, setFieldValue },
  ...props
}: InputFileValidationProps) => {
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [previewName, setPreviewName] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileDataUrl = reader.result;
        const fileName = file.name;
        setPreview(reader.result as string);

        if (fileDataUrl) {
          setPreviewName(fileName);
          setFieldValue(field.name, fileDataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.InputValidationDiv>
      <Input.root>
        <Label text={label} htmlFor={field.name} />
        <Input.file
          accept="image/*"
          {...field}
          {...props}
          value={undefined}
          error={touched[field.name] && errors[field.name] ? true : false}
          onChange={handleFileChange}
          preview={{
            src: preview,
            alt: previewName,
          }}
          label={previewName}
        />
        <ErrorMessage name={field.name}>
          {(msg) => <S.InputValidationText>{msg}</S.InputValidationText>}
        </ErrorMessage>
      </Input.root>
    </S.InputValidationDiv>
  );
};
