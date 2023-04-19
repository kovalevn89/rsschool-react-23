import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { cardsApi } from '../api/api';

export default configureStore({
  reducer: {
    search: searchReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});
