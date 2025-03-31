import styled, { css } from 'styled-components';

interface MainProps {
  $form?: boolean;
  color: string;
}

interface TextProps {
  color: '#fcfcfd' | '#444141';
}

interface DivProps {
  center?: boolean;
}

export const Page = styled.div`
  background-color: ${({ theme }) => theme.Colors.offWhite};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const Main = styled.main<MainProps>`
  padding: 0;
  background-color: ${({ color }) => color};
  background-position: bottom;
  background-image: linear-gradient(to right top, #1c49a5, #57d9ff);
  min-height: 750px;
  width: 100%;
  gap: 20px;

  @media (min-width: 780px) {
    height: 100dvh;
    width: 500px;
    position: fixed;
  }

  ${({ $form }) =>
    $form &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}
`;

export const TextTitle = styled.h1<TextProps>`
  color: ${({ color }) => color};
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0 20px;
`;

export const MainContainer = styled.main`
  flex: 1;
  width: 90%;
  height: 100dvh;
  padding: 20px 0;
  @media (min-width: 780px) {
    width: calc(100% - 500px);
    margin-left: 500px;
    padding: 20px;
  }
`;

export const ContainerDiv = styled.div`
  background-color: ${({ theme }) => theme.Colors.white};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 10px;
  border-radius: 6px;
`;

export const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 7px;
  width: 100%;

  @media (min-width: 780px) {
    flex-direction: row;
    align-items: end;
  }

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      min-height: 400px;
      align-items: center;
      justify-content: center;

      @media (min-width: 780px) {
        align-items: center;
      }
    `}
`;

export const row = styled.hr`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0);
  border: 0.1px solid ${({ theme }) => theme.Colors.offWhite};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.Colors.white};
  width: 90%;
  margin: 0 auto;
  flex: 1;
  width: 400px;

  @media (min-width: 780px) {
    max-width: 450px;
  }
`;

export const ContainerDivSeparator = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
  gap: 7px;
`;

export const DivForm = styled.div`
  width: 100%;
`;

export const TextNotFound = styled.strong`
  color: ${({ theme }) => theme.Colors.darkGray};
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(372px, 1fr));
  gap: 20px;
`;
