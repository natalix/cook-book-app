import styled from '@emotion/styled'

export const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.black};
  padding: 0 10px;

  &::placeholder {
    font-style: italic;
    
  }
`