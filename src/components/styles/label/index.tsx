import styled from '@emotion/styled';

export const Label = styled.span`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.chestnutLight};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 100;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 15px 10px;
  border-radius: 20px;
  width: auto;
  padding: 5px 15px;
`;
