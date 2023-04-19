import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    queryString: '',
    cards: [],
  },
  reducers: {
    setCard(state, action) {
      state.cards = action.payload;
    },
    setQuery(state, action) {
      state.queryString = action.payload;
      localStorage.setItem('searchbar', state.queryString);
    },
  },
});

export const { setQuery, setCard } = searchSlice.actions;
export default searchSlice.reducer;
