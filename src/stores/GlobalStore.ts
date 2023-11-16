import {configureStore} from '@reduxjs/toolkit';
import CartSlice from "./cart";
import cash from './cash';
import products from './products';
import token from './acessToken';


export const store = configureStore({
    reducer: {
        token: token,
        cart: CartSlice,
        cash: cash,
        products: products,
    }
})
