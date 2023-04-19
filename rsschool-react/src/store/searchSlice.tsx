import { createSlice } from '@reduxjs/toolkit';
//import { getAllCharacter, searchCharacter } from '../api/api';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    queryString: localStorage.getItem('searchbar') || '',
    //isLoading: false,
    // cards: await (localStorage.getItem('searchbar') === ''
    //   ? getAllCharacter()
    //   : searchCharacter(localStorage.getItem('searchbar')!)),
  },
  reducers: {
    // setCard(state, action) {
    //   state.cards = action.payload;
    // },
    // clearCards(state) {
    //   state.cards = [];
    // },
    // setLoadState(state, action) {
    //   state.isLoading = action.payload;
    // },
    setQuery(state, action) {
      state.queryString = action.payload;
      localStorage.setItem('searchbar', state.queryString);
    },
  },
});
//setCard, clearCards, setLoadState,
export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
