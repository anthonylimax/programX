import { createSlice } from "@reduxjs/toolkit";

const value : number = 0;

const cash = createSlice({
    name: "cash",
    initialState: value,
    reducers:{
        IncrementCash: ()=>{

        },
        DecrementCash: ()=>{

        }
    }
})
export default cash.reducer;
export const {IncrementCash, DecrementCash} = cash.actions;
