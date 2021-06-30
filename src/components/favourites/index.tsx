import { useContext } from 'react';
import { BsHeart } from 'react-icons/bs';
import { Favourites as Fav } from '../../types';

import { FavouriteContext } from '../contexts/FavouriteContext';

type FavType = {
  favourites: Fav;
  // addToFavourite: any;
  removeFromFavourite: any;
};

export const Favourites = () => {
  const data = useContext(FavouriteContext) as FavType;
  const { favourites } = data;

  return (
    <>
      <BsHeart />
      {favourites.map(({ title, id }) => (
        <button type="button" key={id}>
          {title}
        </button>
      ))}
    </>
  );
};
