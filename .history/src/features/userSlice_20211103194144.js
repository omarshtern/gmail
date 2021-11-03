import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login
  },
});

export const {}  = userSlice.actions;
export const selectSenMessageIsOpen = (state) => state.user.senMessageIsOpen;
console.log(selectOpenEmail);
export default userSlice.reducer;







