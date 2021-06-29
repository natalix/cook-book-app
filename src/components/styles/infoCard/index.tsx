import styled from '@emotion/styled';

export const InfoCard = styled.div`
  color: ${(props) => props.theme.colors.chestnutLight};
  background-color: ${(props) => props.theme.colors.concrete};
  font-size: 24px;
  width: 150px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
  }

  span {
    font-size: 30px;
  }
`;
