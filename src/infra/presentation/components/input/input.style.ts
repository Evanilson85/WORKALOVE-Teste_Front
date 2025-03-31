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
  width: 100%;
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
  width: 100%;
  box-sizing: border-box;

  ${({ $error }) =>
    $error &&
    css`
      border: 1px solid #ff0000;
      background-color: #fff5f5;
    `}
`;

export const InputFileContainer = styled.div<Inputs>`
  ${styleDefault}
  display: flex;
  flex-direction: row;
  cursor: pointer;
  height: 60px;
  align-items: center;
  gap: 10px;

  ${({ $error }) =>
    $error &&
    css`
      border: 1px solid #ff0000;
      background-color: #fff5f5;
    `}
`;

export const InputFile = styled.input`
  display: none;
`;

export const InputFileLabel = styled.label`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InputFilePreview = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 6px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;
`;

export const OptionSelect = styled.option<Inputs>`
  ${styleDefault}
  overflow-y: auto;
  width: 300px;
  border: none;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
