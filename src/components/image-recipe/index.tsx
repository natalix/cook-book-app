import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

type Props = {
  id: number;
  image: string;
  name: string;
};

type Image = {
  image: string;
};

const ImageWrapper = styled.div<Image>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 285px;
  width: auto;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url(${(props) => props.image});
`;
const RecipeName = styled.h2`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 0;
  z-index: 1;
  font-size: 30px;
  font-weight: 300;
  border-bottom: solid 1px ${(props) => props.theme.colors.white};
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

function ImageRecipe(props: Props) {
  const { id, name, image } = props;
  return (
    <NavLink to={`/recipe/${id}`}>
      <ImageWrapper image={image}>
        <RecipeName>{name}</RecipeName>
        <ImageOverlay />
      </ImageWrapper>
    </NavLink>
  );
}

export { ImageRecipe };
