import * as S from './progress.style';

interface ProgressProps {
  step: number;
}

export const ProgressBar = ({ step }: ProgressProps) => {
  return (
    <S.ProgressContainer>
      <S.ProgressTrack>
        <S.ProgressFill step={step} />
      </S.ProgressTrack>
      <S.Steps>
        {[1, 2, 3].map((stepNum) => (
          <S.Step key={stepNum} active={stepNum <= step}>
            {stepNum}
          </S.Step>
        ))}
      </S.Steps>
    </S.ProgressContainer>
  );
};
