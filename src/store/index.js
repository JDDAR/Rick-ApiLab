import { configureStore } from "@reduxjs/toolkit";
import cardsSliceReducer from "../features/cards/cardsSlice";

export const store = configureStore({
  reducer: {
    card: cardsSliceReducer,
  },
});
