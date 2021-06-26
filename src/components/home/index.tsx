import React from 'react';
import { SearchForm } from '../search-form';
import { RecipesListing } from '../recipes-listing';
import { Container } from '../styles/container';

function Home() {
  return (
    <Container>
      <SearchForm />
      <RecipesListing />
    </Container>
  );
}

export { Home };
