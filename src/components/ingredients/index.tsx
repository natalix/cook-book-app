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

export const Ingredients = (props) => {
  const { ingredients } = props;
  return (
    <IngredientsWrapper>
      {ingredients.map(({ id, amount, unit, name }) => (
        <li key={id}>
          <span>{amount}</span>
          <span>{unit}</span>
          <span>{name}</span>
        </li>
      ))}
    </IngredientsWrapper>
  );
};
