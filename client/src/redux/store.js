import { configureStore } from "@reduxjs/toolkit" 
import cartReducer from "./cartSlice/cartSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

