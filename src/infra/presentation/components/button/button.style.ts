import styled, { css } from 'styled-components';

interface ButtonProps {
  fullSpace: boolean;
}

export const Button = styled.button<ButtonProps>`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #00bcff;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  height: 50px;
  cursor: pointer;

  ${({ fullSpace }) =>
    fullSpace &&
    css`
      flex: 1;
    `}

  :hover {
    background: rgba(0, 187, 255, 0.75);
  }
`;
