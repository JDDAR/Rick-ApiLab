import { createSlice } from "@reduxjs/toolkit";
import { personajes } from "../../data/data";

const initialState = {
  results: personajes,
};

//Voy a crear la caractersticas de las cards
const cardsSlice = createSlice({
  name: "card",
  initialState,
});

export default cardsSlice.reducer;
