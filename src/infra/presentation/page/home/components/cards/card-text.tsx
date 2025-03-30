import * as S from './card.style';

interface CardTextProps {
  title: string;
  email: string;
  date: string;
  city: string;
}

export const CardText = ({ ...props }: CardTextProps) => {
  return (
    <S.CardTextContainer>
      <S.CardTextDiv>
        <S.CardTextTitle>{props.title}</S.CardTextTitle>
      </S.CardTextDiv>
      <S.CardTextRow />
      <S.CardTextDiv>
        <S.CardTextDescription>{props.email}</S.CardTextDescription>
        <S.CardTextDescription>{props.date}</S.CardTextDescription>
        <S.CardTextDescription>{props.city}</S.CardTextDescription>
      </S.CardTextDiv>
    </S.CardTextContainer>
  );
};
