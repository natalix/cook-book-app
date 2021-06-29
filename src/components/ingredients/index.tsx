import React from 'react';
import styled from '@emotion/styled';

const IngredientsWrapper = styled.ol`
  margin: 0;
  padding: 0;
  line-height: 1.5;

  li {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }
`;

function Ingredients(props) {
  console.log(props);
  const { ingredients } = props;
  return (
    <IngredientsWrapper>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>
          <span>{ingredient.amount}</span>
          <span>{ingredient.unit}</span>
          <span>{ingredient.name}</span>
        </li>
      ))}
    </IngredientsWrapper>
  );
}

export { Ingredients };
