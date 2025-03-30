import styled, { css } from 'styled-components';

interface Inputs {
  $error?: boolean;
}

const styleDefault = css`
  background-color: #ffffff;
  height: 50px;
  border: none;
  color: #444141;
  border-radius: 6px;
  padding: 0 8px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border: 0.1px solid #e0e0e0;
  &:focus {
    outline: none;
    /* border: none; */
  }

  &::placeholder {
    font-size: 14px;
    color: #cbcaca;
  }
`;

export const InputRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 95%;
  margin: 0 auto;
`;

export const InputText = styled.input<Inputs>`
  ${styleDefault}

  ${({ $error }) =>
    $error &&
    css`
      border: 1px solid #ff0000;
      background-color: #fff5f5;
    `}
`;

export const InputDate = styled.input<Inputs>``;

export const InputSelect = styled.select<Inputs>`
  ${styleDefault}
`;

export const OptionSelect = styled.option<Inputs>`
  ${styleDefault}
  border: none;
`;
