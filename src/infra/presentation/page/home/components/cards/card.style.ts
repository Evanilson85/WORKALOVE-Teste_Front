import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  border-radius: 6px;
  gap: 5px;
  padding: 10px 10px;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border: 0.1px solid #e0e0e0;
  /* flex: 1 1 calc(300px - 16px); */

  @media (min-width: 780px) {
    min-height: 160px;
    max-width: 500px;
  }
`;

export const CardTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CardTextRow = styled.hr`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border: 0.1px solid #e0e0e0;
  margin-bottom: 4px;
`;

export const CardTextTitle = styled.h2`
  font-weight: 700;
  font-size: 13px;
  color: rgb(36, 35, 35);
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
`;

export const CardTextLabel = styled.strong`
  font-weight: 700;
  font-size: 12px;
  color: rgb(36, 35, 35);
  text-transform: capitalize;
`;

export const CardTextDescription = styled.h3`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.Colors.darkGray};
`;

export const CardPhotoContainer = styled.div``;

export const CardPhotoImage = styled.img`
  width: 100%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const CardFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

export const ButtonDelete = styled.button`
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border: 0.1px solidrgb(233, 230, 230);
  cursor: pointer;
  background-color: #ee6969;
  width: 50px;
  height: 35px;
  border-radius: 6px;
  margin: 0px 0 10px;
`;

export const ImgButton = styled.img``;
