import { ImgHTMLAttributes, InputHTMLAttributes } from 'react';
import * as S from './input.style';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  preview: ImgHTMLAttributes<HTMLImageElement>;
  label: string;
}

export const InputFile = ({ error, label, preview, ...props }: InputFileProps) => {
  return (
    <S.InputFileContainer $error={error}>
      <S.InputFilePreview {...preview} />
      <S.InputFile type="file" id="file-upload" {...props} />
      <S.InputFileLabel htmlFor="file-upload">
        {label ? label : 'Selecione uma foto'}
      </S.InputFileLabel>
    </S.InputFileContainer>
  );
};
