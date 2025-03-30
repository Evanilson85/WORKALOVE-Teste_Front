import styled from 'styled-components';

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: space-between;
  background: #fafafa;
  border-radius: 12px;
  padding: 30px 0;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border: 0.1px solid #e0e0e0;
  background-color: #fff;

  @media (min-width: 780px) {
    max-width: 450px;
    height: 606px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
`;
