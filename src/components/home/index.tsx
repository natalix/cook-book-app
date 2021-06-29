import { useState } from 'react';
import styled from '@emotion/styled';

import { SearchForm } from '../search-form';
import { RecipesListing } from '../recipes-listing';
import { Container } from '../styles/container';
import { SearchRecipiesType } from '../../types';
import { getRecipes } from '../../api/api';

const ActionStatus = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 40px 0 0;
`;

const dummy = {
  results: [
    {
      id: 656329,
      title: 'Pizza bites with pumpkin',
      image: 'https://spoonacular.com/recipeImages/656329-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 680975,
      title: 'BLT Pizza',
      image: 'https://spoonacular.com/recipeImages/680975-312x231.jpg',
      imageType: 'jpg',
    },
  ],
  offset: 0,
  number: 2,
  totalResults: 36,
};

export const Home = () => {
  const [recipes, setRecipes] = useState<SearchRecipiesType>(dummy);
  const [queryStatus, setQueryStatus] = useState<string>('empty');
  const [queryValue, setQueryValue] = useState<string>('');

  const searchRecipes = (val) => {
    getRecipes(val, 0)
      .then((data) => {
        setRecipes(data);
        if (data.results.length > 0) {
          setQueryStatus('success');
        } else {
          setQueryStatus('error');
        }
        setQueryValue(val);
      })
      .catch((err) => {
        setQueryStatus('error');
        // eslint-disable-next-line
        console.error(err);
        setQueryValue(val);
      });
  };

  let actionStatus = '';

  switch (queryStatus) {
    case 'error':
      actionStatus = `We couldn't find any recipe for: ${queryValue}`;
      break;
    case 'success':
      actionStatus = `Search results for: ${queryValue}`;
      break;
    default:
      actionStatus = "Let's find your favourite recipe!";
      break;
  }

  return (
    <Container>
      <SearchForm searchRecipes={searchRecipes} />
      <ActionStatus>{actionStatus}</ActionStatus>
      {recipes ? <RecipesListing recipes={recipes} /> : null}
    </Container>
  );
};
