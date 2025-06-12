import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0, showDialog: false, auth: false},
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      openDialog: (state) =>{
        state.showDialog=true;
      },
      closeDialog :(state)=>{
        state.showDialog=false;
      },
      authenticate : (state, action) =>{
        state.auth=action.payload;
      },
    },
  });
  
  export const { increment, decrement, openDialog, closeDialog, authenticate  } = counterSlice.actions;
  export default counterSlice.reducer;
  