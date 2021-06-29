import React, { useState } from 'react';
import styled from '@emotion/styled';

import { md, lg } from '../../styles';
import { Button } from '../styles/button';
import { Input } from '../styles/input';
import { useInputState } from '../../hooks/useInputState';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${md} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  ${lg} {
    max-width: 50%;
    margin: 0 auto;
  }

  input {
    ${md} {
      flex-basis: 70%;
    }
  }

  button {
    ${md} {
      flex-basis: calc(25% - 4px);
    }
  }

  span {
    flex-basis: 100%;
    color: ${(props) => props.theme.colors.chestnut};
    font-size: 12px;
  }
`;

export const SearchForm = ({ searchRecipes }) => {
  const [showError, setShowError] = useState(false);
  const [value, handleChange, reset] = useInputState('');

  const onSubmitHandler = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLElement>
  ) => {
    event.preventDefault();
    if (value.length < 3) {
      setShowError(true);
    } else {
      setShowError(false);
      searchRecipes(value);
      reset();
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <InputWrapper>
        <Input placeholder="ex. pasta" value={value} onChange={handleChange} />
        <Button>Search</Button>
        {showError ? <span>Type at least 3 characters...</span> : null}
      </InputWrapper>
    </form>
  );
};
