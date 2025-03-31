import { SelectHTMLAttributes } from 'react';
import * as S from './input.style';

type Option = { id: number | string; name: string };

interface InputSelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  data: T[];
  error: boolean;
}

export const InputSelect = <T extends Option>({ data, error, ...props }: InputSelectProps<T>) => {
  return (
    <S.InputSelect {...props} $error={error}>
      <S.OptionSelect value="" disabled>
        Selecione uma opção
      </S.OptionSelect>
      {data.length > 0 &&
        data.map((item) => (
          <S.OptionSelect key={item.id} value={item.id}>
            {item.name}
          </S.OptionSelect>
        ))}
    </S.InputSelect>
  );
};
