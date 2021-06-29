import axios, { AxiosResponse } from 'axios';
import { API_KEY, COUNT_RECIPIES_ON_PAGE } from '../config';
import {
  SearchRecipiesType,
  RecipeType,
} from '../interfaces/recipies.interface';

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: {
    apiKey: API_KEY,
  },
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params?: Record<string, unknown>) =>
    instance.get(url, params).then(responseBody),
};

export const Query = {
  getRecipes: (query: string, offset: 0): Promise<SearchRecipiesType> =>
    requests.get('/recipes/complexSearch', {
      params: { offset, query, number: COUNT_RECIPIES_ON_PAGE },
    }),
  getARecipe: (id: number): Promise<RecipeType> =>
    requests.get(`/recipes/${id}/information`),
};
