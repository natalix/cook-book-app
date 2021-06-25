import React from 'react';
import styled from '@emotion/styled';

import { md } from '../../styles';
import { Container } from '../styles/container'

const RecipeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 15px 0;

  ${md} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 15px 10px;
  }
`

const HeaderWrapper = styled.div`
  ${md} {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
`

const AdditionalWrapper = styled.div`
  ${md} {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
`

const ImageWrapper = styled.div`
  ${md} {
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
  }
`

const IngredientsWrapper = styled.div`
  ${md} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }
`

const DescriptionWrapper = styled.div`
  ${md} {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }
`

function Recipe() {
  return (
    <Container>
      <RecipeWrapper>
        <HeaderWrapper><h1>Header</h1></HeaderWrapper>
        <AdditionalWrapper><div>Additional info</div></AdditionalWrapper>
        <ImageWrapper><div>Image</div></ImageWrapper>
        <IngredientsWrapper><div>Ingredients</div></IngredientsWrapper>
        <DescriptionWrapper><div>Description</div></DescriptionWrapper>
      </RecipeWrapper>
    </Container>
  );
}

export { Recipe };
