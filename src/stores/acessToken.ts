import { createSlice } from "@reduxjs/toolkit";

const initialState : any = []

const token = createSlice({
    name: "token",
    reducers:{
        Set:(state, action)=>{
            state.push(action.payload);
        }
    },
    initialState: initialState,
})

export default token.reducer;
export const {Set} = token.actions;
