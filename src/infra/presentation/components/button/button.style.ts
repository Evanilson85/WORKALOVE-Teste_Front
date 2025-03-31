import styled, { css } from 'styled-components';

interface ButtonProps {
  fullSpace: boolean;
}

export const Button = styled.button<ButtonProps>`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.Colors.deepBlue};
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  height: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ fullSpace }) =>
    fullSpace &&
    css`
      flex: 1;
    `}

  :hover {
    background: ${({ theme }) => theme.Colors.skyBlue};
  }
`;
