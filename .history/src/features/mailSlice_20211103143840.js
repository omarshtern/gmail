import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  senMessageIsOpen: false,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: state => {
      state.senMessageIsOpen += 1
    }
  },
 
});



export const selectMail = (state) => state.counter.value;



export default mailSlice.reducer;
