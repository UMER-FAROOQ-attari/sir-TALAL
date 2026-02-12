import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        value: 0
    },
    reducers: {
      increment:(state)=>{
     state.value += 1
      },
      incrementbyamount:(state,actions)=>{
     state.value += actions.payload
      },
      decrement:(state)=>{
     state.value -= 1 
      }
    }
})
export const{increment,decrement,incrementbyamount} = counterSlice.actions
export default counterSlice.reducer