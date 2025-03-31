import { useFormStore } from '../../../../../state/zustand/form.state';
import Trash from '../../../../assets/trash-icon.svg';
import * as S from './card.style';

interface CardTextProps {
  title: string;
  email: string;
  date: string;
  cityAndState: string;
  institution: string;
  course: string;
  state: string;
  index: number;
  linkType: { type: string; url: string }[];
}

export const CardText = ({ ...props }: CardTextProps) => {
  const { deleteStudent } = useFormStore();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  };

  return (
    <S.CardTextContainer>
      <S.CardFlex>
        <S.CardTextTitle title={props.title}>{props.title}</S.CardTextTitle>
        <S.ButtonDelete onClick={() => deleteStudent(props.index)}>
          <S.ImgButton src={Trash} alt="trash" />
        </S.ButtonDelete>
      </S.CardFlex>
      <S.CardTextRow />
      <S.CardTextDiv>
        <S.CardTextDescription>
          <S.CardTextLabel>Email:</S.CardTextLabel> {props.email}
        </S.CardTextDescription>
        <S.Flex>
          <S.CardTextDescription>
            <S.CardTextLabel>Nasc:</S.CardTextLabel> {formatDate(props.date)}
          </S.CardTextDescription>
          <S.CardTextDescription>-</S.CardTextDescription>
          <S.CardTextDescription>
            {' '}
            <S.CardTextLabel>Cidade:</S.CardTextLabel> {props.cityAndState}
          </S.CardTextDescription>
        </S.Flex>

        <S.CardTextDescription>
          {' '}
          <S.CardTextLabel>Instituição:</S.CardTextLabel> {props.institution}
        </S.CardTextDescription>
        <S.CardTextDescription>
          <S.CardTextLabel>Curso:</S.CardTextLabel> {props.course}
        </S.CardTextDescription>
        {props.linkType.map((item, index) => (
          <S.Flex key={index}>
            <S.CardTextDescription>
              <S.CardTextLabel>{item.type}:</S.CardTextLabel>
            </S.CardTextDescription>
            <S.CardTextDescription>{item.url}</S.CardTextDescription>
          </S.Flex>
        ))}
      </S.CardTextDiv>
    </S.CardTextContainer>
  );
};
