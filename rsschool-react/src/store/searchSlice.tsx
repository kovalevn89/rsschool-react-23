import { createSlice } from '@reduxjs/toolkit';
import { ICardRM } from '../components/types/types';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    queryString: '',
    isLoading: false,
    cards: [] as ICardRM[],
  },
  reducers: {
    setCard(state, action) {
      state.cards = action.payload;
    },
    clearCards(state) {
      state.cards = [];
    },
    setLoadState(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setCard, clearCards, setLoadState } = searchSlice.actions;
export default searchSlice.reducer;
