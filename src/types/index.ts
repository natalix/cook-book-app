export type SearchSingleRecipeType = {
  id: number;
  title: string;
  image: string;
};

export type SearchRecipiesType = {
  results: SearchSingleRecipeType[];
};

export type RecipeType = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  extendedIngredients: [];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  instructions: string;
};
