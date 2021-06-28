import React from 'react';
import styled from '@emotion/styled';

const ImageWrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 285px;
  width: auto;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  /* TO DO Change image from API */
  background-image: url('https://spoonacular.com/recipeImages/716429-312x231.jpg');
`;
const RecipeName = styled.h2`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 0;
  z-index: 1;
  font-size: 30px;
  font-weight: 300;
  border-bottom: solid 1px #ffffff;
  padding-bottom: 5px;
  line-height: 1.5;
  margin: 0 5px 10% 10%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ImageOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

function ImageRecipe() {
  return (
    // TO DO Change href into Link with data from API
    <ImageWrapper href="#">
      <RecipeName>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
        malesuada neque, et porttitor erat.
      </RecipeName>
      <ImageOverlay />
    </ImageWrapper>
  );
}

export { ImageRecipe };
