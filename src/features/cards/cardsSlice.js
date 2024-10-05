import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

//Voy a crear la caractersticas de las cards
const cardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setPersonajes: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setPersonajes } = cardsSlice.actions;
export default cardsSlice.reducer;
