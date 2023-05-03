import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICardRM, ICardsAnwer } from '../components/types/types';

export const cardsApi = createApi({
  reducerPath: 'cards',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getCards: build.query<ICardsAnwer, string>({
      query: (name = '') => `character?${name && `name=${name}`}`,
    }),
    getCardsWithID: build.query<ICardRM, string>({
      query: (id = '') => `character/${id}`,
    }),
  }),
});

export const { useGetCardsQuery, useGetCardsWithIDQuery } = cardsApi;
