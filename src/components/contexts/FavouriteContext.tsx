import { createContext } from 'react';

import { useFavouriteState } from '../../hooks/useFavouriteState';

const initialFavourites = JSON.parse(
  window.localStorage.getItem('favourites') || '{}'
);
export const FavouriteContext = createContext({});

export const FavouriteProvider = ({ children }) => {
  const favHook = useFavouriteState(initialFavourites);

  return (
    <FavouriteContext.Provider value={favHook}>
      {children}
    </FavouriteContext.Provider>
  );
};
