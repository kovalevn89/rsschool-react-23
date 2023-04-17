import { createSlice } from '@reduxjs/toolkit';
import { ICardRM } from '../components/types/types';

const initialState = {
  queryString: '',
  cards: [] as Array<ICardRM>,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload.card);
    },
    clearCards(state, action) {
      state.cards = [];
    },
  },
});

export const { addCard, clearCards } = searchSlice.actions;
export default searchSlice.reducer;
