import { configureStore } from '@reduxjs/toolkit';
import cartReducer from'./cart/reducer';
import cakeReducer from "./cakes/reducer"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cake: cakeReducer
    },
});