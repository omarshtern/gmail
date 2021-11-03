import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payloaf;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions;
export const selectSenMessageIsOpen = (state) => state.user.senMessageIsOpen;
export default userSlice.reducer;
