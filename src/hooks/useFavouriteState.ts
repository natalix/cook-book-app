import { Favourite, Favourites } from '../types';
import { useLocalStorageState } from './useLocalStorageState';

export const useFavouriteState = (initialFavourites: Favourites) => {
  const [favourites, setFavourites] = useLocalStorageState(
    'favourites',
    initialFavourites
  );

  return {
    favourites,
    addToFavourites: (item: Favourite) => {
      setFavourites([
        ...favourites,
        { image: item.image, title: item.title, id: item.id },
      ]);
    },
    removeFromFavourites: (id: number) => {
      const updatedFav = favourites.filter((item) => item.id !== id);
      setFavourites(updatedFav);
    },
  };
};
