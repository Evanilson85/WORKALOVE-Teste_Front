import { ImgHTMLAttributes } from 'react';
import * as S from './card.style';

interface CardPhotoProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export const CardPhoto = ({ ...props }: CardPhotoProps) => {
  return (
    <S.CardPhotoContainer>
      <S.CardPhotoImage {...props} alt={props.alt} />
    </S.CardPhotoContainer>
  );
};
