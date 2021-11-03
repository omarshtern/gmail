import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  senMessageIsOpen: true,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.senMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.senMessageIsOpen = false;
    },
  },
});


export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export default mailSlice.reducer;
