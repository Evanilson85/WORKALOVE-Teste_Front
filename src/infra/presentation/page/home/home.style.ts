import styled, { css } from 'styled-components';

interface MainProps {
  $form?: boolean;
  color: string;
}

interface TextProps {
  color: '#fcfcfd' | '#444141';
}

export const Page = styled.div`
  background-color: #fcfcfd;
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
`;

export const MainContainer = styled.main`
  flex: 1;
  width: 90%;
  margin: 0 auto;
  height: 100dvh;
  margin: 30px auto;

  @media (min-width: 780px) {
    flex-direction: row;
    padding: 20px;
    margin: 0;
  }
`;

export const ContainerDiv = styled.div`
  background-color: #ffffff;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 6px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 7px;

  @media (min-width: 780px) {
    padding: 20px;
    flex-direction: row;
  }
`;

export const row = styled.hr`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0);
  border: 0.1px solid #fcfcfd;
`;

export const Form = styled.form<{ $media?: Record<string, number> }>`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 24px;
  border-radius: 12px;
  background-color: #ffffff;
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
