import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
      name:"todo",
      initialState:{
        value:[]
      },
      reducers:{
       add:(state,actions)=>{
        state.value.push(actions.payload) 
       },
       remove:(state,actions)=>{
        state.value = state.value.filter(todo => todo.id !== actions.payload.id)
       },
       toggle:(state,actions)=>{
        const todo = state.value.find(todo => todo.id === actions.payload.id);
        if(todo){
            todo.complete = !todo.complete
        }
       }
      }
});
export const  { add ,remove ,toggle}  = todoSlice.actions;
export default todoSlice.reducer;