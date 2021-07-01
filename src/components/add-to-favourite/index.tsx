import { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';

import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FavouriteContext } from '../contexts/FavouriteContext';
import { Favourite, Favourites as Fav } from '../../types';

type FavType = {
  favourites: Fav;
  addToFavourite;
  removeFromFavourite;
};

const AddToButton = styled.button`
  border: none;
  background: none;

  svg {
    cursor: pointer;
    font-size: 30px;
    fill: ${(props) => props.theme.colors.white};
    stroke: ${(props) => props.theme.colors.white};
  }
`;

export const AddToFavourite = ({ id, title, image }: Favourite) => {
  const { favourites, removeFromFavourite, addToFavourite } = useContext(
    FavouriteContext
  ) as FavType;

  const [isInFav, setIsInFav] = useState<boolean>();
  const isFav = favourites.findIndex((item) => item.id === id) !== -1;

  useEffect(() => {
    setIsInFav(isFav);
  }, [isFav]);

  const handleChange = () => {
    if (isFav) {
      removeFromFavourite(id);
      setIsInFav(false);
    } else {
      addToFavourite({ image, title, id });
      setIsInFav(true);
    }
  };

  return (
    <AddToButton onClick={handleChange}>
      {isInFav ? <BsHeartFill /> : <BsHeart />}
    </AddToButton>
  );
};
