import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cardSlice"
export const store = configureStore({
    reducer: {
        cart:cartSlice
    }
})
export default store