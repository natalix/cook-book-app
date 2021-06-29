export interface SearchSingleRecipeType {
  id: number;
  title: string;
  image: string;
}

export interface SearchRecipiesType {
  results: SearchSingleRecipeType[];
}

export interface RecipeType {
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
}
