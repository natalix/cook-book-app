import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.chestnut};
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.chestnut};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  text-transform: uppercase;
  margin: 4px 2px;
  min-height: 40px;
  opacity: 0.9;
  transition: ${(props) => props.theme.transitions};

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.6;
  }
`;
