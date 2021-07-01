import { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FavouriteContext } from '../contexts/FavouriteContext';
import { Favourite, Favourites as Fav } from '../../types';

type FavType = {
  favourites: Fav;
  addToFavourites;
  removeFromFavourites;
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

export const AddToFavourites = ({ id, title, image }: Favourite) => {
  const { favourites, removeFromFavourites, addToFavourites } = useContext(
    FavouriteContext
  ) as FavType;

  const [isFavourite, setIsFavourite] = useState<boolean>();

  useEffect(() => {
    const favouriteStatus =
      favourites.findIndex((item) => item.id === id) !== -1;
    setIsFavourite(favouriteStatus);
  }, [favourites, id]);

  const handleChange = () => {
    if (isFavourite) {
      removeFromFavourites(id);
      setIsFavourite(false);
    } else {
      addToFavourites({ image, title, id });
      setIsFavourite(true);
    }
  };

  return (
    <AddToButton onClick={handleChange}>
      {isFavourite ? <BsHeartFill /> : <BsHeart />}
    </AddToButton>
  );
};
