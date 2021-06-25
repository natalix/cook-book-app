import React from "react";
import styled from '@emotion/styled';

import { md, lg } from '../../styles'
import { Button } from '../styles/button'
import { Input } from '../styles/input'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${md} {
    flex-direction: row;
    align-items: center;
  }

  ${lg} {
    max-width: 50%;
    margin: 0 auto;
  }

  input {
    ${md} {
      flex-basis: 75%;
    }
  }

  button {
    ${md} {
      flex-basis: 25%;
    }
  }
`

function SearchForm() {

  return (
    <form>
      <InputWrapper>
        <Input placeholder="ex. pasta"/>
        <Button>Search</Button>
      </InputWrapper>
    </form>
  );
};

export { SearchForm };
