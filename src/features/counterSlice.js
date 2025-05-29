import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0, showDialog: false },
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
      }
    },
  });
  
  export const { increment, decrement, openDialog, closeDialog  } = counterSlice.actions;
  export default counterSlice.reducer;
  