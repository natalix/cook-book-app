import styled from '@emotion/styled';

import { ImageRecipe } from '../image-recipe';
import { md, lg } from '../../styles';
import { SearchRecipiesType } from '../../types';

type Props = {
  recipes: SearchRecipiesType;
};

const RecipesWrapper = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px 10px;

  ${md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 15px 15px;
  }

  ${lg} {
    margin: 60px 0;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px 20px;
  }
`;

export const RecipesListing = ({ recipes }: Props) => {
  const result = recipes.results.map((item) => (
    <ImageRecipe
      key={item.id}
      name={item.title}
      image={item.image}
      id={item.id}
    />
  ));

  return <RecipesWrapper>{result}</RecipesWrapper>;
};
