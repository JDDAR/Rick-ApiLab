import { configureStore } from "@reduxjs/toolkit";
import cardsSliceReducer from "../features/cards/cardsSlice";
import modalReducer from "../features/Modals/modalSlice";

export const store = configureStore({
  reducer: {
    card: cardsSliceReducer,
    modal: modalReducer,
  },
});
