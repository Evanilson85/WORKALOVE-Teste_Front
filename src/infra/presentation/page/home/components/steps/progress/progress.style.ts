import styled, { keyframes } from 'styled-components';

interface ProgressProps {
  step: number;
}

export const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  position: relative;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  max-width: 300px;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const ProgressFill = styled.div<ProgressProps>`
  height: 100%;
  width: ${({ step }) => (step === 1 ? '0%' : step === 2 ? '50%' : '100%')};
  background: #1c49a5;
  transition: width 0.3s ease-in-out;
  animation: ${grow} 0.5s ease-in-out;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  position: absolute;
  top: -20px;
`;

export const Step = styled.div<{ active: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 16px;
  background: ${({ active }) => (active ? '#1c49a5' : '#e0e0e0')};
  color: ${({ active }) => (active ? '#fff' : '#444')};
  transition: background 0.3s ease-in-out;
`;
