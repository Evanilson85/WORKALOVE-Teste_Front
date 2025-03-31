import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  border-radius: 6px;
  gap: 5px;
  padding: 10px 10px;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border: 0.1px solid #e0e0e0;
  flex: 1 1 calc(33.333% - 16px);
  max-width: 400px;
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
`;

export const CardTextTitle = styled.h2`
  font-weight: 700;
  font-size: 13px;
  color: rgb(36, 35, 35);
  text-transform: capitalize;
`;

export const CardTextDescription = styled.h3`
  font-weight: 400;
  font-size: 12px;
  color: #444141;
`;

export const CardPhotoContainer = styled.div``;

export const CardPhotoImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 6px;
`;
