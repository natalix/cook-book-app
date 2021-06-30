import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Favourite } from '../../types';
import { useFavouriteState } from '../../hooks/useFavouriteState';

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
  const initialFavourites = JSON.parse(
    window.localStorage.getItem('favourites') || '{}'
  );
  const { favourites, addToFavourite, removeFromFavourite } =
    useFavouriteState(initialFavourites);

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
