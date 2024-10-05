import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  data: null,
  isOpenEpisodie: false,
  dataEpisodie: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.data = action.payload; //guardo los datos del card
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
    },
    openModalEpisodie: (state, action) => {
      state.isOpenEpisodie = true;
      state.dataEpisodie = action.payload;
    },
    closeModalEpisodie: (state) => {
      state.isOpenEpisodie = false;
      state.dataEpisodie = null;
    },
  },
});

export const { openModal, closeModal, openModalEpisodie, closeModalEpisodie } =
  modalSlice.actions;
export default modalSlice.reducer;
