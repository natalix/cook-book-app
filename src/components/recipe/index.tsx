import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { md } from '../../styles';
import { Container } from '../styles/container';
import { getARecipe } from '../../api/api';
import { RecipeType } from '../../types';
import { InfoCard } from '../styles/infoCard';
import { Label } from '../styles/label';
import { Ingredients } from '../ingredients';

const RecipeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 15px 0;

  ${md} {
    grid-template-rows: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 15px 10px;
  }
`;

const HeaderWrapper = styled.div`
  h1 {
    padding: 10px 5px;
    background-color: ${(props) => props.theme.colors.chestnutLight};
    text-align: center;
    margin-top: 0;
    color: ${(props) => props.theme.colors.white};
    font-weight: 100;
  }

  ${md} {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }
`;

const ErrorWrapper = styled.div`
  padding: 10px 5px 30px;
  background-color: ${(props) => props.theme.colors.chestnutLight};
  text-align: center;
  margin-top: 0;
  color: ${(props) => props.theme.colors.white};

  h1 {
    font-weight: 100;
  }

  a,
  a:visited {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  ${md} {
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
  }
`;

const AdditionalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const IngredientsWrapper = styled.div`
  ${md} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }
`;

const DescriptionWrapper = styled.p`
  text-align: justify;
  line-height: 1.5;

  ${md} {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }
`;

export const Recipe = (props) => {
  // eslint-disable-next-line
  const recipeId = props.match.params.recipeId;

  const [recipe, setRecipe] = useState<RecipeType>();
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getARecipe(recipeId)
      .then((data) => {
        setRecipe(data);
      })
      .catch((err) => {
        setIsError(true);
        // eslint-disable-next-line
        console.error(err);
      });
  }, [recipeId]);

  return (
    <Container>
      {recipe ? (
        <RecipeWrapper>
          <HeaderWrapper>
            <h1>{recipe?.title}</h1>
            <AdditionalWrapper>
              <InfoCard>
                <p>servings</p>
                <span>{recipe?.servings}</span>
              </InfoCard>
              <InfoCard>
                <p>prep</p>
                <span>{recipe?.readyInMinutes}</span>
              </InfoCard>
            </AdditionalWrapper>
            {recipe?.dairyFree && <Label>Dairy free</Label>}
            {recipe?.glutenFree && <Label>Gluten free</Label>}
            {recipe?.vegan && <Label>Vegan</Label>}
            {recipe?.vegetarian && <Label>Vegetarian</Label>}
          </HeaderWrapper>
          <ImageWrapper>
            <img src={recipe?.image} alt={recipe?.title} />
          </ImageWrapper>
          <IngredientsWrapper>
            <Ingredients ingredients={recipe?.extendedIngredients} />
          </IngredientsWrapper>
          <DescriptionWrapper
            dangerouslySetInnerHTML={{ __html: recipe?.instructions }}
          />
        </RecipeWrapper>
      ) : null}
      {isError ? (
        <ErrorWrapper>
          <h1>Something went wrong... </h1>
          <NavLink to="/">Go back to Search Page</NavLink>
        </ErrorWrapper>
      ) : null}
    </Container>
  );
};
