import { createSlice } from "@reduxjs/toolkit";

interface QtdCartProps{
    sku: string;
    quantity: number;
}


const initialState : QtdCartProps[] = []

const CartSlice =  createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            ReducerAddProduct : (state, action) =>{
                let isEquals = false;
                state.forEach(element => {
                    if(element.sku == action.payload.sku){
                        isEquals = true;
                        element.quantity += action.payload.quantity;
                    }   
                });
                if(!isEquals){
                    state.push(action.payload);
                } 
            },
            DropCartItemBySku: (state, action)=>{
                let index = 0;
                for(let i = 0; i < state.length; i++){
                    if(action.payload == state[i].sku){
                        index = i;
                    }
                }
                console.log(index);
            }
        }
    }
)

export default CartSlice.reducer;

export const {ReducerAddProduct, DropCartItemBySku} = CartSlice.actions;