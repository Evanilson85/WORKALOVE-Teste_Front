import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

interface MainProps {
  form?: boolean;
  color: string;
}

export const Page = styled.div`
  background-color: #fcfcfd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* background-image: linear-gradient(to right top, rgba(219, 214, 214, 0.98), #fafafa); */
  background-position: bottom;
  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const Main = styled.main<MainProps>`
  padding: 0;
  background-color: ${({ color }) => color};
  ${({ form }) =>
    form &&
    css`
      height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
    `}
`;

export const MainContainer = styled.main`
  padding: 20px;
  flex: 1;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

export const ContainerDiv = styled.div`
  background-color: #ffffff;
  flex: 1;
  height: 80%;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border: 0.1px solid #e0e0e0;
  border-radius: 6px;
`;

export const Div = styled.div`
  padding: 20px;
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

  /* ${({ $media }) =>
    $media &&
    breakpoints
      .filter(({ label }) => $media[label] !== undefined)
      .map(
        ({ label, media }) => css`
          @media (max-width: ${media}px) {
            width: ${$media[label]}px;
          }
        `
      )} */
`;
