import React, { createContext, useMemo } from 'react';

import { Favourite } from '../../types';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

export const FavouriteContext = createContext({});

export const FavouriteProvider = ({ children }) => {
  const initialFavourites = JSON.parse(
    window.localStorage.getItem('favourites') || '{}'
  );
  const [favourites, setFavourites] = useLocalStorageState(
    'favourites',
    initialFavourites
  );

  const addToFavourite = (item: Favourite) => {
    setFavourites([
      ...favourites,
      { image: item.image, title: item.title, id: item.id },
    ]);
  };

  const removeFromFavourite = (id: number) => {
    const updatedFav = favourites.filter((item) => item.id !== id);
    setFavourites(updatedFav);
  };

  const value = useMemo(
    () => ({ favourites, addToFavourite, removeFromFavourite }),
    []
  );
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
